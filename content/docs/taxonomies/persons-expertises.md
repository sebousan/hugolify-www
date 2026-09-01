---
title: Persons expertises
description: Taxonomy expertises for persons section.
icon: bookmark-check
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises" text="Hugolify theme expertises" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons" text="Hugolify theme persons" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons-expertises" text="Hugolify theme persons expertises" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-persons-expertises/v2
  - path: github.com/hugolify/hugolify-theme-persons/v2
  - path: github.com/hugolify/hugolify-theme-expertises/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Related sections

- [Expertises](/docs/sections/expertises/)
- [Persons](/docs/sections/persons/)

## CMS

- [Hugolify Admin](/docs/admin/v1/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.lawyerify.io/equipe/expertises/" text="Demo visual renderer (on lawyerify in french)" >}}
