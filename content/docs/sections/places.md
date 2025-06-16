---
title: Places
description: Places of your firm.
icon: shop
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-places" text="Hugolify theme places" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-places
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-places/tree/main/layouts/partials/places" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-places/blob/main/assets/sass/pages/_place.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-places/blob/main/assets/sass/pages/_places.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-places/blob/main/assets/sass/components/_place.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-places/blob/main/assets/sass/components/_places.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/places.js" text="Decap CMS file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}
