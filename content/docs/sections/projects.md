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

- [Tags](/docs/taxonomies/projects-tags/)
- [Types](/docs/taxonomies/projects-types/)

**Setup with multiple taxonomies example**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
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

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}
