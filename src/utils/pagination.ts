export function getTotalPages(totalItems: number, pageSize: number): number {
  return Math.max(1, Math.ceil(totalItems / pageSize));
}

export function getPageSlice<T>(
  items: T[],
  page: number,
  pageSize: number,
): { items: T[]; totalPages: number } {
  const totalPages = getTotalPages(items.length, pageSize);
  const clampedPage = Math.min(Math.max(1, page), totalPages);
  const startIndex = (clampedPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return { items: items.slice(startIndex, endIndex), totalPages };
}

export function getPageHref(base: string, page: number): string {
  if (page <= 1) return base;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}page/${page}/`;
}

