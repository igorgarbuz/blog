import socialIcons from "@assets/socialIcons"
import { postsSchema } from "@content/config"
import { z } from "astro:content"

type Site = {
    author: string
    description: string
    lightAndDarkMode: boolean
    ogImage: string
    postsPerPage: number
    scheduledPostMargin: number
    title: string
    url: string
}

type SocialObject = {
    active: boolean
    href: string
    linkTitle: string
    name: keyof typeof socialIcons
}

type Post = z.infer<ReturnType<typeof postsSchema>>

export type { Site, SocialObject, Post }
