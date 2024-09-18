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

## Decap CMS

{{< alert text="Available" state="success" >}}

## Related link

- {{< blank_link link="https://splidejs.com/" text="Splide JS" >}}
