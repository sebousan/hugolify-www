---
title: Jobs places
description: Taxonomy places for jobs section.
icon: geo-alt
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-places" text="Hugolify theme places" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs" text="Hugolify theme jobs" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs-places" text="Hugolify theme jobs places" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-jobs-places/v2
  - path: github.com/hugolify/hugolify-theme-jobs/v2
  - path: github.com/hugolify/hugolify-theme-places/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Related sections

- [Jobs](/docs/sections/jobs/)
- [Places](/docs/sections/places/)

## CMS

- [Hugolify Admin (Multiple CMS)](/docs/admin/v1/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.hugolify.io/jobs/places/" text="Demo visual renderer" >}}
