---
title: Pages
description: Nested pages with blocks of content.
icon: file-earmark
---

## Examples

- {{< blank_link link="https://demo.hugolify.io/legal-mentions/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/legal-mentions.md" text="Demo content file on Github" >}}

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/tree/main/layouts/partials/pages" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/pages/_page.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/pages/_pages.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/_page.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/_pages.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/pages.js" text="Decap CMS file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}
