---
title: Publications
description: Archiving of press releases.
icon: newspaper
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-publications" text="Hugolify theme publications" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-publications
  - path: github.com/hugolify/hugolify-theme
```

## Taxonomies

- [Categories](/docs/taxonomies/publications-categories/)
- [Expertises](/docs/taxonomies/publications-expertises/)
- [Persons](/docs/taxonomies/publications-persons/)

**Setup with multiple taxonomies example**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-publications-categories
  - path: github.com/hugolify/hugolify-theme-publications-expertises
  - path: github.com/hugolify/hugolify-theme-publications-persons
  - path: github.com/hugolify/hugolify-theme-publications
  - path: github.com/hugolify/hugolify-theme-persons
  - path: github.com/hugolify/hugolify-theme-expertises
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-publications/tree/main/layouts/partials/publications" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-publications/blob/main/assets/sass/pages/_publication.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-publications/blob/main/assets/sass/pages/_publications.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-publications/blob/main/assets/sass/components/_publication.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-publications/blob/main/assets/sass/components/_publications.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/publications.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.hugolify.io/publications/" text="Demo visual renderer" >}}
