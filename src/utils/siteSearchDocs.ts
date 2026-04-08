import {
  getAllPublishedBaike,
  getAllPublishedPosts,
  getAllPublishedProjects,
  getAllPublishedSchools,
  getAllPublishedServices,
} from "@/utils/content";
import { categoryMeta } from "@/data/categoryMeta";
import { nocLibrary } from "@/data/nocLibrary";
import { mergeContentTags } from "@/utils/contentTags";

export type SearchDoc = {
  id: string;
  slug: string;
  href: string;
  title: string;
  description?: string;
  excerpt?: string;
  category: string;
  kind: string;
  tags: string[];
  publishDate: string;
};

export async function buildSiteSearchDocs(): Promise<SearchDoc[]> {
  const [posts, services, projects, baike, schools] = await Promise.all([
    getAllPublishedPosts(),
    getAllPublishedServices(),
    getAllPublishedProjects(),
    getAllPublishedBaike(),
    getAllPublishedSchools(),
  ]);

  return [
    ...posts.map((p) => ({
      id: `blog:${p.slug}`,
      slug: p.slug,
      href: `/blog/${p.slug}/`,
      title: p.data.title,
      description: p.data.description,
      excerpt: p.data.excerpt,
      category: categoryMeta[p.data.category]?.title ?? p.data.category,
      kind: "博客",
      tags: mergeContentTags({
        title: p.data.title,
        slug: p.slug,
        category: p.data.category,
        description: p.data.description,
        excerpt: p.data.excerpt,
        tags: p.data.tags ?? [],
      }),
      publishDate: new Date(p.data.publishDate).toISOString(),
    })),
    ...services.map((p) => ({
      id: `service:${p.slug}`,
      slug: p.slug,
      href: `/services/${p.slug}/`,
      title: p.data.title,
      description: p.data.description,
      excerpt: p.data.excerpt,
      category: "服务",
      kind: "服务",
      tags: mergeContentTags({
        title: p.data.title,
        slug: p.slug,
        category: p.data.category,
        description: p.data.description,
        excerpt: p.data.excerpt,
        tags: p.data.tags ?? [],
      }),
      publishDate: new Date(p.data.publishDate).toISOString(),
    })),
    ...projects.map((p) => ({
      id: `project:${p.slug}`,
      slug: p.slug,
      href: `/projects/${p.slug}/`,
      title: p.data.title,
      description: p.data.description,
      excerpt: p.data.excerpt,
      category: "项目",
      kind: "项目",
      tags: mergeContentTags({
        title: p.data.title,
        slug: p.slug,
        category: p.data.category,
        description: p.data.description,
        excerpt: p.data.excerpt,
        tags: p.data.tags ?? [],
      }),
      publishDate: new Date(p.data.publishDate).toISOString(),
    })),
    ...baike.map((p) => ({
      id: `baike:${p.slug}`,
      slug: p.slug,
      href: `/baike/${p.slug}/`,
      title: p.data.title,
      description: p.data.description,
      excerpt: p.data.excerpt,
      category: "百科",
      kind: "百科",
      tags: mergeContentTags({
        title: p.data.title,
        slug: p.slug,
        category: p.data.category,
        description: p.data.description,
        excerpt: p.data.excerpt,
        tags: p.data.tags ?? [],
      }),
      publishDate: new Date(p.data.publishDate).toISOString(),
    })),
    ...schools.map((p) => ({
      id: `school:${p.slug}`,
      slug: p.slug,
      href: `/school/${p.slug}/`,
      title: p.data.title,
      description: p.data.description,
      excerpt: p.data.excerpt,
      category: "院校",
      kind: "院校",
      tags: mergeContentTags({
        title: p.data.title,
        slug: p.slug,
        category: p.data.category,
        description: p.data.description,
        excerpt: p.data.excerpt,
        tags: p.data.tags ?? [],
      }),
      publishDate: p.data.publishDate ? new Date(p.data.publishDate).toISOString() : "",
    })),
    ...nocLibrary.map((entry) => ({
      id: `noc:${entry.code}`,
      slug: entry.code,
      href: `/noc/${entry.code}/`,
      title: `NOC ${entry.code} ${entry.titleZh}`,
      description: entry.summary,
      excerpt: `${entry.titleZh} · ${entry.titleEn}`,
      category: "NOC 职业库",
      kind: "职业库",
      tags: entry.tags,
      publishDate: "",
    })),
  ];
}

export function collectSiteTags(docs: SearchDoc[]): string[] {
  return Array.from(
    new Set(
      docs
        .flatMap((doc) => doc.tags ?? [])
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
    ),
  ).sort((a, b) => a.localeCompare(b, "zh-CN"));
}

export function sortDocsByDateDesc(docs: SearchDoc[]): SearchDoc[] {
  return [...docs].sort((a, b) => {
    const aTime = a.publishDate ? Date.parse(a.publishDate) : Number.NEGATIVE_INFINITY;
    const bTime = b.publishDate ? Date.parse(b.publishDate) : Number.NEGATIVE_INFINITY;
    if (Number.isNaN(aTime) && Number.isNaN(bTime)) return a.title.localeCompare(b.title, "zh-CN");
    if (Number.isNaN(aTime)) return 1;
    if (Number.isNaN(bTime)) return -1;
    if (aTime !== bTime) return bTime - aTime;
    return a.title.localeCompare(b.title, "zh-CN");
  });
}
