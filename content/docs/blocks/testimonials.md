---
title: Testimonials block
linkTitle: Testimonials
description: Displays some testimonials
---

## Frontmatter

```yml
blocks:
  - type: testimonials
    heading:
      surtitle: ''
      title: ''
      text: ''
    items:
      quote: ''
      author:
        title: ''
        text: ''
        image:
    background: false
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/testimonials.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_testimonials.sass

## Example

https://demo.hugolify.io/blocks/testimonials/

## Netlify CMS

- testimonials `object`
  - heading `object`
    - surtitle `string`
    - title `string`
    - text `string`
  - items `object`
    - quote `string`
    - author `object`
      - title `string`
      - text `string`
      - image `object`
        - src `image`
        - alt `string`
  - background `boolean`
