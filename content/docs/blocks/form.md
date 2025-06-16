---
title: Form
description: Displays a form.
icon: input-cursor-text
---

{{< alert text="Netlify hosting is required" state="warning" >}}

## Frontmatter

```yml
blocks:
  - type: form
    heading: {}
    grid: ''
    offset: ''
    name: '' // string
    submit: '' // string
    items: []
      label: '' // string
      type: '' [email, select, tel, text, textarea]
      options: [] // if select
        title: '' // string
        value: '' // string
      required: false // boolean
      full: false // boolean
      autocomplete: '' // autocomplete value like postal-code, email…
    background: false
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/form/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/form.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/form.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_form.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/form.js" text="Decap CMS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/form.yml" text="Hugolify admin file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

## Related links

- {{< blank_link link="https://developer.mozilla.org/fr/docs/Web/HTML/Attributes/autocomplete" text="Autocomplete attributes" >}}
- [Use Netlify form or another services](/docs/getting-started/form/) 