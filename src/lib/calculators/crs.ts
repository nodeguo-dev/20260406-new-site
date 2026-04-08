/**
 * Express Entry CRS (Comprehensive Ranking System) — aligned with IRCC published tables.
 * Job offer points removed effective March 25, 2025 (not included).
 * @see https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html
 */

export type MaritalStatus = "single" | "married_accompany" | "married_not_accompany";

export type EducationCode =
  | "lt_secondary"
  | "secondary"
  | "one_year_ps"
  | "two_year_ps"
  | "bachelor_3yr"
  | "two_creds_one_3yr"
  | "masters"
  | "doctoral";

export interface CRSInput {
  maritalStatus: MaritalStatus;
  age: number;
  education: EducationCode;
  /** First official language — CLB per ability (listening, reading, writing, speaking) */
  firstLang: [number, number, number, number];
  /** Second official language — omit or all zeros if not assessed */
  secondLang?: [number, number, number, number] | null;
  /** Skilled Canadian work experience (years rounded to IRCC bands) */
  canadianWorkBand: 0 | 1 | 2 | 3 | 4 | 5;
  /** Foreign skilled work: 0; 1–2 years; 3+ years */
  foreignWorkBand: 0 | 1 | 2;
  spouseEducation?: EducationCode;
  /** Spouse first language CLB (only if married_accompany) */
  spouseFirstLang?: [number, number, number, number];
  spouseCanadianWorkBand?: 0 | 1 | 2 | 3 | 4 | 5;
  certificateOfQualification: boolean;
  siblingInCanada: boolean;
  /** French: NCLC 7+ all skills — combined with English per IRCC additional points */
  frenchBonus: "none" | "nclc7_french_english_le4" | "nclc7_french_english_ge5";
  canadianPostSecondary: "none" | "one_or_two_year" | "three_year_plus";
  provincialNomination: boolean;
}

export interface CRSBreakdown {
  coreHuman: number;
  spouse: number;
  skillTransfer: number;
  additional: number;
  total: number;
  details: Record<string, number>;
}

const EDU_CORE_SINGLE: Record<EducationCode, number> = {
  lt_secondary: 0,
  secondary: 30,
  one_year_ps: 90,
  two_year_ps: 98,
  bachelor_3yr: 120,
  two_creds_one_3yr: 128,
  masters: 135,
  doctoral: 150,
};

const EDU_CORE_SPOUSE: Record<EducationCode, number> = {
  lt_secondary: 0,
  secondary: 28,
  one_year_ps: 84,
  two_year_ps: 91,
  bachelor_3yr: 112,
  two_creds_one_3yr: 119,
  masters: 126,
  doctoral: 140,
};

function agePoints(age: number, withSpouse: boolean): number {
  if (age < 18 || age > 44) return 0;
  const w = withSpouse;
  if (age === 18) return w ? 90 : 99;
  if (age === 19) return w ? 95 : 105;
  if (age >= 20 && age <= 29) return w ? 100 : 110;
  if (age === 30) return w ? 95 : 105;
  if (age === 31) return w ? 90 : 99;
  if (age === 32) return w ? 85 : 94;
  if (age === 33) return w ? 80 : 88;
  if (age === 34) return w ? 75 : 83;
  if (age === 35) return w ? 70 : 77;
  if (age === 36) return w ? 65 : 72;
  if (age === 37) return w ? 60 : 66;
  if (age === 38) return w ? 55 : 61;
  if (age === 39) return w ? 50 : 55;
  if (age === 40) return w ? 45 : 50;
  if (age === 41) return w ? 35 : 39;
  if (age === 42) return w ? 25 : 28;
  if (age === 43) return w ? 15 : 17;
  if (age === 44) return w ? 5 : 6;
  return 0;
}

function clbFirstAbilityPoints(clb: number, withSpouse: boolean): number {
  if (clb < 4) return 0;
  const c = Math.min(clb, 10);
  // IRCC table: CLB 4–5, 6, 7, 8, 9, 10+
  if (c <= 5) return withSpouse ? 6 : 6;
  if (c === 6) return withSpouse ? 8 : 9;
  if (c === 7) return withSpouse ? 16 : 17;
  if (c === 8) return withSpouse ? 22 : 23;
  if (c === 9) return withSpouse ? 29 : 31;
  return withSpouse ? 32 : 34;
}

function firstLangTotal(clbs: [number, number, number, number], withSpouse: boolean): number {
  const sum = clbs.reduce((s, c) => s + clbFirstAbilityPoints(c, withSpouse), 0);
  return Math.min(withSpouse ? 128 : 136, sum);
}

function secondLangTotal(clbs: [number, number, number, number], withSpouse: boolean): number {
  const per = (c: number) => {
    if (c <= 4) return 0;
    if (c <= 6) return 1;
    if (c <= 8) return 3;
    return 6;
  };
  const sum = clbs.reduce((s, c) => s + per(c), 0);
  return Math.min(sum, withSpouse ? 22 : 24);
}

function canadianWorkPoints(band: number, withSpouse: boolean): number {
  const w = [0, 35, 46, 56, 63, 70];
  const wo = [0, 40, 53, 64, 72, 80];
  const i = Math.min(band, 5);
  return withSpouse ? w[i] : wo[i];
}

function spouseEduPoints(edu: EducationCode): number {
  const m: Record<EducationCode, number> = {
    lt_secondary: 0,
    secondary: 2,
    one_year_ps: 6,
    two_year_ps: 7,
    bachelor_3yr: 8,
    two_creds_one_3yr: 9,
    masters: 10,
    doctoral: 10,
  };
  return m[edu];
}

function spouseLangAbility(clb: number): number {
  if (clb <= 4) return 0;
  if (clb <= 6) return 1;
  if (clb <= 8) return 3;
  return 5;
}

function spouseLangTotal(clbs: [number, number, number, number]): number {
  return Math.min(
    20,
    clbs.reduce((s, c) => s + spouseLangAbility(c), 0)
  );
}

function spouseCdnWorkPoints(band: number): number {
  const t = [0, 5, 7, 8, 9, 10];
  return t[Math.min(band, 5)];
}

/** Skill transferability education tier for IRCC sub-tables */
type EduTier = 0 | 1 | 2 | 3 | 4;

function educationToTier(edu: EducationCode): EduTier {
  if (edu === "lt_secondary" || edu === "secondary") return 0;
  if (edu === "one_year_ps" || edu === "two_year_ps") return 1;
  if (edu === "bachelor_3yr" || edu === "two_creds_one_3yr") return 2;
  if (edu === "masters") return 3;
  return 4; // doctoral
}

function eduLangTransfer(tier: EduTier, all9: boolean, all7: boolean): number {
  if (tier === 0 || !all7) return 0;
  const col = all9 ? 1 : 0;
  const table: [number, number][] = [
    [0, 0],
    [13, 25],
    [25, 50],
    [25, 50],
    [25, 50],
  ];
  return table[tier][col];
}

function eduCdnTransfer(tier: EduTier, cdnBand: number): number {
  if (tier === 0 || cdnBand < 1) return 0;
  const col = cdnBand >= 2 ? 1 : 0;
  const table: [number, number][] = [
    [0, 0],
    [13, 25],
    [25, 50],
    [25, 50],
    [25, 50],
  ];
  return table[tier][col];
}

function foreignLangTransfer(fBand: 0 | 1 | 2, all9: boolean, all7: boolean): number {
  if (fBand === 0 || !all7) return 0;
  const col = all9 ? 1 : 0;
  const t: [number, number][] = [
    [0, 0],
    [13, 25],
    [25, 50],
  ];
  return t[fBand][col];
}

function foreignCdnTransfer(fBand: 0 | 1 | 2, cdnBand: number): number {
  if (fBand === 0 || cdnBand < 1) return 0;
  const col = cdnBand >= 2 ? 1 : 0;
  const t: [number, number][] = [
    [0, 0],
    [13, 25],
    [25, 50],
  ];
  return t[fBand][col];
}

function certTransfer(has: boolean, firstLang: [number, number, number, number]): number {
  if (!has) return 0;
  const all7 = firstLang.every((c) => c >= 7);
  const all5 = firstLang.every((c) => c >= 5);
  const someUnder7 = firstLang.some((c) => c < 7);
  if (all7) return 50;
  if (all5 && someUnder7) return 25;
  return 0;
}

export function calculateCRS(input: CRSInput): CRSBreakdown {
  const withSpouse = input.maritalStatus === "married_accompany";
  const singleForCore =
    input.maritalStatus === "single" || input.maritalStatus === "married_not_accompany";

  const coreAge = agePoints(input.age, withSpouse);
  const edu = singleForCore ? EDU_CORE_SINGLE : EDU_CORE_SPOUSE;
  const coreEdu = edu[input.education];
  const fl = firstLangTotal(input.firstLang, withSpouse);
  const sl = input.secondLang
    ? secondLangTotal(input.secondLang, withSpouse)
    : 0;
  const coreLang = Math.min(withSpouse ? 150 : 160, fl + sl);
  const coreCdn = canadianWorkPoints(input.canadianWorkBand, withSpouse);

  const coreHuman = coreAge + coreEdu + coreLang + coreCdn;
  const coreCap = withSpouse ? 460 : 500;
  const coreHumanCapped = Math.min(coreCap, coreHuman);

  let spousePts = 0;
  const d: Record<string, number> = {};
  d["核心·年龄"] = coreAge;
  d["核心·学历"] = coreEdu;
  d["核心·语言"] = coreLang;
  d["核心·加拿大经验"] = coreCdn;

  if (withSpouse && input.spouseEducation && input.spouseFirstLang) {
    const se = spouseEduPoints(input.spouseEducation);
    const slg = spouseLangTotal(input.spouseFirstLang);
    const sc = spouseCdnWorkPoints(input.spouseCanadianWorkBand ?? 0);
    spousePts = Math.min(40, se + slg + sc);
    d["配偶·学历"] = se;
    d["配偶·语言"] = slg;
    d["配偶·加拿大经验"] = sc;
  }

  const first = input.firstLang;
  const all7 = first.every((c) => c >= 7);
  const all9 = first.every((c) => c >= 9);
  const tier = educationToTier(input.education);

  const eLang = eduLangTransfer(tier, all9, all7);
  const eCdn = eduCdnTransfer(tier, input.canadianWorkBand);
  const eduBlock = Math.max(eLang, eCdn);

  const fLang = foreignLangTransfer(input.foreignWorkBand, all9, all7);
  const fCdn = foreignCdnTransfer(input.foreignWorkBand, input.canadianWorkBand);
  const forBlock = Math.max(fLang, fCdn);

  const cert = certTransfer(input.certificateOfQualification, input.firstLang);
  let skillTransfer = Math.min(100, eduBlock + forBlock + cert);
  d["衔接·学历组合"] = eduBlock;
  d["衔接·海外经验组合"] = forBlock;
  d["衔接·技工证书"] = cert;

  let add = 0;
  if (input.siblingInCanada) {
    d["附加·兄弟姐妹"] = 15;
    add += 15;
  }
  if (input.frenchBonus === "nclc7_french_english_le4") {
    d["附加·法语"] = 25;
    add += 25;
  } else if (input.frenchBonus === "nclc7_french_english_ge5") {
    d["附加·法语"] = 50;
    add += 50;
  }
  if (input.canadianPostSecondary === "one_or_two_year") {
    d["附加·加拿大学历"] = 15;
    add += 15;
  } else if (input.canadianPostSecondary === "three_year_plus") {
    d["附加·加拿大学历"] = 30;
    add += 30;
  }
  if (input.provincialNomination) {
    d["附加·省提名"] = 600;
    add += 600;
  }

  const total = Math.min(1200, coreHumanCapped + spousePts + skillTransfer + add);

  return {
    coreHuman: coreHumanCapped,
    spouse: spousePts,
    skillTransfer,
    additional: add,
    total,
    details: d,
  };
}
