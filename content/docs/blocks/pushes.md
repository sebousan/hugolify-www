---
title: Pushes
description: Displays some images cards in column. Alignment and button are available
icon: credit-card-2-front
---

## Frontmatter

```yml
blocks:
  - type: pushes
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    column: '' # [1…2]
    items: []
      title: '' # string (optional)
      text: '' # string (optional)
      cta: {}
        text: '' # string
        url: '' # url
        blank: false # boolean (optional)
        lang: '' # code lang (optional)
      image: {}
      offset: '' # [start, end, center]
      card: false # boolean (boolean)
      darken: false # boolean (boolean)
      background_color: '' # color (boolean)
      color: '' # color (boolean)
    layout: '' # [grid, carousel] (optional)
    carousel: {} # object only if carousel layout (optional)
      params: {} # (optional)
        focus: '' # boolean (optional)
        autoplay: true # boolean (optional)
        arrows: true # boolean (optional)
        pagination: false # boolean (optional)
        type: '' # [slide, loop, fade] (optional)
        perPage: '' # number (optional)
        padding: '' # number (optional)
        gap: '' # number (optional)
      responsive: {} # (optional)
        breakpoints: 640 # number [640, 768, 1024, 1280, 1440]
        params: {}
          focus: '' # boolean (optional)
          autoplay: true # boolean (optional)
          arrows: true # boolean (optional)
          pagination: false # boolean (optional)
          type: '' # [slide, loop, fade] (optional)
          perPage: '' # number (optional)
          padding: '' # number (optional)
          gap: '' # number (optional)
    background: false # boolean (optional)
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/pushes/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/pushes.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/pushes.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_pushes.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/pushes.js" text="Decap CMS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/pushes.yml" text="Hugolify admin file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

