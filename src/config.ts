import type { Site, SocialObject } from "./types"

export const SITE: Site = {
    author: "Igor Garbuz",
    description: "Sharing my building experiences and learning notes.",
    lightAndDarkMode: true,
    ogImage: "down-of-man-og.webp",
    postsPerPage: 20,
    scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
    title: "iglog",
    url: "https://iglog.me/", // replace this with your deployed domain
}

export const LOCALE = {
    lang: "en", // html lang code. Set this empty and default will be "en"
    langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const

export const SOCIALS: SocialObject[] = [
    {
        active: true,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: ` ${SITE.title} on Github`,
        name: "Github",
    },
    {
        active: true,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Facebook`,
        name: "Facebook",
    },
    {
        active: true,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Instagram`,
        name: "Instagram",
    },
    {
        active: true,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on LinkedIn`,
        name: "LinkedIn",
    },
    {
        active: false,
        href: "mailto:yourmail@gmail.com",
        linkTitle: `Send an email to ${SITE.title}`,
        name: "Mail",
    },
    {
        active: false,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Twitter`,
        name: "Twitter",
    },
    {
        active: false,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Twitch`,
        name: "Twitch",
    },
    {
        active: false,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on YouTube`,
        name: "YouTube",
    },
    {
        active: false,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on WhatsApp`,
        name: "WhatsApp",
    },
    {
        active: false,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Pinterest`,
        name: "Pinterest",
    },
    {
        active: false,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on TikTok`,
        name: "TikTok",
    },
    {
        active: false,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on CodePen`,
        name: "CodePen",
    },
    {
        active: false,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Discord`,
        name: "Discord",
    },
    {
        active: false,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Reddit`,
        name: "Reddit",
    },
    {
        active: false,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Skype`,
        name: "Skype",
    },
    {
        active: false,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Steam`,
        name: "Steam",
    },
    {
        active: false,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Telegram`,
        name: "Telegram",
    },
    {
        active: false,
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Mastodon`,
        name: "Mastodon",
    },
]
