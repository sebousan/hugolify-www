---
title: Figure
description: Displays a centered figure image with legend and credit.
icon: image
seo:
  title: Block Figure
---

## Frontmatter

```yml
blocks:
  - type: figure
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    figure: {}
      src: '' # url
      alt: '' # string
      filter: '' # [Box, Lanczos, CatmullRom, Linear] (optional)
      legend: '' # string (optional)
      credit: '' # markdown (optional)
      screenshot: false # boolean, frames the image in a fake browser (optional)
      link: '' # url, wraps the image in a link (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
```

The image is sized from the block's own `ui.grid`: it spans the full grid width on desktop and goes edge to edge on mobile.

See [Common keys](/docs/blocks/overview/#common-keys) for `heading`, `footing` and the full `ui` reference.

## Params

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

Mobile image width, when the default container width does not suit.

```yml
blocks:
  figure:
    mobile: 336 # number, in pixels
```

{{< button url="https://demo.hugolify.io/blocks/figure/" text="Demo visual renderer" blank="true" >}}

## Files

| Module | Files |
| --- | --- |
| hugolify-theme | {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_partials/blocks/templates/figure.html" text="Template" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme/tree/main/layouts/_partials/blocks/templates/figure" text="Sub-templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/blocks/types/figure.yml" text="Block type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/blocks/fields/figure.html" text="Fields" >}} |
| hugolify-example-blocks | {{< blank_link link="https://github.com/Hugolify/hugolify-example-blocks/blob/main/content/docs/figure.md" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_figure.sass" text="SASS" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-figure.css" text="CSS" >}} |

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
