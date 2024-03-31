import type { CollectionEntry } from "astro:content"

const postFilter = ({ data }: CollectionEntry<"posts">) => {
    const isPublishTimePassed = Date.now() > new Date(data.datePublished).getTime()
    return !data.isDraft && (import.meta.env.DEV || isPublishTimePassed)
}

const getSortedPosts = (posts: CollectionEntry<"posts">[]) => {
    return posts
        .filter(postFilter)
        .sort(
            (postA, postB) =>
                Math.floor(
                    new Date(postB.data.dateModified ?? postB.data.datePublished).getTime() / 1000
                ) -
                Math.floor(
                    new Date(postA.data.dateModified ?? postA.data.datePublished).getTime() / 1000
                )
        )
}

export { getSortedPosts, postFilter }
