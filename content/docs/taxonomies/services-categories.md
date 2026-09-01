---
title: Services categories
description: Taxonomy categories for services section.
icon: bookmark
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-services" text="Hugolify theme services" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-services-categories" text="Hugolify theme services categories" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-services-categories
  - path: github.com/hugolify/hugolify-theme-services
  - path: github.com/hugolify/hugolify-theme
```

## Related section

- [Services](/docs/sections/services/)

## CMS

- [Hugolify Admin (Multiple CMS)](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/){{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}