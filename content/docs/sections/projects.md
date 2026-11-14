---
title: Projects
description: Your projects with image list and data list.
icon: file-type
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
  - path: github.com/hugolify/hugolify-theme-projects/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Taxonomies

- [Tags](/docs/taxonomies/projects-tags/)
- [Types](/docs/taxonomies/projects-types/)

{{< alert text="The tags and types modules have not been migrated to v2 yet: they stay available for Hugolify v1." state="warning" >}}

## Files

| Module | Files |
| --- | --- |
| hugolify-theme-projects | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-projects/tree/main/layouts/partials/projects" text="Partials" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-projects/tree/main/layouts/projects" text="Page templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/types/projects.yml" text="Collection type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/fields/projects.fields.default.html" text="Fields" >}} |
| hugolify-example-site | {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/tree/main/content/projects" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-projects/blob/main/assets/sass/pages/_project.sass" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-projects/blob/main/assets/sass/pages/_projects.sass" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-projects/blob/main/assets/sass/components/_project.sass" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-projects/blob/main/assets/sass/components/_projects.sass" text="Items" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-projects/blob/main/assets/css/pages/project.css" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-projects/blob/main/assets/css/pages/projects.css" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-projects/blob/main/assets/css/components/project.css" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-projects/blob/main/assets/css/components/projects.css" text="Items" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-projects/tree/main/assets/css/tokens" text="Tokens" >}} |

## CMS availability

| CMS | Hugolify Admin v2 |
| --- | --- |
| [CloudCannon](/docs/admin/cms/cloudcannon/) | {{< badge text="Available" state="success" >}} |
| [Decap CMS](/docs/admin/cms/decap-cms/) | {{< badge text="Available" state="success" >}} |
| [Netlify CMS](/docs/admin/cms/netlify-cms/) | {{< badge text="Available" state="success" >}} |
| [Pages CMS](/docs/admin/cms/pages-cms/) | {{< badge text="Available" state="success" >}} |
| [Static CMS](/docs/admin/cms/static-cms/) | {{< badge text="Available" state="success" >}} |
| [Sveltia CMS](/docs/admin/cms/sveltia-cms/) | {{< badge text="Available" state="success" >}} |
| [Tina CMS](/docs/admin/cms/tina-cms/) | {{< badge text="Available" state="success" >}} |
