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
  - path: github.com/hugolify/hugolify-theme-persons-statutes/v2
  - path: github.com/hugolify/hugolify-theme-persons/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Related sections

- [Persons](/docs/sections/persons/)

## CMS

- [Hugolify Admin](/docs/admin/v1/) {{< badge text="Available" state="success" >}}

