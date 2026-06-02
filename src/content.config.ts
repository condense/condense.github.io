import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Journal collection — wired now, deliberately empty at launch.
// Adding a post later is just dropping a Markdown file into
// src/content/journal/ that satisfies this schema.
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    topic: z.enum(['Engineering', 'Strategy', 'Field notes']),
    excerpt: z.string(),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal };
