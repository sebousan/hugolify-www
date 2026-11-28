---
title: Taxonomies
description: All taxonomies available.
weight: 2
icon: tags
---

A taxonomy groups the entries of a [section](/docs/sections/): the categories of products, the tags of posts, the expertises of persons… Each one is a Hugolify module of its own, added next to the module of its section.

## What a taxonomy module brings

Taking the products categories as an example:

- **The Hugo taxonomy**: `products_categories`, declared by the module, nothing to add to your config.
- **The URLs**: the list of terms at `/products/categories/`, each term at `/products/categories/:slug/`.
- **The templates**: the list page, the term page with the entries filed under it, and the terms shown on each item.
- **The filters**: shown on the list page of the section and on the term pages, as soon as the module is installed.
- **The CMS collection**: editors create the terms, then pick them on each entry through a relation field, several at once.

## Setup

Import the taxonomy module before its section module, and the core theme last:

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-products-categories/v2
  - path: github.com/hugolify/hugolify-theme-products/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

Then run `yarn install:hugolify` to download it.

A section takes as many taxonomies as you need: see the [Products](/docs/sections/products/) section with its categories and tags.
