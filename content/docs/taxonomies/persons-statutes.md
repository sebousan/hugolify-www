---
title: Persons statutes
description: Taxonomy statutes for persons section.
icon: geo-alt
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons" text="Hugolify theme persons" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons-statutes" text="Hugolify theme persons statutes" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-persons-statutes
  - path: github.com/hugolify/hugolify-theme-persons
  - path: github.com/hugolify/hugolify-theme
```

## Related sections

- [Persons](/docs/sections/persons/)

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}
