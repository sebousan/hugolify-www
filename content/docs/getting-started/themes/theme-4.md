---
title: Theme 4
description: Fourth available theme
weight: 4
icon: 4-circle
---

## Demo

{{< figure src="/images/uploads/theme-4.png" alt="Screenshot of Theme 4" screenshot=true legend="Homepage" >}}

{{< button url="https://theme-4--hugolify-demo.netlify.app/" text="Explore demo" blank=true >}}

## Setup

### Import module

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-4
  - path: github.com/hugolify/hugolify-theme # Core theme
```

### Import sass

{{< alert text="`/assets/sass/main.sass`" state="light" >}}

```sass
// Theme
@import "hugolify-theme-4"
```

## Repository

- {{< blank_link link="https://github.com/hugolify/hugolify-theme-4" text="Hugolify theme 4" >}}