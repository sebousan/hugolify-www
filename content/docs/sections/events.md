---
title: Events
description: Page for an event.
icon: calendar-check
---
{{< badge text="Beta" state="warning" >}}

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-events" text="Hugolify theme events" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-events/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Taxonomies

- [Categories](/docs/taxonomies/events-categories/)
- [Persons](/docs/taxonomies/events-persons/)

{{< alert text="The categories and persons modules have not been migrated to v2 yet: they stay available for Hugolify v1." state="warning" >}}

## Files

| Module | Files |
| --- | --- |
| hugolify-theme-events | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-events/tree/main/layouts/partials/events" text="Partials" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-events/tree/main/layouts/events" text="Page templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/types/events.yml" text="Collection type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/fields/events.fields.default.html" text="Fields" >}} |
| hugolify-example-site | {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/tree/main/content/events" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-events/blob/main/assets/sass/pages/_event.sass" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-events/blob/main/assets/sass/pages/_events.sass" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-events/blob/main/assets/sass/components/_event.sass" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-events/blob/main/assets/sass/components/_events.sass" text="Items" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-events/blob/main/assets/css/pages/event.css" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-events/blob/main/assets/css/pages/events.css" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-events/blob/main/assets/css/components/event.css" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-events/blob/main/assets/css/components/events.css" text="Items" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-events/tree/main/assets/css/tokens" text="Tokens" >}} |

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
