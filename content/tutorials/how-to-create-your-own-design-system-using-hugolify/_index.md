---
draft: false
date: 2026-09-02T09:00:00.000Z
title: How to create your own design system with Hugo and Hugolify
description: This tutorial guides you through building a framework-free design
  system on top of hugolify-theme-design-system, then shipping it as a reusable
  Hugo module.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1768396980/597.Collaborative-Work_hdy5p5.svg
hero:
  title: How to create your own design system with Hugo and Hugolify
  text: Build a framework-free design system on top of hugolify-theme-design-system,
    then ship it as a reusable Hugo module.
  surtitle: Tutorial
  image:
    src: https://res.cloudinary.com/uncinq/image/upload/v1768396980/597.Collaborative-Work_hdy5p5.svg
status:
  text: V2
  state: primary
---

## Introduction

**hugolify-theme-design-system** is the framework-free styling module of Hugolify v2: no Bootstrap, no icon font, nothing but design tokens and vanilla CSS. It is a drop-in replacement for **hugolify-theme-bootstrap**: the same templates, the same content, a different look.

Building *your own* design system on top of it is not writing CSS from scratch. It is redefining a handful of **CSS custom properties** and letting them cascade through every component the theme already renders. Change `--color-brand` once and the buttons, links, badges, active menu items and focus rings follow.

This tutorial goes from a fresh v2 project to a design system packaged as its own Hugo module, reusable across several sites.

{{< alert-block title="What you will not do" state="info" >}}
You will not fork the module, you will not copy its CSS into your project, and you will not touch a single template. Everything happens in four files that the module leaves empty for you.
{{< /alert-block >}}

## Prerequisites

* Git, Go and Hugo installed - [See Hugolify documentation](/docs/getting-started/prerequisites/)
* {{< blank_link link="https://gohugo.io/installation/" text="Hugo extended" >}} >= **0.158.0**, required by the styling module
* A Hugolify **v2** project - [See the migration guide](/docs/getting-started/migration/)

{{< alert text="The template's `hugolify-theme-design-system` branch is a ready-to-run v2 project with the module list and the PostCSS config already in place." state="info" >}}

{{< button url="https://github.com/Hugolify/hugolify-template/tree/hugolify-theme-design-system" text="hugolify-template on its design system branch" blank="true" >}}

## Install the modules

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  # Core theme
  - path: github.com/hugolify/hugolify-theme/v2 # HTML and Go Template
  - path: github.com/hugolify/hugolify-theme-design-system # CSS and JS
  - path: github.com/hugolify/hugolify-theme-icons # Lucide and Simple Icons

  # Admin
  - path: github.com/hugolify/hugolify-admin/v2
```

{{< alert text="Icons are a module of their own. The design system ships none: a project without `hugolify-theme-icons` renders no icon. [See Icons](/docs/customization/icons/)." state="warning" >}}

## PostCSS and packages

The CSS pipeline needs a PostCSS config, at the path the module declares (`postcss/design-system`). It has to exist in your project: a module cannot provide it.

{{< button url="/docs/customization/design/design-system/postcss/" text="PostCSS setup" >}}

Then pull the modules and the npm packages they declare:

```bash
hugo mod get && hugo mod npm pack && yarn install
```

## What you are building on

The module ships no reset and no token system of its own: it composes four framework-agnostic npm packages (**@uncinq/design-tokens**, **@uncinq/component-tokens**, **@uncinq/css-base**, **@uncinq/css-components**) and adds the Hugolify layer on top.

What matters for the rest of this tutorial is the **three-level chain** your design system plugs into:

```text
primitive/color.css      → raw values (oklch…)
semantic/color.css       → purposeful aliases (--color-brand, --color-danger…)
components/button.css    → scoped tokens (--btn-color-background, --btn-border-radius…)
```

You will work at the **semantic** and **component** levels, almost never on the primitives. And everything lands in a named cascade layer, so an override must be written into the same layer as the rule it replaces.

{{< button url="/docs/customization/design/design-system/css/" text="Packages, layers and breakpoints" >}}

## The four files your design system lives in

The module ships four **empty** files, imported last by `main.css`, in this order:

```text
tokens/theme.css → tokens/site.css → theme.css → site.css
```

Create the one you need at the same path in your project: Hugo's asset priority (project > theme > modules) replaces the empty file with yours.

They form **two pairs**, and what separates them is not their content but **where each one is destined to live**:

| File | Entry point of | Destined to live in |
| --- | --- | --- |
| `assets/css/tokens/theme.css` | your **theme**, tokens | a Hugo module of your own, shared by several sites |
| `assets/css/theme.css` | your **theme**, rules | a Hugo module of your own, shared by several sites |
| `assets/css/tokens/site.css` | **this site**, tokens | this project, and this project only |
| `assets/css/site.css` | **this site**, rules | this project, and this project only |

The **`theme` files are the entry points of your design system**. They carry the look you intend to reuse: brand colors, typography, radius scale, and the rules that make it recognizable. They are written in the project at first, then moved into a Hugo module of your own, see [Ship it as a module](#ship-it-as-a-module).

The **`site` files are the entry points of one website**. They never become a module. They hold what this project alone needs (a header height for this client, a tweak on this landing page), and they win over the theme module, because the project always beats every module.

```txt
assets/
└── css/
    ├── tokens/
    │   ├── theme.css   ← your design system, tokens      → becomes a module
    │   └── site.css    ← this site only, tokens          → stays here
    ├── theme.css       ← your design system, rules       → becomes a module
    └── site.css        ← this site only, rules           → stays here
```

{{< alert-block title="Which of the two do I write in?" state="info" >}}
Ask yourself what happens on the **next** site you build.

- *I would want this again* → a `theme` file.
- *This is specific to this client, this campaign, this page* → a `site` file.

Building a single site, with no look to share? Use the `site` files only and never touch the theme ones. Nothing forces you to create a module.
{{< /alert-block >}}

## Step 1. Brand colors

Redefine the semantic aliases, not the primitives. Every component reads `--color-brand`, `--color-accent` and their `-hover` / `-muted` / `-strong` variants.

{{< alert text="`/assets/css/tokens/theme.css`" state="light" >}}

```css
@layer tokens {
  :root {
    --color-brand: oklch(0.53 0.195 22);
    --color-brand-hover: oklch(0.46 0.19 22);
    --color-brand-muted: oklch(0.94 0.03 22);
    --color-brand-strong: oklch(0.3 0.13 22);

    /* Accent drives links, active states and focus */
    --color-accent: var(--color-brand);
    --color-accent-hover: var(--color-brand-hover);
  }
}
```

That single block repaints the buttons, the badges, the active menu item, the link hover and the focus outline.

{{< alert-block title="Why OKLCH" state="info" >}}
Colors are authored in {{< blank_link link="https://oklch.com/" text="OKLCH" >}}, whose lightness is perceptually uniform, so a scale built by moving the `L` channel stays visually even.
{{< /alert-block >}}

### Text on brand

A brand color light enough to need dark text has one token to flip:

```css
@layer tokens {
  :root {
    --color-text-on-brand: var(--color-black);
  }
}
```

## Step 2. Typography

### Load your fonts

`assets/css/base/fonts.css` is another empty file the module imports. Declare your faces there.

{{< alert text="`/assets/css/base/fonts.css`" state="light" >}}

```css
@font-face {
  font-display: swap;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  src: url('/assets/fonts/inter-variable.woff2') format('woff2-variations');
}
```

Then point the family tokens at it:

{{< alert text="`/assets/css/tokens/theme.css`" state="light" >}}

```css
@layer tokens {
  :root {
    --font-family-sans: 'Inter', system-ui, sans-serif;
    --font-family-heading: var(--font-family-sans);
    --font-family-text: var(--font-family-sans);
  }
}
```

### Heading scale

Heading sizes are **fluid**: each level references a `clamp()` token, so no media query is involved. To change a heading size, redefine the token, never the selector.

```css
@layer tokens {
  :root {
    --font-size-heading-01: var(--font-size-fluid-2xl);
    --font-size-heading-02: var(--font-size-fluid-xl);
    --font-weight-heading: var(--font-weight-black);
    --line-height-heading: var(--line-height-none);
    --text-transform-heading: uppercase;
  }
}
```

The fluid scale runs from `--font-size-fluid-2xs` to `--font-size-fluid-display`. Redefine one of those and every level that references it moves together.

## Step 3. Shape and spacing

Two semantic aliases carry the whole radius language: `--radius-control` for interactive elements, `--radius-surface` for panels and cards:

```css
@layer tokens {
  :root {
    --radius-control: var(--radius-pill);
    --radius-surface: var(--radius-lg);
  }
}
```

Spacing works the same way, through purpose-named aliases rather than raw sizes:

```css
@layer tokens {
  :root {
    --spacing-section: var(--spacing-fluid-xl); /* vertical rhythm between blocks */
    --spacing-card: var(--spacing-md);
    --gutter: var(--spacing-fluid-sm);          /* .container inline padding */
  }
}
```

### Container width

The container is capped by breakpoint-specific tokens:

```css
@layer tokens {
  :root {
    --container-max-width-laptop: var(--size-laptop);
    --container-max-width-desktop: var(--size-desktop);
  }
}
```

{{< alert-block title="Do not forget the grid params" state="warning" >}}
The `column`, `container`, `gap` and `gutter` **site params** are a different thing: the Go templates read them to compute the pixel width of images before resizing them, and they style nothing. Change a container token without them and Hugo generates images calibrated for a width the page no longer has.

{{< button url="/docs/customization/design/design-system/css/#grid-params-and-image-widths" text="Grid params and image widths" >}}
{{< /alert-block >}}

## Step 4. Component tokens

Once the semantic layer is set, most components are already on brand. Component tokens are for the deliberate exceptions.

```css
@layer tokens {
  :root {
    /* Buttons */
    --btn-font-weight: var(--font-weight-bold);
    --btn-padding-inline: var(--spacing-sm);
    --btn-text-transform: uppercase;

    /* Header */
    --header-height: 72px;
    --header-color-background: var(--color-brand);
    --header-color-link: var(--color-text-on-brand);

    /* Cards */
    --card-color-background: transparent;
    --card-border-width: var(--border-width-sm);
    --card-color-border: var(--color-border);

    /* Hero */
    --hero-height: clamp(20rem, 18rem + 8vw, 28rem);
    --hero-media-brightness: 0.45;
  }
}
```

The naming is mechanical: `--{component}-{property}-{sub-property?}-{state?}`, with `color-{role}` for every color: `--btn-color-background-hover`, never `--btn-bg-hover`.

{{< blank_link link="https://github.com/uncinq/component-tokens#readme" text="Full component token reference" >}}

## Step 5. Rules no token covers

{{< alert-block title="Check first" state="warning" >}}
Two things to check before writing a rule: a token often covers the case (`--card-color-background`, `--hero-height`…), and a modifier class often exists (`.hero-center`, `.block-dark`, `.btn-ghost`…). Reach for the token or the markup first. The block and hero classes are listed in [UI](/docs/customization/ui/).
{{< /alert-block >}}

When neither does, write the rule into the same layer as the one you are overriding.

{{< alert text="`/assets/css/theme.css`" state="light" >}}

```css
@layer components {
  .card .media img {
    filter: grayscale(1);
    transition: filter var(--duration-normal) var(--easing-out);
  }

  .card:hover .media img {
    filter: none;
  }
}
```

{{< alert text="Overriding a rule at a breakpoint? Reassign the token inside the media query rather than restyling the component. The `@custom-media` scale is listed in [CSS](/docs/customization/design/design-system/css/#breakpoints)." state="info" >}}

## Ship it as a module

Once the look is worth reusing, move the two `theme` files into a Hugo module of your own. Nothing about their content changes, only where they live.

### Create the repository

{{< alert text="`/go.mod`" state="light" >}}

```txt
module github.com/your-org/your-theme

go 1.21
```

{{< alert text="`/hugo.yml`" state="light" >}}

```yml
module:
  mounts:
    - source: assets
      target: assets
    - source: i18n
      target: i18n
    - source: layouts
      target: layouts
    - source: static
      target: static
```

### Move your files

Only the **`theme` pair** moves. The paths inside the module are the very same ones you have been writing in, so this is a `git mv`, not a rewrite. Not a line of CSS changes.

```txt
your-theme/   (the module, moves out)     your-site/   (the project, stays)
└── assets/                                └── assets/
    └── css/                                   └── css/
        ├── tokens/                                ├── tokens/
        │   └── theme.css                          │   └── site.css
        └── theme.css                              └── site.css
```

The two `site` files stay in the project: they are what makes *this* site different from the next one built on the same theme.

### Import it first

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  # Your design system
  - path: github.com/your-org/your-theme

  # Core theme
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-design-system
  - path: github.com/hugolify/hugolify-theme-icons

  # Admin
  - path: github.com/hugolify/hugolify-admin/v2
```

{{< alert text="Order matters: modules are prioritized in the order they are imported, so your theme must be listed **before** the design system for its files to win. The project itself always wins over every module, which is why `tokens/site.css` and `site.css` stay in the project and override the theme." state="danger" >}}

Each site built on your theme now only carries what is specific to it, in the two `site` files.

## Optional: tokens in DTCG JSON

CSS custom properties are enough. But if your tokens also have to travel to Figma or Tokens Studio, author them as {{< blank_link link="https://tr.designtokens.org/format/" text="DTCG" >}} JSON and generate the CSS with {{< blank_link link="https://styledictionary.com/" text="Style Dictionary" >}}. This is how the upstream packages are built.

{{< alert text="`/assets/tokens/theme/semantic/color.json`" state="light" >}}

```json
{
  "color": {
    "brand": {
      "default": { "$value": "oklch(0.53 0.195 22)", "$type": "color" },
      "hover":   { "$value": "oklch(0.46 0.19 22)",  "$type": "color" },
      "muted":   { "$value": "oklch(0.94 0.03 22)",  "$type": "color" },
      "strong":  { "$value": "oklch(0.30 0.13 22)",  "$type": "color" }
    }
  }
}
```

```bash
yarn build # style-dictionary → assets/css/tokens/theme/semantic/color.css
```

The generated files are imported by your `tokens/theme.css` barrel and land in `@layer tokens`, exactly like a hand-written override.

{{< blank_link link="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/docs/DTCG.md" text="DTCG conventions used by the module" >}}

## Launch project

```bash
yarn watch
```

See your website in <http://localhost:1313/>.

{{< alert text="Build failing on `postcss config \"postcss/design-system\" not found`? The file is missing: the module declares the path, and Hugo does not look anywhere else. See [Troubleshooting](/docs/customization/design/design-system/postcss/#troubleshooting)." state="warning" >}}

## What the module also gives you

Three things you get without building them, each documented on its own page:

| | |
| --- | --- |
| **Dark mode** | Off by default. `css.darkmode: true` hands the choice to the OS, and the dark values reassign the semantic color tokens, so your components follow. [Dark mode](/docs/customization/design/design-system/css/#dark-mode) |
| **Icons** | {{< blank_link link="https://lucide.dev/icons/" text="Lucide" >}} and {{< blank_link link="https://simpleicons.org/" text="Simple Icons" >}}, rendered as a CSS mask so they inherit the text color. Styled with `--icon-color` and `--icon-size`. [Icons](/docs/customization/icons/) |
| **JavaScript** | Vanilla JS only: dialog, dropdown, menu, tooltip, video always on; carousel, map, parallax, search opt-in per site. [JavaScript](/docs/customization/design/design-system/javascript/) |

## Going further

* [Setup for hugolify-theme-design-system](/docs/customization/design/design-system/setup/)
* [PostCSS](/docs/customization/design/design-system/postcss/)
* [CSS: tokens, layers, breakpoints, dark mode](/docs/customization/design/design-system/css/)
* [JavaScript](/docs/customization/design/design-system/javascript/)
* [Icons](/docs/customization/icons/)
* [UI: block and hero classes](/docs/customization/ui/)

## Demo

{{< button url="https://hugolify-theme-design-system--hugolify-demo.netlify.app/" text="Explore the design system demo" blank="true" >}}

## Repository

{{< button url="https://github.com/Hugolify/hugolify-theme-design-system" blank="true" text="Check hugolify-theme-design-system repository" >}}
