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
      image:
        src: '' // string
        alt: '' // string
        isLogo: false // boolean
      offset: '' // [start, end, center]
      background_color: '' // color
      color: '' // color
      cta: {}
    background: false
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/pushes/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/blocks/pushes/_index.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/pushes.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_pushes.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/pushes.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
