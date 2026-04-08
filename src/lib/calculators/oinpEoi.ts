/**
 * OINP Expression of Interest scoring — factors differ by stream.
 * Source: Ontario.ca "OINP expression of interest system streams" (scoring factors section).
 * Express Entry–linked streams (HCP / Skilled Trades / French) use federal CRS for ranking — use CRS calculator.
 */

export type OinpStream = "foreign_worker" | "international_student" | "in_demand";

export interface OinpEoiCommon {
  nocTeer: "0_1" | "2_3" | "4" | "5";
  broadOcc: "0_2_3" | "7" | "1_9" | "4_8" | "5_6";
  wagePerHour: number;
  validWorkOrStudyPermit: boolean;
  jobTenure6moPlusInOntario: boolean;
  earnings40kPlusNoa: boolean;
}

export interface OinpForeignWorkerExtra {
  stream: "foreign_worker";
  clbBand: "9p" | "8" | "7" | "6p";
  bilingual: "both_official" | "one_official";
  jobRegion: "north" | "outside_gta" | "gta_not_toronto" | "toronto";
}

export interface OinpInternationalStudentExtra {
  stream: "international_student";
  education:
    | "phd_md"
    | "masters"
    | "bachelor"
    | "grad_cert"
    | "undergrad_cert"
    | "trade"
    | "lt_college";
  field: "stem_health_trades" | "business_social_legal_edu" | "arts_bhase";
  canadianCredentials: "two_plus" | "one" | "none";
  clbBand: "9p" | "8" | "7" | "6p";
  bilingual: "both_official" | "one_official";
  jobRegion: "north" | "outside_gta" | "gta_not_toronto" | "toronto";
  studyRegion: "north" | "outside_gta" | "gta_not_toronto" | "toronto" | "online_only";
}

export interface OinpInDemandExtra {
  stream: "in_demand";
  jobRegion: "north" | "outside_gta" | "gta_not_toronto" | "toronto";
}

export type OinpEoiInput =
  | (OinpEoiCommon & OinpForeignWorkerExtra)
  | (OinpEoiCommon & OinpInternationalStudentExtra)
  | (OinpEoiCommon & OinpInDemandExtra);

function teerPoints(t: OinpEoiCommon["nocTeer"]): number {
  if (t === "0_1") return 10;
  if (t === "2_3") return 8;
  return 0;
}

function bocPoints(o: OinpEoiCommon["broadOcc"]): number {
  const m: Record<OinpEoiCommon["broadOcc"], number> = {
    "0_2_3": 10,
    "7": 7,
    "1_9": 5,
    "4_8": 4,
    "5_6": 3,
  };
  return m[o];
}

function wagePoints(w: number): number {
  if (w >= 40) return 10;
  if (w >= 35) return 8;
  if (w >= 30) return 7;
  if (w >= 25) return 6;
  if (w >= 20) return 5;
  return 0;
}

function regionJobPoints(r: "north" | "outside_gta" | "gta_not_toronto" | "toronto"): number {
  if (r === "north") return 10;
  if (r === "outside_gta") return 8;
  if (r === "gta_not_toronto") return 3;
  return 0;
}

function regionStudyPoints(
  r: "north" | "outside_gta" | "gta_not_toronto" | "toronto" | "online_only"
): number {
  if (r === "online_only") return 0;
  return regionJobPoints(r);
}

function langOfficial(clb: OinpForeignWorkerExtra["clbBand"]): number {
  if (clb === "9p") return 10;
  if (clb === "8") return 6;
  if (clb === "7") return 4;
  return 0;
}

function langKnowledge(mode: "both_official" | "one_official"): number {
  return mode === "both_official" ? 10 : 5;
}

export function calculateOinpEoi(input: OinpEoiInput): { total: number; breakdown: Record<string, number> } {
  const b: Record<string, number> = {};
  let total = 0;

  const common = input as OinpEoiCommon;

  if (input.stream !== "in_demand") {
    const tp = teerPoints(common.nocTeer);
    b["NOC TEER"] = tp;
    total += tp;
  }

  const bp = bocPoints(common.broadOcc);
  b["NOC 大类"] = bp;
  total += bp;

  const wp = wagePoints(common.wagePerHour);
  b["时薪"] = wp;
  total += wp;

  const permit = common.validWorkOrStudyPermit ? 10 : 0;
  b["有效工签/学签"] = permit;
  total += permit;

  const tenure = common.jobTenure6moPlusInOntario ? 3 : 0;
  b["安省同雇主岗位任职"] = tenure;
  total += tenure;

  const earn = common.earnings40kPlusNoa ? 3 : 0;
  b["NOA 收入"] = earn;
  total += earn;

  if (input.stream === "foreign_worker") {
    const fw = input as OinpEoiCommon & OinpForeignWorkerExtra;
    const lo = langOfficial(fw.clbBand);
    b["语言·单项"] = lo;
    total += lo;
    const lk = langKnowledge(fw.bilingual);
    b["语言·官方语言数量"] = lk;
    total += lk;
    const jr = regionJobPoints(fw.jobRegion);
    b["工作地区"] = jr;
    total += jr;
  } else if (input.stream === "international_student") {
    const is = input as OinpEoiCommon & OinpInternationalStudentExtra;
    const edMap: Record<OinpInternationalStudentExtra["education"], number> = {
      phd_md: 10,
      masters: 8,
      bachelor: 6,
      grad_cert: 6,
      undergrad_cert: 5,
      trade: 5,
      lt_college: 0,
    };
    const ed = edMap[is.education];
    b["学历"] = ed;
    total += ed;

    const fld =
      is.field === "stem_health_trades" ? 12 : is.field === "business_social_legal_edu" ? 6 : 0;
    b["专业领域"] = fld;
    total += fld;

    const cc = is.canadianCredentials === "two_plus" ? 10 : is.canadianCredentials === "one" ? 5 : 0;
    b["加拿大学历数量"] = cc;
    total += cc;

    const lo = langOfficial(is.clbBand);
    b["语言·单项"] = lo;
    total += lo;
    const lk = langKnowledge(is.bilingual);
    b["语言·官方语言数量"] = lk;
    total += lk;

    const jr = regionJobPoints(is.jobRegion);
    b["工作地区"] = jr;
    total += jr;
    const sr = regionStudyPoints(is.studyRegion);
    b["学习地区"] = sr;
    total += sr;
  } else {
    const id = input as OinpEoiCommon & OinpInDemandExtra;
    const jr = regionJobPoints(id.jobRegion);
    b["工作地区"] = jr;
    total += jr;
  }

  return { total, breakdown: b };
}
