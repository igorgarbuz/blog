---
author: Igor Garbuz
datePublished: 2024-04-11
title: Why Building Your Own Technical Blog
ogImage: /assets/why-to-build-your-blog-og.jpg
isDraft: false
tags:
    - Blog
    - DevWeb
description: Why bother when there are so many options to choose from (Substack, Medium, X …)? Some thoughts on the matter and the main motivations.
---

## Table of Contents

## Introduction

Why bother creating your blog wewhen there are so many options to choose from (Substack, Medium, X …)? Some thoughts on the matter and the main motivations.

Prior to this writing space, I had been taking notes in my personal journals, delaying the realization that I should start publishing some potentially useful content online. So, why not use an existing platform like Substack, Medium, Ghost, or X (formerly Twitter)? These are very reasonable options, and many people, including myself, have faced the same question.

## Motivations

The main tiebreaker for me was the need to actually own the "source code" of my content, being able to export it and publish it elsewhere. One never knows how long a given platform will exist or whether it will get banned in a new region. This raises the question of the actual format. Since everything is eventually converted to HTML, the source is usually written in a proprietary WYSIWYG editor. An alternative to this is writing in Markdown. Here, the choices become very limited. Possibly [Ghost](https://ghost.org/), but it feels a bit pricey, if used as SaaS, and feature-heavy for a simple personal blog. E.g [HN post](https://news.ycombinator.com/item?id=36659219) covers Ghost vs other options.

While pondering this, several months ago, I stumbled upon an interesting tweet from Andrej Karpathy that shared a similar concern.

<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Thinking about the ideal blogging platform:<br><br>1. Writing: <br>- in markdown<br>- with full WYSIWYG, not just split view (think: Typora)<br>- super easy to copy paste and add images<br>2. Deploying:<br>- renders into static pages (think: Jekyll)<br>- super simple, super minimal html with no bloat<br>-…</p>&mdash; Andrej Karpathy (@karpathy) <a href="https://twitter.com/karpathy/status/1751350002281300461?ref_src=twsrc%5Etfw">January 27, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It was a reminder that I'm not alone in this quest and that there is possibly no perfect solution yet. It also raised a good point about the desirability of having a WYSIWYG-like rich editor for Markdown. For the latter, there are several options, but the most prominent are: [Obisidian](https://obsidian.md/) and [Typora](https://typora.io/). So, if using Markdown, the question of having a local WYSIWYG editor could be considered resolved.

## Features Wishlist

While realizing that I would need to build my own blog, I made a list of all the things I need:

-   Markdown to HTML
-   Code syntax highlighting
-   LaTex
-   Nice url
-   Control over meta tags
-   Basic analytics
-   SSG and lightweight
-   Heading links
-   RSS feed

To elaborate a little, having control over meta tags allows to control how a post is displayed in social platform cards and in search results. SSG stands for the static site generation.

This list was promptly augmented with the following requirements:

-   Bare HTML/CSS with minimal non-dev dependencies
-   Dark/light theme switch
-   No color flickering or layout shift
-   Minimal client side JavaScript
-   Remark/Rehype plugins integration
-   Search functionality

Here, I referred to "minimal non-dev dependencies" meaning I'm comfortable with utilizing all the linting and prettifying tools that make life easier. If one of them breaks, can simply remove it and the website will still be built and deployed.

## What About a Framework?

Using bare HTML, CSS with some JS would be ideal in the ideal world. However, the reality is such that parsing the markdown with latex, using component-based design and having minimal client-site JS would require a lot of boilerplate code. So picking a right framework is the next step.

### Selecting a Framework

There are several popular projects offering SSG like [Jekyll](https://jekyllrb.com/), [Hugo](https://gohugo.io/), [Gatsby](https://www.gatsbyjs.com/), [Astro](https://astro.build/), and many others. Some other widespread frameworks supporting SSR (server side rendering) [SvelteKit](https://kit.svelte.dev/) and [Next.js](https://nextjs.org/) have vibrant ecosystems and can be configured to output static pages.

When choosing one, there are factors like familiarity with a given framework and a preferred tool-set. So the right answer would be quite different for different people.

Being familiar with React, I didn't want to use React or Next.js, which is built on top of it, for a simple SSG website. After reviewing the corresponding GitHub repositories, Reddit, and documentation, I was torn between Astro and SvelteKit. My preference leaned towards these options mainly for the ability to write bare HTML and CSS styles without relying on a specific templating language, and because the core libraries are written in JS/TS. Unified language across the stack allows for type inference and quick look into libraries implementation from the same IDE. Additionally, both frameworks are rapidly developing and have strong community support.

### SvelteKit vs Astro

For SvelteKit, I stumbled upon a very engaging article on [Joy Of Code](https://joyofcode.xyz/sveltekit-markdown-blog) and its [GitHub repository](https://github.com/joysofcode/sveltekit-markdown-blog) by [Matia](https://twitter.com/joyofcodedev). SvelteKit does not support markdown out of the box, but fortunately there is [MDsveX](https://mdsvex.pngwn.io/). Minor drawback, mdsvex lacks integration with Remark/Rehype plugins, and requires a bit of hacking around. I tried to make it work with MathJax for LaTex syntax support, but after spending an hour I've realized that MDsveX can possibly move away from unified ecosystem (c.f [issue](https://github.com/pngwn/MDsveX/discussions/259)). This can make MathJax integration a bit more challenging and less future-proof.

Astro boasts a quite lightweight development environment, and when I tested it with a MathJax plugin, it worked seamlessly. The Shiki code highlighter is even bundled with Astro. With the framework choice settled, I didn't conduct further extensive tests, but I figured that in the worst-case scenario, I could take all the HTML/CSS/JS and relatively easily migrate it to something else.

As a starting point, here is my Astro config file `astro.config.ts`, where I've added a table of contents and a collapsible section plugin. It is noticeably simple.

```typescript
const CONTENTS_PATTERN = "table of contents"

export default defineConfig({
    integrations: [sitemap()],
    markdown: {
        rehypePlugins: [rehypeMathjax],
        remarkPlugins: [
            [remarkToc, { heading: CONTENTS_PATTERN }],
            [
                remarkCollapse,
                {
                    summary: (toc: string) => toc,
                    test: CONTENTS_PATTERN,
                },
            ],
            remarkMath,
        ],x
        shikiConfig: {
            theme: "dark-plus",
            wrap: true,
        },
    },
    output: "static",
    scopedStyleStrategy: "where",
    site: SITE.url,
})
```

## Further Design Decisions

There is a list of features I made in the project's README file to be added in the feature [GitHub repository](https://github.com/igorgarbuz/blog). Some are already implemented and could be interesting to look at.

For the styling I've briefly considered Tailwind CSS, but for a simple project like this, I've preferred the bare CSS. This also aligns with a "minimal non-dev dependencies" requirement.

So for the LaTex syntax there are two main librairies available, MathJax and Katex. I tried both and they both work well. However, MathJax is a bit more feature-rich and more importantly it is implemented in Obsidian and Wikipedia. So I decided to stick with MathJax for a better compatibility.

For the code highlighting, default Shiki work well. Only thing it needs is a "Copy" button. I made a quick-and-dirty implementation of the button using the client-side JS, but it will be replaced by the `expressive-code` Astro plugin.

Hosting on Cloudflare Pages was a quick solution given the free tier package, an integrated anonymized analytics and a good CDN. I've also purchased a domain name form Cloudflare, so the whole setup is even more streamlined.

### UI Design

The design of the blog is quite minimalistic. The main focus is on the content, so the layout is quite simple. Not to miss some general guidelines I've picked a book suggested by Matia in his blog "Refactoring UI" - it is concise crash-course on basics of the web design. Curiously, it is written by the same authors as Tailwind CSS that I briefly considered for the project.

![Refactoring UI](@assets/refactoring-ui-book-cover.webp)

## Conclusion

The main reasons for building my tech-oriented blog were the need to own the content, the desire to write in Markdown with LaTeX support and customizable code highlighting, and the ability to extend it with Remark/Rehype plugins. The Astro framework satisfied these criteria and provided out-of-the-box support for markdown. It also automatically scopes styles to components by coming up with class names. However, this is not a one-size-fits-all solution, and the choice of a framework should be based on personal preferences and project requirements.
