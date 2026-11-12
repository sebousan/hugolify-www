---
isIndex: false
title: Theme 5
description: Fith available theme
weight: 5
icon: 5-circle
status:
  text: Bootstrap
  state: primary
---
## Demo

{{< button url="https://v1-demo-theme-5--hugolify-demo.netlify.app/" text="Explore v1 demo" blank="true" >}}

{{< button url="https://v2-demo-theme-5--hugolify-demo.netlify.app/" text="Explore v2 demo" blank="true" >}}

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1758204784/screenshot-hugolify-theme-5_zj6k7p.png" alt="Screenshot of Theme 5" screenshot="true" legend="Preview homepage" >}}

## Setup v2

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-5/v2
  - path: github.com/hugolify/hugolify-theme/v2 # Core theme
  - path: github.com/hugolify/hugolify-theme-icons # Icons
  - path: github.com/hugolify/hugolify-theme-design-system # CSS + JS
```

## Setup v1

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-5
  - path: github.com/hugolify/hugolify-theme # Core theme
```

## Repository

{{< button url="https://github.com/hugolify/hugolify-theme-5" blank="true" text="Hugolify theme 5" >}}
