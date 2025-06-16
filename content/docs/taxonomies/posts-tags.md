---
title: Posts tags
description: Taxonomy tags for posts section.
icon: tag
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-posts" text="Hugolify theme posts" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-posts-tags" text="Hugolify theme posts tags" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-posts-tags
  - path: github.com/hugolify/hugolify-theme-posts
  - path: github.com/hugolify/hugolify-theme
```

## Related section

- [Posts](/docs/sections/posts/)

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.hugolify.io/news/tags/" text="Demo visual renderer" >}}
