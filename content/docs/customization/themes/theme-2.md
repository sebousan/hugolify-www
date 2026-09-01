---
isIndex: false
title: Theme 2
description: Second available theme
weight: 2
icon: 2-circle
status:
  text: Bootstrap
  state: primary
---

{{< alert-block title="Not available in Hugolify v2" state="warning" >}}
This theme has not been migrated to v2 yet — no `/v2` module path is published for it. It stays available for Hugolify v1.
{{< /alert-block >}}

## Demo

{{< button url="https://theme-2--hugolify-demo.netlify.app/" text="Explore demo" blank="true" >}}

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1758204772/screenshot-hugolify-theme-2_w3wa4c.png" alt="Screenshot of Theme 2" screenshot="true" legend="Preview homepage" >}}

## Setup

### Import module

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-2
  - path: github.com/hugolify/hugolify-theme # Core theme
```

## Custom main.sass?

### Import sass

{{< alert text="`/assets/sass/main.sass`" state="light" >}}

```sass
// Core Theme
@import "hugolify-theme"

// Theme
@import "hugolify-theme-2"

// Site
@import "site"
```

## Repository

{{< button url="https://github.com/hugolify/hugolify-theme-2" blank="true" text="Hugolify theme 2" >}}
