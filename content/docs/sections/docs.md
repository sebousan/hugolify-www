---
title: Docs
description: Nested documentations pages.
icon: file-earmark-code
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-docs" text="Hugolify theme docs" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-docs
  - path: github.com/hugolify/hugolify-theme
```

**Params**

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
docs:
  thumbnail:
    desktop: '38x38'
    desktop_large: '100x100'
    mobile: '38x38'
    scrollsnap: '38x38'
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-docs/tree/main/layouts/partials/docs" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-docs/blob/main/assets/sass/pages/_doc.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-docs/blob/main/assets/sass/pages/_docs.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-docs/blob/main/assets/sass/components/_doc.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-docs/blob/main/assets/sass/components/_docs.sass" text="Items component" >}}

## CMS

- Hugolify Admin {{< badge text="Available" state="success" >}}
- Hugolify Decap CMS {{< badge text="Not available" state="danger" >}}
- Hugolify Netlify CMS {{< badge text="Not available" state="danger" >}}
- Hugolify Sveltia CMS {{< badge text="Not available" state="danger" >}}
