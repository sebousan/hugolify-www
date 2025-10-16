---
isIndex: false
title: Comparison
description: Displays comparison block.
icon: layout-three-columns
aliases:
- /docs/blocks/prices/
---

## Frontmatter

```yml
blocks:
  - type: comparison
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    column: '' # number, columns by row in desktop
    items: []
        title: '' # string (optional)
        text: '' # string (optional)
        offer:
          price: '' # float
          discount: '' # string (e.g. 10%)
          frequency: '' # string
        arguments: []
            icon: '' # string (bootstrap icon)
            text: '' # string
        cta: {} # (optional)
          text: '' # string
          url: '' # url
          blank: false # boolean (optional)
          lang: '' # code lang (optional)
        is_primary: false # boolean (optional)
    background: false # boolean (optional)
```

{{< button text="Demo visual renderer" url="https://demo.hugolify.io/blocks/comparison/" blank="true" >}}

## Files

- {{< blank_link text="HTML file" link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/comparison.html" >}}
- {{< blank_link text="SASS file" link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_comparison.sass" >}}
- {{< blank_link text="Demo content file" link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/comparison.md" >}}
- {{< blank_link text="Hugolify admin file" link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/comparison.yml" >}}

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
