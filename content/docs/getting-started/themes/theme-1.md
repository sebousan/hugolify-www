---
title: Theme 1
description: First available theme
weight: 1
icon: 1-circle
---

## Demo

{{< figure src="/images/uploads/theme-1.png" alt="Screenshot of Theme 1" screenshot=true legend="Homepage" >}}

{{< button url="https://theme-1--hugolify-demo.netlify.app/" text="Explore demo" blank=true >}}

## Setup

### Import module

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-1
  - path: github.com/hugolify/hugolify-theme
```

### Import sass

{{< alert text="`/assets/sass/main.sass`" state="light" >}}

```sass
// Theme
@import "hugolify-theme-1"
```

## Repository

- {{< blank_link link="https://github.com/hugolify/hugolify-theme-1" text="Hugolify theme 1" >}}