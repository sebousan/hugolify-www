---
title: Posts expertises
description: Taxonomy expertises for posts section.
icon: bookmark-check
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises" text="Hugolify theme expertises" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-posts" text="Hugolify theme posts" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-posts-expertises" text="Hugolify theme posts expertises" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-posts-expertises
  - path: github.com/hugolify/hugolify-theme-posts
  - path: github.com/hugolify/hugolify-theme-expertises
  - path: github.com/hugolify/hugolify-theme
```

## Related sections

- [Expertises](/docs/sections/expertises/)
- [Posts](/docs/sections/posts/)

## Decap CMS

{{< alert text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.lawyerify.io/actualites/expertises/" text="Demo visual renderer (on lawyerify in french)" >}}
