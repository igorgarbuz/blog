---
author: Igor Garbuz
datePublished: 2024-04-19
title: Why Build Your Tech Blog from Scratch
ogImage: /assets/why-build-your-blog-og.jpg
isDraft: false
tags:
    - Blog
    - WebDev
description: Why bother building a blog despite the plethora of platforms like Substack, Medium, X, etc.? Explore my thoughts and reasons to use Astro.
---

## Table of Contents

## Who This Article Is For

This article is intended for people who are considering starting their own blog and:

-   Plan to write content that delves into technical or scientific topics
-   Want to own all aspects of their content
-   Are familiar with the basics of web development
-   Looking for a simple, lightweight and highly customizable solution

## Introduction

Prior to this writing space, I had been taking notes in my personal journals, delaying the realization that I should start publishing some potentially useful content online. So, why not use an existing [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service) platform like Substack, Medium, Ghost, or X (formerly Twitter)? These are very reasonable options, and many people, including myself, have faced the same question.

Jumping ahead, I build this blog with [Astro](https://astro.build/), you can check out the [GitHub repository](https://github.com/igorgarbuz/blog).

## Motivations

### Owning the Content

The main tiebreaker for me was a need to actually own the "source code" of my content, being able to export it and publish it elsewhere. One never knows how long a given platform will exist or whether it will get banned in a new region. This raises a question of the actual format. Since everything published on the Web is eventually converted to [HTML](https://en.wikipedia.org/wiki/HTML), the source on the SaaS platforms is often written in a proprietary [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) editor.

An alternative is writing in an open [markup language](https://en.wikipedia.org/wiki/Markup_language) such as [Markdown](https://en.wikipedia.org/wiki/Markdown), [LaTeX](https://en.wikipedia.org/wiki/LaTeX) or directly in HTML. Here we will put aside HTML due to its verbosity and complexity. Instead, let's focus on Markdown and LaTeX, both of which are designed for editing and publishing. Markdown is prized for its simplicity and a lightweight syntax, LaTeX -- for its expressiveness and precision, exceptionally suited for scientific writing. Mixture of Markdown for general text and LaTeX for equations would be a perfect fit.

Here, the choices become very limited. Among SaaS solutions, possibly [Ghost](https://ghost.org/) or [Notion](https://www.notion.so/). Ghost feels a bit pricey and feature-heavy for a simple personal blog. Notion is a great tool, but it is not a blogging platform per se and lacks some features like a custom domain.

### Owning the Layout

Another reason for building my blog was a need to have a full control over the layout. This includes the ability to customize the design, add new features and integrate with other tools. For instance, I wanted to have a dark/light theme switch, particular style for tables, increased margins for lists and equations, etc. These features are not always available on SaaS platforms, and even if they are, they may not be customizable to the extent I would like.

### Closing Thoughts on Motivations

From this point, I began considering creating my own self-hosted blog. This would enable me to write in Markdown and LaTeX, incorporate customizable code highlighting, and include several other features that I will discuss later.

While still pondering this I stumbled upon a tweet titled ["Thinking about the ideal blogging platform"](https://x.com/karpathy/status/1751350002281300461) from Andrej Karpathy sharing a similar concern.

[![Tweet Karpathy size-medium](@assets/karpathy-tweet-blogging-platform.webp)](https://x.com/karpathy/status/1751350002281300461)

It also raised a good point about a desirability of having a WYSIWYG-like rich editor for Markdown. For the latter, there are several options, but the most prominent are: [Obisidian](https://obsidian.md/) and [Typora](https://typora.io/). So, if using Markdown, the question of having a local WYSIWYG editor could be considered resolved by these tools with some scripting for export compatibility.

## Features Wishlist

After deciding to build my blog there is a list of the things I need:

-   Markdown
-   Code syntax highlighting
-   LaTeX
-   Nice domain name
-   Basic analytics
-   [SSG](https://en.wikipedia.org/wiki/Static_site_generator) and lightweight
-   RSS feed
-   Search functionality

To elaborate a little, SSG stands for the static site generation, as opposed to SSR (server side rendering) and CSR (client side rendering). It enables fastest page load times and a better user experience.

The wishlist was promptly augmented with the following requirements:

-   Bare HTML/[CSS](https://www.w3schools.com/css/default.asp) with minimal non-dev dependencies
-   Dark/light theme switch
-   No theme colors flickering or layout shift
-   Minimal client side JavaScript
-   Well defined [meta tags](https://en.wikipedia.org/wiki/Meta_element) & [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization)
-   Scroll to a particular heading encoded in URL
-   Remark/Rehype plugins integration
-   Use [TypeScript](https://www.w3schools.com/typescript/index.php) instead of bare JavaScript

Here, meta tags allow control over how a post is displayed on social platform cards and in search results. The Remark/Rehype plugins ecosystem enables extensive customization and features, such as automatic table of contents, collapsible sections and LaTeX equations syntax support. The reference to "minimal non-dev dependencies" suggests that over-relying on external production-related libraries can bring more hassle than benefit in the long run due to increased complexity and lower reliability. On the other hand, development tools, such as [linters](<https://en.wikipedia.org/wiki/Lint_(software)>) and prettifiers, usually increase developer productivity and if one becomes deprecated, it can be removed without affecting the website's build and deployment process. Moreover, I prefer TypeScript over JavaScript because it offers type inference and I have an overall better developer experience with it. This preference is not a strict requirement, properly done JavaScript can be almost as effective.

Not all of these features are implemented yet, a complete list of features and their status can be found in the [GitHub repository](https://github.com/igorgarbuz/blog).

## What About a Framework?

Using bare HTML, CSS with some [JS](https://www.w3schools.com/js/) (JavaScript) would be ideal in the ideal world. However, the reality is such that parsing the markdown with LaTeX, using component-based design and having minimal client-site JS requires a lot of boilerplate code. So picking a right framework is the next step.

### Selecting a Framework

There are several popular projects offering blog-focused Static Site Generation (SSG), such as [Jekyll](https://jekyllrb.com/), [Hugo](https://gohugo.io/), [Gatsby](https://www.gatsbyjs.com/), [Astro](https://astro.build/), and many others. Additionally, several other widespread frameworks supporting SSG along with server-side rendering (SSR) and client-side rendering (CSR): [SvelteKit](https://kit.svelte.dev/), [React](https://react.dev/) and [Next.js](https://nextjs.org/) -- all three have vibrant ecosystems and can be configured to output static pages.

When choosing a tool, the familiarity with a given toolset is also an important criterion to ensure speed. Therefore, the right choice can vary significantly from person to person.

Being familiar with React and Next.js, I consider these frameworks as very capable candidates for a blog. There are popular librairies that enable writing [MDX](https://mdxjs.com/docs/what-is-mdx/) components in React and Next.js. MDX is a superset of Markdown with additional [JSX](https://www.w3schools.com/react/react_jsx.asp) syntax support and simply copy-pasting Markdown in MDX will work seamlessly. On the other hand, most of the documentation and features of React and Next.js are built around the SSR paradigm. This approach often feels too heavy and can introduce some unnecessary complexity.

While Jekyll, Hugo, and Gatsby offer simple and quick solutions with numerous available templates, customizing a template can lead to a significant amount of time spent understanding the template's codebase and resolving issues. Building a basic blog from scratch can be accomplished in just one evening. Therefore, I think that the final choice should be based on the simplicity of the toolset and its future-proofness rather than the availability of templates.

After reviewing the corresponding GitHub repositories, documentation, and subreddits, I was torn between Astro and SvelteKit.

### SvelteKit vs Astro

My preference leaned towards these two options mainly due to the following:

| Framework | Strengths                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------- |
| Astro     | - native Markdown support<br />- can write bare HTML/CSS<br /> - simple & intuitive<br />- JS/TS core |
| SvelteKit | - simple & intuitive<br />- JS/TS core                                                                |

Both frameworks' core libraries are written in JS/TS. Using a unified language across the stack enhances the development experience by facilitating type inference and allowing a quick look into libraries' implementations with a click. Additionally, both Astro and SvelteKit feature vibrant and robust ecosystems. SvelteKit is built on top of Svelte, which boasts a simple and intuitive syntax. Similarly, Astro is inspired by SvelteKit and offers comparable simplicity.

For the SvelteKit, I stumbled upon an engaging tutorial ["SvelteKit Markdown Blog"](https://joyofcode.xyz/sveltekit-markdown-blog), with its corresponding [GitHub repository](https://github.com/joysofcode/sveltekit-markdown-blog) and [YouTube video](https://youtu.be/RhScu3uqGd0) by [Matia](https://twitter.com/joyofcodedev). SvelteKit does not support Markdown out of the box, fortunately there is [MDsveX](https://mdsvex.pngwn.io/). The downside is its lack integration with Remark/Rehype plugins ecosystem and some other popular plugins like the popular code highlighter [Shiki](https://shiki.matsu.io/). In his tutorial, Matia shows a workaround for conflicting syntaxes to make shiki work in SvelteKit. When I tried to add the MathJax (needed for LaTeX), it required an extra effort and hacking. I've also found an article stating that MDsveX can possibly move away from unified ecosystem (c.f [issue](https://github.com/pngwn/MDsveX/discussions/259)). This can make MathJax integration a bit more challenging and less future-proof, cooled my interest for SvelteKit as a Markdown blog solution, at least for now.

Regarding Astro, there are many existing examples, and their documentation describes the blog-building process well. When I tested it with a MathJax plugin, it worked seamlessly. The Shiki code highlighter is bundled with Astro, which is convenient. Another useful feature is the official support for popular framework components, including React and Svelte components, within an Astro project, making it highly customizable.

From this point, the framework choice seems settled, and I can start building. I didn’t conduct further tests because, in the worst case, I could take all the HTML/CSS/JS and relatively easily migrate it to something else.

## Further Design Decisions

### Styling

For the styling, I've briefly considered quite popular [Tailwind CSS](https://tailwindcss.com/), but for a simple project like this, I've preferred using plain CSS. This choice also aligns with an initial requirement to reduce non-developer dependencies.

### Layout

Blogs typically feature various common layouts, with two of the most popular being:

-   [Hero image](https://vwo.com/glossary/hero-image/)
-   Boxed width

I have chosen the boxed width layout for its simplicity and relevance to technical writing. The hero image layout is more prevalent in business blogs, although some templates on Medium and Substack also utilize it. Finding a high-quality image for the hero section can be time-consuming and may detract from the primary content.

However, the hero image layout offers the advantage of consistency between the webpage and its presentation in social cards. With the development of social platforms and the [open graph protocol](https://ogp.me/) (OG), it's crucial to define the OG image for each post. This image will be displayed when sharing the post on social platforms such as Twitter, Facebook, Reddit, and others. When using a hero layout, typically the same image is included in the OG meta tags and displayed on the social cards, although it can be modified by overlaying the title or other text data.

For the boxed width layout, the OG image can be specified in the blog post parameters or generated programmatically during the build process. Generating the OG image usually involves using a predefined HTML template that aligns with the website design. This template is then populated with the post title, author, and other relevant information before being converted to a raster image. I may implement this in the future, but for now, I will use simple raster illustrations.

### LaTeX

For LaTeX syntax, there are two main libraries available: MathJax and KaTeX. Both perform well. However, MathJax offers a broader set of features and is notably implemented in Obsidian and Wikipedia. Therefore, I decided to stick with MathJax for better compatibility.

### Code Highlighting

For code highlighting, the default Shiki works well. The only thing it needs is a "Copy" button. I made a quick-and-dirty implementation of this button using client-side JavaScript, but it will be replaced by the `expressive-code` Astro plugin.

### Hosting

Hosting on Cloudflare Pages was a quick solution given the free tier package, integrated anonymized analytics, and a good CDN. I also purchased a domain name from Cloudflare, making the entire setup even more streamlined.

### UI Design

The design of the blog is quite minimalistic. The main focus is on the content and the layout is quite simple. I drew some inspiration from Hugo's theme [PaperMod](https://adityatelange.github.io/hugo-PaperMod/), which I first noticed through Lilian Weng's nice [blog](https://lilianweng.github.io/). For some layout loading optimizations and popular markdown plugins, I've looked into [AstroPaper theme](https://github.com/satnaing/astro-paper).

To not miss some general guidelines, I picked up a book suggested by Matia in his blog—"Refactoring UI". It's a very concise crash-course on the basics of web design, and I highly recommend it to anyone considering publishing something on the web. Interestingly, it's written by the same authors as Tailwind CSS, which I briefly considered for this project.

![Refactoring UI size-small](@assets/refactoring-ui-book-cover.webp)

## Conclusion

My main reasons for building my tech-oriented blog were the need to own the content and layout, as well as to optimize how it is presented on social platforms and in search results (a.k.a SEO). The Astro framework met these needs with its out-of-the-box Markdown support and simple syntax using plain HTML/CSS styling. However, the best tool for the job depends on your unique requirements and familiarity with different platforms and frameworks.

For some, the simplicity of platforms like Substack or Ghost might be the perfect fit. Others may find their needs better met by frameworks they're already familiar with, such as SvelteKit or Next.js. Or perhaps, a template for Hugo or Jekyll could provide the right balance of customization and ease of use.

Ultimately, the key is to explore your options and choose the one that aligns best with your goals and skill set. I encourage you to experiment with different platforms and frameworks to find your perfect fit. The journey of learning and exploration is just as important as the destination.

I'd love to hear about your experiences and the tools you've chosen for your own projects. Feel free to reach out to me on [X](https://twitter.com/igarbuz).
