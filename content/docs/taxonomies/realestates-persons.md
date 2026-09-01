---
title: Realestates persons
description: Taxonomy persons for realestates section.
icon: person
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-realestates" text="Hugolify theme realestates" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-realestates-persons" text="Hugolify theme realestates persons" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-realestates-persons/v2
  - path: github.com/hugolify/hugolify-theme-realestates/v2
  - path: github.com/hugolify/hugolify-theme-persons/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Related section

- [Persons](/docs/sections/persons/)
- [Realestates](/docs/sections/realestates/)

## CMS

- [Hugolify Admin](/docs/admin/v1/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.realestatify.io/ventes-immobilieres/personnes/" text="Demo visual renderer (on realestatify in french)" >}}
