---
title: Services persons
description: Taxonomy persons for services section.
icon: bookmark
---

{{< alert-block title="Not available in Hugolify v2" state="warning" >}}
This module has not been migrated to v2 yet — no `/v2` module path is published for it. It stays available for Hugolify v1.
{{< /alert-block >}}

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-services" text="Hugolify theme services" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-services-persons" text="Hugolify theme services persons" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons" text="Hugolify theme persons" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-services-persons
  - path: github.com/hugolify/hugolify-theme-services
  - path: github.com/hugolify/hugolify-theme-persons/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Related section

- [Services](/docs/sections/services/)

## CMS

- [Hugolify Admin](/docs/admin/v1/) {{< badge text="Available" state="success" >}}

