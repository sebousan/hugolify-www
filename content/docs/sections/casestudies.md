---
title: Case studies
description: Present case studies with blocks of content.
icon: book
---

## Examples

- {{< blank_link link="https://demo.hugolify.io/case-studies/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/casestudies/" text="Demo content file on Github" >}}

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-casestudies" text="Hugolify theme casestudies" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```go-html-template
imports:
  - path: github.com/hugolify/hugolify-theme-casestudies
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-casestudies/tree/main/layouts/partials/casestudies" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-casestudies/blob/main/assets/sass/pages/_casestudy.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-casestudies/blob/main/assets/sass/pages/_casestudies.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-casestudies/blob/main/assets/sass/components/_casestudy.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-casestudies/blob/main/assets/sass/components/_casestudies.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/casestudies.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
