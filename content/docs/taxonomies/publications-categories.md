---
title: Publications categories
description: Taxonomy categories for publications section.
icon: bookmark
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-publications" text="Hugolify theme publications" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-publications-categories" text="Hugolify theme publications categories" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-publications-categories/v2
  - path: github.com/hugolify/hugolify-theme-publications/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Related section

- [Publications](/docs/sections/publications/)

## CMS

- [Hugolify Admin](/docs/admin/v1/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.lawyerify.io/parutions/categories/podcast/" text="Demo visual renderer (on lawyerify in french)" >}}
