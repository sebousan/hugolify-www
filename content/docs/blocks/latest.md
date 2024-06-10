---
title: Latest block
linkTitle: Latest
description: Displays latest items from posts, projects…
---

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/latest.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_latest.sass

## Frontmatter

```yml
blocks:
  - type: latest
    heading: ""
      surtitle: ""
      title: ""
      text: ""
    section: ""
    count: ""
    show_more: true
    background: false
```

## Netlify CMS

- Latest `object`
  - heading `object`
    - surtitle `string`
    - title `string`
    - text `string`
  - section `select` (from availableTypeSection)
    - posts
    - projects
    - casestudies
    - persons
    - publications
    - …
  - count `number` [1…]
  - show_more `boolean`
  - background `boolean`
