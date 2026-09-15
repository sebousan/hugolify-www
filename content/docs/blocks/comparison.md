---
isIndex: false
title: Comparison
description: Displays comparison block.
icon: layout-three-columns
aliases:
- /docs/blocks/prices/
seo:
  title: Block Comparison
---

## Frontmatter

```yml
blocks:
  - type: comparison
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    items: []
      badge: '' # string (optional)
      title: '' # string (optional)
      text: '' # string (optional)
      offer: {} # (optional)
        price: '' # float
        discount: '' # string, a value or a percentage (e.g. 10%) (optional)
        frequency: '' # string (optional)
        text: '' # string (optional)
      arguments: [] # (optional)
        icon: '' # string, icon name (optional)
        text: '' # string
      cta: {} # (optional)
        text: '' # string
        url: '' # url
        blank: false # boolean (optional)
        lang: '' # code lang, sets the hreflang attribute (optional)
      is_highlighted: false # boolean, adds .item-highlighted (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
      column: 3 # number, columns per row on desktop (optional)
      scrollsnap: '' # [none, sm, md, lg, xl, all] or object (optional)
```

See [Common keys](/docs/blocks/) for `heading`, `footing`, `scrollsnap` and the full `ui` reference.

{{< button url="https://demo.hugolify.io/blocks/comparison/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/comparison.html" text="HTML file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_comparison.sass" text="SASS file — hugolify-theme-bootstrap" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-comparison.css" text="CSS file — hugolify-theme-design-system" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/comparison.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/partials/admin/blocks/types/comparison.yml" text="Hugolify admin file" >}}

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
