import { defineCollection, z } from 'astro:content';

const journalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    category: z.string(),
    date: z.string(),
    readTime: z.string().optional(),
    excerpt: z.string(),
    featured: z.boolean().optional().default(false),
  }),
});

const recettesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    category: z.string(),
    difficulty: z.string(),
    time: z.string(),
    description: z.string(),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  journal: journalCollection,
  recettes: recettesCollection,
  pages: pagesCollection,
};
