---
title: Editorial
description:
  Displays a block with content (title, text, button) on the left and image on
  the right (possible to reverse the direction). In mobile the image is first.
icon: postcard
seo:
  title: Block Editorial
---

## Frontmatter

```yml
blocks:
  - type: editorial
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
    image: {} # (optional)
      src: '' # url
      filter: '' # [Box, Lanczos, CatmullRom, Linear] (optional)
      alt: '' # string (optional)
      legend: '' # string (optional)
      credit: '' # markdown (optional)
      screenshot: false # boolean, frames the image in a fake browser (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
      direction: '' # [ltr, rtl] (optional)
```

The editorial block *is* its content, so it carries `surtitle` / `title` / `text` at its root rather than a `heading`. `direction: rtl` renders `block-editorial-rtl` and flips the two sides on desktop; on mobile the image always comes first.

`notes` adds numbered footnotes under the text. Mark each call site in `text` with `[*]`: the markers are numbered in the order they appear and matched to the `notes` entries in that same order.

See [Common keys](/docs/blocks/) for `heading`, `footing` and the full `ui` reference.

{{< button url="https://demo.hugolify.io/blocks/editorial/" blank="true" text="Demo visual renderer" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/editorial.html" text="HTML file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_editorial.sass" text="SASS file — hugolify-theme-bootstrap" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-editorial.css" text="CSS file — hugolify-theme-design-system" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/editorial.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/partials/admin/blocks/types/editorial.yml" text="Hugolify admin file" >}}

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
The `notes` field is off by default in the CMS. Set `params.admin.blocks.editorial.notes: true` to expose it.
{{< /alert-block >}}
