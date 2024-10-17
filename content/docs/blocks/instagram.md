---
title: Instagram
description: Displays an instagram feed with your latest posts.
icon: instagram
---

{{< alert text="Instagram access_token is required" state="warning" >}}

## Frontmatter

```yml
blocks:
  - type: instagram
    token: '' // string
    limit: 5 // number
    heading: {}
    cta: {}
    background: false
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/latest/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/latest.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/instagram.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_instagram.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/js/blocks/instagram.js" text="JS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/instagram.js" text="Decap CMS file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

## Related link

- {{< blank_link link="https://instafeedjs.com/" text="Instafeed.js documentation" >}}
