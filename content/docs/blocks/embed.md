---
title: Embed block
linkTitle: Embed
description: Displays a centered embed
---

## Frontmatter

```yml
blocks:
  - type: embed
    heading:
      surtitle: ''
      title: ''
      text: ''
    embed: ''
    background: false
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/embed.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_embed.sass

## Decap CMS

- Embed `object`
  - heading `object`
    - surtitle `string`
    - title `string`
    - text `string`
  - embed `text`
  - background `boolean`
