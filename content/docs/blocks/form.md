---
title: Form
description: Displays a form.
icon: input-cursor-text
---

{{< alert text="Netlify hosting is required or use another default service" state="warning" >}}

## Frontmatter

```yml
blocks:
  - type: form
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    grid: '' # [small, medium, large, container, full] (optional)
    offset: '' # [start, end, center] (optional)
    name: '' # string
    submit: '' # string
    items: []
      label: '' # string
      type: '' # [email, select, tel, text, textarea]
      options: [] # if select
        title: '' # string
        value: '' # string
      required: false # boolean
      full: false # boolean
      autocomplete: '' # autocomplete value like postal-code, email…
    background: false # boolean (optional)
```

{{< button url="https://demo.hugolify.io/blocks/form/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/form.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_form.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/form.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/form.yml" text="Hugolify admin file" >}}

## Related links

- {{< blank_link link="https://developer.mozilla.org/fr/docs/Web/HTML/Attributes/autocomplete" text="Autocomplete attributes" >}}
- [Use Netlify form or another services](/docs/getting-started/form/) 

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
