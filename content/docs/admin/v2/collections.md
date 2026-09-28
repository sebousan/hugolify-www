---
title: Collections
description: All sections and taxonomies.
weight: 4
icon: collection
---

{{< alert-block title="Info" state="info" >}}
Collections are automatically added based on Hugolify modules added ([Sections](/docs/sections/)) or ([Taxonomies](/docs/taxonomies/))
{{< /alert-block >}}

## Enable or disable collections

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    indexes:
      enable: true
    pages:
      enable: true
    # e.g. set to false to disable posts even if you load hugolify-theme-posts
    posts:
      enable: false
    # …
```

## Enable or disable file creation

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      create: false
```

## Override fields avalaible for a collection

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      fields:
        - draft
        - title_page
        - description
        - featured_image
        - body
```

## Add filter

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      filter:
        - field: isPage
          value: true
```

## Add path

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      path: "{{slug}}"
```

## Add slug

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      slug: "{{id}}"
```

## Add sortable

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      sortable: "['title']"
```

## Add summary

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      summary: "{{title}}"
```

## Add view filters

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      view_filters:
        - label: 'Posts published in 2020'
          field: date
          pattern: '2020'
```

## Add view groups

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      view_groups:
        - label: 'Draft'
          field: draft
```

## Add reorder

{{< badge text="New in v2" state="success" >}} {{< badge text="Only available with Sveltia CMS" state="warning" >}}

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      reorder: true
```

## Collection icon

{{< badge text="New in v2" state="success" >}}

An icon is declared per icon set, so the same collection works whichever set the CMS uses. See [Setup](../setup/#icon-sets).

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      icon:
        bootstrap_icons: file-earmark
        iconoir: page
        lucide: file
        material_icons: description
        material_symbols: description
```

## Nested collections

{{< badge text="New in v2" state="success" >}}

A collection can show its entries as a folder tree and let editors organise them in subfolders. Entries are stored as Hugo branch bundles — an `_index` file in a folder of its own — so a page can carry children and page resources.

Set the depth globally, or per collection when only one of them is a tree:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  nested:
    depth: 2 # every collection
  collections:
    docs:
      nested:
        depth: 4 # this one alone, overriding the global
```

The depth counts path segments below the collection folder, and is what limits how deep an editor may go.

| Depth | Result |
| --- | --- |
| `1` | Nothing emitted — a flat collection |
| `2` | Folder tree, one level of children |
| `3` and up | Folder tree, plus a **parent** field so an editor picks where a page goes and moves it later |

{{< alert-block title="Sveltia CMS" state="info" >}}
Nested collections used to be Decap-only. **Sveltia CMS supports them now**, and fixes several long-standing problems of the Decap implementation along the way — entry paths, preview paths, media folders, folder labels and i18n.

The parent field differs between the two: Decap gets a custom Hugolify widget, Sveltia its own folder picker. Hugolify writes the Decap `widget` and `label` either way, and Sveltia accepts both for compatibility and ignores them, so the same config serves the two.
{{< /alert-block >}}

## The config collection

The *config* collection holds the site files an editor may change — menus, banner, footer, credit, SEO. Pick which ones it shows with `files`:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    config:
      files: [nav-header-primary, nav-footer-primary, nav-legal, banner, footer, credit, blocks, seo]
```

Left undefined, the collection ships `nav-header-primary`, `nav-header-secondary`, `nav-footer-primary`, `nav-footer-secondary`, `nav-legal`, `nav-social`, `banner`, `footer`, `credit` and `seo`.

### Navigation

{{< badge text="New in v2" state="success" >}}

Header and footer menus each gain three levels, replacing the single menu of v1. Add `nav-header-tertiary` and `nav-footer-tertiary` to `files` to reach the third one.

- **Header** — primary, secondary, tertiary
- **Footer** — primary, secondary, tertiary

The footer also accepts blocks, not just an information text.

### Default appearance per block type

{{< badge text="New in v2" state="success" >}}

Add `blocks` to `files` and the collection gains a file written to `/data/blocks.yml`, holding the default `ui` of each block type. It is the CMS-editable twin of `params.blocks.<type>.ui`: same shape, read on top of it key by key, so a field left empty falls back to the config instead of erasing it.

The form is generated from `admin.blocks.enable`, one collapsible section per block type, with the `selected-*` variants expanded per enabled collection exactly as the block picker expands them. A section arrives open when it already carries a value.

Unlike the rest of the *config* collection, this file is not translated: how a block looks is not language content.

{{< button url="/docs/customization/ui/#defaults-per-block" text="See defaults per block" >}}

## Create a collection

Use params to create a collection

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    new_collection:
      enable: true
      fields:
        - draft
        - title_page
        - description
        - featured_image
        - body
```

Or add a yml collection file

```txt
layouts/
└── partials/
    └── admin/
        └── collections/
            └── types/
```

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/collections/types" text="See examples in repository" >}}
