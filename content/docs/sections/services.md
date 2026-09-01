---
title: Services
description: Service of your company or person.
icon: briefcase
---

{{< alert-block title="Not available in Hugolify v2" state="warning" >}}
This module has not been migrated to v2 yet — no `/v2` module path is published for it. It stays available for Hugolify v1.
{{< /alert-block >}}

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-services" text="Hugolify theme services" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-services
  - path: github.com/hugolify/hugolify-theme/v2
```

## Taxonomies

- [Categories](/docs/taxonomies/services-categories/)
- [Persons](/docs/taxonomies/services-persons/)

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-services-categories
  - path: github.com/hugolify/hugolify-theme-services
  - path: github.com/hugolify/hugolify-theme/v2
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-services/tree/main/layouts/partials/services" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-services/blob/main/assets/sass/pages/_service.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-services/blob/main/assets/sass/pages/_services_.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-services/blob/main/assets/sass/components/_service.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-services/blob/main/assets/sass/components/_services.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/services.js" text="Decap CMS file" >}}

## CMS

- [Hugolify Admin](/docs/admin/v1/) {{< badge text="Available" state="success" >}}
