import { defineCollection, z } from "astro:content";

const faqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string(),
    excerpt: z.string(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    canonical: z.string().url().optional(),
    faq: z.array(faqItemSchema).optional(),
    relatedPosts: z.array(z.string()).optional(),
  }),
});

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    canonical: z.string().url().optional(),
    faq: z.array(faqItemSchema).optional(),
  }),
});

const faq = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    items: z.array(faqItemSchema),
    draft: z.boolean().default(false),
    canonical: z.string().url().optional(),
  }),
});

const baike = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    canonical: z.string().url().optional(),
    faq: z.array(faqItemSchema).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    projectType: z.enum([
      "技术移民",
      "省提名",
      "雇主担保",
      "创业移民",
      "投资移民",
      "团聚移民",
      "留学移民",
      "其他",
    ]),
    region: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    canonical: z.string().url().optional(),
    faq: z.array(faqItemSchema).optional(),
    relatedProjects: z.array(z.string()).optional(),
  }),
});

const schools = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    entityType: z.enum(["province", "school-board", "college", "university"]),
    province: z.string().optional(),
    city: z.string().optional(),
    website: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    canonical: z.string().url().optional(),
    faq: z.array(faqItemSchema).optional(),
  }),
});

export const collections = { blog, services, faq, baike, projects, schools };
