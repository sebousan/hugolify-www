---
title: Real estates
description: Ads, auctions
icon: house-plus
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-realestates" text="Hugolify theme realestates" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-realestates/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Taxonomies

- [Persons](/docs/taxonomies/realestates-persons/)

**Setup with taxonomies example**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-realestates-persons/v2
  - path: github.com/hugolify/hugolify-theme-realestates/v2
  - path: github.com/hugolify/hugolify-theme-persons/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Files

| Module | Files |
| --- | --- |
| hugolify-theme-realestates | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-realestates/tree/main/layouts/partials/realestates" text="Partials" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-realestates/tree/main/layouts/realestates" text="Page templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/types/realestates.yml" text="Collection type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/fields/realestates.fields.default.html" text="Fields" >}} |
| hugolify-example-site | {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/tree/main/content/realestates" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-realestates/blob/main/assets/sass/pages/_realestate.sass" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-realestates/blob/main/assets/sass/pages/_realestates.sass" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-realestates/blob/main/assets/sass/components/_realestate.sass" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-realestates/blob/main/assets/sass/components/_realestates.sass" text="Items" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-realestates/blob/main/assets/css/pages/realestate.css" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-realestates/blob/main/assets/css/pages/realestates.css" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-realestates/blob/main/assets/css/components/realestate.css" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-realestates/blob/main/assets/css/components/realestates.css" text="Items" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-realestates/tree/main/assets/css/tokens" text="Tokens" >}} |

## CMS availability

| CMS | Hugolify Admin v2 |
| --- | --- |
| [CloudCannon](/docs/admin/cms/cloudcannon/) | {{< badge text="Without the map widget" state="warning" >}} |
| [Decap CMS](/docs/admin/cms/decap-cms/) | {{< badge text="Available" state="success" >}} |
| [Netlify CMS](/docs/admin/cms/netlify-cms/) | {{< badge text="Available" state="success" >}} |
| [Pages CMS](/docs/admin/cms/pages-cms/) | {{< badge text="Without the map widget" state="warning" >}} |
| [Static CMS](/docs/admin/cms/static-cms/) | {{< badge text="Available" state="success" >}} |
| [Sveltia CMS](/docs/admin/cms/sveltia-cms/) | {{< badge text="Available" state="success" >}} |
| [Tina CMS](/docs/admin/cms/tina-cms/) | {{< badge text="Without the map widget" state="warning" >}} |

{{< alert-block state="warning" >}}
CloudCannon, Pages CMS and Tina CMS have no map widget, so the admin gives them a `coordinates` object with `lat` and `lng` fields instead of the `location` picker of the address.
{{< /alert-block >}}
