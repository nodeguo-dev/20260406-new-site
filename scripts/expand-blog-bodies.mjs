import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const INPUT_JSON = path.join(root, "migration", "newgvisa", "pages.json");
const BLOG_DIR = path.join(root, "src", "content", "blog");

const AUTO_START = "{/*AUTO:START*/}";
const AUTO_END = "{/*AUTO:END*/}";
const LEGACY_AUTO_START = "<!--AUTO:START-->";
const LEGACY_AUTO_END = "<!--AUTO:END-->";

const GEO = {
  primary: "多伦多（Toronto）",
  areas: ["北约克（North York）", "万锦（Markham）", "列治文山（Richmond Hill）", "密西沙加（Mississauga）"],
  province: "安大略省（Ontario）",
};

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function splitFrontmatter(src) {
  if (!src.startsWith("---")) return { fm: "", body: src };
  const idx = src.indexOf("\n---", 3);
  if (idx === -1) return { fm: "", body: src };
  const end = src.indexOf("\n", idx + 4);
  const fm = src.slice(0, end + 1);
  const body = src.slice(end + 1);
  return { fm, body };
}

function replaceBetweenMarkers(body, next) {
  const startIdx =
    body.indexOf(AUTO_START) !== -1 ? body.indexOf(AUTO_START) : body.indexOf(LEGACY_AUTO_START);
  const endIdx =
    body.indexOf(AUTO_END) !== -1 ? body.indexOf(AUTO_END) : body.indexOf(LEGACY_AUTO_END);
  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) return null;

  const startLen =
    body.indexOf(AUTO_START) !== -1 ? AUTO_START.length : LEGACY_AUTO_START.length;
  const endMarker =
    body.indexOf(AUTO_END) !== -1 ? AUTO_END : LEGACY_AUTO_END;

  const normalized =
    body
      .replaceAll(LEGACY_AUTO_START, AUTO_START)
      .replaceAll(LEGACY_AUTO_END, AUTO_END);

  const start = normalized.indexOf(AUTO_START);
  const end = normalized.indexOf(AUTO_END);
  if (start === -1 || end === -1 || end <= start) return null;
  return (
    normalized.slice(0, start + AUTO_START.length) +
    "\n\n" +
    next +
    "\n\n" +
    normalized.slice(end)
  );
}

function section(title, lines) {
  return [`## ${title}`, "", ...lines, ""].join("\n");
}

function bullets(items) {
  return items.map((x) => `- ${x}`);
}

function ordered(items) {
  return items.map((x, i) => `${i + 1}. ${x}`);
}

function pickTemplates(entry) {
  const cat = entry.category;
  const tags = new Set(entry.tags ?? []);

  const isVisa = cat === "visa-programs" || tags.has("访问签") || tags.has("学签") || tags.has("工签");
  const isStudy = cat === "study-permit" || tags.has("学签") || /study/i.test(entry.title);
  const isLMIA = cat === "work-permit-lmia" || tags.has("LMIA") || /lmia/i.test(entry.title);
  const isPNP = cat === "federal-pnp" || tags.has("省提名") || /oinp|pnp/i.test(entry.title);
  const isQuebec = cat === "quebec" || tags.has("魁省");
  const isFamily = cat === "family-sponsorship" || tags.has("团聚") || /父母|配偶|担保/.test(entry.title);

  if (isStudy) return "study";
  if (isLMIA) return "lmia";
  if (isPNP) return "pnp";
  if (isQuebec) return "quebec";
  if (isFamily) return "family";
  if (isVisa) return "visa";
  return "policy";
}

function makeFaq(entry, kind) {
  const common = [
    {
      q: "这篇文章适合谁看？",
      a: "适合想快速判断是否匹配、以及需要准备哪些材料的人。建议先看“结论先行”和“材料清单”，再按时间线推进。",
    },
    {
      q: "能保证获批/成功吗？",
      a: "不能。移民与签证审理具有个案差异与政策变动风险。我们能做的是把路径判断、材料证据链与时间线规划做扎实，尽量减少返工与矛盾点。",
    },
  ];

  const byKind = {
    study: [
      {
        q: "学习计划（SOP）怎么写更稳？",
        a: "用“为什么学这个—为什么现在去—学完怎么安排”的三段结构，并把每一段落到时间线与证据上（教育/工作/资金/家庭）。",
      },
    ],
    lmia: [
      {
        q: "LMIA 的核心难点是什么？",
        a: "难点在证据链：岗位合理性、雇主合规与招聘闭环，以及你的背景匹配要能互相支撑并可解释。",
      },
    ],
    pnp: [
      {
        q: "省提名应该先看通道还是先做评估？",
        a: "建议先做信息收敛与通道匹配表，把可行通道缩到 2-3 个，再集中准备材料，避免在不匹配通道上消耗时间。",
      },
    ],
    visa: [
      {
        q: "签证材料越多越好吗？",
        a: "不一定。更重要是相关性与一致性。建议做成结构化材料包：目录 + 证据链，避免堆无关材料制造矛盾。",
      },
    ],
  };

  return [...common, ...(byKind[kind] ?? [])].slice(0, 6);
}

function makeBody(entry) {
  const kind = pickTemplates(entry);
  const title = entry.title;
  const publishDate = entry.publishDate;

  const lead = [
    `> 更新时间：${publishDate}（仅供参考；政策可能调整，以官方发布为准）`,
    `> 适用地区：${GEO.primary} / ${GEO.areas.join(" / ")}（亦适用于加拿大其他地区的通用思路）`,
    "",
  ].join("\n");

  const intro = section("这篇文章解决什么问题", [
    `很多人搜索「${title}」时，真正想解决的通常不是“概念解释”，而是：`,
    "",
    ...bullets([
      "我是否适合？该从哪条路径/类别入手？",
      "材料应该先准备哪些？哪些是“硬材料”？",
      "时间线怎么排更稳？如何减少返工与踩坑？",
    ]),
    "",
    "下面我们用“结论先行 + 清单 + 时间线”的方式，把事情讲清楚。",
  ]);

  const conclusion = section("结论先行（先帮你判断）", [
    ...bullets([
      "如果你希望快速上手：先看“材料清单（按优先级）”和“时间线模板”。",
      "如果你当前身份/时间线紧张：优先把“身份连续性”做稳，再谈路径优化。",
      "如果你信息很散：建议先把关键变量写成一页（身份/学历/语言/工作/家庭/时间线），再做通道/类别匹配。",
    ]),
  ]);

  const checklist = section("材料清单（按优先级，不走弯路）", [
    "建议把材料做成“证据链文件包”，而不是零散文件：",
    "",
    ...bullets([
      "身份与时间线：护照/签证或许可/出入境记录/住址与学习或工作安排",
      "教育与语言：学历证书与成绩单、语言成绩或备考计划（目标区间 + 时间线）",
      "工作与经历：按月份简历、工作证明口径统一（职责/时长/薪资）",
      "资金与支持（如适用）：金额只是底线，更关键是来源与流向可解释",
    ]),
    "",
    "提示：所有材料里的姓名、地址、日期、职位名称与时间段必须一致。",
  ]);

  const timeline = section("时间线模板（保姆级）", [
    ...ordered([
      "第 1 周：信息收敛（8 行关键变量）+ 风险点清单 + 目标路径/类别初筛",
      "第 2-4 周：补齐硬材料（证据链）+ 统一口径 + 准备解释信框架",
      "第 5-8 周：材料包定稿 + 自检（矛盾点/缺口）+ 预设补件预案",
      "递交后：按节点跟进与补件（保持材料版本管理）",
    ]),
  ]);

  const pitfalls = section("常见坑位（踩一次就很贵）", [
    ...bullets([
      "只看“别人怎么走”，不看自己是否满足关键条件",
      "材料堆叠但缺少“结论—证据”的对应关系",
      "信息口径不一致：简历、证明、表格互相打架",
      "临近到期才准备，导致时间线无法解释或材料来不及补齐",
    ]),
  ]);

  const geo = section("本地化（Toronto/GTA）你要额外考虑什么", [
    "如果你主要在大多地区（Toronto/GTA）生活或工作，建议额外做两件事：",
    "",
    ...bullets([
      "把通勤与工作地点写进时间线（地址/雇主/上课地点要能对上）",
      "把“身份到期日”当成硬节点管理：提前 6-8 周启动续签/衔接准备",
    ]),
  ]);

  const faq = makeFaq(entry, kind);
  const faqSection = section("FAQ（节选）", faq.flatMap((x) => [`**Q：${x.q}**`, `${x.a}`, ""]));

  const cta = section("下一步怎么做（更高效）", [
    "如果你希望我们把内容落到你的具体背景上，建议你按以下格式发来信息（越完整越快）：",
    "",
    ...bullets([
      "当前所在地与身份（境内/境外，学签/工签/访问签等）",
      "学历/专业与语言水平（现有/预计）",
      "工作经历与岗位（按月份简述）",
      "家庭情况与目标时间线（3/6/12 个月）",
    ]),
    "",
    "我们会按“可行路径优先级 + 材料优先级 + 时间线”给出下一步建议。",
  ]);

  return [lead, intro, conclusion, checklist, timeline, pitfalls, geo, faqSection, cta].join("\n");
}

function ensureMarkers(body) {
  const normalized = body
    .replaceAll(LEGACY_AUTO_START, AUTO_START)
    .replaceAll(LEGACY_AUTO_END, AUTO_END);
  if (normalized.includes(AUTO_START) && normalized.includes(AUTO_END)) return normalized;
  return `${AUTO_START}\n\n${AUTO_END}\n`;
}

function main() {
  if (!fs.existsSync(INPUT_JSON)) {
    console.error(`Missing: ${INPUT_JSON}`);
    process.exit(1);
  }
  const entries = readJson(INPUT_JSON);

  let updated = 0;
  let skipped = 0;

  for (const entry of entries) {
    if (entry.collection !== "blog") continue;
    const filePath = path.join(BLOG_DIR, `${entry.slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      skipped += 1;
      continue;
    }
    const src = fs.readFileSync(filePath, "utf8");
    const { fm, body } = splitFrontmatter(src);
    const bodyWithMarkers = ensureMarkers(body);
    const generated = makeBody(entry);
    const next = replaceBetweenMarkers(bodyWithMarkers, generated);
    if (!next) {
      skipped += 1;
      continue;
    }
    fs.writeFileSync(filePath, `${fm}\n${next.trimStart()}`, "utf8");
    updated += 1;
  }

  console.log(`Done. updated=${updated}, skipped=${skipped}`);
}

main();
