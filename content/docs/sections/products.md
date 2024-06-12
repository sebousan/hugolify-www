---
title: Products
description: Description, price, variants.
icon: box
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-products" text="Hugolify theme products" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```go-html-template
imports:
  - path: github.com/hugolify/hugolify-theme-products
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-products/tree/main/layouts/partials/products" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-products/blob/main/assets/sass/pages/_product.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-products/blob/main/assets/sass/pages/_products.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-products/blob/main/assets/sass/components/_product.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-products/blob/main/assets/sass/components/_products.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/products.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
