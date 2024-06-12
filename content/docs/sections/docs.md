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

```go-html-template
imports:
  - path: github.com/hugolify/hugolify-theme-docs
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-docs/tree/main/layouts/partials/docs" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-docs/blob/main/assets/sass/pages/_doc.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-docs/blob/main/assets/sass/pages/_docs.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-docs/blob/main/assets/sass/components/_doc.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-docs/blob/main/assets/sass/components/_docs.sass" text="Items component" >}}

## Decap CMS

{{< alert text="Not available" state="danger" >}}
