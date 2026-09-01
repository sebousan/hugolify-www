---
title: Search
description: Displays a search form
icon: search
seo:
  title: Block Search
---

## Enable

[Check how to enable search on your website](/docs/getting-started/search/)

## Frontmatter

```yml
blocks:
  - type: search
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    background: false # boolean (optional)
```

{{< button url="https://demo.hugolify.io/blocks/search/" text="Demo visual renderer" target="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/search.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_search.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/search.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/latest.yml" text="Hugolify admin file" >}}


## Related link

- {{< blank_link link="https://pagefind.app/" text="Pagefind" >}}


## CMS availability

### Hugolify Admin

- [Hugolify Admin](/docs/admin/v1/)
  - [Decap CMS](/docs/admin/v1/cms/decap-cms/) {{< badge text="Available" state="success" >}}
  - [Netlify CMS](/docs/admin/v1/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
  - [Pages CMS](/docs/admin/v1/cms/pages-cms/) {{< badge text="Available" state="success" >}}
  - [Sveltia CMS](/docs/admin/v1/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}
