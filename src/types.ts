import socialIcons from "@assets/socialIcons"

type Site = {
    author: string
    description: string
    ogImage: string
    postsPerPage: number
    title: string
    url: string
}

type SocialObject = {
    active: boolean
    href: string
    linkTitle: string
    name: keyof typeof socialIcons
}

export type { Site, SocialObject }
