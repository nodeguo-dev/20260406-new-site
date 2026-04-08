export function encodeTagSlug(tag: string): string {
  return encodeURIComponent(tag.trim());
}

export function decodeTagSlug(slug: string): string {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

