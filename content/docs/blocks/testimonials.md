---
title: Testimonials
description: Displays some testimonials in grid or carousel.
icon: chat-square-quote
---

# Testimonials block

Displays some testimonials in grid or carousel.

## Frontmatter

```yml
blocks:
  - type: testimonials
    heading: {}
    items:
      quote: '' // string
      author:
        title: '' // string
        text: '' // string
        image:
          src: '' // string
          alt: '' // string
    layout: '' // grid (default) or carousel
    carousel: {} // object (only if carousel layout)
    background: false
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/testimonials/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/testimonials.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/testimonials.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_testimonials.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/assets/js/components/carousel.js" text="JS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/testimonials.js" text="Decap CMS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/testimonials.yml" text="Hugolify admin file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

## Related links

- [Enable / Disable javascript](/docs/getting-started/customization/javascript/#carousel-splidejs)
- {{< blank_link link="https://splidejs.com/" text="Splide JS" >}}
