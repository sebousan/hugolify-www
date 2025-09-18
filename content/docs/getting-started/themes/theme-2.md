---
isIndex: false
title: Theme 2
description: Second available theme
weight: 2
icon: 2-circle
---

## Demo

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1758204772/screenshot-hugolify-theme-2_w3wa4c.png" alt="Screenshot of Theme 2" screenshot="true" legend="Homepage" >}}

{{< button url="https://theme-2--hugolify-demo.netlify.app/" text="Explore demo" blank="true" >}}

## Setup

### Import module

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-2
  - path: github.com/hugolify/hugolify-theme # Core theme
```

## Customize sass?

### Import sass

{{< alert text="`/assets/sass/main.sass`" state="light" >}}

```sass
// Core Theme
@import "hugolify-theme"

// Theme
@import "hugolify-theme-2"

// Site
// Your sass files import
```

## Repository

{{< button url="https://github.com/hugolify/hugolify-theme-2" blank="true" text="Hugolify theme 2" >}}
