import { createHash } from "node:crypto";

const MAX_URI_SEGMENT_BYTES = 96;
const NOC_HUB_TAGS = new Set(["NOC", "NOC职业库", "加拿大NOC职业库"]);

export function encodeTagSlug(tag: string): string {
  const normalized = tag.trim();
  if (!normalized) return "";

  const encoded = encodeURIComponent(normalized);
  if (Buffer.byteLength(encoded, "utf8") <= MAX_URI_SEGMENT_BYTES) {
    return encoded;
  }

  return `t-${createTagHash(normalized)}`;
}

export function resolveTagFromSlug(slug: string, tags: string[]): string {
  const normalizedSlug = slug.trim();
  if (!normalizedSlug) return normalizedSlug;

  const decoded = decodeURIComponentSafe(normalizedSlug);
  if (tags.includes(decoded)) {
    return decoded;
  }

  const matched = tags.find((tag) => encodeTagSlug(tag) === normalizedSlug);
  return matched ?? decoded;
}

export function isNocHubTag(tag: string): boolean {
  return NOC_HUB_TAGS.has(tag.trim());
}

export function resolveTagHref(tag: string): string {
  const normalized = tag.trim();
  if (!normalized) return "/tag/";
  if (isNocHubTag(normalized)) return "/noc/";
  return `/tag/${encodeTagSlug(normalized)}/`;
}

function createTagHash(tag: string): string {
  return createHash("sha1").update(tag).digest("hex").slice(0, 10);
}

function decodeURIComponentSafe(slug: string): string {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}
