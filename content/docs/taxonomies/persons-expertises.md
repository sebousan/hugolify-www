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
  - path: github.com/hugolify/hugolify-theme-persons-expertises
  - path: github.com/hugolify/hugolify-theme-persons
  - path: github.com/hugolify/hugolify-theme-expertises
  - path: github.com/hugolify/hugolify-theme
```

## Related sections

- [Expertises](/docs/sections/expertises/)
- [Persons](/docs/sections/persons/)

## Decap CMS

{{< alert text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.lawyerify.io/equipe/expertises/" text="Demo visual renderer (on lawyerify in french)" >}}
