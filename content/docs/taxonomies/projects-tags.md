---
title: Projects tags
description: Taxonomy tags for projects section.
icon: tag
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects" text="Hugolify theme projects" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects-tags" text="Hugolify theme projects tags" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-projects-tags
  - path: github.com/hugolify/hugolify-theme-projects
  - path: github.com/hugolify/hugolify-theme
```

## Related section

- [Projects](/docs/sections/projects/)

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.hugolify.io/projects/tags/" text="Demo visual renderer" >}}
