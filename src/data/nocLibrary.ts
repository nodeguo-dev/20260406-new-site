import { nocCatalog, type NocRelatedLink } from "@/data/nocCatalog";
import { nocStructure, nocStructureChildren, nocStructureMap, type NocStructureEntry } from "@/data/nocStructure";

export type NocLibraryEntry = NocStructureEntry & {
  titleZh: string;
  family: string;
  summary: string;
  chineseExplanation: string;
  jobBankExample: string;
  jobBankTitleSuggestion: string;
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

const titleOverrides: Record<string, string> = {
  "Legislative and senior management occupations": "立法与高级管理职业",
  "Legislative and senior managers": "立法与高级管理人员",
  "Business, finance and administration occupations": "商业、金融与行政职业",
  "Specialized middle management occupations in administrative services, financial and business services and communication (except broadcasting)":
    "行政、金融、商业与通讯领域专业中层管理职业",
  "Specialized middle management occupations in business, finance, and administration": "商业、金融与行政领域专业中层管理职业",
  "Professional occupations in finance and business": "金融与商业专业职业",
  "Professional occupations in business management consulting": "商业管理咨询专业职业",
  "Administrative and financial supervisors and specialized administrative occupations": "行政与财务主管及专门行政职业",
  "Administrative occupations and transportation logistics occupations": "行政职业与运输物流职业",
  "Administrative and financial support and supply chain logistics occupations": "行政与财务支持及供应链物流职业",
  "Natural and applied sciences and related occupations": "自然与应用科学职业",
  "Health occupations": "医疗职业",
  "Occupations in education, law and social, community and government services": "教育、法律、社会、社区与政府服务职业",
  "Arts and culture occupations": "艺术与文化职业",
  "Sales and service occupations": "销售与服务职业",
  "Trades, transport and equipment operators and related occupations": "技工、运输与设备操作职业",
  "Natural resources, agriculture and related production occupations": "自然资源、农业与生产职业",
  "Occupations in manufacturing and utilities": "制造与公用事业职业",
  "Construction managers": "施工经理",
  "Home building and renovation managers": "住宅建造及翻新经理",
  "Construction estimators": "施工预算员",
  "Construction millwrights and industrial mechanics": "机械装配工与工业机械师",
  "Telecommunication carriers managers": "电信运营商经理",
  "Auditors, accountants and investment professionals": "审计师、会计师及投资专业人员",
  "Financial auditors and accountants": "审计师和会计师",
  "Financial and investment analysts": "金融与投资分析师",
  "Financial advisors": "理财顾问",
  "Welders and related machine operators": "焊工与焊接设备操作员",
  "Electricians (except industrial and power system)": "一般电工",
  "Industrial electricians": "工业电工",
  "Plumbers": "管道工",
  "Gas fitters": "燃气安装工",
  "Carpenters": "木匠",
  "Cabinetmakers": "橱柜制造工",
  "Bricklayers": "砌砖工",
  "Heavy-duty equipment mechanics": "重型设备机械师",
  "Heating, refrigeration and air conditioning mechanics": "供暖、制冷和空调机械师",
  "Electrical mechanics": "电机维修技师",
  "Water well drillers": "水井钻井工",
  "Other technical trades and related occupations": "其他技术工种",
  "Concrete finishers": "混凝土收面工",
  "Roofers and shinglers": "屋顶工与瓦片工",
  "Painters and decorators (except interior decorators)": "油漆工与装饰工",
  "Floor covering installers": "地板安装工",
  "Transport truck drivers": "货车司机",
  "Bus drivers, subway operators and other transit operators": "公交司机、地铁司机及其他公共交通运营员",
  "Contractors and supervisors, oil and gas drilling and services": "油气钻井及服务承包商与主管",
};

function normalizeWords(value: string) {
  return value
    .replace(/\s+/g, " ")
    .replace(/\s-\s/g, " - ")
    .trim();
}

function translateTitleEn(titleEn: string, entry: NocStructureEntry) {
  const direct = titleOverrides[titleEn];
  if (direct) return direct;

  const text = normalizeWords(titleEn);
  const phraseRules: Array<[RegExp, string]> = [
    [/\boccupations\b/gi, "职业"],
    [/\boccupation\b/gi, "职业"],
    [/\bmanagers\b/gi, "管理人员"],
    [/\bmanager\b/gi, "经理"],
    [/\bsupervisors\b/gi, "主管"],
    [/\bsupervisor\b/gi, "主管"],
    [/\btelecommunication carriers\b/gi, "电信运营商"],
    [/\btelecommunications\b/gi, "电信"],
    [/\btelecommunication\b/gi, "电信"],
    [/\bcarriers\b/gi, "运营商"],
    [/\bauditors\b/gi, "审计师"],
    [/\bauditor\b/gi, "审计师"],
    [/\baccountants\b/gi, "会计师"],
    [/\baccountant\b/gi, "会计师"],
    [/\banalysts\b/gi, "分析师"],
    [/\banalyst\b/gi, "分析师"],
    [/\badvisors\b/gi, "顾问"],
    [/\badvisor\b/gi, "顾问"],
    [/\bspecialists\b/gi, "专员"],
    [/\bspecialist\b/gi, "专员"],
    [/\bprofessionals\b/gi, "专业人员"],
    [/\bprofessional\b/gi, "专业人员"],
    [/\bconsultants\b/gi, "顾问"],
    [/\bconsultant\b/gi, "顾问"],
    [/\btechnologists\b/gi, "技术师"],
    [/\btechnologist\b/gi, "技术师"],
    [/\btechnicians\b/gi, "技术员"],
    [/\btechnician\b/gi, "技术员"],
    [/\bassistants\b/gi, "助理"],
    [/\bassistant\b/gi, "助理"],
    [/\bworkers\b/gi, "工人"],
    [/\bworker\b/gi, "工人"],
    [/\boperators\b/gi, "操作员"],
    [/\boperator\b/gi, "操作员"],
    [/\binspectors\b/gi, "检验员"],
    [/\binspector\b/gi, "检验员"],
    [/\bengineers\b/gi, "工程师"],
    [/\bengineer\b/gi, "工程师"],
    [/\bplanners\b/gi, "规划师"],
    [/\bplanner\b/gi, "规划师"],
    [/\badministrative\b/gi, "行政"],
    [/\badministration\b/gi, "行政"],
    [/\bfinancial\b/gi, "财务"],
    [/\bbusiness\b/gi, "商业"],
    [/\bcommunication\b/gi, "通信"],
    [/\bcommunications\b/gi, "通信"],
    [/\bhealth\b/gi, "医疗"],
    [/\beducation\b/gi, "教育"],
    [/\bsocial\b/gi, "社会"],
    [/\bcommunity\b/gi, "社区"],
    [/\bgovernment\b/gi, "政府"],
    [/\barts\b/gi, "艺术"],
    [/\bculture\b/gi, "文化"],
    [/\bsales\b/gi, "销售"],
    [/\bservice\b/gi, "服务"],
    [/\btransport\b/gi, "运输"],
    [/\bequipment\b/gi, "设备"],
    [/\btrades\b/gi, "技工"],
    [/\bagriculture\b/gi, "农业"],
    [/\bnatural resources\b/gi, "自然资源"],
    [/\bmanufacturing\b/gi, "制造"],
    [/\butilities\b/gi, "公用事业"],
    [/\bconstruction\b/gi, "建筑"],
    [/\bproduction\b/gi, "生产"],
    [/\bproduction and utilities\b/gi, "生产和公用事业"],
    [/\btransportation\b/gi, "运输"],
    [/\brelated\b/gi, "相关"],
    [/\bexcept\b/gi, "不含"],
  ];

  let translated = text;
  phraseRules.forEach(([pattern, replacement]) => {
    translated = translated.replace(pattern, replacement);
  });

  translated = translated
    .replace(/\bthe\b/gi, "")
    .replace(/\bof\b/gi, "的")
    .replace(/\band\b/gi, "与")
    .replace(/\s+/g, " ")
    .replace(/\s-\s/g, " - ")
    .trim();

  if (entry.level === 1) {
    return broadCategoryZh[getTopCode(entry)] || translated || titleEn;
  }

  if (entry.level === 2 || entry.level === 3 || entry.level === 4) {
    const familyZh = broadCategoryZh[getTopCode(entry)] || "NOC 职业分类";
    const labelZh = levelLabelZh[entry.level];
    if (translated && translated !== titleEn) {
      return translated;
    }
    return `${familyZh} · ${labelZh}`;
  }

  return translated || titleEn;
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

function getDomainTheme(entry: NocStructureEntry) {
  const top = getTopCode(entry);
  if (top === "0") return "management";
  if (top === "1") return "admin";
  if (top === "2") return "tech";
  if (top === "3") return "health";
  if (top === "4") return "education";
  if (top === "5") return "arts";
  if (top === "6") return "service";
  if (top === "7") return "trades";
  if (top === "8") return "resources";
  return "manufacturing";
}

function buildChineseExplanation(entry: NocStructureEntry, titleZh: string, familyZh: string) {
  const scope = levelLabelZh[entry.level];
  if (entry.level === 5) {
    return `中文里通常可直接理解为「${titleZh}」。它属于 ${familyZh} 里的 ${scope}，最适合拿来对照 Job Bank 广告、雇主职责、工资单和移民申请材料。`;
  }
  return `这是 ${familyZh} 的 ${scope} 层级，用来先判断职业方向，再继续往下查更细的岗位。中文用户通常把它当作“职业分类目录”来用。`;
}

function buildJobBankTitleSuggestion(entry: NocStructureEntry, titleEn: string, titleZh: string) {
  if (entry.level !== 5) {
    return `Job Bank 不建议只发这个层级；更适合先下钻到具体职业单元，再写广告标题与职责。`;
  }
  return `标题建议优先使用 ${titleEn}，如果面向中文候选人，可以在括号中补充 ${titleZh}。`;
}

function buildJobBankExample(entry: NocStructureEntry, titleZh: string, titleEn: string) {
  const theme = getDomainTheme(entry);
  const examples: Record<string, string> = {
    management:
      `Job Bank 示例：We are hiring a ${titleEn}. The role includes team coordination, budget oversight, reporting, and performance tracking. Please include scope of responsibility, reporting line, and project or department size in the advertisement.`,
    admin:
      `Job Bank 示例：We are hiring a ${titleEn}. The role includes handling administrative workflows, coordination across teams, documentation, scheduling, and internal support. Please clearly list systems used, reporting line, and the range of daily duties.`,
    tech:
      `Job Bank 示例：We are hiring a ${titleEn}. The role includes technical analysis, design, development, testing, troubleshooting, and documentation. Please include tools, platforms, technical scope, and any certification or education requirements.`,
    health:
      `Job Bank 示例：We are hiring a ${titleEn}. The role includes patient care, clinical support, safety compliance, and regulated practice as required. Please clearly state licensure, scope of practice, shift pattern, and supervision requirements.`,
    education:
      `Job Bank 示例：We are hiring a ${titleEn}. The role includes instruction, assessment, student support, and program delivery. Please state the audience served, teaching context, credentials required, and any regulatory or certification expectations.`,
    arts:
      `Job Bank 示例：We are hiring a ${titleEn}. The role includes creative production, media or performance delivery, portfolio review, and collaboration with clients or teams. Please describe deliverables, software or tools, and expected output clearly.`,
    service:
      `Job Bank 示例：We are hiring a ${titleEn}. The role includes customer service, scheduling, communication, operations support, and shift-based work. Please include language expectations, hours, customer-facing duties, and workplace conditions.`,
    trades:
      `Job Bank 示例：We are hiring a ${titleEn}. The role includes on-site work, tools or equipment, blueprint or task interpretation, safety procedures, and trade-specific tasks. Please state materials used, duties on site, supervision level, and certification or apprenticeship expectations.`,
    resources:
      `Job Bank 示例：We are hiring a ${titleEn}. The role includes field operations, machinery, production tasks, and safety compliance. Please clearly describe the worksite, equipment, shift pattern, and any physical or environmental requirements.`,
    manufacturing:
      `Job Bank 示例：We are hiring a ${titleEn}. The role includes production, inspection, machine operation, maintenance, and quality control. Please state the line or equipment involved, hours, supervision, and any certification or training needs.`,
  };
  return examples[theme];
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
  const titleZh = curated?.titleZh || translateTitleEn(entry.titleEn, entry);
  const family = getFamilyZh(entry, curated?.family);
  const summary = curated?.summary || buildSummary(entry, titleZh, family);
  const chineseExplanation = curated?.summary
    ? buildChineseExplanation(entry, titleZh, family)
    : buildChineseExplanation(entry, titleZh, family);
  const jobBankTitleSuggestion = buildJobBankTitleSuggestion(entry, titleEn, titleZh);
  const jobBankExample = buildJobBankExample(entry, titleZh, titleEn);

  return {
    ...entry,
    titleEn,
    titleZh,
    family,
    summary,
    chineseExplanation,
    jobBankExample,
    jobBankTitleSuggestion,
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
