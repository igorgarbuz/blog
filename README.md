# Simple Astro blog project for technical and scientific writing

## Check it out 👉 [here](https://iglog.me)

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
-   good social cards and search results formatting

Astro framework seems to satisfy these criteria. It provides out-of-the-box support for markdown. It also automatically scopes styles to components by coming-up with class-names so once can write bare css in a component without worrying to affect global styles.

## Features wishlist

-   [ ] Add OpenGraph (ogImage) image generation
-   [ ] Add buttons next / prev post in the bottom of the post
-   [ ] Add changelog as posts frontmatter array property `date` and `changes`. Make dateUpdated been the last change date. Changelog section should be added to the end of the post through the post layout.
-   [ ] Add search (can wait till I have ~10 posts)
-   [ ] Add sort posts by datePublished or dateModified button. Default is datePublished
-   [ ] Add the comment section (not sure if I need this)
-   [ ] Alight Shiki code blocks background with the theme
-   [ ] Automatic broken links checker?
-   [ ] Better Markdown footnotes styling
-   [ ] Citations management using BibTeX
-   [ ] Convert colors to HSL & refine the palette
-   [ ] Each post with within its folder with corresponding assets instead of a single folder with all the images
-   [ ] Estimated reading time (still thinking if this is needed)
-   [ ] Fix: Images in MD should be properly wrapped into `<figure>` with child `<figcaption>`. Probably need a rehype plugin.
-   [ ] Fix: large tables cannot overflow. Need to wrap tables into a div with `overflow-x: auto`. This is a common practice on Wikipedia. Use a Rehype plugin
-   [ ] Fix: low resolution favicon in google the search results
-   [ ] Fix: remark-toc should not remove a paragraph following the "Table of contents" without its own title
-   [ ] Images auto-numbering for referencing (fig. 1, fig. 2, etc.)
-   [ ] Improve CSS tree-shaking https://github.com/codiume/orbit/tree/main/packages/astro-purgecss
-   [ ] Migrate code snippets to [expressive-code](https://github.com/expressive-code/expressive-code) Astro plugin to avoid adding copy button to the client-side JS
-   [ ] Pagination for when having many posts
-   [ ] Proper post tags page (wait till there are more posts)
-   [ ] Publish lighthouse scores
-   [ ] Remove all hardcoded css values and use css variables instead
-   [ ] Remove unused CSS variables
-   [ ] Scroll-to-top button
-   [ ] Uniform border-radiuses and reduce number of different ones
-   [x] Automatic Table of contents
-   [x] Error 404 page
-   [x] LaTeX equations syntax support
-   [x] Light/Dark mode switch without color flickering on page load
-   [x] RSS
-   [x] SEO tags
-   [x] Setup auto-deploy on push to main
-   [x] Sitemap

## Technical notes

### Specifying \_headers

Return headers are usually well defined by the providers like Netlify or Vercel. However, if you need to specify custom headers, you can do it in the `_headers` file. For example, to specify a custom header for the RSS feed, you can add the following line to the `_headers` file:

```
/rss.xml
  Content-Type: application/rss+xml; charset=utf-8
  Cache-Control: public, max-age=3600
```

which is a more specific than the default `text/xml` c.f StackOverflow [answer](https://stackoverflow.com/questions/595616/what-is-the-correct-mime-type-to-use-for-an-rss-feed).

For all other pages `X-Frame-Options: SAMEORIGIN` is set to prevent clickjacking. `X-Content-Type-Options: nosniff` to prevent MIME type sniffing. `Referrer-Policy: strict-origin-when-cross-origin` to prevent leaking of the referrer to other sites.

```
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

These values are set by default by most providers, but we can specify it here to make it more explicit.

### Color palette

The color palette is defined int `/src/styles/themes.css`. It is designed with a goal of simplicity and smallest necessary number of colors.

It's possible to mage this pallet even smaller by removing the `--color-txt-highlight` color and managing links hover highlight by the `opacity` property.
Hoverer, in practice reducing the opacity works well only for the primary text color. For the secondary low-contrast text `--color-txt-secondary` the best is to increase the lightness, which is the opposite to the decrease opacity.

The `--color-bg-highlight` variable can be better named `--color-bg-secondary-hover`, but for this project it was needed needed to highlight the primary background on hover, so the named is shortened.

Here the following methodology of color picking was used:

-   Roughly pick tones in the RGB space. RGB is help for reasoning about color temperature more red is warmer, more blue is colder.
-   Convert the RGB to HSL (or OKLCH with you work with wider gamut) and fine-tune the lightness and chroma.

This worked well mainly because this is almost the B&W theme. Slight nuances or blue or red set the mood. For themes with many colors, it would be better to start directly with HSL or OKLCH.
