---
title: Comparison
description: Displays comparison block.
icon: layout-three-columns
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
    background: false
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/comparison/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/comparison/_index.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/comparison.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/comparison.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/comparison.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
