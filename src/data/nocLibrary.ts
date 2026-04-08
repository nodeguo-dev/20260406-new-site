import { nocCatalog, type NocRelatedLink } from "@/data/nocCatalog";
import { nocStructure, nocStructureChildren, nocStructureMap, type NocStructureEntry } from "@/data/nocStructure";

export type NocLibraryEntry = NocStructureEntry & {
  titleZh: string;
  family: string;
  summary: string;
  commonTitles: string[];
  employerTips: string[];
  applicantTips: string[];
  relatedLinks: NocRelatedLink[];
  tags: string[];
  isFeatured: boolean;
  sourceType: "featured" | "structure";
};

const broadCategoryZh: Record<string, string> = {
  "0": "立法与高级管理职业",
  "1": "商业、金融与行政职业",
  "2": "自然与应用科学及相关职业",
  "3": "医疗职业",
  "4": "教育、法律、社会、社区与政府服务职业",
  "5": "艺术、文化、娱乐与体育职业",
  "6": "销售与服务职业",
  "7": "技工、运输与设备操作职业",
  "8": "自然资源、农业及相关生产职业",
  "9": "制造与公用事业职业",
};

const levelLabelZh: Record<NocStructureEntry["level"], string> = {
  1: "大类",
  2: "大组",
  3: "子大组",
  4: "小组",
  5: "具体职业",
};

const curatedByCode = new Map(nocCatalog.map((entry) => [entry.code, entry] as const));

function getTopCode(entry: NocStructureEntry) {
  return entry.pathCodes[0] || entry.code;
}

function getFamilyZh(entry: NocStructureEntry, curatedFamily?: string) {
  return curatedFamily || broadCategoryZh[getTopCode(entry)] || "NOC 职业分类";
}

function buildSummary(entry: NocStructureEntry, titleZh: string, familyZh: string) {
  switch (entry.level) {
    case 1:
      return `这是 NOC 2021 的大类层级，先看 ${familyZh} 的整体版图，再继续下钻到更细的职业分组。`;
    case 2:
      return `这是大组层级，适合先看方向，再继续确认具体职业 code、职责范围和 TEER。`;
    case 3:
      return `这是子大组层级，通常对应一组相近岗位，可以帮助你缩小检索范围。`;
    case 4:
      return `这是小组层级，离具体岗位已经很近，适合用来判断职责是否能对上 Job Bank 与 NOC。`;
    case 5:
    default:
      return `这是具体职业单元，最适合对照 Job Bank 广告、雇主职责、工资单、工时和 EE/PNP 申请材料。`;
  }
}

function buildCommonTitles(entry: NocStructureEntry, titleZh: string, titleEn: string) {
  const items = new Set<string>([titleZh, titleEn, `NOC ${entry.code}`]);
  if (entry.level === 5) {
    items.add("具体职业");
    items.add("Job Bank 对照");
  } else {
    items.add(levelLabelZh[entry.level]);
    items.add("上级分类");
  }
  return Array.from(items);
}

function buildEmployerTips(entry: NocStructureEntry, titleZh: string) {
  if (entry.level === 5) {
    return [
      `岗位标题尽量贴近 ${titleZh} 与官方英文名，方便 Job Bank 和候选人检索。`,
      "把主要职责、工具/设备、工时和汇报对象写清楚，不要只写泛泛的“general duties”。",
      "如果该岗位与 EE、PNP 或技工路径有关，广告里要把工作范围和资质要求写明。",
    ];
  }

  return [
    `如果这是 ${levelLabelZh[entry.level]} 层级岗位，雇主广告里要写清职责范围与上下级关系。`,
    "避免只写头衔不写职责；候选人和审核人都需要从岗位描述判断实际工作。",
    "如果你的招聘目的是匹配移民路径，建议同步参考 Job Bank 和 NOC 官方职责。",
  ];
}

function buildApplicantTips(entry: NocStructureEntry, titleZh: string) {
  if (entry.level === 5) {
    return [
      `简历和雇主信要能证明你确实做过 ${titleZh} 对应的核心职责，而不是只挂过头衔。`,
      "把工时、工资单、ROE 和职责说明放在一条证据链里，避免材料互相对不上。",
      "如果你想走 EE / PNP / 技工路径，先确认 code、TEER 和具体职责是否一致。",
    ];
  }

  return [
    "把自己所在岗位对应到更细的子类、下级职业或职责范围，再去看是否符合移民路径。",
    "上级分类页适合做定位，不适合直接替代具体职业单元的职责对照。",
    "如果还不确定，先打开下级页面或 Job Bank 指南再做判断。",
  ];
}

function buildRelatedLinks(entry: NocStructureEntry): NocRelatedLink[] {
  const links: NocRelatedLink[] = [
    {
      href: "/noc/job-bank-ad-guide/",
      label: "雇主如何写 Job Bank 广告",
      desc: "岗位写法与关键词",
    },
    {
      href: "/noc/how-to-match-your-experience/",
      label: "申请人如何对照职责",
      desc: "经验与 NOC 对照",
    },
    {
      href: "/tools/crs-calculator/",
      label: "CRS 打分工具",
      desc: "先看分数底盘",
    },
  ];

  if (entry.code.startsWith("7")) {
    links.unshift({
      href: "/projects/ee-trades/",
      label: "EE 技工类定向",
      desc: "技工路径与找工匹配",
    });
  }

  return links;
}

function buildTags(entry: NocStructureEntry, familyZh: string, titleZh: string, titleEn: string) {
  const tags = new Set<string>([
    "NOC",
    "NOC职业库",
    `NOC${entry.code}`,
    `NOC ${entry.code}`,
    familyZh,
    levelLabelZh[entry.level],
    titleZh,
    titleEn,
    "Job Bank",
    "EE",
    "PNP",
    "申请人",
    "雇主",
  ]);

  if (entry.code.startsWith("7")) {
    tags.add("技工");
    tags.add("EE技工移民");
    tags.add("找技工工作");
  }

  if (entry.code.startsWith("3")) {
    tags.add("医护");
    tags.add("EE定向医疗");
  }

  if (entry.code.startsWith("4")) {
    tags.add("教育");
    tags.add("EE定向教育");
  }

  return Array.from(tags);
}

function buildSearchBlob(entry: NocStructureEntry, titleZh: string, titleEn: string, familyZh: string, summary: string) {
  const tokens = [
    `noc ${entry.code}`,
    entry.code,
    titleZh,
    titleEn,
    familyZh,
    summary,
    entry.definition,
    entry.hierarchy,
    levelLabelZh[entry.level],
    broadCategoryZh[getTopCode(entry)] || "",
    "NOC 2021",
    "加拿大NOC",
    "职业分类",
    "Job Bank",
    "EE",
    "PNP",
    "申请人",
    "雇主",
  ];

  if (entry.code.startsWith("7")) {
    tokens.push("技工", "找技工工作", "EE技工移民");
  }
  if (entry.code.startsWith("3")) {
    tokens.push("医护", "医疗", "EE定向医疗");
  }
  if (entry.code.startsWith("4")) {
    tokens.push("教育", "教师", "EE定向教育");
  }
  if (entry.code.startsWith("2")) {
    tokens.push("STEM", "理工", "科技");
  }

  return Array.from(new Set(tokens.filter(Boolean))).join(" ").toLowerCase();
}

export const nocLibrary: NocLibraryEntry[] = nocStructure.map((entry) => {
  const curated = curatedByCode.get(entry.code);
  const titleEn = curated?.titleEn || entry.titleEn;
  const titleZh = curated?.titleZh || entry.titleEn;
  const family = getFamilyZh(entry, curated?.family);
  const summary = curated?.summary || buildSummary(entry, titleZh, family);

  return {
    ...entry,
    titleEn,
    titleZh,
    family,
    summary,
    searchBlob: buildSearchBlob(entry, titleZh, titleEn, family, summary),
    commonTitles: curated?.commonTitles?.length ? curated.commonTitles : buildCommonTitles(entry, titleZh, titleEn),
    employerTips: curated?.employerTips?.length ? curated.employerTips : buildEmployerTips(entry, titleZh),
    applicantTips: curated?.applicantTips?.length ? curated.applicantTips : buildApplicantTips(entry, titleZh),
    relatedLinks: curated?.relatedLinks?.length ? curated.relatedLinks : buildRelatedLinks(entry),
    tags: curated?.tags?.length ? curated.tags : buildTags(entry, family, titleZh, titleEn),
    isFeatured: Boolean(curated),
    sourceType: curated ? "featured" : "structure",
  };
});

export const nocLibraryMap = Object.fromEntries(nocLibrary.map((item) => [item.code, item])) as Record<
  string,
  NocLibraryEntry
>;

export const nocLibraryChildren = nocStructureChildren;

export function getNocLibraryEntry(code: string) {
  return nocLibraryMap[code];
}

export function getNocAncestors(entry: NocStructureEntry | NocLibraryEntry) {
  const ancestors = entry.pathCodes
    .map((code) => nocStructureMap[code])
    .filter(Boolean);

  return ancestors;
}

export function getNocLevelLabel(level: NocStructureEntry["level"]) {
  return levelLabelZh[level];
}
