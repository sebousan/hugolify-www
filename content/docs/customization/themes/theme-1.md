---
isIndex: false
title: Theme 1
description: First available theme
weight: 1
icon: 1-circle
---

## Demo

{{< button url="https://theme-1--hugolify-demo.netlify.app/" text="Explore demo" blank="true" >}}

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1758204771/screenshot-hugolify-theme-1_vtrxel.png" alt="Screenshot of Theme 1" screenshot="true" legend="Preview homepage" >}}

## Setup

### Import module

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-1
  - path: github.com/hugolify/hugolify-theme # Core theme
```

## Custom main.sass?

### Import sass

{{< alert text="`/assets/sass/main.sass`" state="light" >}}

```sass
// Core Theme
@import "hugolify-theme"

// Theme
@import "hugolify-theme-1"

// Site
@import "site"
```

## Repository

{{< button url="https://github.com/hugolify/hugolify-theme-1" blank="true" text="Hugolify theme 1" >}}
