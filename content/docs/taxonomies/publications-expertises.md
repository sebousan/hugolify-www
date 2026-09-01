---
title: Publications expertises
description: Taxonomy expertises for publications section.
icon: bookmark-check
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises" text="Hugolify theme expertises" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-publications" text="Hugolify theme publications" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-publications-expertises" text="Hugolify theme publications expertises" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-publications-expertises/v2
  - path: github.com/hugolify/hugolify-theme-publications/v2
  - path: github.com/hugolify/hugolify-theme-expertises/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Related sections

- [Expertises](/docs/sections/expertises/)
- [Publications](/docs/sections/publications/)

## CMS

- [Hugolify Admin](/docs/admin/v1/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.lawyerify.io/parutions/expertises/droit-penal/" text="Demo visual renderer (on lawyerify in french)" >}}
