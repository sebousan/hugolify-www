---
title: Persons
description: Authors, concerned people and persons.
icon: people
---

## Examples

- {{< blank_link link="https://demo.hugolify.io/team/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/persons/" text="Demo content file on Github" >}}

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons" text="Hugolify theme persons" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```go-html-template
imports:
  - path: github.com/hugolify/hugolify-theme-persons
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-persons/tree/main/layouts/partials/persons" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons/blob/main/assets/sass/pages/_person.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons/blob/main/assets/sass/pages/_posts.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons/blob/main/assets/sass/components/_person.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-persons/blob/main/assets/sass/components/_persons.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/persons.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
