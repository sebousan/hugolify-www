---
title: Pushes
description: Displays some images cards in column. Alignment and button are available
icon: credit-card-2-front
---

## Frontmatter

```yml
blocks:
  - type: pushes
    heading: {}
    column: '' // [1…2]
    items:
      title: '' // string
      text: '' // string
      cta: {}
      image: {}
      offset: '' // [start, end, center]
      card: false // boolean
      darken: false // boolean
      background_color: '' // color
      color: '' // color
    layout: '' // grid (default) or carousel
    carousel: {} // object (only if carousel layout)
    background: false
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/pushes/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/pushes.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/pushes.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_pushes.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/pushes.js" text="Decap CMS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/pushes.yml" text="Hugolify admin file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

