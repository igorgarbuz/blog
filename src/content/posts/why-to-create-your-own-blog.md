---
author: Igor Garbuz
datePublished: 2024-04-09
title: Why to create your own blog
ogImage: /assets/.jpg
isDraft: false
tags:
    - Blog
    - WebDev
description: Why bother when there are so many options to choose from (Substack, Medium, X …)? Some thoughts on the matter and the main motivations.
---

## Table of contents

## Introduction

Since many years I've been takins notes in my personal journals, delaying the fact that I should start publishing some potentially useful things online. So why not starting to use an existing platform like Substack, Medium, or the recently introduced articles on X (formerly Twitter), or simply use X with its premium plan without 280 chars limit. Those are very reasonable options and many people, including myself, faced the same question.

## Motivations

Main tiebreaker for me was - a need of actually owning the "source code" of my content, being able to export it and publish it elsewhere. One never knows for how long a given platform would exist or whether it gets banned in a new region. This would rise a question of the actual format. Since everything is converted to HTML in the end, the source is usually written in a proprietary WYSIWYG. An alternative to this is writing in the markdown. Here the choices become very limited. Possibly [Ghost](https://ghost.org/), but it's bit pricey for a personal blog and still lucks some features I'm looking for like latex support.

While thinking aver this, several moth ago I've stumbled on an interesting tweet from Andrej Karpathy that shared a similar concern about the lack of the ideal blogging platform.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Thinking about the ideal blogging platform:<br><br>1. Writing: <br>- in markdown<br>- with full WYSIWYG, not just split view (think: Typora)<br>- super easy to copy paste and add images<br>2. Deploying:<br>- renders into static pages (think: Jekyll)<br>- super simple, super minimal html with no bloat<br>-…</p>&mdash; Andrej Karpathy (@karpathy) <a href="https://twitter.com/karpathy/status/1751350002281300461?ref_src=twsrc%5Etfw">January 27, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It was a good reminder that I'm not alone in this quest and there is no perfect solution yet. It also rose a good point that it would be nice to still have a WYSIWYG-like rich editor for markdown. For the latest there are several options, but most prominent are: [Obisidian](https://obsidian.md/) and [Typora](https://typora.io/). So if we have markdown, local WYSIWYG question is already solved.

## Features wishlist

While realizing that I would need to build my own blog, I've made a list of all the things I need from a blog:

-   markdown ownership
-   latex support
-   code syntax highlighting & copy button
-   custom url
-   control over meta tags
-   basic analytics
-   SSG and lightweight

To explain some of them, control over meta tags allows to control how a post is displayed in the social platforms cards and in the search results. Embedding latex and code blocks directly in the markdown is a must for me.

This list was quickly extended with the following:

-   dark/light theme switch
-   no color flickering or layout shift
-   minimal client side JS
-   bare html/css with minimal dependencies
-   Remark/Rehype integration

## Framework or not framework

Using bare HTML, CSS or JS would be ideal in the ideal world. However, the reality is such that parsing the markdown with latex, using component-based design, and having minimal client-site JS would require a lot of boilerplate code. So picking a right framework is the next step.

## What is next ?

There are several popular frameworks offering SSG (static site generation) like [Jekyll](https://jekyllrb.com/), [Hugo](https://gohugo.io/), [Gatsby](https://www.gatsbyjs.com/), [Astro](https://astro.build/), and many others. Some other popular frameworks like [SvelteKit](https://kit.svelte.dev/) and [Next.js](https://nextjs.org/) have vibrant ecosystems and can be configured to output static pages.

Ultimately, there are other factors like familiarity with a given framework or a preferred tool-set. One of my wishlist features was to be able to write bare HTML/CSS.

## Astro vs SvelteKit

After zooming through the corresponding GitHub repositories, Reddit, and documentations I was torn between Astro and SvelteKit. Mainly for the ability to write bare html and css styles without a particular templating language and because the core librairies are written in JS/TS that makes easy the type inference and quickly look through librairies implementations from the same IDE environment. Also both frameworks are quickly developing and have a good community support.

For the SvelteKit I've stumbled on a great [joyofcode article](https://joyofcode.xyz/sveltekit-markdown-blog) and a [GitHub repo](https://github.com/joysofcode/sveltekit-markdown-blog) that was quite inspiring. However, SvelteKit does not support markdown out of the box. Fortunately there is [mdsvex](https://mdsvex.pngwn.io/), but it does not support Remark/Rehype plugins without a bit of hacking around. I tried to make it work with mathjax for latex support, but after spending an hour I've decided to give Astro a try.

Astro is quite lightweight and when I gave it a mathjax plugin test it worked seamlessly, so it was a no-brainer after all. In the worst case, I thought, if I do not like it, I can take all the HTML/CSS and relatively easily migrate it to another framework.

## What I liked so far

Suite of native plugins like RSS or sitemap. Remark/Rehype plugins seamlessly integrated - MathJax, ToC (auto table of contents), auto collapse, etc. The ability to write bare HTML/CSS without a particular templating language. The ability to scope styles to components so Astro comes up with class-names that are unique and transparent to the user.

## Conclusion

This
