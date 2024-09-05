---
title: Projects
description: Your projects with image list and data list.
icon: file-earmark-richtext
---

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
  - path: github.com/hugolify/hugolify-theme
```

## Taxonomies

- {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects-tags" text="Tags" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects-types" text="Types" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```go-html-template
imports:
  - path: github.com/hugolify/hugolify-theme-projects-tags
  - path: github.com/hugolify/hugolify-theme-projects-types
  - path: github.com/hugolify/hugolify-theme-projects
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-projects/tree/main/layouts/partials/projects" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects/blob/main/assets/sass/pages/_project.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects/blob/main/assets/sass/pages/_projects.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects/blob/main/assets/sass/components/_project.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-projects/blob/main/assets/sass/components/_projects.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/projects.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
