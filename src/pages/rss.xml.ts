import rss from "@astrojs/rss";
import { site } from "@/config/site";
import { getAllPublishedPosts } from "@/utils/content";

export async function GET() {
  const posts = await getAllPublishedPosts();
  return rss({
    title: `${site.name} - 最新文章`,
    description: site.description,
    site: site.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.publishDate,
      link: `/blog/${p.data.slug}/`,
    })),
  });
}

