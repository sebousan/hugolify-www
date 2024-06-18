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

### Import sass

{{< alert text="`/assets/sass/main.sass`" state="light" >}}

```sass
// Theme
@import "hugolify-theme-3"
```

## Repository

- {{< blank_link link="https://github.com/hugolify/hugolify-theme-3" text="Hugolify theme 3" >}}