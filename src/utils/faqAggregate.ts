import { getCollection, type CollectionEntry } from "astro:content";

export type FaqCategoryId = "entry" | "pr" | "work" | "study" | "family";

export type UnifiedFaqItem = {
  /** Stable key for dedupe / client */
  key: string;
  question: string;
  answer: string;
  category: FaqCategoryId;
  sourceLabel: string;
  sourceHref: string;
  /** Parent content tags (blog / project / service …), for display & search */
  tags: string[];
};

const CAT_RULES: { id: FaqCategoryId; keys: string[] }[] = [
  {
    id: "entry",
    keys: [
      "签证",
      "访问",
      "旅游",
      "探亲",
      "入境",
      "trv",
      "海关",
      "边境",
      "拒签",
      "eTA",
      "eta",
      "访客",
      "超级签证",
    ],
  },
  {
    id: "study",
    keys: [
      "学签",
      "留学",
      "学校",
      "pgwp",
      "毕业工签",
      "dli",
      "读书",
      "录取",
      "学习计划",
    ],
  },
  {
    id: "work",
    keys: ["工签", "lmia", "雇主", "工作许可", "工作签证", "聘用", "劳工"],
  },
  {
    id: "family",
    keys: ["家庭", "父母", "配偶", "团聚", "子女", "祖父母", "担保", "超级签证"],
  },
  {
    id: "pr",
    keys: [
      "永居",
      "pr ",
      " pr",
      "移民",
      "省提名",
      "pnp",
      "ee",
      "快速通道",
      "crs",
      "cec",
      "枫叶",
      "入池",
      "ita",
    ],
  },
];

function inferCategory(text: string): FaqCategoryId {
  const t = text.toLowerCase();
  let best: FaqCategoryId = "pr";
  let bestScore = 0;
  for (const { id, keys } of CAT_RULES) {
    let score = 0;
    for (const k of keys) {
      const needle = k.toLowerCase();
      if (t.includes(needle)) score += needle.length > 3 ? 3 : 2;
    }
    if (score > bestScore) {
      bestScore = score;
      best = id;
    }
  }
  return best;
}

function normQ(q: string) {
  return q.replace(/\s+/g, " ").trim().toLowerCase();
}

export async function getUnifiedFaqItems(): Promise<UnifiedFaqItem[]> {
  const seen = new Set<string>();
  const out: UnifiedFaqItem[] = [];

  const push = (item: {
    question: string;
    answer: string;
    sourceLabel: string;
    sourceHref: string;
    tags: string[];
    key?: string;
  }) => {
    const k = item.key ?? `q:${normQ(item.question)}`;
    if (seen.has(k)) return;
    seen.add(k);
    const blob = `${item.question}\n${item.answer}`;
    out.push({
      key: k,
      question: item.question,
      answer: item.answer,
      sourceLabel: item.sourceLabel,
      sourceHref: item.sourceHref,
      tags: item.tags,
      category: inferCategory(`${blob} ${item.tags.join(" ")}`),
    });
  };

  const faqDocs = (await getCollection("faq")).filter((e) => !e.data.draft);
  for (const doc of faqDocs) {
    for (const it of doc.data.items) {
      push({
        question: it.question,
        answer: it.answer,
        sourceLabel: "站内精选",
        sourceHref: "/faq/",
        tags: [],
        key: `faq:${normQ(it.question)}`,
      });
    }
  }

  const blog = (await getCollection("blog")).filter((e) => !e.data.draft);
  for (const e of blog) {
    for (const it of e.data.faq ?? []) {
      push({
        question: it.question,
        answer: it.answer,
        sourceLabel: `博客 · ${e.data.title}`,
        sourceHref: `/blog/${e.slug}/`,
        tags: e.data.tags ?? [],
        key: `blog:${e.slug}:${normQ(it.question)}`,
      });
    }
  }

  const projects = (await getCollection("projects")).filter((e) => !e.data.draft);
  for (const e of projects) {
    for (const it of e.data.faq ?? []) {
      push({
        question: it.question,
        answer: it.answer,
        sourceLabel: `项目 · ${e.data.title}`,
        sourceHref: `/projects/${e.slug}/`,
        tags: e.data.tags ?? [],
        key: `project:${e.slug}:${normQ(it.question)}`,
      });
    }
  }

  const services = (await getCollection("services")).filter((e) => !e.data.draft);
  for (const e of services) {
    for (const it of e.data.faq ?? []) {
      push({
        question: it.question,
        answer: it.answer,
        sourceLabel: `服务 · ${e.data.title}`,
        sourceHref: `/services/${e.slug}/`,
        tags: e.data.tags ?? [],
        key: `service:${e.slug}:${normQ(it.question)}`,
      });
    }
  }

  const baike = (await getCollection("baike")).filter((e) => !e.data.draft);
  for (const e of baike) {
    for (const it of e.data.faq ?? []) {
      push({
        question: it.question,
        answer: it.answer,
        sourceLabel: `百科 · ${e.data.title}`,
        sourceHref: `/baike/${e.slug}/`,
        tags: e.data.tags ?? [],
        key: `baike:${e.slug}:${normQ(it.question)}`,
      });
    }
  }

  const schools = (await getCollection("schools")).filter((e) => !e.data.draft);
  for (const e of schools) {
    for (const it of e.data.faq ?? []) {
      push({
        question: it.question,
        answer: it.answer,
        sourceLabel: `院校 · ${e.data.title}`,
        sourceHref: `/school/${e.slug}/`,
        tags: e.data.tags ?? [],
        key: `school:${e.slug}:${normQ(it.question)}`,
      });
    }
  }

  return out;
}

export type FaqFilterRow = { i: number; c: FaqCategoryId | "all"; t: string };

export function buildFaqFilterRows(items: UnifiedFaqItem[]): FaqFilterRow[] {
  return items.map((item, i) => ({
    i,
    c: item.category,
    t: normQ(
      [
        item.question,
        item.answer,
        item.sourceLabel,
        ...item.tags,
      ].join(" "),
    ),
  }));
}

export type TagHint = { label: string; href: string; searchBlob: string; count: number };

export type CategoryHint = { slug: string; title: string; href: string; searchBlob: string };

type DiscoverySource = {
  slug: string;
  data: {
    title: string;
    excerpt?: string;
    description?: string;
    tags?: string[];
    category?: string;
  };
};

/** Tag & category chips for FAQ discovery (search + default popular). */
export function buildFaqDiscoveryHints(
  posts: CollectionEntry<"blog">[],
  categoryMeta: Record<string, { title: string }>,
  extraSources: DiscoverySource[] = [],
): { tagHints: TagHint[]; categoryHints: CategoryHint[] } {
  const tagMap = new Map<string, { count: number; blob: string }>();
  const allSources: DiscoverySource[] = [
    ...posts.map((p) => ({
      slug: p.slug,
      data: {
        title: p.data.title,
        excerpt: p.data.excerpt,
        description: p.data.description,
        tags: p.data.tags ?? [],
        category: p.data.category,
      },
    })),
    ...extraSources,
  ];

  for (const p of allSources) {
    for (const tag of p.data.tags ?? []) {
      const cur = tagMap.get(tag) ?? { count: 0, blob: "" };
      cur.count += 1;
      cur.blob += ` ${p.data.title} ${p.data.excerpt ?? ""} ${p.data.description ?? ""}`;
      tagMap.set(tag, cur);
    }
  }
  const tagHints: TagHint[] = [...tagMap.entries()]
    .map(([label, { count, blob }]) => ({
      label,
      href: `/tag/${encodeURIComponent(label)}/`,
      searchBlob: normQ(`${label} ${blob}`),
      count,
    }))
    .sort((a, b) => b.count - a.count);

  const catSlugs = [...new Set(posts.map((p) => p.data.category))].sort((a, b) =>
    a.localeCompare(b, "zh-CN"),
  );
  const categoryHints: CategoryHint[] = catSlugs.map((slug) => {
    const inCat = posts.filter((p) => p.data.category === slug);
    const title = categoryMeta[slug]?.title ?? slug;
    const blob = inCat.map((p) => `${p.data.title} ${p.data.excerpt}`).join(" ");
    return {
      slug,
      title,
      href: `/category/${slug}/`,
      searchBlob: normQ(`${slug} ${title} ${blob}`),
    };
  });

  return { tagHints, categoryHints };
}
