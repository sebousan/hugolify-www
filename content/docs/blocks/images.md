---
title: Images
description: Displays an images list in one or two columns.
icon: images
seo:
  title: Block Images
---

## Frontmatter

```yml
blocks:
  - type: images
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    images: []
      src: '' # url
      filter: '' # [Box, Lanczos, CatmullRom, Linear] (optional)
      alt: '' # string (optional)
      legend: '' # string (optional)
      credit: '' # markdown (optional)
      screenshot: false # boolean, frames the image in a fake browser (optional)
      half: false # boolean, the image takes half the width (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
```

Images flow one per row at full width; `half: true` puts two side by side, and the rendered width is computed accordingly.

See [Common keys](/docs/blocks/overview/#common-keys) for `heading`, `footing` and the full `ui` reference.

{{< button url="https://demo.hugolify.io/blocks/images/" text="Demo visual renderer" blank="true" >}}

## Files

| Module | Files |
| --- | --- |
| hugolify-theme | {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_partials/blocks/templates/images.html" text="Template" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme/tree/main/layouts/_partials/blocks/templates/images" text="Sub-templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/blocks/types/images.yml" text="Block type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/blocks/fields/images.html" text="Fields" >}} |
| hugolify-example-blocks | {{< blank_link link="https://github.com/Hugolify/hugolify-example-blocks/blob/main/content/docs/images.md" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_images.sass" text="SASS" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-images.css" text="CSS" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/assets/css/tokens/components/images.css" text="Tokens" >}} |

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
