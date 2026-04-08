import { site } from "@/config/site";

export function withSiteTitle(pageTitle: string): string {
  if (!pageTitle) return site.name;
  if (pageTitle.includes(site.name)) return pageTitle;
  return `${pageTitle} | ${site.name}`;
}

