import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    order: z.number(),
    tags: z.array(z.string()),
    visualLabel: z.string(),
    visualVariant: z.enum(['grid', 'cards']),
    coreExperience: z.array(z.string()),
    keySystems: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
    development: z.string().optional(),
    currentProgress: z.string().optional(),
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).default([]),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publicationDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
