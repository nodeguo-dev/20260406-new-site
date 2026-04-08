/**
 * 多伦多生活指南 — 合作推广 / 外链位配置
 * ----------------------------------------
 * - active: true 且 href 为非空字符串时，显示对外链接（默认 rel 含 sponsored）
 * - active: false 或 href 为空：显示「虚位以待」，链向本站联系页（招商）
 * 洽谈投放：改本文件即可，无需动页面模板。
 */

export type TorontoLifePartner = {
  id: string;
  name: string;
  tagline: string;
  /** 外链；null 表示招商位 */
  href: string | null;
  categoryLabel: string;
  active: boolean;
  /** 额外 rel，默认会加 noopener noreferrer；付费外链建议保持 nofollow */
  extraRel?: string;
};

export type TorontoLifePartnerBand = {
  bandTitle: string;
  bandIntro?: string;
  items: TorontoLifePartner[];
};

const contactSponsor = "/contact/?topic=toronto-life-sponsor";

/** 首页 / 总览 — 横幅下第一屏合作区 */
export const torontoLifeHubBandA: TorontoLifePartnerBand = {
  bandTitle: "初到多伦多 · 常用服务（合作展示）",
  bandIntro:
    "以下推荐位供本地合规服务商展示。若您为地产经纪、保险、电讯、搬家、家政等机构，欢迎洽谈本专题曝光与外链合作。",
  items: [
    {
      id: "hub-rental",
      name: "GTA 租房 / 找房合作位",
      tagline: "长租、合租、首次落地短租衔接——可放贵司品牌与落地页。",
      href: null,
      categoryLabel: "租房",
      active: false,
    },
    {
      id: "hub-telco",
      name: "手机卡 · 家庭网络合作位",
      tagline: "新移民办卡、家庭宽带与中文客服通道——适合电讯代理商。",
      href: null,
      categoryLabel: "电讯",
      active: false,
    },
    {
      id: "hub-insurance",
      name: "车险 · 房屋险合作位",
      tagline: "持牌经纪或保险公司专区；请自行确保合规披露。",
      href: null,
      categoryLabel: "保险",
      active: false,
    },
  ],
};

/** 总览 — 主题区下方 */
export const torontoLifeHubBandB: TorontoLifePartnerBand = {
  bandTitle: "生活琐事一站式（合作展示）",
  bandIntro: "搬家、家政、家具安装、会计报税等高频需求，可在此分区投放独立卡片或专题软文。",
  items: [
    {
      id: "hub-move",
      name: "多伦多国泰搬运 · GTMoving",
      tagline: "GTA 本地搬家、钢琴与重物、运输合作及国际搬家；中文官网发图报价。",
      href: "https://www.gtmoving.ca/zh/",
      categoryLabel: "搬家",
      active: true,
    },
    {
      id: "hub-accounting",
      name: "个人税 · 小生意记账合作位",
      tagline: "非本站税务意见；投放方须为持牌 CPA 或合规机构。",
      href: null,
      categoryLabel: "财税",
      active: false,
    },
  ],
};

/** 各子页：顶部条（与正文强相关） */
export const torontoLifePageBands: Record<
  string,
  { top: TorontoLifePartnerBand; mid: TorontoLifePartnerBand; bottom: TorontoLifePartnerBand }
> = {
  housing: {
    top: {
      bandTitle: "找房与签约 · 合作入口",
      bandIntro: "需要中文讲解租约、押金或学区租房清单的读者，可由合作机构提供增值服务。",
      items: [
        {
          id: "hs-agent",
          name: "持牌地产经纪 / 租房平台合作位",
          tagline: "展示贵司 GTA 覆盖区域与华语服务时间。",
          href: null,
          categoryLabel: "地产",
          active: false,
        },
        {
          id: "hs-legal",
          name: "租约审核 · 房东纠纷合作位",
          tagline: "律师楼或 Paralegal 服务（请自行披露执业信息）。",
          href: null,
          categoryLabel: "法律",
          active: false,
        },
      ],
    },
    mid: {
      bandTitle: "家具 · 家居服务",
      bandIntro: "",
      items: [
        {
          id: "hs-furniture",
          name: "家具配送 / 安装合作位",
          tagline: "宜家提货、组装、二手家具回收等。",
          href: null,
          categoryLabel: "家居",
          active: false,
        },
      ],
    },
    bottom: {
      bandTitle: "更多本地资源",
      bandIntro: "",
      items: [
        {
          id: "hs-misc",
          name: "综合生活服务合作位",
          tagline: "保洁、通渠、开锁等可按季轮换投放。",
          href: null,
          categoryLabel: "家政",
          active: false,
        },
      ],
    },
  },
  transit: {
    top: {
      bandTitle: "出行与驾照 · 合作入口",
      bandIntro: "驾校、车险、租车行等可与本页主题自然衔接。",
      items: [
        {
          id: "tr-driving",
          name: "驾校 / G 牌路考辅导合作位",
          tagline: "注明语言服务与练车区域（GTA）。",
          href: null,
          categoryLabel: "驾校",
          active: false,
        },
        {
          id: "tr-carins",
          name: "车险经纪合作位",
          tagline: "新牌、无加拿大记录等场景的报价入口。",
          href: null,
          categoryLabel: "车险",
          active: false,
        },
      ],
    },
    mid: {
      bandTitle: "车辆买卖与保养",
      bandIntro: "",
      items: [
        {
          id: "tr-dealer",
          name: "二手车行 / 验车合作位",
          tagline: "",
          href: null,
          categoryLabel: "车行",
          active: false,
        },
      ],
    },
    bottom: {
      bandTitle: "停车与共享出行",
      bandIntro: "",
      items: [
        {
          id: "tr-parking",
          name: "车位月租 / 共享汽车合作位",
          tagline: "",
          href: null,
          categoryLabel: "出行",
          active: false,
        },
      ],
    },
  },
  health: {
    top: {
      bandTitle: "医疗保险 · 合作入口",
      bandIntro: "OHIP 等候期、留学生险、旅游险过渡等场景，可由持牌经纪提供方案比较（须合规披露）。",
      items: [
        {
          id: "he-ins",
          name: "持牌保险经纪合作位",
          tagline: "UHIP、补充险、短期险产品入口。",
          href: null,
          categoryLabel: "保险",
          active: false,
        },
        {
          id: "he-dental",
          name: "牙科 / 眼科合作诊所位",
          tagline: "接受新患者的诊所或专科中心。",
          href: null,
          categoryLabel: "诊所",
          active: false,
        },
      ],
    },
    mid: {
      bandTitle: "健康与孕产",
      bandIntro: "",
      items: [
        {
          id: "he-mw",
          name: "孕产 / 儿科合作位",
          tagline: "助产士、儿科诊所等（须符合广告规范）。",
          href: null,
          categoryLabel: "医疗",
          active: false,
        },
      ],
    },
    bottom: {
      bandTitle: "心理健康与支持",
      bandIntro: "",
      items: [
        {
          id: "he-mh",
          name: "心理咨询 / EAP 合作位",
          tagline: "提供华语或文化敏感服务的机构。",
          href: null,
          categoryLabel: "心理",
          active: false,
        },
      ],
    },
  },
  education: {
    top: {
      bandTitle: "公校与衔接课 · 合作入口",
      bandIntro: "课后辅导、考试培训、私校申请顾问等可在此展示。",
      items: [
        {
          id: "ed-tutor",
          name: "K–12 辅导 / 竞赛培训合作位",
          tagline: "",
          href: null,
          categoryLabel: "培训",
          active: false,
        },
        {
          id: "ed-private",
          name: "私校申请顾问合作位",
          tagline: "",
          href: null,
          categoryLabel: "升学",
          active: false,
        },
      ],
    },
    mid: {
      bandTitle: "日托与课后",
      bandIntro: "",
      items: [
        {
          id: "ed-daycare",
          name: "日托中心 / Before-After School 合作位",
          tagline: "",
          href: null,
          categoryLabel: "日托",
          active: false,
        },
      ],
    },
    bottom: {
      bandTitle: "成人教育与语言",
      bandIntro: "",
      items: [
        {
          id: "ed-lang",
          name: "语言学校 / 职业证书合作位",
          tagline: "",
          href: null,
          categoryLabel: "教育",
          active: false,
        },
      ],
    },
  },
  finance: {
    top: {
      bandTitle: "银行与信用 · 合作入口",
      bandIntro: "新移民开户礼、信用卡推荐等可由金融机构或合规推广渠道投放（须披露利益关系）。",
      items: [
        {
          id: "fi-bank",
          name: "银行客户经理 / 新移民专案合作位",
          tagline: "",
          href: null,
          categoryLabel: "银行",
          active: false,
        },
        {
          id: "fi-mortgage",
          name: "房贷经纪合作位",
          tagline: "持牌按揭经纪；非投资建议。",
          href: null,
          categoryLabel: "房贷",
          active: false,
        },
      ],
    },
    mid: {
      bandTitle: "税务与记账",
      bandIntro: "",
      items: [
        {
          id: "fi-tax",
          name: "个人税 / 自雇报税合作位",
          tagline: "CPA 或合规报税机构。",
          href: null,
          categoryLabel: "税务",
          active: false,
        },
      ],
    },
    bottom: {
      bandTitle: "投资与合规提示",
      bandIntro: "",
      items: [
        {
          id: "fi-inv",
          name: "持牌投资顾问合作位（若适用）",
          tagline: "须符合证券监管披露要求。",
          href: null,
          categoryLabel: "投资",
          active: false,
        },
      ],
    },
  },
  "city-services": {
    top: {
      bandTitle: "市政与便民 · 合作入口",
      bandIntro: "与垃圾回收、园艺、装修许可等相关的本地服务商。",
      items: [
        {
          id: "cs-reno",
          name: "装修承包商 / Handyman 合作位",
          tagline: "持牌与保险信息请自行在落地页展示。",
          href: null,
          categoryLabel: "装修",
          active: false,
        },
        {
          id: "cs-garden",
          name: "园艺 / 铲雪合作位",
          tagline: "季节性服务可轮换投放。",
          href: null,
          categoryLabel: "园艺",
          active: false,
        },
      ],
    },
    mid: {
      bandTitle: "社区与休闲",
      bandIntro: "",
      items: [
        {
          id: "cs-gym",
          name: "健身 / 社区活动合作位",
          tagline: "",
          href: null,
          categoryLabel: "生活",
          active: false,
        },
      ],
    },
    bottom: {
      bandTitle: "宠物与杂项",
      bandIntro: "",
      items: [
        {
          id: "cs-pet",
          name: "宠物医院 / 美容合作位",
          tagline: "",
          href: null,
          categoryLabel: "宠物",
          active: false,
        },
      ],
    },
  },
};

export { contactSponsor };

export function partnerLinkAttrs(p: TorontoLifePartner): { href: string; rel: string; target?: string } {
  if (p.active && p.href) {
    const rel = ["noopener", "noreferrer", "sponsored", p.extraRel].filter(Boolean).join(" ");
    return { href: p.href, rel, target: "_blank" };
  }
  return { href: `${contactSponsor}&slot=${encodeURIComponent(p.id)}`, rel: "" };
}
