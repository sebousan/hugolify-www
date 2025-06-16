---
title: Posts
description: News about your business.
icon: file-earmark-text
---

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

- [Authors](/docs/taxonomies/posts-authors/)
- [Categories](/docs/taxonomies/posts-categories/)
- [Expertises](/docs/taxonomies/posts-expertises/)
- [Tags](/docs/taxonomies/posts-tags/)

**Setup with multiple taxonomies example**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-posts-authors
  - path: github.com/hugolify/hugolify-theme-posts-categories
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

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

## Example

- {{< blank_link link="https://demo.hugolify.io/news/" text="Demo visual renderer" >}}
