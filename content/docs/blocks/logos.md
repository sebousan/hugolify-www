---
title: Logos
description: Displays a logos list.
icon: grip-horizontal
---

# Logos block

Displays a video element.

## Frontmatter

```yml
blocks:
  - type: logos
    heading: {}
    items: []
    layout: '' // grid (default) or carousel
    carousel: {} // object (only if carousel layout)
    background: false
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/logos/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/logos.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/logos.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_logos.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/assets/js/components/carousel.js" text="JS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/logos.yml" text="Hugolify admin file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Not available" state="danger" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Not available" state="danger" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Not available" state="danger" >}}

## Related links

- [Enable / Disable javascript](/docs/getting-started/customization/javascript/#carousel-splidejs)
- {{< blank_link link="https://splidejs.com/" text="Splide JS" >}}
