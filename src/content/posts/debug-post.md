---
author: Igor Garbuz
datePublished: 2024-03-23
dateModified: 2024-03-23
title: Debug post
ogImage: /assets/debug-post-og.jpg
isDraft: false
tags:
    - debug
description: Represent general structure and possible types of content
---

<details>
    <summary>Changelog</summary>
[2024-04-06] - Update how tables are rendered
</details>

## Table of contents

## Introduction

WARNING: Paragraph following the "Table of contents" without its own title will be removed by remark-toc. Here "Introduction" is added to prevent this.
The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest. The `<h1>` element is used to represent the main heading of a page, and the `<h2>`—`<h6>` elements are used to represent subheadings. Thus `<h1>` is absent in the .md file.

## Paragraph h2

Here is text under H1 content. Usually H1 title is not used inside the article. Is is only used by the template to generate the page title.

Second paragraph. Claude Elwood Shannon (April 30, 1916 – February 24, 2001) was an American mathematician, electrical engineer, computer scientist and cryptographer known as the "father of information theory". He was the first to describe the Boolean gates (electronic circuits) that are essential to all digital electronic circuits, and he built the first machine learning device, thus founding the field of artificial intelligence. He is credited alongside George Boole for laying the foundations of the Information Age.

Third paragraph. Shannon designed the Minivac 601, a digital computer trainer to teach business people about how computers functioned. It was sold by the Scientific Development Corp starting in 1961.

## H2 - Main section inside the article

Chameleons are also distinguished by their zygodactylous feet, their prehensile tail, their laterally compressed bodies, their head casques, their projectile tongues used for catching prey, their swaying gait, and in some species crests or horns on their brow and snout. Chameleons' eyes are independently mobile, and because of this the chameleon’s brain is constantly analyzing two separate, individual images of its environment. When hunting prey, the eyes focus forward in coordination, affording the animal stereoscopic vision.

### H3 - Some sub-section of H2

Some sub-section of the previous title.
Some chameleon species are able to change their skin coloration. Different chameleon species are able to vary their colouration and pattern through combinations of pink, blue, red, orange, green, black, brown, light blue, yellow, turquoise, and purple.

#### H4 - just for illustration, usually should not go that deep

Some species, such as Smith's dwarf chameleon and several others in the genus Bradypodion, adjust their colors for camouflage depending on the vision of the specific predator species (for example, bird or snake) by which they are being threatened.

##### H5 - just for illustration, usually should not go that deep

Chameleons have two superimposed layers within their skin that control their colors and thermoregulation.

###### H6 - just for illustration, usually should not go that deep

The skin of a chameleon also contains some yellow pigments, which combined with the blue reflected by a relaxed crystal lattice results in the characteristic green colors which is common of many chameleons in their relaxed state.

## Images

#### Syntax

```markdown
![Alt text](./full/or/relative/path/of/image)
```

Here are some examples of how to include images in the content with image caption.

![Nice space image.](https://image.lexica.art/full_webp/140407a6-5252-4774-a1ff-8ee2cf7daf92)

<figcaption>Nice space image. Source: <a href="https://lexica.art/prompt/50a3e4dd-740e-4c00-bb36-a7feff540157" target="_blank">lexica.art. Prompt: "Create an image of a man wandering through space in a spaceship"</a></figcaption>

Testing links in the text, image source is [here](https://lexica.art/prompt/50a3e4dd-740e-4c00-bb36-a7feff540157).
Note that even though caption looks ok below the image, it is not yet semantically correct HTML because image with its caption is not wrapped in `<figure>` tag. This can be achieved by creating a rehype plugin that will create the wrapper around image and its caption.

Here is another image with caption and citation included using pure HTML.

<figure>
    <img src="https://image.lexica.art/full_webp/1b6db6eb-9d3a-4469-8b7c-0a4149048ce5" alt="Illustration of a colony on another planet">
    <figcaption>Colony on another planet. Source: <a href="https://lexica.art/prompt/69be5d50-55a2-4671-abe0-ce34e6a310a8">lexica.art. Prompt: "Beautiful award winning 1950s simple flat 3d art editorial infographics of a moon base..."</a></figcaption>
</figure>

The following image is included from the local blog folder instead of the external source.

![Aesthetic view of another planet colony](@assets/lexica-sample-outer-space-colony.webp)

<figcaption>Another stunning view of future humanity colony on another planet. Source: <a href="https://lexica.art/prompt/69be5d50-55a2-4671-abe0-ce34e6a310a8">lexica.art</a></figcaption>

Above is the image from the local folder, processed and optimized by the build process.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

#### Syntax

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.

## Footnotes

Here is a sentence with a footnote[^r].

[^r]: Lexical.ai with prompt: "Beautiful award winning 1950s simple flat 3D art editorial infographic of a moon base, stunning lighting, perfect focus, neutral white background, epic angle, epic composition, hyper maximalist". Source: [Beautiful award winning 1950s simple flat 3d art editorial infographics](https://lexica.art/prompt/69be5d50-55a2-4671-abe0-ce34e6a310a8)

### Blockquote with footnotes

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Output

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

#### Syntax

```markdown
| Italics   |   Bold   |  Code  |
| :-------- | :------: | :----: |
| _italics_ | **bold** | `code` |
```

#### Output

| Italics   |   Bold   |  Code  |
| :-------- | :------: | :----: |
| _italics_ | **bold** | `code` |

#### Big table

Here is my big table.

|                                 |   V100    |   3090    |   A6000   |        A100        |  A40   |   4090    | 6000 Ada  |    L40     |   L40S    |   H100    |
| ------------------------------- | :-------: | :-------: | :-------: | :----------------: | :----: | :-------: | :-------: | :--------: | :-------: | :-------: |
| Chip                            |   GV100   |   GA102   |   GA102   |       GA100        | GA100  |   AD102   |   AD102   |   AD102    |   AD102   |   GH100   |
| VRAM, GB                        |  16 (32)  |    24     |    48     |      40 (80)       |   48   |    24     |    48     |     48     |    48     |    80     |
| Transistors, 10^9               |   21.1    |   28.3    |   28.3    |         54         |  28.3  |   76.3    |   76.3    |    76.3    |   76.3    |    80     |
| CUDA Cores                      |   5,120   |  10,496   |  10,752   |       6,912        | 10,752 |  16,384   |  18,176   |   18,176   |  18,176   |  14,592   |
| SMs                             |    80     |    82     |    84     |        108         |   84   |    128    |    142    |    142     |    142    |    114    |
| Tensor Cores                    |    640    |    328    |    336    |        432         |  336   |    512    |    568    |    568     |    568    |    456    |
| Memory bandwidth, GB/s          |    897    |    936    |    768    | 1 555 / 1 935 (80) |  696   |   1,008   |    960    |    864     |    864    |   2,039   |
| Memory bus, bits                |   4,096   |    384    |    384    |       5,120        |  384   |    384    |    384    |    384     |    384    |   5,120   |
| Memory speed, Gbps              |    1.8    |   19.5    |    16     |       2 (3)        |  14.5  |    21     |    20     |     18     |    18     |    3.2    |
| Clock Memory, GHz               |    0.9    |    1.2    |     2     |     1.2 / 1.5      |  1.8   |    1.3    |    2.5    |    2.5     |    2.5    |    1.6    |
| L2 cache, MB                    |     6     |     6     |     6     |    40 / 80 (80)    |   6    |    72     |    96     |     96     |    48     |    50     |
| L1 cache, KB (per SM)           |    128    |    128    |    128    |        192         |  128   |    128    |    128    |    128     |    128    |    256    |
| Clock, GHz                      | 1.2 (1.4) | 1.4 (1.7) | 1.4 (1.8) |  0.8 / 1.1 (1.4)   | 1,305  | 2.2 (2.5) | 0.9 (2.5) | 0.74 (2.5) | 1.1 (2.5) | 1.1 (1.8) |
| Power == TDP, W                 |    300    |    350    |    300    |     250 (300)      |  300   |    450    |    300    |    300     |    300    |    350    |
| Process, nm                     |    12     |     8     |     8     |         7          |   8    |     4     |     4     |     5      |     5     |     4     |
| Tensor Cores gen                |     2     |     3     |     3     |         3          |   3    |     4     |     4     |     4      |     4     |     4     |
| TFLOPS FP32 (not-tensor)        |    14     |    36     |    38     |        19.5        |  37.4  |   82.6    |    91     |     91     |    92     |    51     |
| TFLOPS TF32                     |    14     |    36     |    77     |        156         |  37.4  |   82.6    |  ? (182)  |     91     |    92     |    378    |
| TFLOPS FP16/BFLOAT16 accum FP32 |    28     |    71     |    154    |        312         |  37.4  |    165    |    182    |     91     |    92     |    756    |
| FP8 with FP16                   |    \-     |    \-     |    \-     |         \-         |   \-   |    660    |    728    |     \-     |    \-     |   1,513   |
| VRAM gen                        |   HBM2    |  GDDR6X   |   GDDR6   |       HBM2e        | GDDR6  |  GDDR6X   |   GDDR6   |   GDDR6    |   GDDR6   |   HBM2e   |

## Code Blocks

#### Syntax

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Example HTML5 Document</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```
````

Output

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Example HTML5 Document</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```

#### Some more examples of different languages

```bash
git clone https://github.com/pytorch/pytorch.git
```

```ts
export default defineConfig({
    integrations: [sitemap()],
    output: "static",
    scopedStyleStrategy: "where",
    site: SITE.url,
})
```

```js
function sayHelloInFiveSeconds(name) {
    var prompt = "Hello, " + name + "!"
    // Inner functions are put in the local scope by default, as if they were
    // declared with `var`.
    function inner() {
        alert(prompt)
    }
    setTimeout(inner, 5000)
    // setTimeout is asynchronous, so the sayHelloInFiveSeconds function will
    // exit immediately, and setTimeout will call inner afterwards. However,
    // because inner is "closed over" sayHelloInFiveSeconds, inner still has
    // access to the `prompt` variable when it is finally called.
}
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
-   List item
-   Another item
-   And another item
```

#### Output

-   List item
-   Another item
-   And another item

### Nested list

#### Syntax

```markdown
-   Fruit
    -   Apple
    -   Orange
    -   Banana
-   Dairy
    -   Milk
    -   Cheese
```

#### Output

-   Fruit
    -   Apple
    -   Orange
    -   Banana
-   Dairy
    -   Milk
    -   Cheese

## Other Elements — abbr, sub, sup, kbd, mark

#### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

#### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

## Latex using MathJax

$$

f(x) = x^2


$$

Another latex formula:

$$

E = mc^2


$$

Maxwell's equation - Faraday's law

$$

\oint_C {E \cdot d\ell = - \frac{d}{{dt}}} \int_S {B_n dA}


$$

Lets try a very long equation that should overflow the container.
Below is "Reverse Process Variational Lower Bound Decomposition Multiple KL-Divergence"

$$
\begin{aligned}L_\text{VLB} &amp;= \mathbb{E}_{q(\mathbf{x}_{0:T})} \Big[ \log\frac{q(\mathbf{x}_{1:T}\vert\mathbf{x}_0)}{p_\theta(\mathbf{x}_{0:T})} \Big] \\&amp;= \mathbb{E}_q \Big[ \log\frac{\prod_{t=1}^T q(\mathbf{x}_t\vert\mathbf{x}_{t-1})}{ p_\theta(\mathbf{x}_T) \prod_{t=1}^T p_\theta(\mathbf{x}_{t-1} \vert\mathbf{x}_t) } \Big] \\&amp;= \mathbb{E}_q [\underbrace{D_\text{KL}(q(\mathbf{x}_T \vert \mathbf{x}_0) \parallel p_\theta(\mathbf{x}_T))}_{L_T} + \sum_{t=2}^T \underbrace{D_\text{KL}(q(\mathbf{x}_{t-1} \vert \mathbf{x}_t, \mathbf{x}_0) \parallel p_\theta(\mathbf{x}_{t-1} \vert\mathbf{x}_t))}_{L_{t-1}} \underbrace{- \log p_\theta(\mathbf{x}_0 \vert \mathbf{x}_1)}_{L_0} ]\end{aligned}
$$
