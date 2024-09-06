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

## Decap CMS

{{< alert text="Available" state="success" >}}
