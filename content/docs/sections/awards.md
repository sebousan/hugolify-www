---
title: Awards
description: Present awards with blocks of content.
icon: award
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme-awards" text="Hugolify theme awards" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-awards/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Files

| Module | Files |
| --- | --- |
| hugolify-theme-awards | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-awards/tree/main/layouts/_partials/awards" text="Partials" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-awards/tree/main/layouts/awards" text="Page templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/types/awards.yml" text="Collection type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/fields/awards.fields.default.html" text="Fields" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-awards/blob/main/assets/sass/pages/_award.sass" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-awards/blob/main/assets/sass/pages/_awards.sass" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-awards/blob/main/assets/sass/components/_award.sass" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-awards/blob/main/assets/sass/components/_awards.sass" text="Items" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-awards/blob/main/assets/css/pages/award.css" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-awards/blob/main/assets/css/pages/awards.css" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-awards/blob/main/assets/css/components/award.css" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-awards/blob/main/assets/css/components/awards.css" text="Items" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-awards/tree/main/assets/css/tokens" text="Tokens" >}} |

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
