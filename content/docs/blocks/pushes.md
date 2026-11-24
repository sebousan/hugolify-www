---
title: Pushes
description: Displays some images cards in column. Alignment and button are available
icon: credit-card
seo:
  title: Block Pushes
---

## Frontmatter

```yml
blocks:
  - type: pushes
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    items: []
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
      cta: {} # (optional)
        text: '' # string
        url: '' # url
        blank: false # boolean (optional)
        lang: '' # code lang, sets the hreflang attribute (optional)
      image: {} # (optional)
        src: '' # url
        filter: '' # [Box, Lanczos, CatmullRom, Linear] (optional)
        alt: '' # string (optional)
      video: {} # (optional, takes precedence over image)
        mp4: '' # url (optional)
        webm: '' # url (optional)
      ui: {} # (optional)
        offset: '' # [start, center, end] (optional)
        align: '' # [start, center, end] (optional)
        vertical_align: '' # [start, center, end] (optional)
        card: false # boolean, wraps the content in a card (optional)
        darken: false # boolean, darkens the media under the text (optional)
        background_color: '' # color (optional)
        color: '' # color (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
      column: 1 # [1, 2] columns per row on desktop, grid layout only (optional)
      scrollsnap: '' # [none, sm, md, lg, xl, all] or object (optional)
      layout: '' # [grid, carousel] (optional)
      carousel: {} # only with layout: carousel (optional)
```

Each item carries its own `ui` object, the same way the block does. The keys at the item root are the legacy form and act as the fallback, so `card: true` next to `title` still works.

A single item is rendered on its own, without the items grid.

See [Common keys](/docs/blocks/overview/#common-keys) for `heading`, `footing`, `scrollsnap`, `carousel` and the full `ui` reference.

## Params

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

Mobile image width, when the default container width does not suit.

```yml
blocks:
  pushes:
    mobile: 336 # number, in pixels
```

{{< button url="https://demo.hugolify.io/blocks/pushes/" text="Demo visual renderer" blank="true" >}}

## Files

| Module | Files |
| --- | --- |
| hugolify-theme | {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_partials/blocks/templates/pushes.html" text="Template" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme/tree/main/layouts/_partials/blocks/templates/pushes" text="Sub-templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/blocks/types/pushes.yml" text="Block type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/blocks/fields/pushes.html" text="Fields" >}} |
| hugolify-example-blocks | {{< blank_link link="https://github.com/Hugolify/hugolify-example-blocks/tree/main/content/docs/pushes" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_pushes.sass" text="SASS" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-pushes.css" text="CSS" >}} |

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

{{< alert-block state="warning" >}}
The CMS writes an item's appearance at the item root, the legacy form the theme still reads. `align`, `vertical_align` and the item `video` have no field yet and are set in the front matter.
{{< /alert-block >}}
