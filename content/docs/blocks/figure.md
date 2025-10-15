---
title: Figure
description: Displays a centered figure image with legend and credit.
icon: card-image
---

## Frontmatter

```yml
blocks:
  - type: figure
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    figure: {}
      src: '' # url
      alt: '' # string
      legend: '' # string
      credit: '' # markdown
      linear: false # boolean, set true for linear filter compression
      screenshot: false # boolean, set true you want add fake browser around your picture (and linear filter compression)
    grid: '' # [small, medium, large, container, full] (optional)
    offset: '' # [start, end, center] (optional)
    background: false # boolean (optional)
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/figure/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/figure.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/figure.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_figure.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/figure.js" text="Decap CMS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/figure.yml" text="Hugolify admin file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}
