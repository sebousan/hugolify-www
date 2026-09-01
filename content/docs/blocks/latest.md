---
title: Latest
description: Displays latest items from posts, projects…
icon: clock-history
seo:
  title: Block Latest
---

## Frontmatter

```yml
blocks:
  - type: latest
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    section: '' # string [posts, publications, products…]
    layout: '' # [grid, list] (optional)
    count: 4 # number (optional)
    show_more: true # boolean (optional)
    background: false # boolean (optional)
```

{{< button url="https://demo.hugolify.io/blocks/latest/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/latest.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_latest.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/latest.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/latest.yml" text="Hugolify admin file" >}}

## CMS availability

### Hugolify Admin

- [Hugolify Admin](/docs/admin/v1/)
  - [Decap CMS](/docs/admin/v1/cms/decap-cms/) {{< badge text="Available" state="success" >}}
  - [Netlify CMS](/docs/admin/v1/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
  - [Pages CMS](/docs/admin/v1/cms/pages-cms/) {{< badge text="Available" state="success" >}}
  - [Sveltia CMS](/docs/admin/v1/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}
