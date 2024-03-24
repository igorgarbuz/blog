import type { CollectionEntry } from "astro:content"

const postFilter = ({ data }: CollectionEntry<"posts">) => {
    const isPublishTimePassed = Date.now() > new Date(data.datePublished).getTime()
    return !data.isDraft && (import.meta.env.DEV || isPublishTimePassed)
}

export default postFilter
