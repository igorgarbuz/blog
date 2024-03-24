import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"
import { SITE } from "./src/config"

// https://astro.build/config
export default defineConfig({
    integrations: [sitemap()],
    markdown: {
        shikiConfig: {
            theme: "dark-plus", // used for dark and light themes
            wrap: true,
        },
    },
    output: "static",
    scopedStyleStrategy: "where",
    site: SITE.url,
})
