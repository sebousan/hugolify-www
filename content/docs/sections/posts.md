---
title: Posts
description: News about your business.
icon: file-text
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-posts" text="Hugolify theme posts" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-posts/v2
  - path: github.com/hugolify/hugolify-theme/v2
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
  - path: github.com/hugolify/hugolify-theme-posts-authors/v2
  - path: github.com/hugolify/hugolify-theme-posts-categories/v2
  - path: github.com/hugolify/hugolify-theme-posts-tags/v2
  - path: github.com/hugolify/hugolify-theme-posts/v2
  - path: github.com/hugolify/hugolify-theme-persons/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Files

| Module | Files |
| --- | --- |
| hugolify-theme-posts | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-posts/tree/main/layouts/_partials/posts" text="Partials" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-posts/tree/main/layouts/posts" text="Page templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/types/posts.yml" text="Collection type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/fields/posts.fields.default.html" text="Fields" >}} |
| hugolify-example-site | {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/tree/main/content/posts" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-posts/blob/main/assets/sass/pages/_post.sass" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-posts/blob/main/assets/sass/pages/_posts.sass" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-posts/blob/main/assets/sass/components/_post.sass" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-posts/blob/main/assets/sass/components/_posts.sass" text="Items" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-posts/blob/main/assets/css/pages/post.css" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-posts/blob/main/assets/css/pages/posts.css" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-posts/blob/main/assets/css/components/post.css" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-posts/blob/main/assets/css/components/posts.css" text="Items" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-posts/tree/main/assets/css/tokens" text="Tokens" >}} |

## CMS availability

| CMS | Hugolify Admin v2 |
| --- | --- |
| [CloudCannon](/docs/admin/cms/cloudcannon/) | {{< badge text="Available" state="success" >}} |
| [Decap CMS](/docs/admin/cms/decap-cms/) | {{< badge text="Available" state="success" >}} |
| [Netlify CMS](/docs/admin/cms/netlify-cms/) | {{< badge text="Available" state="success" >}} |
| [Pages CMS](/docs/admin/cms/pages-cms/) | {{< badge text="Available" state="success" >}} |
| [Static CMS](/docs/admin/cms/static-cms/) | {{< badge text="Available" state="success" >}} |
| [Sveltia CMS](/docs/admin/cms/sveltia-cms/) | {{< badge text="Available" state="success" >}} |
| [Tina CMS](/docs/admin/cms/tina-cms/) | {{< badge text="Available" state="success" >}} |

## Example

- {{< blank_link link="https://demo.hugolify.io/news/" text="Demo visual renderer" >}}
