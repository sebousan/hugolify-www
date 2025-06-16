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
  - path: github.com/hugolify/hugolify-theme-persons
  - path: github.com/hugolify/hugolify-theme
```

## Taxonomies

- [Expertises](/docs/taxonomies/persons-expertises/)
- [Places](/docs/taxonomies/persons-places/)

**Setup with multiple taxonomies example**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-persons-expertises
  - path: github.com/hugolify/hugolify-theme-persons-places
  - path: github.com/hugolify/hugolify-theme-persons
  - path: github.com/hugolify/hugolify-theme-expertises
  - path: github.com/hugolify/hugolify-theme-places
  - path: github.com/hugolify/hugolify-theme
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

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.hugolify.io/team/" text="Demo visual renderer" >}}
