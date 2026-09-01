---
title: Jobs tags
description: Taxonomy tags for jobs section.
icon: tag
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs" text="Hugolify theme jobs" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs-tags" text="Hugolify theme jobs tags" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-jobs-tags/v2
  - path: github.com/hugolify/hugolify-theme-jobs/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Related section

- [Jobs](/docs/sections/jobs/)

## CMS

- [Hugolify Admin (Multiple CMS)](/docs/admin/v1/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.hugolify.io/jobs/tags/" text="Demo visual renderer" >}}
