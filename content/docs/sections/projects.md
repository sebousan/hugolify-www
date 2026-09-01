---
title: Projects
description: Your projects with image list and data list.
icon: file-earmark-richtext
---

{{< alert-block title="Not available in Hugolify v2" state="warning" >}}
This module has not been migrated to v2 yet — no `/v2` module path is published for it. It stays available for Hugolify v1.
{{< /alert-block >}}

## Example

- {{< blank_link link="https://demo.hugolify.io/projects/" text="Demo visual renderer" >}}

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects" text="Hugolify theme projects" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-projects
  - path: github.com/hugolify/hugolify-theme/v2
```

## Taxonomies

- [Tags](/docs/taxonomies/projects-tags/)
- [Types](/docs/taxonomies/projects-types/)

**Setup with multiple taxonomies example**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-projects-tags
  - path: github.com/hugolify/hugolify-theme-projects-types
  - path: github.com/hugolify/hugolify-theme-projects
  - path: github.com/hugolify/hugolify-theme/v2
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-projects/tree/main/layouts/partials/projects" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects/blob/main/assets/sass/pages/_project.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects/blob/main/assets/sass/pages/_projects.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects/blob/main/assets/sass/components/_project.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects/blob/main/assets/sass/components/_projects.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/projects.js" text="Decap CMS file" >}}

## CMS

- [Hugolify Admin](/docs/admin/v1/) {{< badge text="Available" state="success" >}}
