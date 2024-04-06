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

## Specifying \_headers

Return headers are usually well defined by the providers like Netlify or Vercel. However, if you need to specify custom headers, you can do it in the `_headers` file. For example, to specify a custom header for the RSS feed, you can add the following line to the `_headers` file:

```
/rss.xml
  Content-Type: application/rss+xml; charset=utf-8
  Cache-Control: public, max-age=3600
```

which is a more specific than the default `text/xml` c.f StackOverflow [answer](https://stackoverflow.com/questions/595616/what-is-the-correct-mime-type-to-use-for-an-rss-feed). However, any will work with most of the feed readers.

For all other pages only `X-Frame-Options: SAMEORIGIN` is set to prevent clickjacking. Other two values

```
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

are just repeated and already present in the default headers.

## Features wishlist (alpha order, but top priority first)

-   [-] Test site OG image works
-   [ ] Add changelog as posts frontmatter array property `date` and `changes`. Make dateUpdated to be the last date in the changes array.
-   [ ] Add auto OpenGraph and Twitter card generation
-   [ ] Add git pre-push hooks for linting / testing
-   [ ] Add on click scaleZ to cards to add visual feedback (not sure I want this)
-   [ ] Add search (can wait till I have ~10 posts. use /components/SearchButton.astro for the icon)
-   [ ] Add sort posts by datePublished or dateModified button. Default is datePublished
-   [ ] Allow indexing through robots.txt (when everything is ready)
-   [ ] Better colors. Consider oklch colors if any saturated value. For current dark low-chroma colors rgb should be ok.
-   [ ] Better md footnotes styling
-   [ ] Citations management using BibTeX
-   [ ] Tree-shaking for css https://github.com/codiume/orbit/tree/main/packages/astro-purgecss
-   [ ] Decent SEO
-   [ ] Estimated reading time (still thinking if this is needed)
-   [ ] Fix how google displays favicon in the search results
-   [ ] Fix: Images in MD automatically properly wrapped into `<figure>` with child `<figcaption>`. Probably through rehype plugin.
-   [ ] Fix: remark-toc should not remove a paragraph following the "Table of contents" without its own title
-   [ ] Great lighthouse scores
-   [ ] Layout: Decide if the ogImage should be on top of the post. Thus increasing the header width to match the post header width.
-   [ ] Migrate code snippets to [expressive-code](https://github.com/expressive-code/expressive-code) Astro plugin to avoid adding copy button with client-side JS
-   [ ] Move Theme ico to the logo side
-   [ ] Pagination for when having many posts
-   [ ] Perfect accessibility rating
-   [ ] Each post with its within a folder inside `posts`, instead a single folder with all images
-   [ ] Proper post tags management (wait till there are more posts)
-   [ ] Remove all hardcoded css values and use css variables
-   [ ] Remove unused CSS variables
-   [ ] Scroll-to-top button
-   [ ] Tested on Windows and Linux, in Firefox, Chrome, and Edge, on Mobile
-   [ ] Uniform border-radiuses and reduce number of different ones
-   [x] Add header link isActive indicator
-   [x] Style tables -- only horizontal lines and no outer border
-   [x] Allow tables to overflow to avoid excessive squeezing of columns (c.f wikipedia on mobile)
-   [x] Adjust line height for the wider screens - on mobile shorter line height, on desktop larger
-   [x] Automatic Table of contents
-   [x] Better styling of `blockquote`
-   [x] Check headings line height holds ok for multi-line headings
-   [x] Code syntax highlighting
-   [x] Create and write About page
-   [x] Error page
-   [x] Fix: cards color blink on refresh
-   [x] Fix: on mobile Cards and buttons with hover color stay highlighted after click
-   [x] H1 H2 H3 H4 H5 H6 proper styling
-   [x] Header menu links remove hover and increase clickable area
-   [x] Improve fonts sizing - h1 must be bigger, scale non-linearly
-   [x] Inline code proper styling
-   [x] Invert theme icon so it shown intention of the button, not the current state
-   [x] Latex support
-   [x] Light/Dark mode switch without flickering on page load
-   [x] Move RSS to the bottom + add icon
-   [x] Posts cards in the home page
-   [x] RSS
-   [x] Remove unused pages from header menu
-   [x] Robots.txt
-   [x] Setup auto-deploy on push to main
-   [x] Sitemap
