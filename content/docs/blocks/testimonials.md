---
title: Testimonials
description: Displays some testimonials in grid or carousel.
icon: chat-square-quote
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
      quote: '' # string
      author: {} # (optional)
        title: '' # string (optional)
        text: '' # string (optional)
        image: {}
          src: '' # string
          alt: '' # string (optional)
          isLogo: false # boolean (optional)
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

{{< button url="https://demo.hugolify.io/blocks/testimonials/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/testimonials.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_testimonials.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/assets/js/features/carousel.js" text="Javascript carousel file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/testimonials.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/testimonials.yml" text="Hugolify admin file" >}}

## Related links

- [Enable / Disable javascript](/docs/getting-started/customization/javascript/#carousel-splidejs)
- {{< blank_link link="https://splidejs.com/" text="Splide JS" >}}

## CMS availability

### Hugolify Admin

- [Hugolify Admin](/docs/cms/admin/)
  - [Decap CMS](/docs/cms/admin/cms/decap-cms/) {{< badge text="Available" state="success" >}}
  - [Netlify CMS](/docs/cms/admin/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
  - [Pages CMS](/docs/cms/admin/cms/pages-cms/) {{< badge text="Available" state="success" >}}
  - [Sveltia CMS](/docs/cms/admin/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

### Old repositories 

- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Available" state="success" >}}
