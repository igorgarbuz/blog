import { SITE } from "@config"
import { z, defineCollection } from "astro:content"

export const schema = z.object({
    author: z.string().default(SITE.author),
    canonicalUrl: z.string().url().optional(),
    dateModified: z.date().optional().nullable(),
    datePublished: z.date(),
    description: z.string(),
    isDraft: z.boolean(),
    ogImage: z.string().optional(), // og image must have a minimal size of 1200 x 630 c.f https://developers.facebook.com/docs/sharing/webmasters/images/
    tags: z.array(z.string()),
    title: z.string(),
})

const postsCollection = defineCollection({
    schema,
    type: "content",
})

export const collections = { posts: postsCollection }
