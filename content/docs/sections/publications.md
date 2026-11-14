---
title: Publications
description: Archiving of press releases.
icon: newspaper
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-publications" text="Hugolify theme publications" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-publications/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Taxonomies

- [Categories](/docs/taxonomies/publications-categories/)
- [Expertises](/docs/taxonomies/publications-expertises/)
- [Persons](/docs/taxonomies/publications-persons/)

**Setup with multiple taxonomies example**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-publications-categories/v2
  - path: github.com/hugolify/hugolify-theme-publications-expertises/v2
  - path: github.com/hugolify/hugolify-theme-publications-persons/v2
  - path: github.com/hugolify/hugolify-theme-publications/v2
  - path: github.com/hugolify/hugolify-theme-persons/v2
  - path: github.com/hugolify/hugolify-theme-expertises/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Files

| Module | Files |
| --- | --- |
| hugolify-theme-publications | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-publications/tree/main/layouts/partials/publications" text="Partials" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-publications/tree/main/layouts/publications" text="Page templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/types/publications.yml" text="Collection type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/fields/publications.fields.default.html" text="Fields" >}} |
| hugolify-example-site | {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/tree/main/content/publications" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-publications/blob/main/assets/sass/pages/_publication.sass" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-publications/blob/main/assets/sass/pages/_publications.sass" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-publications/blob/main/assets/sass/components/_publication.sass" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-publications/blob/main/assets/sass/components/_publications.sass" text="Items" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-publications/blob/main/assets/css/pages/publication.css" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-publications/blob/main/assets/css/pages/publications.css" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-publications/blob/main/assets/css/components/publication.css" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-publications/blob/main/assets/css/components/publications.css" text="Items" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-publications/tree/main/assets/css/tokens" text="Tokens" >}} |

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

- {{< blank_link link="https://demo.hugolify.io/publications/" text="Demo visual renderer" >}}
