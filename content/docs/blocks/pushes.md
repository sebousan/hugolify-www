---
title: Pushes block
linkTitle: Pushes
description:
  Displays some images cards in column. Alignment and button are available
---

## Frontmatter

```yml
blocks:
  - type: pushes
    heading:
      surtitle: ''
      title: ''
      text: ''
    column: ''
    items:
      image:
        src: ''
        alt: ''
      align: ''
      title: ''
      text: ''
      cta:
        text: ''
        url: ''
        blank: false
    background: false
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/pushes.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_pushes.sass

## Decap CMS

- Pushes `object`
  - heading `object`
    - surtitle `string`
    - title `string`
    - text `string`
  - column `number` [1…2]
  - items `list`
    - image `object`
      - src `image`
      - alt `string`
      - isLogo `boolean`
    - align `select`
      - start
      - end
      - center
    - title `string`
    - text `string`
    - cta `object`
      - text `string`
      - url `string`
      - blank `boolean`
  - background `boolean`
