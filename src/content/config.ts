import { z, defineCollection, reference } from "astro:content";

const units = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    next: z.union([z.enum(["end"]), reference('units')]),
    prev: z.union([z.enum(["start"]), reference('units')])
  })
})

const packs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    ownUnits: z.array(reference('units'))
  })
})

const trails = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    ownPacks: z.array(reference('packs'))
  })
})


export const collections = {
  'units': units,
  'packs': packs,
  'trails': trails
};