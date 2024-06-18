---
title: Real estates
description: Ads, auctions
icon: house-add
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-realestates" text="Hugolify theme realestates" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-realestates
  - path: github.com/hugolify/hugolify-theme
```

## Taxonomies

- {{< blank_link link="https://github.com/hugolify/hugolify-theme-realestates-persons" text="Persons" >}} _Theme persons required_

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```go-html-template
imports:
  - path: github.com/hugolify/hugolify-theme-realestates-persons
  - path: github.com/hugolify/hugolify-theme-realestates
  - path: github.com/hugolify/hugolify-theme-persons
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-realestates/tree/main/layouts/partials/realestates" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-realestates/blob/main/assets/sass/pages/_realestate.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-realestates/blob/main/assets/sass/pages/_realestates.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-realestates/blob/main/assets/sass/components/_realestate.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-realestates/blob/main/assets/sass/components/_realestates.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/realestates.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
