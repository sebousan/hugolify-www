---
title: Editorial
description:
  Displays a block with content (title, text, button) on the left and image on
  the right (possible to reverse the direction). In mobile the image is first.
---

# Editorial block

## Frontmatter

```yml
blocks:
  - type: editorial
    direction: ""
    title: ""
    text: ""
    cta:
      text: ""
      url: ""
      blank: false
    image:
      src: ""
      alt: ""
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/editorial.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_editorial.sass

## Params

Image size

```yml
params:
  blocks:
    editorial:
      desktop: "624x"
      mobile: "336x"
```

## Examples

https://demo.hugolify.io/blocks/editorial/

## Decap CMS

- editorial `object`
  - direction `select`
    - ltr
    - rtl
  - title `string`
  - text `markdown`
  - button `object`
    - text `string`
    - url `string`
    - blank `boolean`
  - image `object`
    - src `image`
    - alt `string`
