---
title: Quote block
linkTitle: Quote
description: Displays a quote and its author
---

## Frontmatter

```yml
blocks:
  - type: quote
    quote: ''
    author:
      title: ''
      text: ''
      image:
        src: ''
        alt: ''
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/quote.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_quote.sass

## Decap CMS

- Quote `object`
  - quote `string`
  - author `object`
    - title `string`
    - text `string`
    - image `object`
      - src `image`
      - alt `string`
