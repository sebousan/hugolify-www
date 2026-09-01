---
title: Jobs categories
description: Taxonomy categories for jobs section.
icon: bookmark
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs" text="Hugolify theme jobs" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs-categories" text="Hugolify theme jobs categories" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-jobs-categories/v2
  - path: github.com/hugolify/hugolify-theme-jobs/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Related section

- [Jobs](/docs/sections/jobs/)

## CMS

- [Hugolify Admin (Multiple CMS)](/docs/admin/v1/) {{< badge text="Available" state="success" >}}
