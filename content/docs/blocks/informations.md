---
title: Informations block
linkTitle: Informations
description:
  Displays some cards informations in column. Icon, images and button are
  available
---

## Frontmatter

```yml
blocks:
  - type: informations
    heading:
      surtitle: ''
      title: ''
      text: ''
    column: ''
    items:
      icon: ''
      image:
        src: ''
        alt: ''
        isLogo: false
      title: ''
      text: ''
      cta:
        text: ''
        url: ''
        blank: false
    background: false
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/informations.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_informations.sass

## Decap CMS

- Informations `object`
  - heading `object`
    - surtitle `string`
    - title `string`
    - text `string`
  - column `number` [2…6]
  - items `list`
    - icon `string`
    - image `object`
      - src `image`
      - alt `string`
      - isLogo `boolean`
    - title `string`
    - text `string`
    - cta `object`
      - text `string`
      - url `string`
      - blank `boolean`
  - background `boolean`
