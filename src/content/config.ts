import { SITE } from "@config"
import { z, defineCollection, type ImageFunction } from "astro:content"

export const postsSchema = ({ image }: { image: ImageFunction }) =>
    z.object({
        author: z.string().default(SITE.author),
        canonicalUrl: z.string().url().optional(),
        dateModified: z.date().optional().nullable(),
        datePublished: z.date(),
        description: z.string(),
        isDraft: z.boolean(),
        ogImage: image()
            .refine(image => image.width >= 1200 && image.height >= 630, {
                message: "Open Graph images must be at least 1200x630 pixels",
            })
            .or(z.string())
            .optional(),
        tags: z.array(z.string()),
        title: z.string(),
    })

const postsCollection = defineCollection({
    schema: postsSchema,
    type: "content",
})

export const collections = { posts: postsCollection }
