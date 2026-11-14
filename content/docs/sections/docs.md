---
title: Docs
description: Nested documentations pages.
icon: file-code
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-docs" text="Hugolify theme docs" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-docs/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

**Params**

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
docs:
  thumbnail:
    desktop: '38x38'
    mobile: '38x38'
    scrollsnap: '38x38'
```

## Files

| Module | Files |
| --- | --- |
| hugolify-theme-docs | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-docs/tree/main/layouts/_partials/docs" text="Partials" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-docs/tree/main/layouts/docs" text="Page templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/types/docs.yml" text="Collection type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/fields/docs.fields.default.html" text="Fields" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-docs/blob/main/assets/sass/pages/_doc.sass" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-docs/blob/main/assets/sass/pages/_docs.sass" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-docs/blob/main/assets/sass/components/_doc.sass" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-docs/blob/main/assets/sass/components/_docs.sass" text="Items" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-docs/blob/main/assets/css/pages/doc.css" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-docs/blob/main/assets/css/pages/docs.css" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-docs/blob/main/assets/css/components/doc.css" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-docs/blob/main/assets/css/components/docs.css" text="Items" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-docs/tree/main/assets/css/tokens" text="Tokens" >}} |

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
