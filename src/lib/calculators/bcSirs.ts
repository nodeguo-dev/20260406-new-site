/**
 * BC PNP Skills Immigration Registration System (SIRS) — max 200 points.
 * Scoring structure published by BC (human capital + economic factors).
 * @see https://www.welcomebc.ca/ (invitations / Skills Immigration)
 * Reference grid: WelcomeBC & BC PNP program materials (verify wage/region tables when policy updates).
 */

export interface BcSirsInput {
  /** Directly related skilled work experience (full-time equivalent), BC SIRS bands */
  relatedYearsBand: "none" | "1_2" | "2_3" | "3_4" | "4_5" | "5p";
  canadianExperience1yrPlus: boolean;
  currentlyFullTimeInOfferJob: boolean;
  education:
    | "hs"
    | "cert_diploma"
    | "associate"
    | "bachelor"
    | "postgrad_cert"
    | "masters"
    | "doctoral";
  bcPostSecondaryBonus: boolean;
  otherCanadaPostSecondaryBonus: boolean;
  healthcareOrEligibleTradeBonus: boolean;
  /** Lowest CLB of the primary evaluated language */
  primaryClb: number;
  /** Second official language above CLB 4 (bilingual bonus) */
  bilingualAboveClb4: boolean;
  /** Hourly wage in CAD of BC job offer */
  hourlyWage: number;
  /** Regional employment */
  region: "metro_vancouver" | "area2" | "area3_other_bc";
  /** BC experience/study outside Metro Vancouver (1+ yr work or study in last 3 yrs) */
  bcOutsideMetroWorkOrStudy: boolean;
}

export function calculateBcSirs(input: BcSirsInput): { total: number; breakdown: Record<string, number> } {
  const b: Record<string, number> = {};

  const relMap: Record<BcSirsInput["relatedYearsBand"], number> = {
    none: 0,
    "1_2": 4,
    "2_3": 8,
    "3_4": 12,
    "4_5": 16,
    "5p": 20,
  };
  let work = relMap[input.relatedYearsBand];
  if (input.canadianExperience1yrPlus) work += 10;
  if (input.currentlyFullTimeInOfferJob) work += 10;
  work = Math.min(40, work);
  b["直接相关工作经验"] = work;

  const eduBase: Record<BcSirsInput["education"], number> = {
    hs: 0,
    cert_diploma: 5,
    associate: 5,
    bachelor: 15,
    postgrad_cert: 15,
    masters: 22,
    doctoral: 27,
  };
  let edu = eduBase[input.education];
  if (input.bcPostSecondaryBonus) edu += 8;
  else if (input.otherCanadaPostSecondaryBonus) edu += 6;
  if (input.healthcareOrEligibleTradeBonus) edu += 5;
  edu = Math.min(40, edu);
  b["学历"] = edu;

  const clb = Math.min(12, Math.max(0, input.primaryClb));
  let lang = 0;
  if (clb >= 9) lang = 30;
  else if (clb === 8) lang = 25;
  else if (clb === 7) lang = 20;
  else if (clb === 6) lang = 15;
  else if (clb === 5) lang = 10;
  else if (clb === 4) lang = 5;
  if (input.bilingualAboveClb4 && lang < 40) lang = Math.min(40, lang + 10);
  lang = Math.min(40, lang);
  b["语言"] = lang;

  const w = Math.max(0, input.hourlyWage);
  let wagePts = 0;
  if (w >= 70) wagePts = 55;
  else if (w >= 16) wagePts = Math.min(55, Math.floor(w) - 15);
  b["时薪"] = wagePts;

  let reg = 0;
  if (input.region === "area2") reg = 5;
  else if (input.region === "area3_other_bc") reg = 15;
  if (input.bcOutsideMetroWorkOrStudy) reg += 10;
  reg = Math.min(25, reg);
  b["地区"] = reg;

  const total = Math.min(200, work + edu + lang + wagePts + reg);
  return { total, breakdown: b };
}
