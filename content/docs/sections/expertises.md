---
title: Expertises
description: Skills of a firm or a person.
icon: mortarboard
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises" text="Hugolify theme expertises" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```go-html-template
imports:
  - path: github.com/hugolify/hugolify-theme-expertises
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-expertises/tree/main/layouts/partials/expertises" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises/blob/main/assets/sass/pages/_expertise.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises/blob/main/assets/sass/pages/_expertises.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises/blob/main/assets/sass/components/_expertise.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises/blob/main/assets/sass/components/_expertises.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/expertises.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
