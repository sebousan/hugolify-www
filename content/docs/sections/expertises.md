---
title: Expertises
description: Skills of a firm or a person.
icon: graduation-cap
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises" text="Hugolify theme expertises" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-expertises/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Files

| Module | Files |
| --- | --- |
| hugolify-theme-expertises | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-expertises/tree/main/layouts/_partials/expertises" text="Partials" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-expertises/tree/main/layouts/expertises" text="Page templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/types/expertises.yml" text="Collection type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/fields/expertises.fields.default.html" text="Fields" >}} |
| hugolify-example-site | {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/tree/main/content/expertises" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-expertises/blob/main/assets/sass/pages/_expertise.sass" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-expertises/blob/main/assets/sass/pages/_expertises.sass" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-expertises/blob/main/assets/sass/components/_expertise.sass" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-expertises/blob/main/assets/sass/components/_expertises.sass" text="Items" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-expertises/blob/main/assets/css/pages/expertise.css" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-expertises/blob/main/assets/css/pages/expertises.css" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-expertises/blob/main/assets/css/components/expertise.css" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-expertises/blob/main/assets/css/components/expertises.css" text="Items" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-expertises/tree/main/assets/css/tokens" text="Tokens" >}} |

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

## Example

- {{< blank_link link="https://demo.lawyerify.io/expertises/" text="Demo visual renderer (on lawyerify in french)" >}}
