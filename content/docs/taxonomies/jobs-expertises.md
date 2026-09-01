---
title: Jobs expertises
description: Taxonomy expertises for jobs section.
icon: bookmark-check
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises" text="Hugolify theme expertises" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs" text="Hugolify theme jobs" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs-expertises" text="Hugolify theme jobs expertises" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-jobs-expertises/v2
  - path: github.com/hugolify/hugolify-theme-jobs/v2
  - path: github.com/hugolify/hugolify-theme-expertises/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Related sections

- [Expertises](/docs/sections/expertises/)
- [Jobs](/docs/sections/jobs/)

## CMS

- [Hugolify Admin (Multiple CMS)](/docs/admin/v1/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.hugolify.io/jobs/expertises/" text="Demo visual renderer" >}}
