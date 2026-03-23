---
title: CSS
description: Bootstrap variables, mixins and semantic classes
weight: 2
icon: filetype-sass
aliases:
  - /docs/customization/purgecss/
---

## Variables

Override Bootstrap and Hugolify variables in your project:

```bash
assets/
└── sass/
    └── abstracts/
        └── _variables-site.sass
```

**Bootstrap variables**
{{< blank_link link="https://github.com/twbs/bootstrap/blob/v5.3.8/scss/_variables.scss" text="Bootstrap variables reference" >}}

```sass
$primary: #000000
$secondary: #333333
$font-family-base: 'Your Font', sans-serif
```

**Additional Hugolify variables**
{{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/v1.27.9/assets/sass/abstracts/_variables.default.sass" text="Hugolify variables reference" >}}

```sass
// Theme variables
$global-spacing: 2.8rem !default
$global-spacing-double: $global-spacing * 2 !default
$global-spacing-semi: $global-spacing / 2 !default
$gutter-mobile: 1.875rem !default

// Header and menu
$header-background-color: #F8F9FA !default
$header-color: invert($header-background-color) !default
$header-height: 60px !default
$header-height-mobile: $header-height !default
$menu-background-color: $header-background-color !default
$menu-color: $header-color !default
$logo-height: 40px !default
$offset: $header-height + 15px !default
$navbar-expand: lg !default // false for always collapse

// Hero
$hero-background-color: $header-background-color !default
$hero-color: $header-color !default
$hero-h1-font-size: $h1-font-size !default
$hero-min-height: 400px !default
$hero-min-height-mobile: $hero-min-height !default
$home-hero-h1-font-size: $hero-h1-font-size !default
$home-hero-min-height: $hero-min-height !default
$home-hero-min-height-mobile: $hero-min-height !default

// Footer
$footer-background-color: #F8F9FA !default
$footer-color: invert($footer-background-color) !default
$footer-logo-height: 40px !default

// Components
$blockquote-color: $body-color !default
$blockquote-font-family: $font-family-base !default
$blockquote-font-style: normal !default
$blockquote-font-weight: $font-weight-normal !default
$blockquote-line-height: $line-height-base !default

$breadcrumb-background-color: $body-bg !default
$breadcrumb-color: $body-color !default
$breadcrumb-border-color: $border-color !default

$color-fail: #FF3333 !default
$color-average: #FFAA33 !default
$color-pass: #00CC66 !default
$color-credit: dimgrey !default
$color-screenshot: #D9D9D9 !default
$color-screenshot-1: #EE0E00 !default
$color-screenshot-2: #EEAB00 !default
$color-screenshot-3: #0EB000 !default

$gauge-color: #EEEEEE !default
$gauge-size: 200px !default
$gauge-stroke-color: #999999 !default
$gauge-stroke-size: 2.4 !default

$minititle-background-color: transparent !default
$minititle-border-radius: 0 !default
$minititle-border-width: 0 !default
$minititle-color: $body-color !default
$minititle-font-family: $font-family-base !default
$minititle-font-size: .75rem !default
$minititle-font-weight: $font-weight-bold !default
$minititle-letter-spacing: .05em !default
$minititle-line-height: inherit !default
$minititle-padding-x: 0 !default
$minititle-padding-y: 0 !default
$minititle-text-transform: uppercase !default

$scroll-snap-sm: 75% !default
$scroll-snap-md: 45% !default
$scroll-snap-lg: 43.75% !default

$transition-delay: 1s !default
$transition-duration: 2s !default
$transition-effect: cubic-bezier(.085,1.335,.285,.995) !default
$transition: all $transition-duration $transition-effect $transition-delay !default
```

## Mixins

All Bootstrap mixins are available in your SASS once **hugolify-theme-bootstrap** is imported. \
See {{< blank_link link="https://github.com/twbs/bootstrap/blob/v5.3.8/scss/_mixins.scss" text="Bootstrap mixins reference" >}}

**Additional Hugolify mixins**
{{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/v1.27.9/assets/sass/abstracts/_mixins.default.sass" text="Hugolify mixins reference" >}}

```sass
@mixin avatar
@mixin icon($icon: "")
@mixin more
@mixin scroll-snap
@mixin minititle
@mixin link-arrow
@mixin navbar-expand($navbar-expand)
```

## Semantic classes

### Column

Column classes are generated dynamically based on **$grid-columns** using Bootstrap's **make-col()** mixin:

| Class | Ratio | Default (12 cols) |
| --- | --- | --- |
| col-xsmall | 1/3 | 4 cols |
| col-small | 1/2 | 6 cols |
| col-medium | 2/3 | 8 cols |
| col-large | 5/6 | 10 cols |

Offset classes:

| Class | Effect |
| --- | --- |
| offset-center | centered |
| offset-end | push right |

### Badge

Badge classes are generated from Bootstrap's `$theme-colors` map:

```sass
// generated automatically for each color in $theme-colors
.badge-primary   // @extend .text-bg-primary
.badge-secondary // @extend .text-bg-secondary
// …
```

## PostCSS and PurgeCSS

Bootstrap generates a large CSS file. PurgeCSS removes unused classes based on the HTML elements Hugo actually renders.

Add **postcss.config.js** at the "/postcss/bootstrap" directory of your project:

{{< button text="PostCSS config example" blank="true" url="https://github.com/Hugolify/hugolify-theme-bootstrap/blob/main/postcss.config.js" >}}

Enable Hugo stats in your config (required for PurgeCSS):

```yaml
# hugo.yaml
build:
  writeStats: true
```

Install the required packages:

```bash
hugo mod get && hugo mod npm pack && yarn install
```
