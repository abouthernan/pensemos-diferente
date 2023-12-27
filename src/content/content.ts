import { z, defineCollection } from 'astro:content'

const pensemosDiferente = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    slug: z.string(),
    author: z.string(),
    episodes: z.array(z.string())
  })
})

const paisPosible = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    draft: z.boolean(),
    episodes: z.array(z.string())
  })
})

export const collections = {
  pensemosDiferente,
  paisPosible
}
