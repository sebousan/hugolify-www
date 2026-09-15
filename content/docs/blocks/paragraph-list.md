---
isIndex: false
title: Paragraph list
description: Displays several paragraphs side by side, in one or two columns.
icon: list-columns-reverse
seo:
  title: Block Paragraph list
---

## Frontmatter

```yml
blocks:
  - type: paragraph-list
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    items: []
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
      notes: [] # (optional)
        text: '' # markdown
      ctas: [] # (optional)
        text: '' # string
        url: '' # url
        blank: false # boolean (optional)
        link: false # boolean (optional)
        lang: '' # code lang, sets the hreflang attribute (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
      column: 1 # [1, 2] columns per row on desktop (optional)
```

The [paragraph](/docs/blocks/paragraph/) block, repeated: each item takes the same fields and renders through the same component, so a list entry and a standalone paragraph look identical.

An item's title drops to `h3` as soon as the block `heading` takes the `h2`. A single `cta` object is accepted in place of `ctas`.

See [Common keys](/docs/blocks/) for `heading`, `footing` and the full `ui` reference.

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/paragraph-list.html" text="HTML file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/partials/admin/blocks/types/paragraph-list.yml" text="Hugolify admin file" >}}

## CMS availability

| CMS | Hugolify Admin v2 |
| --- | --- |
| [CloudCannon](/docs/admin/v1/cms/cloudcannon/) | {{< badge text="Available" state="success" >}} |
| [Decap CMS](/docs/admin/v1/cms/decap-cms/) | {{< badge text="Available" state="success" >}} |
| [Netlify CMS](/docs/admin/v1/cms/netlify-cms/) | {{< badge text="Available" state="success" >}} |
| [Pages CMS](/docs/admin/v1/cms/pages-cms/) | {{< badge text="Available" state="success" >}} |
| [Static CMS](/docs/admin/v1/cms/static-cms/) | {{< badge text="Available" state="success" >}} |
| [Sveltia CMS](/docs/admin/v1/cms/sveltia-cms/) | {{< badge text="Available" state="success" >}} |
| [Tina CMS](/docs/admin/v1/cms/tina-cms/) | {{< badge text="Available" state="success" >}} |

{{< alert-block state="warning" >}}
The `notes` field is off by default in the CMS. Set `params.admin.blocks.paragraph-list.notes: true` to expose it.
{{< /alert-block >}}
