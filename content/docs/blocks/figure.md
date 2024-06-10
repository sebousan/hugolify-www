---
title: Figure block
linkTitle: Figure
description: Displays a centered figure image with legend and credit
---

## Frontmatter

```yml
blocks:
  - type: figure
    figure:
      src: ''
      alt: ''
      legend: ''
      credit: ''
    grid: ''
    background: false
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/figure.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_figure.sass

## Decap CMS

- Figure `object`
  - figure `object`
    - src `image`
    - alt `string`
    - legend `string`
    - credit `markdown`
  - grid `select`
    - small
    - medium
    - large
    - full
  - background `boolean`
