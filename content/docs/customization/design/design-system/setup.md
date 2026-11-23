---
title: Setup
description: Setup hugolify-theme-design-system
weight: 1
icon: sliders-horizontal
---

{{< alert-block title="hugolify-theme-design-system" state="info" >}}
Framework-free styling module for **hugolify-theme**. It provides the complete styling layer (design tokens as CSS custom properties, vanilla CSS and vanilla JS) without any CSS framework and without an icon font.

It is a drop-in replacement for **hugolify-theme-bootstrap**: switching is a one-line change in `module.yaml`, no template or content changes required.
{{< /alert-block >}}

{{< blank_link link="https://github.com/Hugolify/hugolify-theme-design-system" text="hugolify-theme-design-system on GitHub" >}}

## Example project

A ready-to-run project: `hugolify-template` ships this module, with `config/_default/module.yaml` already in place.

{{< button url="https://github.com/Hugolify/hugolify-template" text="hugolify-template" blank="true" >}}

## What it provides

- Design tokens as CSS custom properties (primitive → semantic → component)
- Vanilla CSS, organized in cascade layers, built on the four framework-agnostic npm packages of {{< blank_link link="https://socle.uncinq.dev/" text="Socle" >}}, see [CSS](/docs/customization/design/design-system/css/#css-packages)
- Hugolify-specific components (header, footer, hero, blocks, sections…)
- Vanilla JS components (dialog, dropdown, menu, tooltip, video) and optional features (carousel, map, parallax, search, animation, Vimeo, YouTube)

Icons are **not** part of this module: they come from **hugolify-theme-icons**, see [Icons](/docs/customization/icons/).

## Install

### Modules

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-design-system # CSS and JS
  - path: github.com/hugolify/hugolify-theme-icons # Icons (Lucide + Simple Icons)
  - path: github.com/hugolify/hugolify-admin/v2
```

### PostCSS

The module provides the PostCSS config of the CSS pipeline: there is nothing to copy, only the npm packages to install (below).

{{< button url="/docs/customization/design/design-system/postcss/" text="PostCSS setup" >}}

### Command

```bash
hugo mod get && hugo mod npm pack && yarn install
```

Run it again after every `hugo mod get -u`: a module can add or bump an npm dependency, and only this command writes it into your `package.json`. See [PostCSS](/docs/customization/design/design-system/postcss/#install-the-packages).

## Requirements

- {{< blank_link link="https://gohugo.io/installation/" text="Hugo extended" >}} >= 0.158.0
- {{< blank_link link="https://nodejs.org/" text="Node.js" >}} >= 24.5 (or >= 22.20 on Node 22), see [Prerequisites](/docs/getting-started/prerequisites/#nodejs)

## Switching from hugolify-theme-bootstrap

Replace the styling module in `module.yaml`, everything else stays:

```yml
imports:
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-bootstrap # remove this
  - path: github.com/hugolify/hugolify-theme-design-system # add this
  - path: github.com/hugolify/hugolify-theme-icons # add this
  - path: github.com/hugolify/hugolify-admin/v2
```

`_partials/head/css.html` detects the active module by its entry file: `sass/main.sass` for Bootstrap, `css/main.css` for the design system. Project-side SASS (`assets/sass/`) is ignored once the design system is active: its overrides move to CSS custom properties, see [CSS](/docs/customization/design/design-system/css/).
