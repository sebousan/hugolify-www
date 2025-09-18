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
    heading: {}
    column: '' // number
    items: []
        title: '' // string
        text: '' // string
        offer:
          price: '' // float
          discount: '' // string (e.g. 10%)
          frequency: '' // string
        arguments: []
            icon: '' // string (bootstrap icon)
            text: '' // string
        cta: {}
        is_primary: false
    background: false
```

## Examples

- {{< blank_link text="Demo visual renderer" link="https://demo.hugolify.io/blocks/comparison/" >}}
- {{< blank_link text="Demo content file on Github" link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/comparison.md" >}}

## Files

- {{< blank_link text="HTML file" link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/comparison.html" >}}
- {{< blank_link text="SASS file" link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_comparison.sass" >}}
- {{< blank_link text="Decap CMS file" link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/comparison.js" >}}
- {{< blank_link text="Hugolify admin file" link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/comparison.yml" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}
