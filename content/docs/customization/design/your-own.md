---
title: Your own module
description: "Build a styling module on another CSS framework: Bulma, Foundation, UIkit, Pico CSS…"
weight: 3
icon: puzzle
---

{{< alert-block title="A styling module styles the theme's HTML" state="info" >}}
**hugolify-theme** renders the HTML and styles nothing. A styling module is a Hugo module that brings the CSS and the JS for that HTML. Bootstrap and the design system are two of them: another framework can be a third, without changing a single template or content file.
{{< /alert-block >}}

## Which frameworks fit

The HTML belongs to hugolify-theme. Your module styles the classes the theme already prints (`.btn`, `.card`, `.hero`, the block classes listed in [UI](/docs/customization/ui/)), it does not add its own. Any framework you can drive from a stylesheet fits:

| Framework | How it meets the theme's HTML |
| --- | --- |
| Bulma, Foundation, UIkit | Sass sources: apply the framework's variables, mixins or `@extend` to the theme's classes |
| Pico CSS | Classless: it styles the semantic elements themselves |

{{< alert-block title="Why not Tailwind" state="warning" >}}
Tailwind, like every utility-first framework, styles through classes written in the markup. Hugolify keeps its HTML clean and semantic, and the markup is not the styling module's to change: this is why Hugolify does not use Tailwind.
{{< /alert-block >}}

## What hugolify-theme reads

The theme finds your module through a handful of files and params, nothing else:

| Entry point | Role |
| --- | --- |
| `assets/sass/main.sass`, `assets/sass/main.scss` or `assets/css/main.css` | The stylesheet. The first one found, in this order, is compiled then run through PostCSS |
| `assets/js/main.js` | The script, executed as a Hugo template then bundled with `js.Build` |
| `css.postcss` | The PostCSS config the module ships, named in its `hugo.yaml` |
| `column`, `container`, `gap`, `gutter` | The grid params the templates read to compute image widths, see [Grid params](/docs/customization/design/design-system/css/#grid-params-and-image-widths) |
| `assets/sass/print.sass`, `assets/sass/print.scss` or `assets/css/print.css` | Optional print stylesheet, loaded when a site sets `css.print: true` |

`css/main.css` and `js/main.js` are executed as Hugo templates: they can read the site params, which is how a site turns a feature on without touching the module.

{{< alert text="`/hugo.yaml` of your module" state="light" >}}

```yml
module:
  mounts:
    - source: assets
      target: assets

params:
  css:
    postcss: "postcss.config.cjs"

  # Grid: match your framework's own values
  column:
    desktop: 12
    mobile: 1
    tablet: 1
  container:
    desktop: 1280
    mobile: 375
  gap:
    desktop: 24
    mobile: 24
  gutter:
    desktop: 32
    mobile: 16
```

## Start from the design system

**hugolify-theme-design-system** is the closer starting point: its JavaScript is vanilla, with no framework to swap. Keep `assets/js/` and replace `assets/css/` with your framework. That folder is {{< blank_link link="https://socle.uncinq.dev/" text="Socle" >}} (design tokens, reset, generic components) plus the Hugolify layer on top (header, footer, hero, blocks): your framework takes the place of Socle, and the Hugolify layer is what you rewrite with it.

The JavaScript covers what the HTML expects: the dialog, dropdown, menu, tooltip and video components on every page, and the features each site enables in its params (`carousel`, `map`, `parallax`, `search`, `animation`, `vimeo`, `youtube`). See [JavaScript](/docs/customization/design/design-system/javascript/).

{{< alert text="List the npm packages a site needs to build your CSS in a `package.hugo.json`: `hugo mod npm pack` merges it into the site's `package.json`. Without that file it takes your `package.json`, development tooling included." state="warning" >}}

{{< button url="https://github.com/Hugolify/hugolify-theme-design-system" text="hugolify-theme-design-system repository" blank="true" >}}

## Install it

Your module takes the place of the styling module in the site's imports:

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/your-org/hugolify-theme-bulma # CSS and JS
  - path: github.com/hugolify/hugolify-theme-icons # Icons (Lucide + Simple Icons)
  - path: github.com/hugolify/hugolify-admin/v2
```

```bash
hugo mod get && hugo mod npm pack && yarn install
```

{{< alert text="hugolify-theme-icons defines a `.icon` class. If your framework ships an icon font with the same class, as Bootstrap does, keep only one of the two. See [Icons](/docs/customization/icons/)." state="info" >}}

## Share it

Built a styling module for another framework? Open an issue on hugolify-theme so it can be listed here.

{{< button url="https://github.com/Hugolify/hugolify-theme/issues" text="hugolify-theme issues" blank="true" >}}
