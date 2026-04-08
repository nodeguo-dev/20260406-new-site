type ContentLike = {
  title?: string;
  slug?: string;
  category?: string;
  description?: string;
  excerpt?: string;
  tags?: string[];
};

type TagRule = {
  patterns: RegExp[];
  tags: string[];
};

const TAG_RULES: TagRule[] = [
  {
    patterns: [/express entry|快速通道|category-based|定向抽签|cbs\b/i],
    tags: ["EE", "Express Entry", "EE定向", "定向抽签"],
  },
  {
    patterns: [/省提名|pnp\b|nominee|oinp|aaip|bc pnp|sinp|mpnp|nbpnp|nlnp|peipnp/i],
    tags: ["PNP", "省提名"],
  },
  {
    patterns: [/技工|trade|trades|construction|工地|学徒|red seal|apprentice/i],
    tags: ["技工", "EE技工移民", "找技工工作"],
  },
  {
    patterns: [/多伦多|toronto|gta\b/i],
    tags: ["多伦多", "多伦多找工作", "加拿大毕业生找工作"],
  },
  {
    patterns: [/温哥华|vancouver|bc\b/i],
    tags: ["温哥华", "温哥华找工作", "加拿大毕业生找工作"],
  },
  {
    patterns: [/留学生|毕业|graduat|pgwp|post-?graduation/i],
    tags: ["加拿大毕业生找工作", "留学生毕业找工作"],
  },
  {
    patterns: [/job bank/i],
    tags: ["Job Bank", "雇主招聘"],
  },
  {
    patterns: [/noc\b|职业分类|职业库|职业代码/i],
    tags: ["NOC", "NOC职业库"],
  },
  {
    patterns: [/crs\b|打分|算分|score|points/i],
    tags: ["CRS", "打分"],
  },
  {
    patterns: [/法语|french|tef\b|tcf\b/i],
    tags: ["法语", "法语定向移民"],
  },
  {
    patterns: [/医护|health|nurse|doctor|medical|clinic|hospital/i],
    tags: ["医护", "医护定向"],
  },
  {
    patterns: [/教育|teacher|education|school|educator/i],
    tags: ["教育", "教育定向"],
  },
  {
    patterns: [/stem\b|software|data|engineer|it\b|tech|科技|理工|computer/i],
    tags: ["STEM", "理工"],
  },
  {
    patterns: [/lmia\b|雇主担保|employer/i],
    tags: ["LMIA", "雇主担保"],
  },
  {
    patterns: [/魁北克|quebec|peq\b|csq\b|法语省/i],
    tags: ["魁北克", "魁省移民"],
  },
  {
    patterns: [/安省|ontario|oinp/i],
    tags: ["安省", "OINP"],
  },
  {
    patterns: [/阿省|alberta|aaip/i],
    tags: ["阿省", "AAIP"],
  },
  {
    patterns: [/bc\b|british columbia|不列颠哥伦比亚/i],
    tags: ["BC", "BC PNP"],
  },
  {
    patterns: [/蒙特利尔|montreal|魁北克城/i],
    tags: ["魁北克城市", "法语"],
  },
];

function normalize(text: string) {
  return text
    .replace(/\s+/g, " ")
    .replace(/\s*\/\s*/g, " / ")
    .trim()
    .toLowerCase();
}

export function inferContentTags(content: ContentLike): string[] {
  const text = normalize(
    [
      content.title,
      content.slug,
      content.category,
      content.description,
      content.excerpt,
      ...(content.tags ?? []),
    ]
      .filter(Boolean)
      .join(" "),
  );

  const inferred = new Set<string>();
  for (const rule of TAG_RULES) {
    if (rule.patterns.some((pattern) => pattern.test(text))) {
      rule.tags.forEach((tag) => inferred.add(tag));
    }
  }

  if (/(多伦多|toronto)/i.test(text) && /(?:毕业|graduate|找工作|job)/i.test(text)) {
    inferred.add("多伦多毕业生找工作");
  }
  if (/(温哥华|vancouver)/i.test(text) && /(?:毕业|graduate|找工作|job)/i.test(text)) {
    inferred.add("温哥华毕业生找工作");
  }
  if (/(技工|trade|trades|construction|工地|学徒)/i.test(text)) {
    inferred.add("EE技工定向");
  }
  if (/(ee|express entry|快速通道)/i.test(text) && /(技工|trade|trades|construction)/i.test(text)) {
    inferred.add("EE技工移民");
  }
  if (/(ee|express entry|快速通道)/i.test(text) && /(定向|category-based|cbs|抽签)/i.test(text)) {
    inferred.add("EE定向快速移民");
  }
  if (/(noc|职业库|职业分类)/i.test(text) && /(job bank|雇主|职位|工作)/i.test(text)) {
    inferred.add("NOC职业库");
    inferred.add("Job Bank");
  }
  if (/(crs|打分|算分)/i.test(text) && /(ee|express entry|快速通道)/i.test(text)) {
    inferred.add("联邦打分");
  }

  return Array.from(inferred);
}

export function mergeContentTags(source: ContentLike): string[] {
  const combined = new Set<string>(source.tags ?? []);
  for (const tag of inferContentTags(source)) combined.add(tag);
  return Array.from(combined);
}
