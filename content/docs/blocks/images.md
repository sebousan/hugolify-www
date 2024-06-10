---
title: Images block
linkTitle: Images
description: Displays an images list
---

## Frontmatter

```yml
blocks:
  - type: images
    heading:
      surtitle: ''
      title: ''
      text: ''
    items:
      image:
        src: ''
        alt: ''
        legend: ''
        credit: ''
        half: false
    background: false
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/images.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_images.sass

## Decap CMS

- Images `object`
  - heading `object`
    - surtitle `string`
    - title `string`
    - text `string`
  - items `list`
    - figure `object`
      - src `image`
      - alt `string`
      - legend `string`
      - credit `markdown`
      - half `boolean`
  - background `boolean`
