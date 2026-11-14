---
title: Persons
description: Authors, concerned people and persons.
icon: users
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons" text="Hugolify theme persons" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-persons/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Taxonomies

- [Expertises](/docs/taxonomies/persons-expertises/)
- [Places](/docs/taxonomies/persons-places/)

**Setup with multiple taxonomies example**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-persons-expertises/v2
  - path: github.com/hugolify/hugolify-theme-persons-places/v2
  - path: github.com/hugolify/hugolify-theme-persons/v2
  - path: github.com/hugolify/hugolify-theme-expertises/v2
  - path: github.com/hugolify/hugolify-theme-places/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Files

| Module | Files |
| --- | --- |
| hugolify-theme-persons | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-persons/tree/main/layouts/_partials/persons" text="Partials" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-persons/tree/main/layouts/persons" text="Page templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/types/persons.yml" text="Collection type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/fields/persons.fields.default.html" text="Fields" >}} |
| hugolify-example-site | {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/tree/main/content/persons" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-persons/blob/main/assets/sass/pages/_person.sass" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-persons/blob/main/assets/sass/pages/_persons.sass" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-persons/blob/main/assets/sass/components/_person.sass" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-persons/blob/main/assets/sass/components/_persons.sass" text="Items" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-persons/blob/main/assets/css/pages/person.css" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-persons/blob/main/assets/css/pages/persons.css" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-persons/blob/main/assets/css/components/person.css" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-persons/blob/main/assets/css/components/persons.css" text="Items" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-persons/tree/main/assets/css/tokens" text="Tokens" >}} |

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

- {{< blank_link link="https://demo.hugolify.io/team/" text="Demo visual renderer" >}}
