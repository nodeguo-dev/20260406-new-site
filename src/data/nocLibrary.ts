import { nocCatalog, type NocRelatedLink } from "@/data/nocCatalog";
import { nocTitleZhOverrides } from "@/data/nocTitleZhOverrides";
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
  "Home building and renovation managers": "住宅建造与翻新经理",
  "Construction estimators": "施工预算员",
  "Construction millwrights and industrial mechanics": "机械装配工与工业机械师",
  "Telecommunication carriers managers": "电信运营商经理",
  "Legislators": "立法人员",
  "Senior government managers and officials": "政府高级管理人员与官员",
  "Human resources managers": "人力资源经理",
  "Purchasing managers": "采购经理",
  "Other administrative services managers": "其他行政服务经理",
  "Insurance, real estate and financial brokerage managers": "保险、房地产与金融经纪经理",
  "Banking, credit and other investment managers": "银行、信贷与投资经理",
  "Advertising, marketing and public relations managers": "广告、营销与公关经理",
  "Other business services managers": "其他商业服务经理",
  "Securities agents, investment dealers and brokers": "证券经纪与投资交易员",
  "Other financial officers": "其他财务专员",
  "Human resources professionals": "人力资源专业人员",
  "Professional occupations in advertising, marketing and public relations": "广告、营销与公关专业人员",
  "Supervisors, general office and administrative support workers": "综合办公室与行政支持主管",
  "Supervisors, finance and insurance office workers": "财务与保险办公室主管",
  "Supervisors, library, correspondence and related information workers": "图书馆、通信与信息相关主管",
  "Supervisors, supply chain, tracking and scheduling coordination occupations": "供应链、跟踪与排班协调主管",
  "Executive assistants": "行政助理",
  "Human resources and recruitment officers": "人力资源与招聘专员",
  "Procurement and purchasing agents and officers": "采购代理与采购专员",
  "Conference and event planners": "会议与活动策划",
  "Employment insurance and revenue officers": "失业保险与税务专员",
  "Court reporters, medical transcriptionists and related occupations": "法庭记录员、医疗转录员及相关职业",
  "Medical information management occupations": "医疗信息管理职业",
  "Records management technicians": "档案管理技术员",
  "Statistical officers and related research support occupations": "统计专员及相关研究支持职业",
  "Accounting technicians and bookkeepers": "会计技术员与记账员",
  "Insurance adjusters and claims examiners": "理赔员与理赔审核员",
  "Insurance underwriters": "承保专员",
  "Assessors, business valuators and appraisers": "评估员、商业估值师与评估师",
  "Administrative officers": "行政专员",
  "Property administrators": "物业管理员",
  "Payroll administrators": "薪资管理员",
  "Legal administrative assistants": "法律行政助理",
  "Medical administrative assistants": "医疗行政助理",
  "Customs, ship and other brokers": "海关、船舶及其他经纪人",
  "Production and transportation logistics coordinators": "生产与运输物流协调员",
  "General office support workers": "综合办公室支持人员",
  "Receptionists": "前台接待",
  "Personnel clerks": "人事文员",
  "Court clerks and related court services occupations": "法庭文员及相关服务职业",
  "Survey interviewers and statistical clerks": "调研访谈员与统计文员",
  "Data entry clerks": "数据录入员",
  "Desktop publishing operators and related occupations": "桌面出版操作员及相关职业",
  "Accounting and related clerks": "会计及相关文员",
  "Banking, insurance and other financial clerks": "银行、保险及其他金融文员",
  "Collection clerks": "催收文员",
  "Library assistants and clerks": "图书馆助理与文员",
  "Correspondence, publication and regulatory clerks": "通信、出版与法规文员",
  "Shippers and receivers": "发货与收货员",
  "Storekeepers and partspersons": "仓管员与配件员",
  "Dispatchers": "调度员",
  "Transportation route and crew schedulers": "运输路线与班组排班员",
  "Engineering managers": "工程经理",
  "Architecture and science managers": "建筑与科研经理",
  "Computer and information systems managers": "计算机与信息系统经理",
  "Physicists and astronomers": "物理学家与天文学家",
  "Chemists": "化学家",
  "Geoscientists and oceanographers": "地球科学家与海洋学家",
  "Meteorologists and climatologists": "气象与气候学家",
  "Other professional occupations in physical sciences": "其他物理科学专业人员",
  "Biologists and related scientists": "生物学家及相关科学家",
  "Forestry professionals": "林业专业人员",
  "Agricultural representatives, consultants and specialists": "农业代表、顾问与专员",
  "Public and environmental health and safety professionals": "公共与环境健康安全专业人员",
  "Architects": "建筑师",
  "Landscape architects": "景观设计师",
  "Urban and land use planners": "城市与土地利用规划师",
  "Land surveyors": "测量师",
  "Mathematicians, statisticians and actuaries": "数学家、统计学家与精算师",
  "Cybersecurity specialists": "网络安全专员",
  "Database analysts and data administrators": "数据库分析师与数据管理员",
  "Computer systems developers and programmers": "计算机系统开发员与程序员",
  "Web designers": "网页设计师",
  "Web developers and programmers": "网页开发员与程序员",
  "Civil engineers": "土木工程师",
  "Mechanical engineers": "机械工程师",
  "Computer engineers (except software engineers and designers)": "计算机工程师（不含软件工程师与设计师）",
  "Chemical engineers": "化学工程师",
  "Industrial and manufacturing engineers": "工业与制造工程师",
  "Metallurgical and materials engineers": "冶金与材料工程师",
  "Mining engineers": "采矿工程师",
  "Geological engineers": "地质工程师",
  "Petroleum engineers": "石油工程师",
  "Aerospace engineers": "航空航天工程师",
  "Other professional engineers": "其他专业工程师",
  "Veterinarians": "兽医",
  "Dentists": "牙医",
  "Optometrists": "验光师",
  "Audiologists and speech-language pathologists": "听力学家与言语语言病理学家",
  "Dietitians and nutritionists": "营养师与营养学家",
  "Psychologists": "心理学家",
  "Chiropractors": "脊医",
  "Physiotherapists": "物理治疗师",
  "Occupational therapists": "职业治疗师",
  "Kinesiologists and other professional occupations in therapy and assessment": "运动学家及其他治疗评估专业人员",
  "Other professional occupations in health diagnosing and treating": "其他健康诊断与治疗专业人员",
  "Nursing coordinators and supervisors": "护理协调员与主管",
  "Physician assistants, midwives and allied health professionals": "医生助理、助产士与相关医疗专业人员",
  "Opticians": "验光配镜师",
  "Respiratory therapists, clinical perfusionists and cardiopulmonary technologists": "呼吸治疗师、临床灌注师与心肺技术师",
  "Animal health technologists and veterinary technicians": "动物健康技术师与兽医技术员",
  "Other technical occupations in therapy and assessment": "其他治疗与评估技术职业",
  "Denturists": "义齿技师",
  "Dental technologists and technicians": "牙科技术师与技术员",
  "Medical sonographers": "超声波技师",
  "Cardiology technologists and electrophysiological diagnostic technologists": "心脏病技术师与电生理诊断技术师",
  "Other medical technologists and technicians": "其他医疗技术师与技术员",
  "Traditional Chinese medicine practitioners and acupuncturists": "中医师与针灸师",
  "Other practitioners of natural healing": "其他自然疗法从业者",
  "Dental assistants and dental laboratory assistants": "牙科助理与牙科实验室助理",
  "Pharmacy technical assistants and pharmacy assistants": "药房技术助理与药房助理",
  "Other assisting occupations in support of health services": "其他医疗服务支持助理",
  "Government managers - health and social policy development and program administration": "政府管理人员 - 医疗与社会政策开发及项目管理",
  "Government managers - economic analysis, policy development and program administration": "政府管理人员 - 经济分析、政策制定及项目管理",
  "Government managers - education policy development and program administration": "政府管理人员 - 教育政策制定及项目管理",
  "Other managers in public administration": "公共行政其他管理人员",
  "Administrators - post-secondary education and vocational training": "专上教育与职业培训管理人员",
  "School principals and administrators of elementary and secondary education": "校长与中小学教育管理人员",
  "Managers in social, community and correctional services": "社会、社区与矫正服务管理人员",
  "Commissioned police officers and related occupations in public protection services": "警官及相关公共保护职业",
  "Fire chiefs and senior firefighting officers": "消防队长与高级消防官员",
  "Commissioned officers of the Canadian Armed Forces": "加拿大武装部队军官",
  "Judges": "法官",
  "Lawyers and Quebec notaries": "律师与魁北克公证人",
  "Religious leaders": "宗教领袖",
  "Police investigators and other investigative occupations": "刑警与其他调查职业",
  "Probation and parole officers": "缓刑与假释官",
  "Career development practitioners and career counsellors (except education)": "职业发展顾问与职业辅导员（不含教育）",
  "Natural and applied science policy researchers, consultants and program officers": "自然与应用科学政策研究、顾问与项目专员",
  "Economists and economic policy researchers and analysts": "经济学家与经济政策研究分析师",
  "Business development officers and market researchers and analysts": "商务拓展专员与市场研究分析师",
  "Social policy researchers, consultants and program officers": "社会政策研究、顾问与项目专员",
  "Health policy researchers, consultants and program officers": "医疗政策研究、顾问与项目专员",
  "Education policy researchers, consultants and program officers": "教育政策研究、顾问与项目专员",
  "Recreation, sports and fitness policy researchers, consultants and program officers": "体育休闲与健身政策研究、顾问与项目专员",
  "Program officers unique to government": "政府项目专员",
  "Other professional occupations in social science": "其他社会科学专业职业",
  "Police officers (except commissioned)": "警员",
  "Firefighters": "消防员",
  "Specialized members of the Canadian Armed Forces": "加拿大武装部队专业人员",
  "Paralegals and related occupations": "律师助理及相关职业",
  "Religion workers": "宗教工作者",
  "Other instructors": "其他讲师",
  "Sheriffs and bailiffs": "警长与法警",
  "Correctional service officers": "矫正服务官员",
  "By-law enforcement and other regulatory officers": "市政执法与其他监管官员",
  "Border services, customs and immigration officers": "边境服务、海关与移民官员",
  "Operations members of the Canadian Armed Forces": "加拿大武装部队作战人员",
  "Home child care providers": "居家育儿照护员",
  "Home support workers, caregivers and related occupations": "居家支持、看护及相关职业",
  "Primary combat members of the Canadian Armed Forces": "加拿大武装部队一线作战人员",
  "Student monitors, crossing guards and related occupations": "学生看护员、路口协管员及相关职业",
  "Library, archive, museum and art gallery managers": "图书馆、档案馆、博物馆与美术馆管理人员",
  "Managers - publishing, motion pictures, broadcasting and performing arts": "出版、影视、广播与表演艺术管理人员",
  "Recreation, sports and fitness program and service directors": "体育休闲与健身项目及服务主管",
  "Librarians": "图书馆员",
  "Conservators and curators": "文物修复师与策展人",
  "Archivists": "档案管理员",
  "Editors": "编辑",
  "Authors and writers (except technical)": "作者与写作者（不含技术文案）",
  "Technical writers": "技术文案",
  "Journalists": "记者",
  "Chemical technologists and technicians": "化学技术师与技术员",
  "Geological and mineral technologists and technicians": "地质与矿产技术师与技术员",
  "Biological technologists and technicians": "生物技术师与技术员",
  "Agricultural and fish products inspectors": "农产品与水产品检验员",
  "Forestry technologists and technicians": "林业技术师与技术员",
  "Conservation and fishery officers": "资源保护与渔业官员",
  "Landscape and horticulture technicians and specialists": "景观与园艺技术员与专员",
  "Architectural technologists and technicians": "建筑技术师与技术员",
  "Industrial designers": "工业设计师",
  "Drafting technologists and technicians": "制图技术师与技术员",
  "Land survey technologists and technicians": "测量技术师与技术员",
  "Technical occupations in geomatics and meteorology": "测绘与气象技术职业",
  "Computer network and web technicians": "计算机网络与网页技术员",
  "User support technicians": "用户支持技术员",
  "Information systems testing technicians": "信息系统测试技术员",
  "Non-destructive testers and inspectors": "无损检测员与检验员",
  "Engineering inspectors and regulatory officers": "工程检验员与监管专员",
  "Occupational health and safety specialists": "职业健康与安全专员",
  "Civil engineering technologists and technicians": "土木工程技术师与技术员",
  "Mechanical engineering technologists and technicians": "机械工程技术师与技术员",
  "Industrial engineering and manufacturing technologists and technicians": "工业与制造工程技术师与技术员",
  "Electrical and electronics engineering technologists and technicians": "电气与电子工程技术师与技术员",
  "Electronic service technicians (household and business equipment)": "电子设备维修技术员（家用及商用）",
  "Industrial instrument technicians and mechanics": "工业仪表技术员与维修技工",
  "Aircraft instrument, electrical and avionics mechanics, technicians and inspectors": "飞机仪表、电气与航空电子维修技工、技术员与检验员",
  "Auditors, accountants and investment professionals": "审计师、会计师及投资专业人员",
  "Financial auditors and accountants": "审计师和会计师",
  "Financial and investment analysts": "金融与投资分析师",
  "Financial advisors": "理财顾问",
  "Welders and related machine operators": "焊工与焊接设备操作员",
  "Electricians (except industrial and power system)": "电工",
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
  "Other technical trades and related occupations": "其他技工",
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
    [/\bhuman resources\b/gi, "人力资源"],
    [/\bsenior\b/gi, "高级"],
    [/\bgovernment\b/gi, "政府"],
    [/\bofficials\b/gi, "官员"],
    [/\bpurchasing\b/gi, "采购"],
    [/\badministrative services\b/gi, "行政服务"],
    [/\bfinancial services\b/gi, "金融服务"],
    [/\bcommunications\b/gi, "通信"],
    [/\bbusiness services\b/gi, "商业服务"],
    [/\binsurance\b/gi, "保险"],
    [/\breal estate\b/gi, "房地产"],
    [/\bbrokerage\b/gi, "经纪"],
    [/\bbanking\b/gi, "银行"],
    [/\bcredit\b/gi, "信贷"],
    [/\binvestment\b/gi, "投资"],
    [/\badvertising\b/gi, "广告"],
    [/\bmarketing\b/gi, "营销"],
    [/\bpublic relations\b/gi, "公关"],
    [/\bsecurities\b/gi, "证券"],
    [/\bdealers\b/gi, "交易员"],
    [/\bbrokers\b/gi, "经纪人"],
    [/\bofficers\b/gi, "专员"],
    [/\brecruitment\b/gi, "招聘"],
    [/\bprocurement\b/gi, "采购"],
    [/\bconference\b/gi, "会议"],
    [/\bevent\b/gi, "活动"],
    [/\bemployment insurance\b/gi, "失业保险"],
    [/\brevenue\b/gi, "税务"],
    [/\bcourt reporters\b/gi, "法庭记录员"],
    [/\bmedical transcriptionists\b/gi, "医疗转录员"],
    [/\binformation management\b/gi, "信息管理"],
    [/\brecords management\b/gi, "档案管理"],
    [/\bstatistical officers\b/gi, "统计专员"],
    [/\bbookkeepers\b/gi, "记账员"],
    [/\badjusters\b/gi, "理赔员"],
    [/\bclaims examiners\b/gi, "理赔审核员"],
    [/\bunderwriters\b/gi, "承保专员"],
    [/\bvaluators\b/gi, "估值师"],
    [/\bappraisers\b/gi, "评估师"],
    [/\badministrative officers\b/gi, "行政专员"],
    [/\bproperty administrators\b/gi, "物业管理员"],
    [/\bpayroll administrators\b/gi, "薪资管理员"],
    [/\breceptionists\b/gi, "前台接待"],
    [/\bpersonnel clerks\b/gi, "人事文员"],
    [/\bdispatchers\b/gi, "调度员"],
    [/\bschedulers\b/gi, "排班员"],
    [/\bengineering managers\b/gi, "工程经理"],
    [/\barchitecture and science managers\b/gi, "建筑与科研经理"],
    [/\bcomputer and information systems managers\b/gi, "计算机与信息系统经理"],
    [/\barchitects\b/gi, "建筑师"],
    [/\bland surveyors\b/gi, "测量师"],
    [/\bcybersecurity specialists\b/gi, "网络安全专员"],
    [/\bdatabase analysts\b/gi, "数据库分析师"],
    [/\bweb designers\b/gi, "网页设计师"],
    [/\bweb developers\b/gi, "网页开发员"],
    [/\bcivil engineers\b/gi, "土木工程师"],
    [/\bmechanical engineers\b/gi, "机械工程师"],
    [/\bcomputer engineers\b/gi, "计算机工程师"],
    [/\bchemical engineers\b/gi, "化学工程师"],
    [/\bindustrial and manufacturing engineers\b/gi, "工业与制造工程师"],
    [/\bmetallurgical and materials engineers\b/gi, "冶金与材料工程师"],
    [/\bmining engineers\b/gi, "采矿工程师"],
    [/\bgeological engineers\b/gi, "地质工程师"],
    [/\bpetroleum engineers\b/gi, "石油工程师"],
    [/\baerospace engineers\b/gi, "航空航天工程师"],
    [/\bother professional engineers\b/gi, "其他专业工程师"],
    [/\btechnologists\b/gi, "技术师"],
    [/\btechnicians\b/gi, "技术员"],
    [/\binspectors\b/gi, "检验员"],
    [/\bcoordinators\b/gi, "协调员"],
    [/\bassistants\b/gi, "助理"],
    [/\bclerks\b/gi, "文员"],
    [/\bmanagers\b/gi, "经理"],
    [/\bsupervisors\b/gi, "主管"],
    [/\bprofessionals\b/gi, "专业人员"],
    [/\bspecialists\b/gi, "专员"],
    [/\banalysts\b/gi, "分析师"],
    [/\badvisors\b/gi, "顾问"],
    [/\bengineers\b/gi, "工程师"],
    [/\bdevelopers\b/gi, "开发员"],
    [/\bprogrammers\b/gi, "程序员"],
    [/\bdesigners\b/gi, "设计师"],
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
  const translatedTitle = nocTitleZhOverrides[entry.code] || curated?.titleZh || translateTitleEn(entry.titleEn, entry);
  const titleZh = /[A-Za-z]/.test(translatedTitle) ? translateTitleEn(entry.titleEn, entry) : translatedTitle;
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
