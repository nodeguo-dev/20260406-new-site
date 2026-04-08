export type NocRelatedLink = {
  href: string;
  label: string;
  desc?: string;
};

export type NocEntry = {
  code: string;
  titleZh: string;
  titleEn: string;
  teer: string;
  family: string;
  summary: string;
  commonTitles: string[];
  employerTips: string[];
  applicantTips: string[];
  relatedLinks: NocRelatedLink[];
  tags: string[];
  searchBlob: string;
};

const nocCatalogBase: Omit<NocEntry, "searchBlob">[] = [
  {
    "code": "00012",
    "titleZh": "高级管理人员 - 金融、通信及其他商业服务",
    "titleEn": "Senior managers - financial, communications and other business services",
    "teer": "0",
    "family": "高管与管理",
    "summary": "这类岗位偏管理与团队统筹，Job Bank 广告要把团队规模、预算、责任范围和决策权限写清楚。",
    "commonTitles": [
      "高级管理人员 - 金融、通信及其他商业服务",
      "Senior managers - financial, communications and other business services"
    ],
    "employerTips": [
      "把团队规模、预算和汇报线写清楚，避免泛称管理岗。",
      "标题尽量和 NOC 常用职位名一致，方便 Job Bank 和求职者匹配。",
      "把决策权限、项目范围和跨部门协作写出来。"
    ],
    "applicantTips": [
      "简历里突出你管理的团队规模、预算、指标和职责边界。",
      "证明你不是“参与过”，而是真正负责过决策或统筹。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/pnp-vs-ee-mainline/",
        "label": "省提名 vs EE 主线",
        "desc": "路径判断与时间成本"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "高管与管理",
      "TEER0",
      "管理",
      "雇主招聘",
      "职位写法"
    ]
  },
  {
    "code": "00013",
    "titleZh": "高级管理人员 - 医疗、教育、社会与社区服务及会员组织",
    "titleEn": "Senior managers - health, education, social and community services and membership organizations",
    "teer": "0",
    "family": "高管与管理",
    "summary": "这类岗位偏管理与团队统筹，Job Bank 广告要把团队规模、预算、责任范围和决策权限写清楚。",
    "commonTitles": [
      "高级管理人员 - 医疗、教育、社会与社区服务及会员组织",
      "Senior managers - health, education, social and community services and membership organizations"
    ],
    "employerTips": [
      "把团队规模、预算和汇报线写清楚，避免泛称管理岗。",
      "标题尽量和 NOC 常用职位名一致，方便 Job Bank 和求职者匹配。",
      "把决策权限、项目范围和跨部门协作写出来。"
    ],
    "applicantTips": [
      "简历里突出你管理的团队规模、预算、指标和职责边界。",
      "证明你不是“参与过”，而是真正负责过决策或统筹。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/pnp-vs-ee-mainline/",
        "label": "省提名 vs EE 主线",
        "desc": "路径判断与时间成本"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "高管与管理",
      "TEER0",
      "管理",
      "雇主招聘",
      "职位写法"
    ]
  },
  {
    "code": "00014",
    "titleZh": "高级管理人员 - 贸易、广播及其他服务",
    "titleEn": "Senior managers - trade, broadcasting and other services",
    "teer": "0",
    "family": "高管与管理",
    "summary": "这类岗位偏管理与团队统筹，Job Bank 广告要把团队规模、预算、责任范围和决策权限写清楚。",
    "commonTitles": [
      "高级管理人员 - 贸易、广播及其他服务",
      "Senior managers - trade, broadcasting and other services"
    ],
    "employerTips": [
      "把团队规模、预算和汇报线写清楚，避免泛称管理岗。",
      "标题尽量和 NOC 常用职位名一致，方便 Job Bank 和求职者匹配。",
      "把决策权限、项目范围和跨部门协作写出来。"
    ],
    "applicantTips": [
      "简历里突出你管理的团队规模、预算、指标和职责边界。",
      "证明你不是“参与过”，而是真正负责过决策或统筹。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/pnp-vs-ee-mainline/",
        "label": "省提名 vs EE 主线",
        "desc": "路径判断与时间成本"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "高管与管理",
      "TEER0",
      "管理",
      "雇主招聘",
      "职位写法"
    ]
  },
  {
    "code": "00015",
    "titleZh": "高级管理人员 - 建筑、运输、生产和公用事业",
    "titleEn": "Senior managers - construction, transportation, production and utilities",
    "teer": "0",
    "family": "高管与管理",
    "summary": "这类岗位偏管理与团队统筹，Job Bank 广告要把团队规模、预算、责任范围和决策权限写清楚。",
    "commonTitles": [
      "高级管理人员 - 建筑、运输、生产和公用事业",
      "Senior managers - construction, transportation, production and utilities"
    ],
    "employerTips": [
      "把团队规模、预算和汇报线写清楚，避免泛称管理岗。",
      "标题尽量和 NOC 常用职位名一致，方便 Job Bank 和求职者匹配。",
      "把决策权限、项目范围和跨部门协作写出来。"
    ],
    "applicantTips": [
      "简历里突出你管理的团队规模、预算、指标和职责边界。",
      "证明你不是“参与过”，而是真正负责过决策或统筹。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/pnp-vs-ee-mainline/",
        "label": "省提名 vs EE 主线",
        "desc": "路径判断与时间成本"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "高管与管理",
      "TEER0",
      "管理",
      "雇主招聘",
      "职位写法"
    ]
  },
  {
    "code": "21211",
    "titleZh": "数据科学家",
    "titleEn": "Data scientists",
    "teer": "1",
    "family": "自然与应用科学",
    "summary": "这类岗位偏专业知识与技术交付，适合把资格证书、软件/工具栈、项目成果和行业关键词写清楚。",
    "commonTitles": [
      "数据科学家",
      "Data scientists"
    ],
    "employerTips": [
      "写明软件、平台、工程或分析工具，让候选人判断是否对口。",
      "把项目目标、交付物和技术边界写清楚。",
      "如涉及资格证书或专业认证，请在广告里明确。"
    ],
    "applicantTips": [
      "把你的项目、工具栈、分析方法和产出写成可核验材料。",
      "避免把所有理工经验混成一个泛泛的 STEM 背景。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "STEM / 专业类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "自然与应用科学",
      "TEER1",
      "STEM",
      "EE定向快速移民",
      "科技岗位"
    ]
  },
  {
    "code": "21221",
    "titleZh": "商业系统专家",
    "titleEn": "Business systems specialists",
    "teer": "1",
    "family": "自然与应用科学",
    "summary": "这类岗位偏专业知识与技术交付，适合把资格证书、软件/工具栈、项目成果和行业关键词写清楚。",
    "commonTitles": [
      "商业系统专家",
      "Business systems specialists"
    ],
    "employerTips": [
      "写明软件、平台、工程或分析工具，让候选人判断是否对口。",
      "把项目目标、交付物和技术边界写清楚。",
      "如涉及资格证书或专业认证，请在广告里明确。"
    ],
    "applicantTips": [
      "把你的项目、工具栈、分析方法和产出写成可核验材料。",
      "避免把所有理工经验混成一个泛泛的 STEM 背景。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "STEM / 专业类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "自然与应用科学",
      "TEER1",
      "STEM",
      "EE定向快速移民",
      "科技岗位"
    ]
  },
  {
    "code": "21222",
    "titleZh": "信息系统专家",
    "titleEn": "Information systems specialists",
    "teer": "1",
    "family": "自然与应用科学",
    "summary": "这类岗位偏专业知识与技术交付，适合把资格证书、软件/工具栈、项目成果和行业关键词写清楚。",
    "commonTitles": [
      "信息系统专家",
      "Information systems specialists"
    ],
    "employerTips": [
      "写明软件、平台、工程或分析工具，让候选人判断是否对口。",
      "把项目目标、交付物和技术边界写清楚。",
      "如涉及资格证书或专业认证，请在广告里明确。"
    ],
    "applicantTips": [
      "把你的项目、工具栈、分析方法和产出写成可核验材料。",
      "避免把所有理工经验混成一个泛泛的 STEM 背景。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "STEM / 专业类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "自然与应用科学",
      "TEER1",
      "STEM",
      "EE定向快速移民",
      "科技岗位"
    ]
  },
  {
    "code": "21231",
    "titleZh": "软件工程师和设计师",
    "titleEn": "Software engineers and designers",
    "teer": "1",
    "family": "自然与应用科学",
    "summary": "这类岗位偏专业知识与技术交付，适合把资格证书、软件/工具栈、项目成果和行业关键词写清楚。",
    "commonTitles": [
      "软件工程师和设计师",
      "Software engineers and designers"
    ],
    "employerTips": [
      "写明软件、平台、工程或分析工具，让候选人判断是否对口。",
      "把项目目标、交付物和技术边界写清楚。",
      "如涉及资格证书或专业认证，请在广告里明确。"
    ],
    "applicantTips": [
      "把你的项目、工具栈、分析方法和产出写成可核验材料。",
      "避免把所有理工经验混成一个泛泛的 STEM 背景。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "STEM / 专业类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "自然与应用科学",
      "TEER1",
      "STEM",
      "EE定向快速移民",
      "科技岗位"
    ]
  },
  {
    "code": "21232",
    "titleZh": "软件开发人员和程序员",
    "titleEn": "Software developers and programmers",
    "teer": "1",
    "family": "自然与应用科学",
    "summary": "这类岗位偏专业知识与技术交付，适合把资格证书、软件/工具栈、项目成果和行业关键词写清楚。",
    "commonTitles": [
      "软件开发人员和程序员",
      "Software developers and programmers",
      "software developer",
      "programmer",
      "程序员"
    ],
    "employerTips": [
      "写明软件、平台、工程或分析工具，让候选人判断是否对口。",
      "把项目目标、交付物和技术边界写清楚。",
      "如涉及资格证书或专业认证，请在广告里明确。"
    ],
    "applicantTips": [
      "把你的项目、工具栈、分析方法和产出写成可核验材料。",
      "避免把所有理工经验混成一个泛泛的 STEM 背景。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "STEM / 专业类方向"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "STEM / 定向抽签",
        "desc": "软件岗位路径"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "自然与应用科学",
      "TEER1",
      "STEM",
      "EE定向快速移民",
      "科技岗位"
    ]
  },
  {
    "code": "21310",
    "titleZh": "电气与电子工程师",
    "titleEn": "Electrical and electronics engineers",
    "teer": "1",
    "family": "自然与应用科学",
    "summary": "这类岗位偏专业知识与技术交付，适合把资格证书、软件/工具栈、项目成果和行业关键词写清楚。",
    "commonTitles": [
      "电气与电子工程师",
      "Electrical and electronics engineers"
    ],
    "employerTips": [
      "写明软件、平台、工程或分析工具，让候选人判断是否对口。",
      "把项目目标、交付物和技术边界写清楚。",
      "如涉及资格证书或专业认证，请在广告里明确。"
    ],
    "applicantTips": [
      "把你的项目、工具栈、分析方法和产出写成可核验材料。",
      "避免把所有理工经验混成一个泛泛的 STEM 背景。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "STEM / 专业类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "自然与应用科学",
      "TEER1",
      "STEM",
      "EE定向快速移民",
      "科技岗位"
    ]
  },
  {
    "code": "22303",
    "titleZh": "建筑估算师",
    "titleEn": "Construction estimators",
    "teer": "2",
    "family": "自然与应用科学",
    "summary": "这类岗位偏专业知识与技术交付，适合把资格证书、软件/工具栈、项目成果和行业关键词写清楚。",
    "commonTitles": [
      "建筑估算师",
      "Construction estimators"
    ],
    "employerTips": [
      "写明软件、平台、工程或分析工具，让候选人判断是否对口。",
      "把项目目标、交付物和技术边界写清楚。",
      "如涉及资格证书或专业认证，请在广告里明确。"
    ],
    "applicantTips": [
      "把你的项目、工具栈、分析方法和产出写成可核验材料。",
      "避免把所有理工经验混成一个泛泛的 STEM 背景。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "STEM / 专业类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "自然与应用科学",
      "TEER2",
      "STEM",
      "EE定向快速移民",
      "科技岗位"
    ]
  },
  {
    "code": "31100",
    "titleZh": "临床与实验室医学专科医生",
    "titleEn": "Specialists in clinical and laboratory medicine",
    "teer": "1",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "临床与实验室医学专科医生",
      "Specialists in clinical and laboratory medicine"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER1",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "31101",
    "titleZh": "外科专科医生",
    "titleEn": "Specialists in surgery",
    "teer": "1",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "外科专科医生",
      "Specialists in surgery"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER1",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "31102",
    "titleZh": "全科医生和家庭医生",
    "titleEn": "General practitioners and family physicians",
    "teer": "1",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "全科医生和家庭医生",
      "General practitioners and family physicians"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER1",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "31120",
    "titleZh": "药剂师",
    "titleEn": "Pharmacists",
    "teer": "1",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "药剂师",
      "Pharmacists",
      "pharmacist",
      "药剂师"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "医护定向怎么筛",
        "desc": "药剂师路径"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER1",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "31301",
    "titleZh": "注册护士和注册精神科护士",
    "titleEn": "Registered nurses and registered psychiatric nurses",
    "teer": "1",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "注册护士和注册精神科护士",
      "Registered nurses and registered psychiatric nurses"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER1",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "31302",
    "titleZh": "执业护士",
    "titleEn": "Nurse practitioners",
    "teer": "1",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "执业护士",
      "Nurse practitioners"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER1",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "32101",
    "titleZh": "持证执业护士",
    "titleEn": "Licensed practical nurses",
    "teer": "2",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "持证执业护士",
      "Licensed practical nurses"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER2",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "32102",
    "titleZh": "辅助医疗职业",
    "titleEn": "Paramedical occupations",
    "teer": "2",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "辅助医疗职业",
      "Paramedical occupations"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER2",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "32111",
    "titleZh": "牙科保健师与牙科治疗师",
    "titleEn": "Dental hygienists and dental therapists",
    "teer": "2",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "牙科保健师与牙科治疗师",
      "Dental hygienists and dental therapists"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER2",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "32120",
    "titleZh": "医学实验室技术员",
    "titleEn": "Medical laboratory technologists",
    "teer": "2",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "医学实验室技术员",
      "Medical laboratory technologists"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER2",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "32121",
    "titleZh": "医学放射技术员",
    "titleEn": "Medical radiation technologists",
    "teer": "2",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "医学放射技术员",
      "Medical radiation technologists"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER2",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "32124",
    "titleZh": "药房技术员",
    "titleEn": "Pharmacy technicians",
    "teer": "2",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "药房技术员",
      "Pharmacy technicians"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER2",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "32201",
    "titleZh": "按摩治疗师",
    "titleEn": "Massage therapists",
    "teer": "2",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "按摩治疗师",
      "Massage therapists"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER2",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "33101",
    "titleZh": "医学实验室助理及相关技术职业",
    "titleEn": "Medical laboratory assistants and related technical occupations",
    "teer": "3",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "医学实验室助理及相关技术职业",
      "Medical laboratory assistants and related technical occupations"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER3",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "33102",
    "titleZh": "护理助理、护工和患者服务助理",
    "titleEn": "Nurse aides, orderlies and patient service associates",
    "teer": "3",
    "family": "医疗健康",
    "summary": "这类岗位多与医疗执照、监管和患者安全相关，广告和申请材料都要注意执照、监管与工作范围。",
    "commonTitles": [
      "护理助理、护工和患者服务助理",
      "Nurse aides, orderlies and patient service associates"
    ],
    "employerTips": [
      "把执照、注册和监管要求写清楚，避免吸引到不合规候选人。",
      "写明患者、客户或护理场景，以及轮班安排。",
      "强调安全、记录和合规责任。"
    ],
    "applicantTips": [
      "如果涉及受监管职业，先确认执照、注册和认证路径。",
      "把工作场景、患者/客户角色和职责写得足够具体。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "医护类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "医疗健康",
      "TEER3",
      "医护",
      "EE定向快速移民",
      "医疗职业"
    ]
  },
  {
    "code": "41200",
    "titleZh": "大学教授和讲师",
    "titleEn": "University professors and lecturers",
    "teer": "1",
    "family": "教育、法律与社区服务",
    "summary": "这类岗位常与教育、社服、培训和社区服务相关，职责描述要写清楚对象、场景与专业边界。",
    "commonTitles": [
      "大学教授和讲师",
      "University professors and lecturers"
    ],
    "employerTips": [
      "写清楚服务对象、教学对象或社工对象，避免岗位过宽。",
      "说明是否需要背景调查、教育证书或专业注册。",
      "把课程、辅导、评估或社区服务职责拆开写。"
    ],
    "applicantTips": [
      "把教育、辅导、社服或治疗场景写成可证明的职责。",
      "注意不同岗位之间的边界，不要把所有教育经历都写成一个 NOC。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "教育类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "教育、法律与社区服务",
      "TEER1",
      "教育",
      "EE定向快速移民",
      "社区服务"
    ]
  },
  {
    "code": "41201",
    "titleZh": "专上教学与科研助理",
    "titleEn": "Post-secondary teaching and research assistants",
    "teer": "1",
    "family": "教育、法律与社区服务",
    "summary": "这类岗位常与教育、社服、培训和社区服务相关，职责描述要写清楚对象、场景与专业边界。",
    "commonTitles": [
      "专上教学与科研助理",
      "Post-secondary teaching and research assistants"
    ],
    "employerTips": [
      "写清楚服务对象、教学对象或社工对象，避免岗位过宽。",
      "说明是否需要背景调查、教育证书或专业注册。",
      "把课程、辅导、评估或社区服务职责拆开写。"
    ],
    "applicantTips": [
      "把教育、辅导、社服或治疗场景写成可证明的职责。",
      "注意不同岗位之间的边界，不要把所有教育经历都写成一个 NOC。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "教育类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "教育、法律与社区服务",
      "TEER1",
      "教育",
      "EE定向快速移民",
      "社区服务"
    ]
  },
  {
    "code": "41210",
    "titleZh": "学院及其他职业培训讲师",
    "titleEn": "College and other vocational instructors",
    "teer": "1",
    "family": "教育、法律与社区服务",
    "summary": "这类岗位常与教育、社服、培训和社区服务相关，职责描述要写清楚对象、场景与专业边界。",
    "commonTitles": [
      "学院及其他职业培训讲师",
      "College and other vocational instructors"
    ],
    "employerTips": [
      "写清楚服务对象、教学对象或社工对象，避免岗位过宽。",
      "说明是否需要背景调查、教育证书或专业注册。",
      "把课程、辅导、评估或社区服务职责拆开写。"
    ],
    "applicantTips": [
      "把教育、辅导、社服或治疗场景写成可证明的职责。",
      "注意不同岗位之间的边界，不要把所有教育经历都写成一个 NOC。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "教育类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "教育、法律与社区服务",
      "TEER1",
      "教育",
      "EE定向快速移民",
      "社区服务"
    ]
  },
  {
    "code": "41220",
    "titleZh": "中学教师",
    "titleEn": "Secondary school teachers",
    "teer": "1",
    "family": "教育、法律与社区服务",
    "summary": "这类岗位常与教育、社服、培训和社区服务相关，职责描述要写清楚对象、场景与专业边界。",
    "commonTitles": [
      "中学教师",
      "Secondary school teachers",
      "teacher",
      "中学教师"
    ],
    "employerTips": [
      "写清楚服务对象、教学对象或社工对象，避免岗位过宽。",
      "说明是否需要背景调查、教育证书或专业注册。",
      "把课程、辅导、评估或社区服务职责拆开写。"
    ],
    "applicantTips": [
      "把教育、辅导、社服或治疗场景写成可证明的职责。",
      "注意不同岗位之间的边界，不要把所有教育经历都写成一个 NOC。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "教育类方向"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "教育定向怎么筛",
        "desc": "教师类路径"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "教育、法律与社区服务",
      "TEER1",
      "教育",
      "EE定向快速移民",
      "社区服务"
    ]
  },
  {
    "code": "41221",
    "titleZh": "小学和幼儿园教师",
    "titleEn": "Elementary school and kindergarten teachers",
    "teer": "1",
    "family": "教育、法律与社区服务",
    "summary": "这类岗位常与教育、社服、培训和社区服务相关，职责描述要写清楚对象、场景与专业边界。",
    "commonTitles": [
      "小学和幼儿园教师",
      "Elementary school and kindergarten teachers"
    ],
    "employerTips": [
      "写清楚服务对象、教学对象或社工对象，避免岗位过宽。",
      "说明是否需要背景调查、教育证书或专业注册。",
      "把课程、辅导、评估或社区服务职责拆开写。"
    ],
    "applicantTips": [
      "把教育、辅导、社服或治疗场景写成可证明的职责。",
      "注意不同岗位之间的边界，不要把所有教育经历都写成一个 NOC。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "教育类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "教育、法律与社区服务",
      "TEER1",
      "教育",
      "EE定向快速移民",
      "社区服务"
    ]
  },
  {
    "code": "41300",
    "titleZh": "社会工作者",
    "titleEn": "Social workers",
    "teer": "1",
    "family": "教育、法律与社区服务",
    "summary": "这类岗位常与教育、社服、培训和社区服务相关，职责描述要写清楚对象、场景与专业边界。",
    "commonTitles": [
      "社会工作者",
      "Social workers"
    ],
    "employerTips": [
      "写清楚服务对象、教学对象或社工对象，避免岗位过宽。",
      "说明是否需要背景调查、教育证书或专业注册。",
      "把课程、辅导、评估或社区服务职责拆开写。"
    ],
    "applicantTips": [
      "把教育、辅导、社服或治疗场景写成可证明的职责。",
      "注意不同岗位之间的边界，不要把所有教育经历都写成一个 NOC。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "教育类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "教育、法律与社区服务",
      "TEER1",
      "教育",
      "EE定向快速移民",
      "社区服务"
    ]
  },
  {
    "code": "41301",
    "titleZh": "咨询及相关专科治疗师",
    "titleEn": "Therapists in counselling and related specialized therapies",
    "teer": "1",
    "family": "教育、法律与社区服务",
    "summary": "这类岗位常与教育、社服、培训和社区服务相关，职责描述要写清楚对象、场景与专业边界。",
    "commonTitles": [
      "咨询及相关专科治疗师",
      "Therapists in counselling and related specialized therapies"
    ],
    "employerTips": [
      "写清楚服务对象、教学对象或社工对象，避免岗位过宽。",
      "说明是否需要背景调查、教育证书或专业注册。",
      "把课程、辅导、评估或社区服务职责拆开写。"
    ],
    "applicantTips": [
      "把教育、辅导、社服或治疗场景写成可证明的职责。",
      "注意不同岗位之间的边界，不要把所有教育经历都写成一个 NOC。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "教育类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "教育、法律与社区服务",
      "TEER1",
      "教育",
      "EE定向快速移民",
      "社区服务"
    ]
  },
  {
    "code": "41320",
    "titleZh": "教育顾问",
    "titleEn": "Educational counsellors",
    "teer": "1",
    "family": "教育、法律与社区服务",
    "summary": "这类岗位常与教育、社服、培训和社区服务相关，职责描述要写清楚对象、场景与专业边界。",
    "commonTitles": [
      "教育顾问",
      "Educational counsellors"
    ],
    "employerTips": [
      "写清楚服务对象、教学对象或社工对象，避免岗位过宽。",
      "说明是否需要背景调查、教育证书或专业注册。",
      "把课程、辅导、评估或社区服务职责拆开写。"
    ],
    "applicantTips": [
      "把教育、辅导、社服或治疗场景写成可证明的职责。",
      "注意不同岗位之间的边界，不要把所有教育经历都写成一个 NOC。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "教育类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "教育、法律与社区服务",
      "TEER1",
      "教育",
      "EE定向快速移民",
      "社区服务"
    ]
  },
  {
    "code": "42201",
    "titleZh": "社区与社会服务工作者",
    "titleEn": "Social and community service workers",
    "teer": "2",
    "family": "教育、法律与社区服务",
    "summary": "这类岗位常与教育、社服、培训和社区服务相关，职责描述要写清楚对象、场景与专业边界。",
    "commonTitles": [
      "社区与社会服务工作者",
      "Social and community service workers"
    ],
    "employerTips": [
      "写清楚服务对象、教学对象或社工对象，避免岗位过宽。",
      "说明是否需要背景调查、教育证书或专业注册。",
      "把课程、辅导、评估或社区服务职责拆开写。"
    ],
    "applicantTips": [
      "把教育、辅导、社服或治疗场景写成可证明的职责。",
      "注意不同岗位之间的边界，不要把所有教育经历都写成一个 NOC。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "教育类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "教育、法律与社区服务",
      "TEER2",
      "教育",
      "EE定向快速移民",
      "社区服务"
    ]
  },
  {
    "code": "42202",
    "titleZh": "幼儿教育工作者及助理",
    "titleEn": "Early childhood educators and assistants",
    "teer": "2",
    "family": "教育、法律与社区服务",
    "summary": "这类岗位常与教育、社服、培训和社区服务相关，职责描述要写清楚对象、场景与专业边界。",
    "commonTitles": [
      "幼儿教育工作者及助理",
      "Early childhood educators and assistants"
    ],
    "employerTips": [
      "写清楚服务对象、教学对象或社工对象，避免岗位过宽。",
      "说明是否需要背景调查、教育证书或专业注册。",
      "把课程、辅导、评估或社区服务职责拆开写。"
    ],
    "applicantTips": [
      "把教育、辅导、社服或治疗场景写成可证明的职责。",
      "注意不同岗位之间的边界，不要把所有教育经历都写成一个 NOC。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "教育类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "教育、法律与社区服务",
      "TEER2",
      "教育",
      "EE定向快速移民",
      "社区服务"
    ]
  },
  {
    "code": "42203",
    "titleZh": "残障人士指导员",
    "titleEn": "Instructors of persons with disabilities",
    "teer": "2",
    "family": "教育、法律与社区服务",
    "summary": "这类岗位常与教育、社服、培训和社区服务相关，职责描述要写清楚对象、场景与专业边界。",
    "commonTitles": [
      "残障人士指导员",
      "Instructors of persons with disabilities"
    ],
    "employerTips": [
      "写清楚服务对象、教学对象或社工对象，避免岗位过宽。",
      "说明是否需要背景调查、教育证书或专业注册。",
      "把课程、辅导、评估或社区服务职责拆开写。"
    ],
    "applicantTips": [
      "把教育、辅导、社服或治疗场景写成可证明的职责。",
      "注意不同岗位之间的边界，不要把所有教育经历都写成一个 NOC。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "教育类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "教育、法律与社区服务",
      "TEER2",
      "教育",
      "EE定向快速移民",
      "社区服务"
    ]
  },
  {
    "code": "43100",
    "titleZh": "小学和中学教师助理",
    "titleEn": "Elementary and secondary school teacher assistants",
    "teer": "3",
    "family": "教育、法律与社区服务",
    "summary": "这类岗位常与教育、社服、培训和社区服务相关，职责描述要写清楚对象、场景与专业边界。",
    "commonTitles": [
      "小学和中学教师助理",
      "Elementary and secondary school teacher assistants"
    ],
    "employerTips": [
      "写清楚服务对象、教学对象或社工对象，避免岗位过宽。",
      "说明是否需要背景调查、教育证书或专业注册。",
      "把课程、辅导、评估或社区服务职责拆开写。"
    ],
    "applicantTips": [
      "把教育、辅导、社服或治疗场景写成可证明的职责。",
      "注意不同岗位之间的边界，不要把所有教育经历都写成一个 NOC。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/ee-category-what-does-it-screen/",
        "label": "EE 定向抽签筛什么人",
        "desc": "教育类方向"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "教育、法律与社区服务",
      "TEER3",
      "教育",
      "EE定向快速移民",
      "社区服务"
    ]
  },
  {
    "code": "52120",
    "titleZh": "平面设计师与插画师",
    "titleEn": "Graphic designers and illustrators",
    "teer": "2",
    "family": "艺术、文化、娱乐与体育",
    "summary": "这类岗位更看作品、流程和工具链，最好把作品集、软件工具和交付形式写清楚。",
    "commonTitles": [
      "平面设计师与插画师",
      "Graphic designers and illustrators"
    ],
    "employerTips": [
      "附上作品集、软件栈或项目样例，降低沟通成本。",
      "写清楚交付形式、审稿流程和是否需要自带设备。",
      "如果是合作岗位，说明是否需要版权或署名处理。"
    ],
    "applicantTips": [
      "准备好作品集、软件截图和项目交付记录。",
      "把你的工作方法和成品写得具体一点，别只写“负责设计”。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "艺术、文化、娱乐与体育",
      "TEER2",
      "创意岗位",
      "作品集",
      "设计"
    ]
  },
  {
    "code": "63200",
    "titleZh": "厨师",
    "titleEn": "Cooks",
    "teer": "3",
    "family": "销售与服务",
    "summary": "这类岗位强调服务流程、沟通、客户体验和现场执行，广告要把轮班、语言要求和岗位边界写明。",
    "commonTitles": [
      "厨师",
      "Cooks"
    ],
    "employerTips": [
      "写清楚班次、客户场景、语言要求和服务范围。",
      "说明是否需要现金处理、POS 系统、外卖或现场服务经验。",
      "把身体要求、站立时间和压力场景写明白。"
    ],
    "applicantTips": [
      "把轮班、客流、语言服务和客户处理写进经历说明。",
      "保留工资单、排班和雇主信，证明你不是短期零散兼职。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/graduates-look-at-ee-before-pnp/",
        "label": "毕业后先看 EE",
        "desc": "找工与路径判断"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "销售与服务",
      "TEER3",
      "服务业",
      "找工",
      "工作经验"
    ]
  },
  {
    "code": "63201",
    "titleZh": "零售和批发屠夫",
    "titleEn": "Butchers - retail and wholesale",
    "teer": "3",
    "family": "销售与服务",
    "summary": "这类岗位强调服务流程、沟通、客户体验和现场执行，广告要把轮班、语言要求和岗位边界写明。",
    "commonTitles": [
      "零售和批发屠夫",
      "Butchers - retail and wholesale"
    ],
    "employerTips": [
      "写清楚班次、客户场景、语言要求和服务范围。",
      "说明是否需要现金处理、POS 系统、外卖或现场服务经验。",
      "把身体要求、站立时间和压力场景写明白。"
    ],
    "applicantTips": [
      "把轮班、客流、语言服务和客户处理写进经历说明。",
      "保留工资单、排班和雇主信，证明你不是短期零散兼职。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/graduates-look-at-ee-before-pnp/",
        "label": "毕业后先看 EE",
        "desc": "找工与路径判断"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "销售与服务",
      "TEER3",
      "服务业",
      "找工",
      "工作经验"
    ]
  },
  {
    "code": "70010",
    "titleZh": "建筑经理 / 施工经理",
    "titleEn": "Construction managers",
    "teer": "0",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位是施工项目管理岗，核心看你是否真的在统筹工期、预算、分包、材料和现场进度，而不是简单做体力工。",
    "commonTitles": [
      "建筑经理",
      "施工经理",
      "Construction managers"
    ],
    "employerTips": [
      "标题尽量用 construction manager / project manager / superintendent 这类对口表达。",
      "把项目范围、工期、预算、分包协调、现场质量和安全责任写清楚。",
      "如果是做管理岗，不要写成 helper 或 general labour；两者会直接影响 NOC 对应。"
    ],
    "applicantTips": [
      "你的雇主信应体现管理职责，例如安排工期、协调分包、控制预算和检查质量。",
      "把工时、工资单、ROE、项目记录和职责说明都留完整。",
      "不要把所有工地工作都写成同一个岗位，要按真实职责去对照 NOC。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      },
      {
        "href": "/blog/pnp-vs-ee-mainline/",
        "label": "管理岗更适合 EE 还是 PNP",
        "desc": "主线判断"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER0",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "70011",
    "titleZh": "住宅建造与翻新经理",
    "titleEn": "Home building and renovation managers",
    "teer": "0",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "住宅建造与翻新经理",
      "Home building and renovation managers"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER0",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72100",
    "titleZh": "机械工及机加工和工具检验员",
    "titleEn": "Machinists and machining and tooling inspectors",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "机械工及机加工和工具检验员",
      "Machinists and machining and tooling inspectors"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72102",
    "titleZh": "钣金工",
    "titleEn": "Sheet metal workers",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "钣金工",
      "Sheet metal workers"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72106",
    "titleZh": "焊工及相关机械操作员",
    "titleEn": "Welders and related machine operators",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "焊工及相关机械操作员",
      "Welders and related machine operators"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72200",
    "titleZh": "电工（非工业及电力系统）",
    "titleEn": "Electricians (except industrial and power system)",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "电工（非工业及电力系统）",
      "Electricians (except industrial and power system)",
      "electrician",
      "电工"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      },
      {
        "href": "/blog/ee-trades-materials-and-noc/",
        "label": "电工材料怎么准备",
        "desc": "雇主信与工时"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72201",
    "titleZh": "工业电工",
    "titleEn": "Industrial electricians",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "工业电工",
      "Industrial electricians"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72300",
    "titleZh": "管道工",
    "titleEn": "Plumbers",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "管道工",
      "Plumbers",
      "plumber",
      "管道工"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      },
      {
        "href": "/blog/ee-trades-materials-and-noc/",
        "label": "管道工材料怎么准备",
        "desc": "NOC 对照"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72302",
    "titleZh": "燃气安装工",
    "titleEn": "Gas fitters",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "燃气安装工",
      "Gas fitters"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72310",
    "titleZh": "木匠",
    "titleEn": "Carpenters",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "木匠",
      "Carpenters",
      "carpenter",
      "木工",
      "木匠"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "木工与 EE 技工通道",
        "desc": "建筑技工主线案例"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把工地经验写进材料",
        "desc": "木工岗位材料"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72311",
    "titleZh": "橱柜制造工",
    "titleEn": "Cabinetmakers",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "橱柜制造工",
      "Cabinetmakers"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72320",
    "titleZh": "砌砖工",
    "titleEn": "Bricklayers",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "砌砖工",
      "Bricklayers"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72400",
    "titleZh": "建筑装配工和工业机械工",
    "titleEn": "Construction millwrights and industrial mechanics",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "建筑装配工和工业机械工",
      "Construction millwrights and industrial mechanics"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72401",
    "titleZh": "重型设备机械师",
    "titleEn": "Heavy-duty equipment mechanics",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "重型设备机械师",
      "Heavy-duty equipment mechanics"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72402",
    "titleZh": "供暖、制冷和空调机械师",
    "titleEn": "Heating, refrigeration and air conditioning mechanics",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "供暖、制冷和空调机械师",
      "Heating, refrigeration and air conditioning mechanics"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72422",
    "titleZh": "电机维修工",
    "titleEn": "Electrical mechanics",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "电机维修工",
      "Electrical mechanics"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72501",
    "titleZh": "水井钻井工",
    "titleEn": "Water well drillers",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "水井钻井工",
      "Water well drillers"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "72999",
    "titleZh": "其他技术工种及相关职业",
    "titleEn": "Other technical trades and related occupations",
    "teer": "2",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "其他技术工种及相关职业",
      "Other technical trades and related occupations"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER2",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "73100",
    "titleZh": "混凝土收尾工",
    "titleEn": "Concrete finishers",
    "teer": "3",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "混凝土收尾工",
      "Concrete finishers"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER3",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "73110",
    "titleZh": "屋顶工和瓦片工",
    "titleEn": "Roofers and shinglers",
    "teer": "3",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "屋顶工和瓦片工",
      "Roofers and shinglers",
      "roofer",
      "屋顶工"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "屋顶工与技工通道",
        "desc": "屋顶工路径"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER3",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "73112",
    "titleZh": "油漆工和装饰工（不含室内装潢）",
    "titleEn": "Painters and decorators (except interior decorators)",
    "teer": "3",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "油漆工和装饰工（不含室内装潢）",
      "Painters and decorators (except interior decorators)"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER3",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "73113",
    "titleZh": "地板铺装工",
    "titleEn": "Floor covering installers",
    "teer": "3",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "地板铺装工",
      "Floor covering installers"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER3",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "73300",
    "titleZh": "卡车司机",
    "titleEn": "Transport truck drivers",
    "teer": "3",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "卡车司机",
      "Transport truck drivers",
      "truck driver",
      "卡车司机"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      },
      {
        "href": "/blog/pnp-vs-ee-mainline/",
        "label": "司机岗位与移民路径",
        "desc": "运输类岗位"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER3",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "73301",
    "titleZh": "公交车司机、地铁运营员及其他公共交通运营员",
    "titleEn": "Bus drivers, subway operators and other transit operators",
    "teer": "3",
    "family": "技工、运输与设备操作",
    "summary": "这类岗位属于技工、运输和设备操作，最关键的是 NOC 职责、工时、雇主信和 Job Bank 岗位写法。",
    "commonTitles": [
      "公交车司机、地铁运营员及其他公共交通运营员",
      "Bus drivers, subway operators and other transit operators"
    ],
    "employerTips": [
      "标题和职责尽量贴近 NOC，别只写 helper 或 general labour。",
      "把工具、材料、工时和现场安全要求写清楚。",
      "如果是学徒岗位，说明 mentor、培训和晋升路径。"
    ],
    "applicantTips": [
      "把工时、工资单、ROE 和雇主信都留完整。",
      "职责要贴近真实 NOC，不要把所有工地工作都写成同一个岗位。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/projects/ee-trades/",
        "label": "EE 技工类定向",
        "desc": "技工类别路线"
      },
      {
        "href": "/blog/ee-trades-worth-it/",
        "label": "EE 技工通道值不值得冲",
        "desc": "工地与移民路径"
      },
      {
        "href": "/blog/construction-work-to-immigration-experience/",
        "label": "把打工变经验",
        "desc": "工时与雇主信"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "技工、运输与设备操作",
      "TEER3",
      "技工",
      "找技工工作",
      "EE技工移民",
      "Job Bank"
    ]
  },
  {
    "code": "82021",
    "titleZh": "油气钻井及服务承包商与主管",
    "titleEn": "Contractors and supervisors, oil and gas drilling and services",
    "teer": "2",
    "family": "自然资源、农业与生产",
    "summary": "这类岗位常与资源开采、农林和生产现场相关，广告要写清楚现场条件、安全要求和经验边界。",
    "commonTitles": [
      "油气钻井及服务承包商与主管",
      "Contractors and supervisors, oil and gas drilling and services"
    ],
    "employerTips": [
      "写清楚现场环境、设备类型和安全要求。",
      "说明是否涉及油气、林业、农业或生产线的特殊培训。",
      "把地域、工区和轮班安排写明白。"
    ],
    "applicantTips": [
      "把工地、工区或现场记录保存好，尤其是跨地区工作。",
      "如果涉及特殊设备或安全培训，保留证书和课程证明。"
    ],
    "relatedLinks": [
      {
        "href": "/noc/job-bank-ad-guide/",
        "label": "雇主如何写 Job Bank 广告",
        "desc": "岗位写法与关键词"
      },
      {
        "href": "/noc/how-to-match-your-experience/",
        "label": "申请人如何对照职责",
        "desc": "经验与 NOC 对照"
      },
      {
        "href": "/tools/crs-calculator/",
        "label": "CRS 打分工具",
        "desc": "先看分数底盘"
      },
      {
        "href": "/blog/pnp-vs-ee-mainline/",
        "label": "省提名 vs EE 主线",
        "desc": "区域岗位与路径判断"
      }
    ],
    "tags": [
      "NOC",
      "NOC职业库",
      "自然资源、农业与生产",
      "TEER2",
      "资源行业",
      "油气",
      "现场岗位"
    ]
  }
] as Omit<NocEntry, "searchBlob">[];

export const nocCatalog = nocCatalogBase.map((entry) => ({
  ...entry,
  searchBlob: [
    entry.code,
    entry.titleZh,
    entry.titleEn,
    entry.family,
    entry.summary,
    ...entry.commonTitles,
    ...entry.employerTips,
    ...entry.applicantTips,
    ...entry.tags,
    ...entry.relatedLinks.map((link) => link.label),
  ]
    .join(" ")
    .toLowerCase(),
}));

export const nocByCode = Object.fromEntries(
  nocCatalog.map((entry) => [entry.code, entry]),
) as Record<(typeof nocCatalog)[number]["code"], (typeof nocCatalog)[number]>;
