---
title: Gallery block
linkTitle: Gallery
description: Displays an images gallery
---

## Frontmatter

```yml
blocks:
  - type: gallery
    heading:
      surtitle: ''
      title: ''
      text: ''
    column: ''
    gallery:
      image:
        src: ''
        alt: ''
        legend: ''
        credit: ''
    background: false
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/gallery.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_gallery.sass

## Decap CMS

- Gallery `object`
  - heading `object`
    - surtitle `string`
    - title `string`
    - text `string`
  - column `number` [3…6]
  - gallery `list`
    - image `object`
      - src `image`
      - alt `string`
      - legend `string`
      - credit `markdown`
  - background `boolean`
