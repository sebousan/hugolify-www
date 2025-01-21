---
title: Gallery
description: Displays an images gallery with accessible lightbox.
icon: grid-3x2-gap
---

## Frontmatter

```yml
blocks:
  - type: gallery
    heading: {}
    column: 4 // number, columns by row in desktop
    ratio: 1 // number, ratio of thumbnails format
    gallery:
      image: {}
    background: false
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/gallery/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/gallery.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/gallery.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_gallery.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/assets/js/components/gallery.js" text="JS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/gallery.js" text="Decap CMS file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

## Related link

- {{< blank_link link="https://midzer.github.io/tobii" text="Tobii JS library" >}}

## PostCSS

Add tobii class in deep safelist of {{< blank_link link="https://github.com/Hugolify/hugolify-template/blob/main/postcss.config.js" text="postcss.config.js" >}}.

```js
safelist: {
  deep: [/^tobii/]
}
```
