---
title: Products categories
description: Taxonomy categories for products section.
icon: bookmark
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-products" text="Hugolify theme products" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-products-categories" text="Hugolify theme products categories" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-products-categories/v2
  - path: github.com/hugolify/hugolify-theme-products/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Related section

- [Products](/docs/sections/products/)

## CMS

- [Hugolify Admin](/docs/admin/v1/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo-products--hugolify-demo.netlify.app/products/categories/" text="Demo visual renderer" >}}
