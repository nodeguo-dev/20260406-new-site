/** 移民项目总览页（/projects/）结构化入口，与 Header 专题页保持一致 */

export type ProjectsHubLink = {
  href: string;
  label: string;
  desc?: string;
};

export type ProjectsHubSection = {
  id: string;
  title: string;
  intro?: string;
  links: ProjectsHubLink[];
};

export const projectsHubSections: ProjectsHubSection[] = [
  {
    id: "ee-target",
    title: "EE定向移民",
    intro: "CRS 通用邀请与「按类别」定向邀请并行；符合职业/语言时邀请分往往更低。",
    links: [
      { href: "/projects/ee-category/", label: "EE 定向类别总览", desc: "CBS · 十大类别入口" },
      { href: "/projects/ee-trades/", label: "技工类定向", desc: "NOC 技工清单" },
      { href: "/projects/ee-healthcare/", label: "医护类定向", desc: "医疗与社会类职业" },
      { href: "/projects/ee-french/", label: "法语定向", desc: "TEF / TCF" },
      { href: "/projects/ee-education/", label: "教育类定向", desc: "教师、幼教等" },
    ],
  },
  {
    id: "pnp",
    title: "各省省提名与重点省份",
    intro: "省提名可与 EE 衔接（+600 CRS）或走 Base 通道；海洋四省另可对接 AIP。",
    links: [
      {
        href: "/projects/provincial-nomination/",
        label: "各省省提名总览",
        desc: "PNP · Enhanced / Base",
      },
      { href: "/projects/province/ontario/", label: "安省移民 OINP", desc: "安大略省提名" },
      { href: "/projects/oinp/", label: "OINP 专题长文", desc: "类别与材料" },
      { href: "/projects/province/manitoba/", label: "曼省留学移民", desc: "MPNP · 毕业留省" },
      { href: "/projects/province/british-columbia/", label: "BC 省 BCPNP", desc: "技术 / 科技类" },
      { href: "/projects/province/alberta/", label: "阿省 AAIP", desc: "机遇类与 EE" },
      { href: "/projects/province/quebec/", label: "魁省项目", desc: "CSQ / PEQ" },
    ],
  },
  {
    id: "atlantic",
    title: "海洋四省移民（NL · NS · NB · PEI）",
    intro: "大西洋四省省提名与联邦 AIP；竞争度与成本常低于安省、BC。",
    links: [
      { href: "/projects/province/newfoundland/", label: "纽芬兰 NL（NLNP）", desc: "MUN · AIP" },
      { href: "/projects/province/nova-scotia/", label: "新斯科舍 NS（NSNP）", desc: "哈利法克斯 · AIP" },
      { href: "/projects/province/new-brunswick/", label: "新不伦瑞克 NB（NBPNP）", desc: "蒙克顿 · AIP" },
      { href: "/projects/province/prince-edward-island/", label: "爱德华王子岛 PEI（PEIPNP）", desc: "夏洛特敦 · AIP" },
    ],
  },
  {
    id: "federal",
    title: "联邦移民项目",
    intro: "Express Entry 框架下的联邦技术类、经验类与工匠类。",
    links: [
      {
        href: "/projects/federal-programs/",
        label: "联邦移民项目总览",
        desc: "FSW / FST / CEC",
      },
      { href: "/projects/federal/", label: "FSW · FST 专题", desc: "境外技术类与工匠类" },
      { href: "/projects/cec/", label: "加拿大经验类（CEC）", desc: "境内 TEER 0–3 工作经验" },
      { href: "/tools/crs-calculator/", label: "CRS 打分计算器", desc: "入池前自测" },
    ],
  },
  {
    id: "employer",
    title: "雇主担保与 LMIA",
    intro: "LMIA 证明雇主招聘合规；常用于工签与部分移民路径的加分或前提条件。",
    links: [
      { href: "/projects/lmia-overview/", label: "LMIA 雇主担保", desc: "流程、类别与时间线" },
      { href: "/projects/lmia-exemptions/", label: "LMIA 豁免", desc: "国际流动等免 LMIA 情形" },
    ],
  },
  {
    id: "family",
    title: "家庭团聚担保",
    intro: "配偶、同居伴侣、子女与父母祖父母担保等政策与材料框架。",
    links: [
      {
        href: "/services/family-sponsorship-service/",
        label: "家庭团聚服务",
        desc: "评估与递交支持",
      },
      { href: "/category/family-sponsorship/", label: "团聚类文章", desc: "政策与实务" },
    ],
  },
  {
    id: "study",
    title: "留学与工签衔接",
    intro: "选校、学签与毕业后路径可与省提名、CEC、定向邀请组合规划。",
    links: [
      { href: "/projects/study-to-pr/", label: "留学转移民（毕业移民）", desc: "PGWP → PR 常见路径" },
      { href: "/school/", label: "免费申请学校 · 10 省选校", desc: "院校目录与 DLI" },
      { href: "/visa/study-permit/", label: "学签申请指南", desc: "材料与时间线" },
    ],
  },
];
