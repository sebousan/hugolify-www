---
title: Persons
description: Authors, concerned people and persons.
icon: people
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons" text="Hugolify theme persons" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-persons/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Taxonomies

- [Expertises](/docs/taxonomies/persons-expertises/)
- [Places](/docs/taxonomies/persons-places/)

**Setup with multiple taxonomies example**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-persons-expertises/v2
  - path: github.com/hugolify/hugolify-theme-persons-places/v2
  - path: github.com/hugolify/hugolify-theme-persons/v2
  - path: github.com/hugolify/hugolify-theme-expertises/v2
  - path: github.com/hugolify/hugolify-theme-places/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-persons/tree/main/layouts/partials/persons" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons/blob/main/assets/sass/pages/_person.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons/blob/main/assets/sass/pages/_persons.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons/blob/main/assets/sass/components/_person.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons/blob/main/assets/sass/components/_persons.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/persons.js" text="Decap CMS file" >}}

## CMS

- [Hugolify Admin](/docs/admin/v1/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.hugolify.io/team/" text="Demo visual renderer" >}}
