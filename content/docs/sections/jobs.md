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

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-jobs/tree/main/layouts/partials/jobs" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs/blob/main/assets/sass/pages/_job.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs/blob/main/assets/sass/pages/_jobs.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs/blob/main/assets/sass/components/_job.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs/blob/main/assets/sass/components/_jobs.sass" text="Items component" >}}


## CMS

- [Hugolify Admin (Multiple CMS)](/docs/admin/v1/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.hugolify.io/jobs/" text="Demo visual renderer" >}}
