# Simple Astro blog project for technical and scientific writing

My writing space I starting from a need to own my writing as not existing solution seemed to find something I was looking for. Main requirements were: SSG, markdown support, extendable with Remark/Rehype plugins, lightweight for fast loading and easy to deploy. I also wanted to have a default dark mode, proper code syntax highlighting.

## Features wishlist (alpha order, but top priority first)

-   [-] RSS
-   [ ] Add git pre-push hooks for linting / testing
-   [ ] Better colors. Consider oklch colors if any saturated value. For current dark low-chroma colors rgb should be ok.
-   [ ] Better md footnotes styling
-   [ ] Citations management using BibTeX
-   [ ] Estimated reading time (still think if need this?)
-   [ ] Fix: remark-toc should not remove a paragraph following the "Table of contents" without its own title
-   [ ] Pagination for when have many posts
-   [ ] Decent SEO
-   [ ] Great lighthouse scores
-   [ ] Some Analytics
-   [ ] Header menu links remove hover and increase clickable area
-   [ ] Images properly wrapped into `<figure>` with child `<figcaption>`
-   [ ] Post images in folders at md file level, optimized for web
-   [ ] Posts tags management (may need when many posts on different topics)
-   [ ] Remove all hardcoded css values and use css variables
-   [ ] Reduce quantity of client-side JS by moving some pre-processing to html with rehype plugins
-   [ ] Remove unused CSS variables
-   [ ] Robots.txt
-   [ ] Scroll-to-top button
-   [ ] Search
-   [ ] Sitemap
-   [ ] Tested on Windows and Linux, in Firefox, Chrome, and Edge
-   [x] Automatic Table for contents
-   [x] Better styling of `blockquote`
-   [x] Code syntax highlighting
-   [x] H1 H2 H3 H4 H5 H6 proper styling
-   [x] Inline code proper styling
-   [x] Latex support
-   [x] Light/Dark mode switch without flickering on page load
