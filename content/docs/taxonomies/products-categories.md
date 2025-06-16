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
  - path: github.com/hugolify/hugolify-theme-products-categories
  - path: github.com/hugolify/hugolify-theme-products
  - path: github.com/hugolify/hugolify-theme
```

## Related section

- [Products](/docs/sections/products/)

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo-products--hugolify-demo.netlify.app/products/categories/" text="Demo visual renderer" >}}
