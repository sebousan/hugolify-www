---
title: Expertises
description: Skills of a firm or a person.
icon: mortarboard
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises" text="Hugolify theme expertises" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-expertises
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-expertises/tree/main/layouts/partials/expertises" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises/blob/main/assets/sass/pages/_expertise.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises/blob/main/assets/sass/pages/_expertises.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises/blob/main/assets/sass/components/_expertise.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises/blob/main/assets/sass/components/_expertises.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/expertises.js" text="Decap CMS file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.lawyerify.io/expertises/" text="Demo visual renderer (on lawyerify in french)" >}}
