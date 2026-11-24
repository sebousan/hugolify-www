---
title: Gallery
description: Displays an images gallery with accessible lightbox.
icon: grid-3x2
seo:
  title: Block Gallery
---

## Frontmatter

```yml
blocks:
  - type: gallery
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    gallery: []
      src: '' # url
      filter: '' # [Box, Lanczos, CatmullRom, Linear] (optional)
      alt: '' # string (optional)
      legend: '' # string (optional)
      credit: '' # markdown (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
      column: 3 # number, columns per row on desktop, grid layout only (optional)
      ratio: 1 # number, thumbnail aspect ratio (optional)
      scrollsnap: '' # [none, sm, md, lg, xl, all] or object (optional)
      layout: '' # [grid, carousel] (optional)
      carousel: {} # only with layout: carousel (optional)
```

Thumbnails are cropped to `ratio` and sized from `ui.grid` divided by `ui.column`, so the widths stay right whatever the block's grid. Clicking one opens the accessible lightbox.

See [Common keys](/docs/blocks/overview/#common-keys) for `heading`, `footing`, `scrollsnap`, `carousel` and the full `ui` reference.

## Params

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

Default ratio, and the column count on mobile.

```yml
blocks:
  gallery:
    image:
      ratio: 1 # number
    column:
      mobile: 2 # number
```

{{< button url="https://demo.hugolify.io/blocks/gallery/" text="Demo visual renderer" blank="true" >}}

## Files

| Module | Files |
| --- | --- |
| hugolify-theme | {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_partials/blocks/templates/gallery.html" text="Template" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme/tree/main/layouts/_partials/blocks/templates/gallery" text="Sub-templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/blocks/types/gallery.yml" text="Block type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/blocks/fields/gallery.html" text="Fields" >}} |
| hugolify-example-blocks | {{< blank_link link="https://github.com/Hugolify/hugolify-example-blocks/tree/main/content/docs/gallery" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_gallery.sass" text="SASS" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-bootstrap/blob/main/assets/js/blocks/gallery.js" text="JS" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-gallery.css" text="CSS" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/assets/css/tokens/components/gallery.css" text="Tokens" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/assets/js/blocks/gallery.js" text="JS" >}} |

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
