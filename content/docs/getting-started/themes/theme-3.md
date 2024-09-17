---
title: Theme 3
description: Third available theme
weight: 3
icon: 3-circle
---

## Demo

{{< figure src="/images/uploads/theme-3.png" alt="Screenshot of Theme 3" screenshot=true legend="Homepage" >}}

{{< button url="https://theme-3--hugolify-demo.netlify.app/" text="Explore demo" blank=true >}}

## Setup

### Import module

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-3
  - path: github.com/hugolify/hugolify-theme
```

## Customize sass?

### Import sass

{{< alert text="`/assets/sass/main.sass`" state="light" >}}

```sass
// Core Theme
@import "hugolify-theme"

// Theme
@import "hugolify-theme-3"

// Site
// Your sass files import
```

## Repository

- {{< blank_link link="https://github.com/hugolify/hugolify-theme-3" text="Hugolify theme 3" >}}
