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

-   [-] Test site OG image works
-   [-] Move RSS to the bottom + add icon
-   [-] Create and write About page
-   [ ] Move Theme ico to the logo side
-   [ ] Add on click scaleZ to cards to add visual feedback. Check if it works on mobile or disable
-   [ ] Add sort posts by datePublished or dateModified
-   [ ] Add Updates section with a date + changes in an article
-   [ ] Scroll-to-top button
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
-   [ ] Perfect accessibility rating
-   [ ] Great lighthouse scores
-   [ ] Layout: Decide if the ogImage should be on top of the post. Thus increasing the header width to match the post header width.
-   [ ] Pagination for when having many posts
-   [ ] Post images in folders at md file level, optimized for web
-   [ ] Posts tags management (may need when many posts on different topics)
-   [ ] Remove all hardcoded css values and use css variables
-   [ ] Remove unused CSS variables
-   [ ] Tested on Windows and Linux, in Firefox, Chrome, and Edge, on Mobile
-   [ ] Uniform border-radius and reduce number of vars
-   [x] Invert theme icon so it shown intention of the button, not the current state
-   [x] Fix: cards color blink on refresh
-   [x] Add header link isActive indicator
-   [x] Fix: on mobile Cards and buttons with hover color stay highlighted after click
-   [x] Automatic Table for contents
-   [x] Better styling of `blockquote`
-   [x] Code syntax highlighting
-   [x] Error page
-   [x] H1 H2 H3 H4 H5 H6 proper styling
-   [x] Header menu links remove hover and increase clickable area
-   [x] Inline code proper styling
-   [x] Latex support
-   [x] Light/Dark mode switch without flickering on page load
-   [x] Posts cards in the home page
-   [x] RSS
-   [x] Remove unused pages from header menu
-   [x] Robots.txt
-   [x] Setup auto-deploy on push to main
-   [x] Sitemap
