import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "migration");
const OUT_JSON = path.join(OUT_DIR, "canbridge-a10.projects.json");

function slugify(input) {
  return input
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const url = "https://www.canbridge.com/immigrate/list-a10.html";
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  const html = await res.text();

  // 页面里每个项目标题常见结构：<span class="list_box-title">...</span>
  const titles = Array.from(
    html.matchAll(/class=\"list_box-title\"[^>]*>([^<]+)</g),
    (m) => m[1]?.trim(),
  ).filter(Boolean);

  const unique = Array.from(new Set(titles));
  const items = unique.map((t) => ({
    source: url,
    title: t,
    slug: slugify(t),
  }));

  fs.writeFileSync(OUT_JSON, JSON.stringify(items, null, 2), "utf8");
  console.log(`Wrote ${items.length} items to ${OUT_JSON}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

