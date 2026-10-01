---
title: Selected
description: Displays a selection of items from a sections
icon: check-all
seo:
  title: Block Selected
---

## Frontmatter

```yml
blocks:
  - type: selected-* # [selected-posts, selected-publications, selected-products…]
    section: '' # [posts, publications, products…]
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    source: '' # [selection, taxonomies, children, toplevel] (optional, defaults to selection)
    items: [] # list of paths or slugs, when source is selection
    categories: [] # one field per taxonomy, when source is taxonomies (optional)
    parent: [] # list of paths or slugs, when source is children
    limit: 4 # number, caps the items shown, every one when empty (optional)
    show_more: false # boolean, adds a link to the section index (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
      layout: '' # [grid, list, carousel] (optional)
      scrollsnap: '' # [none, sm, md, lg, xl, all] or object (optional)
      carousel: {} # only with layout: carousel (optional)
```

Four ways to fill the block. `source: selection` takes the pages one by one in `items`, in that order. `source: taxonomies` takes every page of the section matching **all** the taxonomy terms set on the block — an empty taxonomy is ignored — and the block then carries one field per taxonomy of that section, named after the taxonomy itself (`categories`, `tags`, `persons_statutes`…). `source: children` takes the children of the pages set in `parent`, the sub-expertises of an expertise for one. `source: toplevel` takes the first level of the section, the expertises rather than their sub-expertises, and needs no field: both follow the tree as it grows.

`source: children` and `source: toplevel` are offered to the sections the CMS lets you nest, those whose `nested.depth` is above 1 (see [nested collections](/docs/admin/v2/collections/#nested-collections)). Only the direct children of a parent come out: a deeper level would flatten the tree into a listing mixing an item and its own children.

With every source but `selection`, pages come out pinned first — those with a `weight` — then by date when the section has one, by title otherwise. The `persons` section keeps its own order, by status then by lastname.

`limit` caps the items shown, whatever the source: the latest posts of a category, the first sub-expertises of an expertise. Left empty, every item comes out.

The block class carries the section, `block-selected-posts`, so a section can be styled on its own.

See [Common keys](/docs/blocks/) for `heading`, `footing`, `scrollsnap`, `carousel` and the full `ui` reference.

{{< button url="https://demo.hugolify.io/blocks/selected/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/selected.html" text="HTML file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_selected.sass" text="SASS file — hugolify-theme-bootstrap" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-selected.css" text="CSS file — hugolify-theme-design-system" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/selected.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/partials/admin/blocks/types/selected.yml" text="Hugolify admin file" >}}

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
