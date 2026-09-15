---
title: Paragraph
description: Displays a simple paragraph.
icon: text-paragraph
seo:
  title: Block Paragraph
---

## Frontmatter

```yml
blocks:
  - type: paragraph
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
```

The paragraph *is* its content, so it carries `surtitle` / `title` / `text` at its root rather than a `heading`.

`notes` adds numbered footnotes under the text. Mark each call site in `text` with `[*]`: the markers are numbered in the order they appear and matched to the `notes` entries in that same order.

See [Common keys](/docs/blocks/) for `heading`, `footing` and the full `ui` reference.

{{< button url="https://demo.hugolify.io/blocks/paragraph/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/paragraph.html" text="HTML file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_paragraph.sass" text="SASS file — hugolify-theme-bootstrap" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-paragraph.css" text="CSS file — hugolify-theme-design-system" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/paragraph.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/partials/admin/blocks/types/paragraph.yml" text="Hugolify admin file" >}}

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
The `notes` field is off by default in the CMS. Set `params.admin.blocks.paragraph.notes: true` to expose it.
{{< /alert-block >}}
