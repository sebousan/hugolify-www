---
title: Informations
description:
  Displays some cards informations in column. Icon, images and button are
  available
icon: card-heading
---

## Frontmatter

```yml
blocks:
  - type: informations
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    column: '' # number, columns by row in desktop (optional)
    items: []
      icon: '' # string (bootstrap icon)
      image: {} # (optional)
        src: '' # string
        alt: '' # string (optional)
        isLogo: false # boolean (optional)
      title: '' # string (optional)
      text: '' # string (optional)
      cta: {} # (optional)
        text: '' # string
        url: '' # url
        blank: false # boolean (optional)
        lang: '' # code lang (optional)
    background: false # boolean (optional)
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/informations/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/informations.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/informations.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_informations.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/informations.js" text="Decap CMS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/informations.yml" text="Hugolify admin file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

## Related link

- {{< blank_link link="https://icons.getbootstrap.com/" text="Icon list" >}}
