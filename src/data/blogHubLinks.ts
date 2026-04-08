/** Rich internal links for blog listing, category, tag, and article pages (SEO + UX). */

export type HubLink = { href: string; label: string };
export type HubSection = { title: string; links: HubLink[] };

export const BLOG_HUB_SECTIONS_FULL: HubSection[] = [
  {
    title: "联邦 · Express Entry",
    links: [
      { href: "/projects/federal-programs/", label: "联邦移民项目总览" },
      { href: "/projects/federal/", label: "联邦技术移民" },
      { href: "/projects/cec/", label: "加拿大经验类 CEC" },
      { href: "/projects/ee-category/", label: "EE 定向邀请（类别）" },
      { href: "/projects/ee-trades/", label: "EE 技工类定向" },
      { href: "/projects/ee-healthcare/", label: "EE 医护类定向" },
      { href: "/projects/ee-french/", label: "EE 法语定向" },
      { href: "/projects/ee-education/", label: "EE 教育类定向" },
      { href: "/services/ee-pathway-job-match/", label: "EE 定向 / 找工匹配服务" },
      { href: "/tools/crs-calculator/", label: "CRS 打分计算器" },
    ],
  },
  {
    title: "省提名 · 省份项目",
    links: [
      { href: "/projects/ee-category/", label: "EE定向移民" },
      { href: "/projects/provincial-nomination/", label: "各省省提名 PNP 总览" },
      { href: "/projects/province/ontario/", label: "安省移民 OINP" },
      { href: "/projects/province/newfoundland/", label: "海洋四省 · NL" },
      { href: "/projects/province/nova-scotia/", label: "海洋四省 · NS" },
      { href: "/projects/province/new-brunswick/", label: "海洋四省 · NB" },
      { href: "/projects/province/prince-edward-island/", label: "海洋四省 · PEI" },
      { href: "/projects/province/manitoba/", label: "曼省留学移民" },
      { href: "/projects/province/british-columbia/", label: "BC 省提名" },
      { href: "/projects/province/alberta/", label: "阿省 AAIP" },
      { href: "/projects/province/quebec/", label: "魁省项目" },
      { href: "/services/pnp-strategy/", label: "省提名通道筛选服务" },
      { href: "/tools/bc-pnp-calculator/", label: "BC SIRS 计算器" },
      { href: "/tools/oinp-calculator/", label: "安省 EOI 计算器" },
      { href: "/tools/aaip-calculator/", label: "阿省 Worker EOI" },
    ],
  },
  {
    title: "雇主 · LMIA · 工签",
    links: [
      { href: "/projects/lmia-overview/", label: "LMIA 雇主担保" },
      { href: "/projects/lmia-exemptions/", label: "LMIA 豁免类别" },
      { href: "/visa/work-permit/", label: "工签申请指南" },
      { href: "/visa/french-mobility-work-permit/", label: "法语流动工签" },
      { href: "/visa/c11-work-permit/", label: "C11 重大利益工签" },
      { href: "/blog/c11-business-plan-guide/", label: "C11 商业计划书怎么写（含下载大纲）" },
      { href: "/blog/lmia-tfwp-federal-updates-timeline-2023-2026/", label: "LMIA/TFWP 联邦调整时间线（2023–2026）" },
      { href: "/blog/lmia-low-wage-vs-high-wage-median-wage-2026/", label: "低薪流与高薪流 · median wage" },
      { href: "/blog/lmia-employer-compliance-recruitment-rtp-cap-2026/", label: "雇主合规 · RTP/招聘/比例上限" },
      { href: "/projects/oinp/", label: "安省雇主类（专题）" },
    ],
  },
  {
    title: "签证服务",
    links: [
      { href: "/visa/", label: "签证服务总览" },
      { href: "/visa/visitor/", label: "访问签 / 旅游签" },
      { href: "/visa/family-visit/", label: "探亲签证" },
      { href: "/visa/super-visa/", label: "超级签证" },
      { href: "/visa/study-permit/", label: "学签 Study Permit" },
      { href: "/visa/work-permit/", label: "工签总览" },
      { href: "/visa/french-mobility-work-permit/", label: "法语流动工签" },
      { href: "/visa/c11-work-permit/", label: "C11 重大利益工签" },
      { href: "/visa/extend/", label: "续签 / 境内转换" },
    ],
  },
  {
    title: "多伦多 · 本地生活",
    links: [
      { href: "/guides/toronto-life/", label: "多伦多生活 · 总览" },
      { href: "/guides/toronto-life/housing/", label: "分册 · 安居租房" },
      { href: "/guides/toronto-life/transit/", label: "分册 · 交通出行" },
      { href: "/guides/toronto-life/health/", label: "分册 · 医疗保险" },
      { href: "/guides/toronto-life/education/", label: "分册 · 教育育儿" },
      { href: "/guides/toronto-life/finance/", label: "分册 · 金融税务" },
      { href: "/guides/toronto-life/city-services/", label: "分册 · 市政日常" },
      { href: "/guides/toronto-life/partners/", label: "商务合作 · 广告位" },
      { href: "/category/toronto-life/", label: "博客分类 · 多伦多生活" },
      { href: "/blog/downtown-toronto-catering-uoft-tmu-students/", label: "多大/TMU 周边团体餐与 catering（含官网链接）" },
      { href: "/blog/toronto-newcomer-wellness-rmt-acupuncture-insurance-guide/", label: "针灸·按摩·团险额度实用说明" },
      { href: "/blog/newcomer-student-toronto-moving-address-complete-guide/", label: "留学生搬家后地址更新指南" },
    ],
  },
  {
    title: "留学 · 择校",
    links: [
      { href: "/school/", label: "10 省院校目录" },
      { href: "/school/ontario/", label: "安省院校" },
      { href: "/school/british-columbia/", label: "BC 省院校" },
      { href: "/school/alberta/", label: "阿省院校" },
      { href: "/projects/study-to-pr/", label: "留学转移民" },
    ],
  },
  {
    title: "境内事务 · 指南",
    links: [
      { href: "/inland/", label: "境内事务总览" },
      { href: "/inland/status-extension/", label: "身份延期" },
      { href: "/inland/work-study-bridge/", label: "学签工签衔接" },
      { href: "/inland/document-renewal/", label: "证件更新" },
      { href: "/inland/pr-card/", label: "PR 卡与登陆" },
      { href: "/blog/inland-status-extension-guide/", label: "续签与桥接身份（长文）" },
      { href: "/blog/inland-pgwp-work-study-bridge/", label: "学签→PGWP（长文）" },
      { href: "/blog/inland-document-renewal-guide/", label: "证件更新（长文）" },
      { href: "/blog/inland-pr-card-landing-guide/", label: "PR 卡与登陆（长文）" },
    ],
  },
  {
    title: "资讯 · 工具 · 咨询",
    links: [
      { href: "/blog/", label: "移民新闻首页" },
      { href: "/immigration/", label: "移民资讯聚合" },
      { href: "/noc/", label: "加拿大 NOC 职业库" },
      { href: "/noc/job-bank-ad-guide/", label: "Job Bank 广告写法指南" },
      { href: "/noc/how-to-match-your-experience/", label: "如何对照 NOC 经验" },
      { href: "/immigration/guide/", label: "新手必读" },
      { href: "/tools/", label: "在线打分工具" },
      { href: "/baike/", label: "移民百科" },
      { href: "/faq/", label: "常见问题" },
      { href: "/search/", label: "站内搜索" },
      { href: "/services/", label: "我们的服务" },
      { href: "/contact/", label: "免费咨询" },
      { href: "/about/", label: "关于我们" },
    ],
  },
  {
    title: "文章分类（频道）",
    links: [
      { href: "/category/federal-pnp/", label: "联邦与省提名" },
      { href: "/category/policy/", label: "政策解读" },
      { href: "/category/immigration-programs/", label: "移民项目分析" },
      { href: "/category/visa-programs/", label: "签证项目" },
      { href: "/category/inland-affairs/", label: "境内事务" },
      { href: "/category/study-permit/", label: "留学与学签" },
      { href: "/category/work-permit-lmia/", label: "工签与 LMIA" },
      { href: "/category/family-sponsorship/", label: "团聚移民" },
      { href: "/category/quebec/", label: "魁北克" },
      { href: "/category/faq/", label: "常见问题类" },
      { href: "/category/toronto-life/", label: "多伦多生活" },
    ],
  },
];

/** Sidebar / narrow column: fewer sections, high-intent links */
export const BLOG_HUB_SECTIONS_COMPACT: HubSection[] = [
  BLOG_HUB_SECTIONS_FULL[0]!,
  BLOG_HUB_SECTIONS_FULL[1]!,
  {
    title: "签证 · 境内",
    links: [
      { href: "/visa/study-permit/", label: "学签" },
      { href: "/visa/work-permit/", label: "工签总览" },
      { href: "/visa/french-mobility-work-permit/", label: "法语流动工签" },
      { href: "/visa/c11-work-permit/", label: "C11 重大利益工签" },
      { href: "/blog/guide-french-mobility-work-permit/", label: "博客：法语工签导读" },
      { href: "/blog/guide-c11-significant-benefit-work-permit/", label: "博客：C11 工签导读" },
      { href: "/inland/", label: "境内事务" },
      { href: "/tools/", label: "打分工具" },
    ],
  },
  {
    title: "站点",
    links: [
      { href: "/blog/", label: "新闻首页" },
      { href: "/guides/toronto-life/", label: "多伦多生活指南" },
      { href: "/guides/toronto-life/partners/", label: "生活专题 · 广告合作" },
      { href: "/immigration/guide/", label: "新手必读" },
      { href: "/projects/", label: "移民项目" },
      { href: "/contact/", label: "咨询我们" },
    ],
  },
];

const CATEGORY_CONTEXT: Record<string, HubLink[]> = {
  "federal-pnp": [
    { href: "/category/federal-pnp/", label: "本分类全部文章" },
    { href: "/tools/crs-calculator/", label: "CRS 计算器" },
    { href: "/projects/federal-programs/", label: "联邦项目总览" },
  ],
  policy: [
    { href: "/category/policy/", label: "本分类全部文章" },
    { href: "/immigration/", label: "移民资讯" },
    { href: "/projects/", label: "移民项目" },
  ],
  "immigration-programs": [
    { href: "/category/immigration-programs/", label: "本分类全部文章" },
    { href: "/projects/", label: "项目列表" },
    { href: "/projects/provincial-nomination/", label: "省提名总览" },
  ],
  "visa-programs": [
    { href: "/category/visa-programs/", label: "本分类全部文章" },
    { href: "/visa/", label: "签证总览" },
    { href: "/visa/work-permit/", label: "工签总览" },
    { href: "/visa/french-mobility-work-permit/", label: "法语流动工签" },
    { href: "/visa/c11-work-permit/", label: "C11 工签" },
    { href: "/visa/visitor/", label: "访问签" },
  ],
  "inland-affairs": [
    { href: "/category/inland-affairs/", label: "本分类全部文章" },
    { href: "/inland/", label: "境内事务总览" },
    { href: "/blog/inland-status-extension-guide/", label: "续签指南" },
  ],
  "study-permit": [
    { href: "/category/study-permit/", label: "本分类全部文章" },
    { href: "/visa/study-permit/", label: "学签指南" },
    { href: "/school/", label: "免费申校" },
  ],
  "work-permit-lmia": [
    { href: "/category/work-permit-lmia/", label: "本分类全部文章" },
    { href: "/projects/lmia-overview/", label: "LMIA 总览" },
    { href: "/projects/lmia-exemptions/", label: "LMIA 豁免类别" },
    { href: "/blog/lmia-tfwp-federal-updates-timeline-2023-2026/", label: "LMIA/TFWP 近年政策时间线" },
    { href: "/blog/lmia-low-wage-vs-high-wage-median-wage-2026/", label: "低薪流与高薪流" },
    { href: "/blog/lmia-employer-compliance-recruitment-rtp-cap-2026/", label: "雇主合规与 RTP" },
    { href: "/visa/work-permit/", label: "工签指南" },
    { href: "/visa/french-mobility-work-permit/", label: "法语流动工签" },
    { href: "/visa/c11-work-permit/", label: "C11 重大利益工签" },
    { href: "/blog/c11-business-plan-guide/", label: "C11 商业计划书与样例下载" },
  ],
  "family-sponsorship": [
    { href: "/category/family-sponsorship/", label: "本分类全部文章" },
    { href: "/contact/", label: "团聚方案咨询" },
    { href: "/projects/", label: "其他移民路径" },
  ],
  quebec: [
    { href: "/category/quebec/", label: "本分类全部文章" },
    { href: "/projects/province/quebec/", label: "魁省项目" },
    { href: "/school/quebec/", label: "魁省院校" },
  ],
  faq: [
    { href: "/category/faq/", label: "本分类全部文章" },
    { href: "/faq/", label: "站内 FAQ" },
    { href: "/contact/", label: "向我们提问" },
  ],
  "toronto-life": [
    { href: "/category/toronto-life/", label: "本分类全部文章" },
    { href: "/guides/toronto-life/", label: "生活指南总览" },
    { href: "/blog/downtown-toronto-catering-uoft-tmu-students/", label: "多大/TMU · Downtown 团体餐与 catering" },
    { href: "/blog/toronto-newcomer-wellness-rmt-acupuncture-insurance-guide/", label: "团险 · 针灸按摩说明" },
    { href: "/guides/toronto-life/housing/", label: "分册 · 租房" },
    { href: "/guides/toronto-life/transit/", label: "分册 · 交通" },
    { href: "/guides/toronto-life/health/", label: "分册 · 医疗" },
    { href: "/guides/toronto-life/partners/", label: "商务合作投放" },
    { href: "/immigration/guide/", label: "移民新手必读" },
    { href: "/blog/", label: "移民新闻" },
  ],
};

export function getCategoryContextSection(category?: string): HubSection | null {
  if (!category) return null;
  const links = CATEGORY_CONTEXT[category];
  if (!links?.length) return null;
  return { title: "与本分类相关", links };
}
