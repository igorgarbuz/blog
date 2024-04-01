import type { Site, SocialObject } from "./types"

export const SITE: Site = {
    author: "Igor Garbuz",
    description: "Sharing my experiences and learning notes.",
    ogImage: "/assets/down-of-man-og.webp",
    title: "iglog",
    url: "https://iglog.me/",
}

export const LOCALE = {
    lang: "en", // html lang code. Set this empty and default will be "en"
    langTag: ["en-US"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const

export const SOCIALS: SocialObject[] = [
    {
        active: false,
        href: "https://github.com/igorgarbuz",
        linkTitle: ` ${SITE.title} on GitHub`,
        name: "Github",
    },
    {
        active: false,
        href: "https://twitter.com/igarbuz",
        linkTitle: `${SITE.title} on X`,
        name: "Twitter",
    },
]
