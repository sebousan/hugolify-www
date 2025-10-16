---
title: Newsletter
description: Displays a newsletter signup form.
icon: envelope
---

## Frontmatter

```yml
blocks:
  - type: newsletter
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    form: {}
      url: '' # url
      button: '' # string
      hiddens: [] # (optional)
        name: '' # string
        value: '' # string
    grid: '' # [small, medium, large, container, full] (optional)
    background: false # boolean (optional)
```

{{< button url="https://demo.hugolify.io/blocks/newsletter/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/newsletter.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_newsletter.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/newsletter.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/newsletter.yml" text="Hugolify admin file" >}}

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
