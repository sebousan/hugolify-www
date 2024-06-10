---
title: Paragraph block
linkTitle: Paragraph
description: Displays a simple paragraph
---

## Frontmatter

```yml
blocks:
  - type: paragraph
    title: ''
    text: ''
    grid: ''
    align: ''
    background: false
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/paragraph.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_paragraph.sass

## Example

https://demo.hugolify.io/blocks/paragraph/

## Decap CMS

- paragraph `object`
  - title `string`
  - text `markdown`
  - grid `select`
    - small
    - medium
    - large
    - full
  - align `select`
    - start
    - end
    - center
  - background `boolean`
