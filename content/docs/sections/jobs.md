---
title: Jobs
description: Job advertisement.
icon: megaphone
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs" text="Hugolify theme jobs" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-jobs/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Taxonomies

- [Categories](/docs/taxonomies/jobs-categories/)
- [Expertises](/docs/taxonomies/jobs-expertises/)
- [Places](/docs/taxonomies/jobs-places/)
- [Persons](/docs/taxonomies/jobs-tags/)

**Setup with multiple taxonomies example**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-jobs-categories/v2
  - path: github.com/hugolify/hugolify-theme-jobs-expertises/v2
  - path: github.com/hugolify/hugolify-theme-jobs-places/v2
  - path: github.com/hugolify/hugolify-theme-jobs/v2
  - path: github.com/hugolify/hugolify-theme-places/v2
  - path: github.com/hugolify/hugolify-theme-expertises/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Files

| Module | Files |
| --- | --- |
| hugolify-theme-jobs | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-jobs/tree/main/layouts/_partials/jobs" text="Partials" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-jobs/tree/main/layouts/jobs" text="Page templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/types/jobs.yml" text="Collection type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/fields/jobs.fields.default.html" text="Fields" >}} |
| hugolify-example-site | {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/tree/main/content/jobs" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-jobs/blob/main/assets/sass/pages/_job.sass" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-jobs/blob/main/assets/sass/pages/_jobs.sass" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-jobs/blob/main/assets/sass/components/_job.sass" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-jobs/blob/main/assets/sass/components/_jobs.sass" text="Items" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-jobs/blob/main/assets/css/pages/job.css" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-jobs/blob/main/assets/css/pages/jobs.css" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-jobs/blob/main/assets/css/components/job.css" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-jobs/blob/main/assets/css/components/jobs.css" text="Items" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-jobs/tree/main/assets/css/tokens" text="Tokens" >}} |

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

- {{< blank_link link="https://demo.hugolify.io/jobs/" text="Demo visual renderer" >}}
