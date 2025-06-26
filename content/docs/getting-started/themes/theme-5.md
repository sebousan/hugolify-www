---
title: Theme 5
description: Fith available theme
weight: 5
icon: 5-circle
---

## Demo

{{< figure src="/images/uploads/theme-5.png" alt="Screenshot of Theme 5" screenshot=true legend="Homepage" >}}

{{< button url="https://theme-5--hugolify-demo.netlify.app/" text="Explore demo" blank=true >}}

## Setup

### Import module

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-5
  - path: github.com/hugolify/hugolify-theme # Core theme
```

### Import sass

{{< alert text="`/assets/sass/main.sass`" state="light" >}}

```sass
// Core Theme
@import "hugolify-theme"

// Theme
@import "hugolify-theme-5"

// Site
// Your sass files import
```

## Repository

{{< button url="https://github.com/hugolify/hugolify-theme-5" blank="true" text="Hugolify theme 5" >}}
