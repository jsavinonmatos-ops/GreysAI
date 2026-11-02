import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const landing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/landing' }),
  schema: z.object({
    titulo: z.string(),
    subtitulo: z.string(),
    whatsapp: z.string(),
    email_contacto: z.string(),
  }),
});

export const collections = {
  landing,
};
