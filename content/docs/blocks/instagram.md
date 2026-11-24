---
title: Instagram
description: Displays an instagram feed with your latest posts.
icon: brand:instagram
seo:
  title: Block Instagram
---

{{< alert-block title="Access token required" state="warning" >}}
The token is read from the `HUGO_INSTAGRAM` environment variable at build time, never from the front matter. Without it the block renders the "token missing" message instead of the feed.
{{< /alert-block >}}

## Frontmatter

```yml
blocks:
  - type: instagram
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    limit: 5 # number, posts to fetch (optional)
    ctas: [] # (optional)
      text: '' # string
      url: '' # url
      blank: false # boolean (optional)
      lang: '' # code lang, sets the hreflang attribute (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
```

The feed is fetched in the browser by `js/blocks/instagram.js`, so the posts are never part of the build output. `ctas` is rendered in the block footer.

See [Common keys](/docs/blocks/overview/#common-keys) for `heading`, `footing` and the full `ui` reference.

{{< button url="https://demo.hugolify.io/blocks/instagram/" text="Demo visual renderer" blank="true" >}}

## Files

| Module | Files |
| --- | --- |
| hugolify-theme | {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_partials/blocks/templates/instagram.html" text="Template" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme/tree/main/layouts/_partials/blocks/templates/instagram" text="Sub-templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/blocks/types/instagram.yml" text="Block type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/blocks/fields/instagram.html" text="Fields" >}} |
| hugolify-example-blocks | {{< blank_link link="https://github.com/Hugolify/hugolify-example-blocks/blob/main/content/docs/instagram.md" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_instagram.sass" text="SASS" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-bootstrap/blob/main/assets/js/blocks/instagram.js" text="JS" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-instagram.css" text="CSS" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/assets/css/tokens/components/block-instagram.css" text="Tokens" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/assets/js/blocks/instagram.js" text="JS" >}} |

## Related link

- {{< blank_link link="https://instafeedjs.com/" text="Instafeed.js documentation" >}}

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
