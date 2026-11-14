---
title: Case studies
description: Present case studies with blocks of content.
icon: book
---

{{< alert-block title="Not available in Hugolify v2" state="warning" >}}
This module has not been migrated to v2 yet: no `/v2` module path is published for it. It stays available for Hugolify v1.
{{< /alert-block >}}

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-casestudies" text="Hugolify theme casestudies" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-casestudies
  - path: github.com/hugolify/hugolify-theme/v2
```

## Files

| Module | Files |
| --- | --- |
| hugolify-theme-casestudies | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-casestudies/tree/main/layouts/partials/casestudies" text="Partials" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-casestudies/tree/main/layouts/casestudies" text="Page templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/types/casestudies.yml" text="Collection type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/fields/casestudies.fields.default.html" text="Fields" >}} |
| hugolify-example-site | {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/tree/main/content/casestudies" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-casestudies/blob/main/assets/sass/pages/_casestudy.sass" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-casestudies/blob/main/assets/sass/pages/_casestudies.sass" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-casestudies/blob/main/assets/sass/components/_casestudy.sass" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-casestudies/blob/main/assets/sass/components/_casestudies.sass" text="Items" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Not available" state="danger" >}} | None |

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

- {{< blank_link link="https://demo.hugolify.io/case-studies/" text="Demo visual renderer" >}}
