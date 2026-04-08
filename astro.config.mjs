import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const SITE = "https://cachinavisa.com";

/** @param {{ url: string; links?: unknown; lastmod?: string; priority?: number; changefreq?: string }} item */
function serializeSitemapItem(item) {
  /** sitemap 默认把 priority toFixed(1)，不加则 0.55/0.65 会变成 0.6/0.7 */
  const fp = { fullPrecisionPriority: true };
  try {
    const u = new URL(item.url);
    const path = u.pathname.replace(/\/+$/, "") || "/";

    if (path === "/") {
      return { ...item, ...fp, changefreq: "weekly", priority: 1 };
    }
    if (path === "/rss.xml") {
      return { ...item, ...fp, changefreq: "daily", priority: 0.5 };
    }
    if (path === "/blog" || path.startsWith("/blog/")) {
      return { ...item, ...fp, changefreq: "weekly", priority: 0.65 };
    }
    if (path.startsWith("/category/") || path.startsWith("/tag/")) {
      return { ...item, ...fp, changefreq: "weekly", priority: 0.55 };
    }
    return { ...item, ...fp, changefreq: "monthly", priority: 0.72 };
  } catch {
    return item;
  }
}

export default defineConfig({
  site: SITE,
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap({
      customPages: [`${SITE}/rss.xml`],
      namespaces: {
        news: false,
        xhtml: false,
        image: false,
        video: false,
      },
      serialize: serializeSitemapItem,
    }),
  ],
  redirects: {
    "/inland/": "/category/inland-affairs/",
    "/inland/status-extension/": "/blog/inland-status-extension-guide/",
    "/inland/work-study-bridge/": "/blog/inland-pgwp-work-study-bridge/",
    "/inland/document-renewal/": "/blog/inland-document-renewal-guide/",
    "/inland/pr-card/": "/blog/inland-pr-card-landing-guide/",
  },
});

