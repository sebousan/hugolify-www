---
title: Testimonials
description: Displays some testimonials in grid or carousel.
icon: chat-square-quote
seo:
  title: Block Testimonials
---

## Frontmatter

```yml
blocks:
  - type: testimonials
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    items: []
      quote: '' # markdown
      author: {} # (optional)
        title: '' # string, the name (optional)
        text: '' # string, the role or the company (optional)
        url: '' # url, links the text (optional)
        image: {} # (optional)
          src: '' # url
          alt: '' # string (optional)
          isLogo: false # boolean (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
      layout: '' # [grid, carousel, list] (optional)
      scrollsnap: '' # [none, sm, md, lg, xl, all] or object, with layout: grid (optional)
      carousel: {} # only with layout: carousel (optional)
```

Each item is the same component as the [quote](/docs/blocks/quote/) block.

See [Common keys](/docs/blocks/) for `heading`, `footing`, `scrollsnap`, `carousel` and the full `ui` reference.

{{< button url="https://demo.hugolify.io/blocks/testimonials/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/testimonials.html" text="HTML file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_testimonials.sass" text="SASS file — hugolify-theme-bootstrap" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-testimonials.css" text="CSS file — hugolify-theme-design-system" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/testimonials.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/partials/admin/blocks/types/testimonials.yml" text="Hugolify admin file" >}}

## CMS availability

| CMS | Hugolify Admin v2 |
| --- | --- |
| [CloudCannon](/docs/admin/v1/cms/cloudcannon/) | {{< badge text="Available" state="success" >}} |
| [Decap CMS](/docs/admin/v1/cms/decap-cms/) | {{< badge text="Available" state="success" >}} |
| [Netlify CMS](/docs/admin/v1/cms/netlify-cms/) | {{< badge text="Available" state="success" >}} |
| [Pages CMS](/docs/admin/v1/cms/pages-cms/) | {{< badge text="Available" state="success" >}} |
| [Static CMS](/docs/admin/v1/cms/static-cms/) | {{< badge text="Available" state="success" >}} |
| [Sveltia CMS](/docs/admin/v1/cms/sveltia-cms/) | {{< badge text="Available" state="success" >}} |
| [Tina CMS](/docs/admin/v1/cms/tina-cms/) | {{< badge text="Available" state="success" >}} |
