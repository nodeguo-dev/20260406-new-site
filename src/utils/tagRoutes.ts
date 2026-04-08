import { createHash } from "node:crypto";

const MAX_URI_SEGMENT_BYTES = 96;

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
