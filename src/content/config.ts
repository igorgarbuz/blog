import { SITE } from "@config"
import { z, defineCollection } from "astro:content"

/**
 * Post title should be defined in the frontmatter of the .md file, and not inside
 * the markdown content.
 * Besides following frontmatter .md file should have
 * a "Table of contents" h2 (i.e ## in md) title
 * that will be replaced by a collapsible auto-generated table of contents.
 * WARNING: Any text not preceding by a title following
 * the "Table of contents" h2 title will be removed. It is the default remarkToc behavior.
 */
export const schema = z.object({
    author: z.string().default(SITE.author),
    canonicalUrl: z.string().url().optional(), // only if article was initially published under another URL
    dateModified: z.date().optional().nullable(),
    datePublished: z.date(),
    description: z.string(),
    isDraft: z.boolean(),
    ogImage: z.string(), // og image must have a minimal size of 1200 x 630 c.f https://developers.facebook.com/docs/sharing/webmasters/images/
    tags: z.array(z.string()),
    title: z.string(),
})

const postsCollection = defineCollection({
    schema,
    type: "content",
})

export const collections = { posts: postsCollection }
