---
isIndex: false
title: Theme 4
description: Fourth available theme
weight: 4
icon: 4-circle
---

## Demo

{{< button url="https://theme-4--hugolify-demo.netlify.app/" text="Explore demo" blank="true" >}}

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1758204769/screenshot-hugolify-theme-4_h7yeca.png" alt="Screenshot of Theme 4" screenshot=true legend="Preview homepage" >}}

## Setup

### Import module

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-4
  - path: github.com/hugolify/hugolify-theme # Core theme
```

## Custom main.sass?

### Import sass

{{< alert text="`/assets/sass/main.sass`" state="light" >}}

```sass
// Core Theme
@import "hugolify-theme"

// Theme
@import "hugolify-theme-4"

// Site
@import "site"
```

## Repository

{{< button url="https://github.com/hugolify/hugolify-theme-4" blank="true" text="Hugolify theme 4" >}}
