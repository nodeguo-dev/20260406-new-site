# 常春藤咨询（cachinavisa.com）Astro 重构骨架

## 本地运行

```bash
npm install
npm run dev
```

## 关键目录

- `src/content/blog/`：文章（Markdown/MDX）
- `src/content/services/`：服务页（Markdown/MDX）
- `src/content/faq/`：FAQ（Markdown）
- `src/pages/`：路由页面
- `src/components/`：可复用组件
- `src/layouts/`：布局

## 主要路由

- `/`：内容型首页（最新文章流 + 侧边栏）
- `/blog/`、`/blog/page/[page]/`：文章列表与分页
- `/blog/[slug]/`：文章详情
- `/category/[slug]/`、`/category/[slug]/page/[page]/`：分类归档与分页
- `/tag/[slug]/`、`/tag/[slug]/page/[page]/`：标签归档与分页
- `/services/[slug]/`：服务详情
- `/faq/`、`/about/`、`/contact/`、`/search/`
- `/rss.xml`、`/robots.txt`、`/sitemap-index.xml`

