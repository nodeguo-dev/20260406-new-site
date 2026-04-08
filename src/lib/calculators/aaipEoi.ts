/**
 * AAIP Worker Expression of Interest — maximum 100 points.
 * @see https://www.alberta.ca/aaip-alberta-express-entry-stream-how-to-apply (Worker EOI points grid PDF)
 */

export interface AaipEoiInput {
  education:
    | "doctoral"
    | "masters"
    | "bachelor"
    | "trades_cert"
    | "diploma_cert"
    | "secondary";
  educationLocation: "alberta" | "other_canada" | "foreign";
  /** Primary test: lowest CLB among four skills */
  englishClb: number;
  /** Optional second test: lowest NCLC among four skills */
  frenchNclc: number | null;
  /** Total skilled work experience (Canada + abroad), months */
  totalSkilledMonths: number;
  /** Months worked in Alberta (skilled) */
  albertaWorkMonths: number;
  /** Months worked in other Canadian provinces */
  otherCanadaWorkMonths: number;
  age: number;
  familyInAlberta: boolean;
  /** Permanent full-time Alberta job offer (valid categories per AAIP rules) */
  hasAlbertaJobOffer: boolean;
  /** Job location outside Calgary & Edmonton CMAs */
  jobOutsideCalgaryEdmonton: boolean;
  /** Regulated trade certificate / Alberta professional licence as per grid */
  regulatedOccupationPoints: boolean;
}

function eduLevelPts(e: AaipEoiInput["education"]): number {
  const m: Record<AaipEoiInput["education"], number> = {
    doctoral: 12,
    masters: 10,
    bachelor: 7,
    trades_cert: 7,
    diploma_cert: 4,
    secondary: 0,
  };
  return m[e];
}

function eduLocationPts(loc: AaipEoiInput["educationLocation"]): number {
  if (loc === "alberta") return 10;
  if (loc === "other_canada") return 6;
  return 0;
}

/** English CLB → language grid (take higher of EN vs FR in full assessment) */
function englishLangPts(clb: number): number {
  if (clb >= 6) return 10;
  if (clb === 5) return 8;
  if (clb === 4) return 5;
  return 0;
}

function frenchLangPts(nclc: number): number {
  if (nclc >= 8) return 8;
  if (nclc === 5) return 5;
  if (nclc === 4) return 3;
  return 0;
}

function totalWorkPts(months: number): number {
  if (months >= 12) return 11;
  if (months >= 6) return 7;
  if (months > 0) return 3;
  return 0;
}

/** Canadian experience — Alberta vs rest of Canada; award higher per grid */
function canadaWorkPts(abMonths: number, otherMonths: number): number {
  const ab =
    abMonths >= 12 ? 11 : abMonths >= 6 ? 7 : abMonths > 0 ? 3 : 0;
  const ot =
    otherMonths >= 12 ? 7 : otherMonths >= 6 ? 5 : otherMonths > 0 ? 3 : 0;
  return Math.max(ab, ot);
}

function agePts(age: number): number {
  if (age < 18) return 0;
  if (age <= 20) return 3;
  if (age <= 34) return 5;
  if (age <= 49) return 4;
  return 3;
}

export function calculateAaipEoi(input: AaipEoiInput): { total: number; breakdown: Record<string, number> } {
  const b: Record<string, number> = {};

  let edu = eduLevelPts(input.education) + eduLocationPts(input.educationLocation);
  edu = Math.min(22, edu);
  b["学历（含就读地区）"] = edu;

  const en = englishLangPts(input.englishClb);
  const fr = input.frenchNclc != null ? frenchLangPts(input.frenchNclc) : 0;
  let lang = Math.max(en, fr);
  if (
    input.englishClb >= 4 &&
    input.frenchNclc != null &&
    input.frenchNclc >= 4
  ) {
    lang = Math.min(13, lang + 3);
  }
  lang = Math.min(13, lang);
  b["语言"] = lang;

  const tw = totalWorkPts(input.totalSkilledMonths);
  const cw = canadaWorkPts(input.albertaWorkMonths, input.otherCanadaWorkMonths);
  let wx = Math.max(tw, cw);
  wx = Math.min(21, wx);
  b["工作经验（含加拿大经验就高）"] = wx;

  const ag = Math.min(5, agePts(input.age));
  b["年龄"] = ag;

  b["阿省亲属"] = input.familyInAlberta ? 8 : 0;

  let econ = 0;
  if (input.hasAlbertaJobOffer) econ += 10;
  if (input.jobOutsideCalgaryEdmonton) econ += 5;
  econ = Math.min(16, econ);
  b["阿省雇主与工作地点"] = econ;

  b["受监管职业/技工资质"] = input.regulatedOccupationPoints ? 10 : 0;

  const total = Math.min(
    100,
    edu + lang + wx + ag + b["阿省亲属"]! + econ + b["受监管职业/技工资质"]!
  );
  return { total, breakdown: b };
}
