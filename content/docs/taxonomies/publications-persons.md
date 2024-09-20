---
title: Publications persons
description: Taxonomy persons for publications section.
icon: person
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-publications" text="Hugolify theme publications" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-publications-persons" text="Hugolify theme publications persons" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-publications-persons
  - path: github.com/hugolify/hugolify-theme-publications
  - path: github.com/hugolify/hugolify-theme-persons
  - path: github.com/hugolify/hugolify-theme
```

## Related section

- [Persons](/docs/sections/persons/)
- [Publications](/docs/sections/publications/)

## Decap CMS

{{< alert text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.hugolify.io/publications/persons-concerned/" text="Demo visual renderer" >}}
