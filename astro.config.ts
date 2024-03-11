import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"
import { SITE } from "./src/config"

// https://astro.build/config
export default defineConfig({
    integrations: [sitemap()],
    output: "static",
    scopedStyleStrategy: "where",
    site: SITE.url,
})
