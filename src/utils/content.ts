import { getCollection, type CollectionEntry } from "astro:content";
import { mergeContentTags } from "@/utils/contentTags";

type BlogEntry = CollectionEntry<"blog">;
type ServiceEntry = CollectionEntry<"services">;
type ProjectEntry = CollectionEntry<"projects">;
type BaikeEntry = CollectionEntry<"baike">;
type SchoolEntry = CollectionEntry<"schools">;

export async function getAllPublishedPosts(): Promise<BlogEntry[]> {
  const entries = await getCollection("blog");
  return entries
    .filter((p) => !p.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.publishDate).getTime() -
        new Date(a.data.publishDate).getTime(),
    );
}

export async function getAllPublishedServices(): Promise<ServiceEntry[]> {
  const entries = await getCollection("services");
  return entries
    .filter((s) => !s.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.publishDate).getTime() -
        new Date(a.data.publishDate).getTime(),
    );
}

export async function getAllPublishedProjects(): Promise<ProjectEntry[]> {
  const entries = await getCollection("projects");
  return entries
    .filter((p) => !p.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.publishDate).getTime() -
        new Date(a.data.publishDate).getTime(),
    );
}

export async function getAllPublishedBaike(): Promise<BaikeEntry[]> {
  const entries = await getCollection("baike");
  return entries
    .filter((p) => !p.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.publishDate).getTime() -
        new Date(a.data.publishDate).getTime(),
    );
}

export async function getAllPublishedSchools(): Promise<SchoolEntry[]> {
  const entries = await getCollection("schools");
  return entries
    .filter((p) => !p.data.draft)
    .sort((a, b) => {
      const aDate = a.data.publishDate ? new Date(a.data.publishDate).getTime() : 0;
      const bDate = b.data.publishDate ? new Date(b.data.publishDate).getTime() : 0;
      return bDate - aDate;
    });
}

export function getAllCategories(posts: BlogEntry[]): string[] {
  const categories = new Set<string>();
  for (const post of posts) categories.add(post.data.category);
  return Array.from(categories).sort((a, b) => a.localeCompare(b, "zh-CN"));
}

export function getAllTags(posts: BlogEntry[]): string[] {
  const tags = new Set<string>();
  for (const post of posts) for (const tag of mergeContentTags({
    title: post.data.title,
    slug: post.slug,
    category: post.data.category,
    description: post.data.description,
    excerpt: post.data.excerpt,
    tags: post.data.tags ?? [],
  })) tags.add(tag);
  return Array.from(tags).sort((a, b) => a.localeCompare(b, "zh-CN"));
}

export function findPrevNext(
  posts: BlogEntry[],
  currentSlug: string,
): { prev?: BlogEntry; next?: BlogEntry } {
  const index = posts.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return {};
  return {
    next: posts[index - 1],
    prev: posts[index + 1],
  };
}

export function getRelatedPosts(
  posts: BlogEntry[],
  current: BlogEntry,
  limit = 6,
): BlogEntry[] {
  const relatedSlugs = current.data.relatedPosts ?? [];
  const currentTags = mergeContentTags({
    title: current.data.title,
    slug: current.slug,
    category: current.data.category,
    description: current.data.description,
    excerpt: current.data.excerpt,
    tags: current.data.tags ?? [],
  });
  const byExplicit = relatedSlugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is BlogEntry => Boolean(p))
    .filter((p) => p.slug !== current.slug);

  const scored = posts
    .filter((p) => p.slug !== current.slug)
    .map((p) => {
      const sameCategory = p.data.category === current.data.category ? 3 : 0;
      const sharedTags = mergeContentTags({
        title: p.data.title,
        slug: p.slug,
        category: p.data.category,
        description: p.data.description,
        excerpt: p.data.excerpt,
        tags: p.data.tags ?? [],
      }).filter((t) => currentTags.includes(t)).length;
      return { post: p, score: sameCategory + sharedTags };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return (
        new Date(b.post.data.publishDate).getTime() -
        new Date(a.post.data.publishDate).getTime()
      );
    });

  const merged: BlogEntry[] = [];
  const seen = new Set<string>();
  const push = (p: BlogEntry) => {
    if (seen.has(p.slug)) return;
    seen.add(p.slug);
    merged.push(p);
  };

  for (const p of byExplicit) push(p);
  for (const { post: p, score } of scored) {
    if (merged.length >= limit) break;
    if (score > 0) push(p);
  }
  for (const { post: p } of scored) {
    if (merged.length >= limit) break;
    push(p);
  }

  return merged.slice(0, limit);
}
