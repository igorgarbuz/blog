# Simple Astro blog project for technical and scientific writing

My writing space I starting from a need to own my writing as not existing solution seemed to find something I was looking for. Main requirements were: SSG, markdown support, extendable with Remark/Rehype plugins, lightweight for fast loading and easy to deploy. I also wanted to have a default dark mode, proper code syntax highlighting.

## Features wishlist

-   [ ] Better colors. Consider oklch colors if any saturated value. For current dark low-chroma colors rgb should be ok.
-   [ ] Better md footnotes styling
-   [ ] Citations management using BibTeX
-   [ ] Estimated reading time (do I really need this?)
-   [ ] Fix: remark-toc should not remove a paragraph following the "Table of contents" without its own title
-   [ ] Good SEO
-   [ ] Good lighthouse scores
-   [ ] Google Analytics
-   [ ] Images properly wrapped into `<figure>` with child `<figcaption>`
-   [-] Inline code proper styling
-   [--] Latex support
-   [ ] `blockquote` better styling
-   [ ] Post images in folders at md file level, still optimized for web
-   [ ] Posts tags management (may need when many posts on different topics)
-   [ ] Remove unused CSS variables
-   [ ] RSS
-   [ ] Robots.txt
-   [ ] Add eslint [accessibility check](https://ota-meshi.github.io/eslint-plugin-astro/user-guide/) `eslint-plugin-jsx-a11y`
-   [ ] Scroll-to-top button
-   [ ] Search
-   [ ] Sitemap
-   [ ] Tested on Windows and Linux, in Firefox, Chrome, and Edge
-   [x] Automatic Table for contents
-   [x] Code syntax highlighting
-   [x] Light/Dark mode switch without flickering on page load
