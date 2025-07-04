---
title: Case studies
description: Present case studies with blocks of content.
icon: book
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-casestudies" text="Hugolify theme casestudies" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-casestudies
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-casestudies/tree/main/layouts/partials/casestudies" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-casestudies/blob/main/assets/sass/pages/_casestudy.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-casestudies/blob/main/assets/sass/pages/_casestudies.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-casestudies/blob/main/assets/sass/components/_casestudy.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-casestudies/blob/main/assets/sass/components/_casestudies.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/casestudies.js" text="Decap CMS file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.hugolify.io/case-studies/" text="Demo visual renderer" >}}
