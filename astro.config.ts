import remarkCollapse from "remark-collapse"
import remarkToc from "remark-toc"
import sitemap from "@astrojs/sitemap"
import { SITE } from "./src/config"
import { defineConfig } from "astro/config"

/**
 * Pattern wrapped in new RegExp('^(' + value + ')$', 'i') inside remarkToc and remarkCollapse
 * Needed to match the heading title in the md file and insert the collapsible table of contents.
 * Default pattern "(table[ -]of[ -])?contents?|toc" is replaced with a more precise one
 * to enforce consistency in the markdown files.
 */
const CONTENTS_PATTERN = "table of contents"

// for configuration refer to https://astro.build/config
export default defineConfig({
    integrations: [sitemap()],
    markdown: {
        remarkPlugins: [
            [remarkToc, { heading: CONTENTS_PATTERN }],
            [remarkCollapse, { summary: (toc: string) => toc, test: CONTENTS_PATTERN }],
        ],

        shikiConfig: {
            theme: "dark-plus", // used for dark and light themes
            wrap: true,
        },
    },
    output: "static",
    scopedStyleStrategy: "where",
    site: SITE.url,
})
