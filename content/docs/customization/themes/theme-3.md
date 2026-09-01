---
isIndex: false
title: Theme 3
description: Third available theme
weight: 3
icon: 3-circle
status:
  text: Bootstrap
  state: primary
---

{{< alert-block title="Not available in Hugolify v2" state="warning" >}}
This theme has not been migrated to v2 yet — no `/v2` module path is published for it. It stays available for Hugolify v1.
{{< /alert-block >}}

## Demo

{{< button url="https://theme-3--hugolify-demo.netlify.app/" text="Explore demo" blank="true" >}}

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1758204773/screenshot-hugolify-theme-3_mohiuc.png" alt="Screenshot of Theme 3" screenshot="true" legend="Preview homepage" >}}

## Setup

### Import module

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-3
  - path: github.com/hugolify/hugolify-theme # Core theme
```

## Custom main.sass?

### Import sass

{{< alert text="`/assets/sass/main.sass`" state="light" >}}

```sass
// Core Theme
@import "hugolify-theme"

// Theme
@import "hugolify-theme-3"

// Site
@import "site"
```

## Repository

{{< button url="https://github.com/hugolify/hugolify-theme-3" blank="true" text="Hugolify theme 3" >}}
