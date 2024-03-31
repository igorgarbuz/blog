# Simple Astro blog project for technical and scientific writing

My writing space I starting from a need to own my writing as not existing solution seemed to find something I was looking for. Main wished for this blog are:

-   SSG
-   markdown with latex support
-   extendable with Remark/Rehype plugins
-   minimal non-Dev dependencies
-   bare html/css syntax
-   minimal client side JS
-   no color flickering or layout shift
-   dark/light theme switch
-   proper code syntax highlighting
-   good SEO

Astro framework seems to satisfy these criteria. It provides out-of-the-box support for markdown. It also automatically scopes styles to components by coming-up with class-names so once can write bare css in a component without worrying to affect global styles.

## Features wishlist (alpha order, but top priority first)

-   [-] Setup auto-deploy on push to main
-   [-] Scroll-to-top button
-   [ ] Add Updates section with a date + changes in an article
-   [ ] Add auto OpenGraph and Twitter card generation
-   [ ] Add git pre-push hooks for linting / testing
-   [ ] Add search (use /components/SearchButton.astro)
-   [ ] Allow indexing through robots.txt (when everything is ready)
-   [ ] Better colors. Consider oklch colors if any saturated value. For current dark low-chroma colors rgb should be ok.
-   [ ] Better md footnotes styling
-   [ ] Citations management using BibTeX
-   [ ] Configure astro to remove css comments and optimize css
-   [ ] Decent SEO
-   [ ] Estimated reading time (still think if need this?)
-   [ ] Fix: Images in MD automatically properly wrapped into `<figure>` with child `<figcaption>`. Probably through rehype plugin.
-   [ ] Fix: remark-toc should not remove a paragraph following the "Table of contents" without its own title
-   [ ] Good accessibility rating
-   [ ] Great lighthouse scores
-   [ ] Layout: Decide if the ogImage should be on top of the post. Thus increasing the header width to match the post header width.
-   [ ] Pagination for when having many posts
-   [ ] Post images in folders at md file level, optimized for web
-   [ ] Posts tags management (may need when many posts on different topics)
-   [ ] Remove all hardcoded css values and use css variables
-   [ ] Remove unused CSS variables
-   [ ] Tested on Windows and Linux, in Firefox, Chrome, and Edge
-   [ ] Uniform border-radius and reduce number of vars
-   [x] Add header link isActive indicator
-   [x] Error page
-   [x] Remove unused pages from header menu
-   [x] Automatic Table for contents
-   [x] Better styling of `blockquote`
-   [x] Code syntax highlighting
-   [x] H1 H2 H3 H4 H5 H6 proper styling
-   [x] Header menu links remove hover and increase clickable area
-   [x] Inline code proper styling
-   [x] Latex support
-   [x] Light/Dark mode switch without flickering on page load
-   [x] Posts cards in the home page
-   [x] RSS
-   [x] Robots.txt
-   [x] Sitemap
