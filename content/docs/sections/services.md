---
title: Services
description: Service of your company or person.
icon: briefcase
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-services" text="Hugolify theme services" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-services
  - path: github.com/hugolify/hugolify-theme
```

## Taxonomies

- {{< blank_link link="https://github.com/hugolify/hugolify-theme-services-categories" text="Categories" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-services-categories
  - path: github.com/hugolify/hugolify-theme-services
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-services/tree/main/layouts/partials/services" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-services/blob/main/assets/sass/pages/_service.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-services/blob/main/assets/sass/pages/_services_.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-services/blob/main/assets/sass/components/_service.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-services/blob/main/assets/sass/components/_services.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/services.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
