---
title: Selected
description: Displays a selection of items sections
icon: check-all
---

## Frontmatter

```yml
blocks:
  - type: selected-*  // [selected-posts, selected-publications, selected-products…]
    section: * // [posts, publications, products…]
    layout: '' // grid (default) or list
    heading: {}
    items: [] // list of slugs
    show_more: false // boolean
    background: false
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/selected/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/selected.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/selected.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_selected.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/selected-posts.js" text="Decap CMS file (e.g. posts)" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
