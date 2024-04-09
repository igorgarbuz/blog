import type { CollectionEntry } from "astro:content"

type Post = CollectionEntry<"posts">

const postFilter = ({ data }: Post) => {
    const isPublishTimePassed = Date.now() > new Date(data.datePublished).getTime()

    return !data.isDraft && (import.meta.env.DEV || isPublishTimePassed)
}

const getPostDateMillisec = (post: Post, useDateModified: boolean): number => {
    if (useDateModified && post.data?.dateModified) {
        return new Date(post.data.dateModified).getTime()
    }

    return new Date(post.data.datePublished).getTime()
}

const sortPostsByDate = (posts: Post[], byDateModified = false) =>
    posts.sort(
        (postA, postB) =>
            getPostDateMillisec(postB, byDateModified) - getPostDateMillisec(postA, byDateModified)
    )

const filterAndSortPosts = (posts: Post[], byDateModified = false) =>
    sortPostsByDate(posts.filter(postFilter), byDateModified)

export { filterAndSortPosts }
