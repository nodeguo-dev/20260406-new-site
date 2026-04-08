export const site = {
  name: "常春藤国际咨询",
  domain: "cachinavisa.com",
  url: "https://cachinavisa.com",
  description:
    "专注加拿大移民、签证与留学咨询：政策解读、项目分析、申请攻略与常见问题，帮助您看清路径、做出更好的决策。",
  stats: [
    { label: "成功案例", value: "2500+" },
    { label: "客户满意度", value: "98%" },
    { label: "从业年限", value: "8年+" },
    { label: "咨询服务", value: "7×12h" },
  ],
  highlights: [
    {
      title: "专业顾问",
      desc: "以材料证据链与时间节点为核心，提供可落地的路径规划与风险预判。",
    },
    {
      title: "全程跟进",
      desc: "从评估、备料、递交到补件提醒，每个环节专人负责，减少返工。",
    },
    {
      title: "量身定制",
      desc: "根据您的背景、预算与时间要求，梳理 2–3 条优先路径及备选方案，不套模板。",
    },
    {
      title: "本地落地",
      desc: "多伦多本地注册运营，熟悉加拿大执行细节，中加双向无缝对接。",
    },
  ],
  contact: {
    phoneCN: "+86-19987006476",
    phoneCA: "+1 (647)947-2456",
    wechat: "getprsoon",
    phoneCNPlain: "19987006476",
    email: "info@cachinavisa.com",
    hours: "周一至周日 9:00–21:00",
    locations: [
      { label: "多伦多总部", value: "北约克中心" },
      { label: "深圳分公司", value: "京基 100" },
      { label: "成都分公司", value: "东方天祥广场 B 座" },
    ],
  },
  disclaimer:
    "本站内容仅供参考，不构成法律意见。移民与签证政策随时可能调整，请以 IRCC 官方发布为准。",
} as const;

export type SiteConfig = typeof site;
