---
title: Informations
description:
  Displays some cards informations in column. Icon, images and button are
  available
---

# Informations block

Displays some cards informations in column. Icon, images and button are
available

## Frontmatter

```yml
blocks:
  - type: informations
    column: ''
    heading:
      surtitle: '' // string
      title: '' // string
      text: '' // markdown
    items:
      icon: '' // string (bootstrap icon)
      image:
        src: '' // string
        alt: '' // string
        isLogo: false
      title: '' // string
      text: '' // string
      cta:
        text: '' // string
        url: '' // string
        blank: false '' // boolean
    background: false '' // boolean
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/informations/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/blocks/informations/_index.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/informations.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_informations.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/informations.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}

## Related link

- {{< blank_link link="https://icons.getbootstrap.com/" text="Icon list" >}}
