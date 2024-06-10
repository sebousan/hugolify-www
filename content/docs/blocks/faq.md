---
title: FAQ block
linkTitle: FAQ
description:
  Displays some images cards in column. Alignment and button are available
---

## Frontmatter

```yml
blocks:
  - type: faq
    heading:
      title: ''
      text: ''
    items:
      title: ''
      text: ''
    background: false
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/faq.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_faq.sass

## Decap CMS

- FAQ `object`
  - heading `object`
    - title `string`
    - text `string`
  - items `list`
    - title `string`
    - text `markdown`
  - background `boolean`
