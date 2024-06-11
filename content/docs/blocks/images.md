---
title: Images
description: Displays an images list in one or two columns.
---

# Images block

Displays an images list in one or two columns.

## Frontmatter

```yml
blocks:
  - type: images
    heading:
      surtitle: '' // string
      title: '' // string
      text: '' // markdown
    items:
      image:
        src: '' // string
        alt: '' // string
        legend: '' // string
        credit: '' // markdown
        half: false '' // boolean
    background: false '' // boolean
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/images/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/blocks/images/_index.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/images.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_images.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/images.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
