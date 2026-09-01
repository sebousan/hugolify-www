---
title: Projects tags
description: Taxonomy tags for projects section.
icon: tag
---

{{< alert-block title="Not available in Hugolify v2" state="warning" >}}
This module has not been migrated to v2 yet — no `/v2` module path is published for it. It stays available for Hugolify v1.
{{< /alert-block >}}

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects" text="Hugolify theme projects" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects-tags" text="Hugolify theme projects tags" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-projects-tags
  - path: github.com/hugolify/hugolify-theme-projects
  - path: github.com/hugolify/hugolify-theme/v2
```

## Related section

- [Projects](/docs/sections/projects/)

## CMS

- [Hugolify Admin](/docs/admin/v1/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.hugolify.io/projects/tags/" text="Demo visual renderer" >}}
