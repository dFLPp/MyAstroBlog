import { z, defineCollection } from "astro:content";

const posts = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

const links = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    href: z.string(),
    internal: z.array(z.string).optional()

  })
})

export const collections = {
  'posts': posts,
  'links': links
};