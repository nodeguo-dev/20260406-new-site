import {
  getAllPublishedBaike,
  getAllPublishedPosts,
  getAllPublishedProjects,
  getAllPublishedSchools,
  getAllPublishedServices,
} from "@/utils/content";
import { categoryMeta } from "@/data/categoryMeta";
import { nocLibrary } from "@/data/nocLibrary";

export async function GET() {
  const [posts, services, projects, baike, schools] = await Promise.all([
    getAllPublishedPosts(),
    getAllPublishedServices(),
    getAllPublishedProjects(),
    getAllPublishedBaike(),
    getAllPublishedSchools(),
  ]);

  const docs = [
    ...posts.map((p) => ({
      id: `blog:${p.slug}`,
      slug: p.slug,
      href: `/blog/${p.slug}/`,
      title: p.data.title,
      description: p.data.description,
      excerpt: p.data.excerpt,
      category: categoryMeta[p.data.category]?.title ?? p.data.category,
      kind: "博客",
      tags: p.data.tags ?? [],
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
      tags: p.data.tags ?? [],
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
      tags: p.data.tags ?? [],
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
      tags: p.data.tags ?? [],
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
      tags: p.data.tags ?? [],
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

  return new Response(JSON.stringify(docs), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
