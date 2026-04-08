import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "migration", "newgvisa");
const OUT_JSON = path.join(OUT_DIR, "pages.json");
const OUT_REPORT = path.join(OUT_DIR, "report.md");

const BASE = "https://newgvisa.com";
const SITEMAP_URL = `${BASE}/?sitemap=1`;

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function slugFromUrl(url) {
  const u = new URL(url);
  const parts = u.pathname.split("/").filter(Boolean);
  const last = parts[parts.length - 1] || "index";
  return last
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseCnDate(text) {
  // "2025年7月16日"
  const m = String(text).match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (!m) return null;
  const y = Number(m[1]);
  const mo = String(m[2]).padStart(2, "0");
  const d = String(m[3]).padStart(2, "0");
  return `${y}-${mo}-${d}`;
}

function mapCategoryToSlug(cn) {
  const c = String(cn).trim();
  if (c.includes("省提名")) return "federal-pnp";
  if (c.includes("团聚")) return "family-sponsorship";
  if (c.includes("经验类")) return "immigration-programs";
  if (c.includes("联邦技术")) return "immigration-programs";
  if (c.includes("雇主") || c.includes("LMIA")) return "work-permit-lmia";
  if (c.includes("访问") || c.includes("访客")) return "visa-programs";
  if (c.includes("学生")) return "study-permit";
  if (c.includes("工作签证")) return "work-permit-lmia";
  if (c.includes("魁北克")) return "quebec";
  if (c.includes("移民法") || c.includes("上诉")) return "policy";
  if (c.includes("权利") || c.includes("义务")) return "policy";
  if (c.includes("概览") || c.includes("政策")) return "policy";
  return "policy";
}

function rewriteTitle(orig, categories) {
  // 轻度改写：保留事实关键词，替换表达，避免品牌词
  let t = String(orig).trim();
  t = t.replace(/新生代/g, "常春藤");
  t = t.replace(/开放申请/g, "开启申请窗口");
  t = t.replace(/发布/g, "公布");
  t = t.replace(/再次/g, "再度");
  t = t.replace(/悉数递交/g, "集中递交");

  const c0 = categories?.[0] ? String(categories[0]).trim() : "";
  if (c0 && !t.includes(c0) && t.length < 46) {
    t = `${c0}｜${t}`;
  }
  return t;
}

function buildDescription(title, categorySlug, publishDate) {
  const dateHint = publishDate ? `（更新：${publishDate}）` : "";
  const catHint = {
    "federal-pnp": "省提名/联邦与省项目",
    "family-sponsorship": "团聚移民",
    "immigration-programs": "移民项目",
    "work-permit-lmia": "工签/雇主担保/LMIA",
    "visa-programs": "访问签/探亲签等签证",
    "study-permit": "留学与学签",
    quebec: "魁省相关项目",
    policy: "政策解读与实务要点",
  }[categorySlug] ?? "加拿大移民签证资讯";

  return `围绕「${title}」做保姆级拆解：适合人群、关键条件、材料清单、时间线与常见误区。${catHint}${dateHint}。`;
}

function buildExcerpt(title) {
  return `把「${title}」相关的关键信息讲清楚：先看结论与适合人群，再按材料优先级与时间线推进，减少返工与试错。`;
}

function pickTagsFromText(text) {
  const t = String(text);
  const tags = new Set();
  const candidates = [
    ["EE", /EE|Express Entry|快速通道/i],
    ["省提名", /省提名|PNP/i],
    ["OINP", /OINP|安省/i],
    ["BC省", /BC|不列颠哥伦比亚|卑诗|温哥华/i],
    ["魁省", /魁北克|Quebec|法语/i],
    ["LMIA", /LMIA/i],
    ["工签", /工签|工作签证|Work Permit/i],
    ["学签", /学签|学生签证|Study Permit/i],
    ["团聚", /团聚|父母|配偶|担保/i],
    ["访问签", /访问|旅游|访客|探亲|超级签证/i],
    ["政策解读", /政策|IRCC|移民局|新规|宣布/i],
  ];
  for (const [name, re] of candidates) if (re.test(t)) tags.add(name);
  return Array.from(tags);
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 (Astro import; +https://cachinavisa.com)" },
  });
  if (!res.ok) throw new Error(`Fetch failed ${res.status} ${res.statusText}: ${url}`);
  return res.text();
}

function extractTotalPages(html) {
  const m = html.match(/第\s*\d+\s*页，\s*共\s*(\d+)\s*页/);
  if (!m) return 1;
  return Number(m[1]);
}

function extractPostsFromSitemapPage(html) {
  // Extract blocks with h2 link + date + categories list
  // Example:
  // <h2><a href="https://newgvisa.com/parents-reopen-2025/" ...>TITLE</a></h2>
  // ... <span>2025年7月16日</span> ... <a ...>团聚移民</a>, <a ...>省提名移民</a>
  const items = [];
  const re =
    /<h2><a href="(https?:\/\/newgvisa\.com\/[^"\s]+\/?)"[^>]*>([^<]+)<\/a><\/h2>[\s\S]*?<div class="postmetadata">[\s\S]*?<span>[\s\S]*?(\d{4}年\d{1,2}月\d{1,2}日)[\s\S]*?<\/span>[\s\S]*?<span class="postmetadata-categories-link">([\s\S]*?)<\/span>/g;
  for (const m of html.matchAll(re)) {
    const url = m[1];
    const title = m[2].replace(/&amp;/g, "&").trim();
    const dateText = m[3].trim();
    const catHtml = m[4];
    const cats = Array.from(catHtml.matchAll(/>([^<]+)<\/a>/g), (x) =>
      x[1].trim(),
    ).filter(Boolean);
    items.push({ url, title, dateText, categories: cats });
  }
  return items;
}

async function withConcurrency(items, limit, fn) {
  const results = [];
  let index = 0;
  const workers = new Array(limit).fill(null).map(async () => {
    while (index < items.length) {
      const i = index++;
      results[i] = await fn(items[i], i);
    }
  });
  await Promise.all(workers);
  return results;
}

function uniqueSlug(slug, used) {
  let s = slug;
  let n = 2;
  while (used.has(s)) {
    s = `${slug}-${n++}`;
  }
  used.add(s);
  return s;
}

async function main() {
  ensureDir(OUT_DIR);

  const firstHtml = await fetchText(SITEMAP_URL);
  const totalPages = extractTotalPages(firstHtml);

  const pageUrls = [];
  for (let p = 1; p <= totalPages; p++) {
    if (p === 1) pageUrls.push(SITEMAP_URL);
    else pageUrls.push(`${BASE}/page/${p}/?sitemap=1`);
  }

  const pageHtmls = await withConcurrency(pageUrls, 6, async (u) => fetchText(u));
  const allPosts = [];
  for (const html of pageHtmls) {
    const posts = extractPostsFromSitemapPage(html);
    allPosts.push(...posts);
  }

  const byUrl = new Map();
  for (const p of allPosts) {
    if (!byUrl.has(p.url)) byUrl.set(p.url, p);
  }

  const usedSlugs = new Set();
  const entries = [];
  const countsByCat = new Map();

  for (const p of byUrl.values()) {
    const publishDate = parseCnDate(p.dateText);
    const categorySlug = mapCategoryToSlug(p.categories?.[0] ?? "");
    const title = rewriteTitle(p.title, p.categories);
    const slug = uniqueSlug(slugFromUrl(p.url), usedSlugs);
    const description = buildDescription(title, categorySlug, publishDate);
    const excerpt = buildExcerpt(title);
    const tags = pickTagsFromText(`${title} ${p.categories?.join(" ") ?? ""}`);

    countsByCat.set(categorySlug, (countsByCat.get(categorySlug) ?? 0) + 1);

    entries.push({
      collection: "blog",
      slug,
      title,
      description,
      excerpt,
      publishDate: publishDate ?? "2020-01-01",
      updatedDate: publishDate ?? undefined,
      category: categorySlug,
      tags,
      author: "常春藤咨询编辑部",
      draft: publishDate ? false : true,
      // source reference intentionally omitted from schema; keep it in body by generator template later if desired
    });
  }

  // Sort by publishDate desc (string ISO)
  entries.sort((a, b) => String(b.publishDate).localeCompare(String(a.publishDate)));

  fs.writeFileSync(OUT_JSON, JSON.stringify(entries, null, 2), "utf8");

  const catLines = Array.from(countsByCat.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `- ${k}: ${v}`);

  const report = [
    `# newgvisa sitemap 导入报告`,
    ``,
    `- sitemap URL: ${SITEMAP_URL}`,
    `- sitemap 分页: ${totalPages}`,
    `- 去重后文章数: ${entries.length}`,
    `- 草稿数（无发布日期或解析失败）: ${entries.filter((e) => e.draft).length}`,
    ``,
    `## 分类映射统计`,
    ...catLines,
    ``,
    `## 说明`,
    `- 本导入只抓取「标题/日期/分类」用于建立内容骨架与 SEO 信息结构；不会复制对方正文。`,
    `- ` +
      `生成的文章会以“保姆级结构占位”创建，后续可逐条补齐为原创长文。`,
    ``,
  ].join("\n");

  fs.writeFileSync(OUT_REPORT, report, "utf8");

  console.log(`Wrote: ${OUT_JSON}`);
  console.log(`Wrote: ${OUT_REPORT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
