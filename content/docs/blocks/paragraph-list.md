---
isIndex: false
title: Paragraph list
description: Displays several paragraphs side by side, in one or two columns.
icon: list-start
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

See [Common keys](/docs/blocks/overview/#common-keys) for `heading`, `footing` and the full `ui` reference.

## Files

| Module | Files |
| --- | --- |
| hugolify-theme | {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_partials/blocks/templates/paragraph-list.html" text="Template" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme/tree/main/layouts/_partials/blocks/templates/paragraph-list" text="Sub-templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/blocks/types/paragraph-list.yml" text="Block type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/blocks/fields/paragraph-list.html" text="Fields" >}} |
| hugolify-example-blocks | {{< blank_link link="https://github.com/Hugolify/hugolify-example-blocks/blob/main/content/docs/paragraph-list.md" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | Shared styles only |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-paragraph.css" text="CSS, shared with paragraph" >}} |

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
The `notes` field is off by default in the CMS. Set `params.admin.blocks.paragraph-list.notes: true` to expose it.
{{< /alert-block >}}
