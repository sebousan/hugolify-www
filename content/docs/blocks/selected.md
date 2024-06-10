---
title: Selected block
linkTitle: Testimonials
description: Displays a selection of items
---

## Frontmatter

```yml
blocks:
  - type: selected-*
    section: *
    heading:
      surtitle: ""
      title: ""
      text: ""
    items:
    show_more: false
    background: false
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/selected.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_selected.sass

## Example

https://demo.hugolify.io/blocks/selected/

## Decap CMS

- selected-\* `object`
  - heading `object`
    - surtitle `string`
    - title `string`
    - text `string`
  - items `select` (multiple)
  - show_more `boolean`
  - background `boolean`

"\*" = posts, projects, casestudies, persons, publications…
