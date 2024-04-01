import type { APIRoute } from "astro"
import { SITE } from "@config"

// TODO: allow when site is ready for indexing
const robotsTxt = `
User-agent: *
Disallow: /

Sitemap: ${new URL("sitemap-index.xml", SITE.url).href}
`.trim()

export const GET: APIRoute = () =>
    new Response(robotsTxt, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    })
