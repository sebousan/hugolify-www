---
title: Figure
description: Displays a centered figure image with legend and credit.
icon: card-image
---

## Frontmatter

```yml
blocks:
  - type: figure
    heading: {}
    figure:
      src: '' // string
      alt: '' // string
      legend: '' // string
      credit: '' // markdown
      linear: false // Set true for linear filter compression
      screenshot: false // Set true you want add fake browser around your picture (and linear filter compression)
    grid: ''
    offset: ''
    background: false
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/figure/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/blocks/figure/_index.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/figure.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_figure.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/figure.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
