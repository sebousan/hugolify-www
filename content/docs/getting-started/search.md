---
title: Search
description: Use Pagefind search
weight: 7
icon: search
---

## Setup

### Params

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
search:
  enable: false # Set true to enable search
  layout: raw # Also modal or offcanvas
  filter: false # Set true to add filters by type
  sort: false 
```

### Command

Use specific command to build and index 

```bash
yarn build:search
```

### PostCSS

```js
safelist: {
  deep: [/^pagefind-ui/]
}
```

## Documentation

A complete documentation of how to use Pagefind.

{{< button url="https://pagefind.app/" text="See documentation" blank=true >}}
