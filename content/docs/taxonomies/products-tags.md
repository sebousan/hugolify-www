---
title: Products tags
description: Taxonomy tags for products section.
icon: tag
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-products" text="Hugolify theme products" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-products-tags" text="Hugolify theme products tags" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-products-tags/v2
  - path: github.com/hugolify/hugolify-theme-products/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Related section

- [Products](/docs/sections/products/)

## CMS

- [Hugolify Admin](/docs/admin/v1/) {{< badge text="Available" state="success" >}}
