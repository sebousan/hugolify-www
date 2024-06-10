---
title: Title block
linkTitle: Title
description: Displays a heading title with surtitle and text.
---

## Frontmatter

```yml
blocks:
  - type: title
    heading:
      surtitle: ''
      title: ''
      text: ''
    background: false
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/title.html

## SASS

`.block-title`

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_title.sass

## Example

https://demo.hugolify.io/blocks/title/

## Decap CMS

- title `object`
  - heading `object`
    - surtitle `string`
    - title `string`
  - background `boolean`
