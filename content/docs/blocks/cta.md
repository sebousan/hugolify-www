---
title: Call to action
slug: cta
description: Displays a centered call to action.
icon: link
---

## Frontmatter usage

```yml
blocks:
  - type: cta
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    ctas: []
      text: '' # string
      url: '' # url
      blank: false # boolean (optional)
      lang: '' # code lang (optional)
    background: false # boolean (optional)
```

{{< button url="https://demo.hugolify.io/blocks/call-to-action/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/cta.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_cta.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/call-to-action.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/ctas.yml" text="Hugolify admin file" >}}

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
