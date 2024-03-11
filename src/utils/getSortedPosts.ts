import type { CollectionEntry } from "astro:content"
import postFilter from "./postFilter"

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

export default getSortedPosts
