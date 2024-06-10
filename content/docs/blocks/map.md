---
title: Map block
linkTitle: Map
description: Displays a simple map with one marker
---

## Frontmatter

```yml
blocks:
  - type: map
    heading:
      surtitle: ''
      title: ''
      text: ''
    location: {}
    zoom: 13
    background: false
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/map.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_map.sass

## Decap CMS

- Map `object`
  - heading `object`
    - surtitle `string`
    - title `string`
    - text `string`
  - location `map`
  - zoom `number` [1…20]
  - background `boolean`
