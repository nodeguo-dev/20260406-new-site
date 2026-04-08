import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const COLLECTION_DIR = {
  blog: "src/content/blog",
  services: "src/content/services",
  baike: "src/content/baike",
  projects: "src/content/projects",
  faq: "src/content/faq",
  schools: "src/content/schools",
};

function usage() {
  console.log(
    [
      "Usage:",
      "  node scripts/generate-content.mjs migration/pages.json [--force]",
      "",
      "Input format: see migration/pages.example.json",
    ].join("\n"),
  );
}

function toYamlList(items) {
  if (!items?.length) return "[]";
  return `[${items.map((t) => JSON.stringify(t)).join(", ")}]`;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content, force) {
  if (!force && fs.existsSync(filePath)) return { ok: true, skipped: true };
  fs.writeFileSync(filePath, content, "utf8");
  return { ok: true, skipped: false };
}

function mdxFrontmatter(entry) {
  const lines = [];
  lines.push("---");
  lines.push(`title: ${JSON.stringify(entry.title)}`);
  if (entry.collection === "blog") {
    lines.push(`description: ${JSON.stringify(entry.description ?? "")}`);
    lines.push(`publishDate: ${JSON.stringify(entry.publishDate)}`);
    if (entry.updatedDate) lines.push(`updatedDate: ${JSON.stringify(entry.updatedDate)}`);
    lines.push(`category: ${JSON.stringify(entry.category ?? "policy")}`);
    lines.push(`tags: ${toYamlList(entry.tags ?? [])}`);
    lines.push(`author: ${JSON.stringify(entry.author ?? "常春藤咨询编辑部")}`);
    lines.push(`excerpt: ${JSON.stringify(entry.excerpt ?? "")}`);
    lines.push(`draft: ${entry.draft ? "true" : "false"}`);
    if (entry.canonical) lines.push(`canonical: ${JSON.stringify(entry.canonical)}`);
    if (entry.faq?.length) {
      lines.push("faq:");
      for (const i of entry.faq) {
        lines.push(`  - question: ${JSON.stringify(i.question)}`);
        lines.push(`    answer: ${JSON.stringify(i.answer)}`);
      }
    }
    if (entry.relatedPosts?.length) lines.push(`relatedPosts: ${toYamlList(entry.relatedPosts)}`);
  } else if (entry.collection === "services") {
    lines.push(`description: ${JSON.stringify(entry.description ?? "")}`);
    lines.push(`excerpt: ${JSON.stringify(entry.excerpt ?? "")}`);
    lines.push(`publishDate: ${JSON.stringify(entry.publishDate)}`);
    if (entry.updatedDate) lines.push(`updatedDate: ${JSON.stringify(entry.updatedDate)}`);
    lines.push(`tags: ${toYamlList(entry.tags ?? [])}`);
    lines.push(`draft: ${entry.draft ? "true" : "false"}`);
    if (entry.canonical) lines.push(`canonical: ${JSON.stringify(entry.canonical)}`);
    if (entry.faq?.length) {
      lines.push("faq:");
      for (const i of entry.faq) {
        lines.push(`  - question: ${JSON.stringify(i.question)}`);
        lines.push(`    answer: ${JSON.stringify(i.answer)}`);
      }
    }
  } else if (entry.collection === "baike") {
    lines.push(`description: ${JSON.stringify(entry.description ?? "")}`);
    lines.push(`publishDate: ${JSON.stringify(entry.publishDate)}`);
    if (entry.updatedDate) lines.push(`updatedDate: ${JSON.stringify(entry.updatedDate)}`);
    lines.push(`tags: ${toYamlList(entry.tags ?? [])}`);
    lines.push(`draft: ${entry.draft ? "true" : "false"}`);
    if (entry.canonical) lines.push(`canonical: ${JSON.stringify(entry.canonical)}`);
    if (entry.faq?.length) {
      lines.push("faq:");
      for (const i of entry.faq) {
        lines.push(`  - question: ${JSON.stringify(i.question)}`);
        lines.push(`    answer: ${JSON.stringify(i.answer)}`);
      }
    }
  } else if (entry.collection === "projects") {
    lines.push(`description: ${JSON.stringify(entry.description ?? "")}`);
    lines.push(`excerpt: ${JSON.stringify(entry.excerpt ?? "")}`);
    lines.push(`publishDate: ${JSON.stringify(entry.publishDate)}`);
    if (entry.updatedDate) lines.push(`updatedDate: ${JSON.stringify(entry.updatedDate)}`);
    lines.push(`projectType: ${JSON.stringify(entry.projectType ?? "其他")}`);
    if (entry.region) lines.push(`region: ${JSON.stringify(entry.region)}`);
    lines.push(`tags: ${toYamlList(entry.tags ?? [])}`);
    lines.push(`draft: ${entry.draft ? "true" : "false"}`);
    if (entry.canonical) lines.push(`canonical: ${JSON.stringify(entry.canonical)}`);
    if (entry.faq?.length) {
      lines.push("faq:");
      for (const i of entry.faq) {
        lines.push(`  - question: ${JSON.stringify(i.question)}`);
        lines.push(`    answer: ${JSON.stringify(i.answer)}`);
      }
    }
    if (entry.relatedProjects?.length)
      lines.push(`relatedProjects: ${toYamlList(entry.relatedProjects)}`);
  } else if (entry.collection === "faq") {
    lines.push(`title: ${JSON.stringify(entry.title)}`);
    lines.push(`description: ${JSON.stringify(entry.description ?? "")}`);
    if (entry.publishDate) lines.push(`publishDate: ${JSON.stringify(entry.publishDate)}`);
    if (entry.updatedDate) lines.push(`updatedDate: ${JSON.stringify(entry.updatedDate)}`);
    lines.push("items:");
    for (const i of entry.items ?? []) {
      lines.push(`  - question: ${JSON.stringify(i.question)}`);
      lines.push(`    answer: ${JSON.stringify(i.answer)}`);
    }
    lines.push(`draft: ${entry.draft ? "true" : "false"}`);
    if (entry.canonical) lines.push(`canonical: ${JSON.stringify(entry.canonical)}`);
  } else if (entry.collection === "schools") {
    lines.push(`description: ${JSON.stringify(entry.description ?? "")}`);
    lines.push(`excerpt: ${JSON.stringify(entry.excerpt ?? "")}`);
    lines.push(`publishDate: ${JSON.stringify(entry.publishDate)}`);
    if (entry.updatedDate) lines.push(`updatedDate: ${JSON.stringify(entry.updatedDate)}`);
    lines.push(`entityType: ${JSON.stringify(entry.entityType ?? "province")}`);
    if (entry.province) lines.push(`province: ${JSON.stringify(entry.province)}`);
    if (entry.city) lines.push(`city: ${JSON.stringify(entry.city)}`);
    if (entry.website) lines.push(`website: ${JSON.stringify(entry.website)}`);
    lines.push(`tags: ${toYamlList(entry.tags ?? [])}`);
    lines.push(`draft: ${entry.draft ? "true" : "false"}`);
    if (entry.canonical) lines.push(`canonical: ${JSON.stringify(entry.canonical)}`);
    if (entry.faq?.length) {
      lines.push("faq:");
      for (const i of entry.faq) {
        lines.push(`  - question: ${JSON.stringify(i.question)}`);
        lines.push(`    answer: ${JSON.stringify(i.answer)}`);
      }
    }
  }
  lines.push("---");
  return lines.join("\n");
}

function mdxBody(entry) {
  // NOTE: MDX does not support HTML comments like <!-- --> in all parsers.
  // Use MDX comment blocks instead.
  const autoStart = "{/*AUTO:START*/}";
  const autoEnd = "{/*AUTO:END*/}";
  const note =
    "（自动生成占位内容）后续可按真实项目要求补充细节与案例，避免模板化。";

  // 保姆级结构占位：便于后续批量填充
  if (entry.collection === "projects") {
    return [
      autoStart,
      "## 适合人群（先自查）",
      "",
      "- 你当前身份/所在地：",
      "- 语言与学历：",
      "- 工作经历与岗位匹配：",
      "- 目标时间线：",
      "",
      `> ${note}`,
      "",
      "## 核心条件（你必须盯住的点）",
      "",
      "- 条件 1：",
      "- 条件 2：",
      "- 条件 3：",
      "",
      "## 材料清单（按优先级）",
      "",
      "- 身份与时间线材料：",
      "- 教育/语言材料：",
      "- 工作经验证据链：",
      "",
      "## 时间线模板（可复用）",
      "",
      "- 第 1-2 周：",
      "- 第 3-8 周：",
      "- 第 2-4 个月：",
      "",
      "## 常见误区（踩一次就会很贵）",
      "",
      "- 误区 1：",
      "- 误区 2：",
      "",
      "## 下一步怎么做",
      "",
      "如果你希望我们按你的背景做判断：把你的关键变量整理成一页信息（身份/学历/语言/工作/家庭/时间线），从 `联系我们` 提交即可。",
      "",
      autoEnd,
    ].join("\n");
  }

  return [
    autoStart,
    "## 这页解决什么问题",
    "",
    "用 2-3 句话说明读者能带走什么结论与清单。",
    "",
    `> ${note}`,
    "",
    "## 结论先行（适合人群/不适合人群）",
    "",
    "- 适合：",
    "- 不适合：",
    "",
    "## 保姆级步骤",
    "",
    "1. 第一步：",
    "2. 第二步：",
    "3. 第三步：",
    "",
    "## 材料清单（按优先级）",
    "",
    "- 必须材料：",
    "- 加分材料：",
    "- 常见补件：",
    "",
    "## 常见坑位与应对",
    "",
    "- 坑位 1：",
    "- 坑位 2：",
    "",
    "## 咨询建议",
    "",
    "给出 3 条可执行建议，并引导到联系页/服务页。",
    "",
    autoEnd,
  ].join("\n");
}

function validate(entry) {
  if (!entry?.collection) throw new Error("Missing collection");
  if (!COLLECTION_DIR[entry.collection]) throw new Error(`Unknown collection: ${entry.collection}`);
  if (!entry.slug) throw new Error(`Missing slug for ${entry.collection}`);
  if (!entry.title) throw new Error(`Missing title for ${entry.collection}/${entry.slug}`);
  return true;
}

async function main() {
  const inputPath = process.argv[2];
  if (!inputPath) return usage();
  const force = process.argv.includes("--force");

  const abs = path.resolve(root, inputPath);
  const json = JSON.parse(fs.readFileSync(abs, "utf8"));
  if (!Array.isArray(json)) throw new Error("Input must be a JSON array");

  const results = { created: 0, skipped: 0 };

  for (const entry of json) {
    validate(entry);
    const dir = path.join(root, COLLECTION_DIR[entry.collection]);
    ensureDir(dir);

    const ext = entry.collection === "faq" ? ".md" : ".mdx";
    const filePath = path.join(dir, `${entry.slug}${ext}`);

    const fm = mdxFrontmatter(entry);
    const body = entry.collection === "faq" ? "FAQ 内容页（Markdown）\n" : `${mdxBody(entry)}\n`;
    const content = `${fm}\n\n${body}`;

    const { skipped } = writeFile(filePath, content, force);
    if (skipped) results.skipped += 1;
    else results.created += 1;
  }

  console.log(`Done. created=${results.created}, skipped=${results.skipped}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
