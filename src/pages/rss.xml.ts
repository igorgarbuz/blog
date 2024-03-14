import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import getSortedPosts from "@utils/getSortedPosts"
import { SITE } from "@config"
import type { APIRoute } from "astro"

export const GET: APIRoute = async () => {
    const posts = await getCollection("posts")
    const sortedPosts = getSortedPosts(posts)

    return rss({
        description: SITE.description,
        items: sortedPosts.map(({ data, slug }) => ({
            description: data.description,
            link: `posts/${slug}/`,
            pubDate: new Date(data.dateModified ?? data.datePublished),
            title: data.title,
        })),
        site: SITE.url,
        title: SITE.title,
    })
}
