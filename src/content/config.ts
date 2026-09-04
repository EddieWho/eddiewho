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
    cover: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
    }).optional(),
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
      width: z.number().optional(),
      height: z.number().optional(),
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

const site = defineCollection({
  type: 'data',
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      emphasis: z.string(),
      description: z.string(),
      primaryLabel: z.string(),
      secondaryLabel: z.string(),
    }),
    work: z.object({
      eyebrow: z.string(),
      title: z.string(),
      noteLineOne: z.string(),
      noteLineTwo: z.string(),
    }),
    writing: z.object({
      eyebrow: z.string(),
      title: z.string(),
      linkLabel: z.string(),
      emptyIndex: z.string(),
      emptyTitle: z.string(),
      emptyText: z.string(),
    }),
    about: z.object({
      eyebrow: z.string(),
      portraitCaption: z.string(),
      leadBefore: z.string(),
      leadEmphasis: z.string(),
      leadAfter: z.string(),
      copy: z.string(),
      researchAreas: z.array(z.string()).min(1),
      linkLabel: z.string(),
    }),
    cta: z.object({
      eyebrow: z.string(),
      title: z.string(),
      text: z.string(),
      label: z.string(),
    }),
  }),
});

export const collections = { projects, blog, site };
