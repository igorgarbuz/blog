import type { Site } from "./types"

export const SITE: Site = {
    author: "Igor Garbuz",
    description: "Insightful posts on ML, software dev, hardware projects & more. Learn from an indie researcher's hands-on experience building creative tech.",
    ogImage: "/assets/dawn-of-man-site-og.jpg",
    siteName: "iglog",
    title: "iglog • AI, Hardware & Tech Notes by Igor Garbuz",
    url: "https://iglog.me/",
}

export const LOCALE = {
    lang: "en", // html lang code. Set this empty and default will be "en"
    langTag: ["en-US"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const
