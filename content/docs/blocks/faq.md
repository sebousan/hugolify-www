---
title: FAQ
description: Displays some images cards in column. Alignment and button are available.
icon: patch-question
---

## Frontmatter

```yml
blocks:
  - type: faq
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    items: []
      name: "" # string (optional)
      open: false # boolean (optional)
      summary: "" # string (optional)
      title: "" # string (optional)
      text: "" # string (optional)
    background: false # boolean (optional)
```

{{< button url="https://demo.hugolify.io/blocks/faq/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/faq.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_faq.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/faq.js" text="Decap CMS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/faq.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/faq.yml" text="Hugolify admin file" >}}


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
