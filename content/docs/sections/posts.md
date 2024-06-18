---
title: Posts
description: News about your business.
icon: file-earmark-text
---

## Examples

- {{< blank_link link="https://demo.hugolify.io/news/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/posts/" text="Demo content file on Github" >}}

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-posts" text="Hugolify theme posts" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-posts
  - path: github.com/hugolify/hugolify-theme
```

## Taxonomies

- {{< blank_link link="https://github.com/hugolify/hugolify-theme-posts-authors" text="Authors" >}} _Theme persons required_
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-posts-categories" text="Categories" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-posts-expertises" text="Expertises" >}} _Theme expertises required_
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-posts-tags" text="Tags" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```go-html-template
imports:
  - path: github.com/hugolify/hugolify-theme-posts-authors
  - path: github.com/hugolify/hugolify-theme-posts-categories
  - path: github.com/hugolify/hugolify-theme-posts-expertises
  - path: github.com/hugolify/hugolify-theme-posts-tags
  - path: github.com/hugolify/hugolify-theme-posts
  - path: github.com/hugolify/hugolify-theme-persons
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-posts/tree/main/layouts/partials/posts" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-posts/blob/main/assets/sass/pages/_post.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-posts/blob/main/assets/sass/pages/_posts.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-posts/blob/main/assets/sass/components/_post.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-posts/blob/main/assets/sass/components/_posts.sass" text="Items component" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/content/posts.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
