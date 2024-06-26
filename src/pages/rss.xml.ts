import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { SITE } from "@config"
import { stat } from "fs/promises"
import path from "path"
import { filterAndSortPosts } from "@utils/posts"
import { mimeTypes } from "@utils/rss"
import type { RSSFeedItem } from "@astrojs/rss"
import type { APIRoute } from "astro"

export const GET: APIRoute = async () => {
    const posts = await getCollection("posts")
    const sortedPosts = filterAndSortPosts(posts)
    const { title, description, ogImage, url } = SITE

    const items: RSSFeedItem[] = await Promise.all(
        sortedPosts.map(async ({ data, slug }) => {
            const { description, datePublished, dateModified, ogImage, title } = data
            const ogImageUrl = new URL(ogImage, url).href
            const publicDir = path.join(process.cwd(), "public")
            const ogImageFullPath = path.join(publicDir, ogImage)
            const ogImageStats = await stat(ogImageFullPath)
            const { size } = ogImageStats
            const extension = path.extname(ogImage).toLowerCase()
            const type = mimeTypes[extension] ?? "image/jpeg"

            return {
                description,
                enclosure: {
                    length: size,
                    type,
                    url: ogImageUrl,
                },
                link: `posts/${slug}/`,
                pubDate: new Date(dateModified ?? datePublished),
                title,
            }
        })
    )

    const siteOgImage = new URL(ogImage, url).href
    const rssFeedUrl = new URL("/rss.xml", url).href

    return rss({
        customData: `<language>en-us</language>
            <atom:link href="${rssFeedUrl}" rel="self" type="application/rss+xml" />
            <image>
                <url>${siteOgImage}</url>
                <title>${title}</title>
                <link>${url}</link>
            </image>`,
        description: description,
        items,
        site: url,
        title,
        xmlns: { atom: "http://www.w3.org/2005/Atom" },
    })
}
