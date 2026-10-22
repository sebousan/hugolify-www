---
title: Collections
description: All sections and taxonomies.
weight: 4
icon: collection
---

{{< alert-block title="Info" state="info" >}}
Collections are automatically added based on Hugolify modules added ([Sections](/docs/sections/)) or ([Taxonomies](/docs/taxonomies/))
{{< /alert-block >}}

## Options by CMS

{{< badge text="New in v2" state="success" >}}

An option has one name, whatever the CMS. Hugolify writes it the way each CMS reads it, and leaves it out where the CMS has no equivalent.

| Option | Decap | Sveltia | Static | Netlify | Pages CMS | CloudCannon | Tina |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [`enable`](#enable-or-disable-collections) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [`create`](#enable-or-disable-file-creation) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [`fields`](#override-fields-avalaible-for-a-collection) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [`filter`](#add-filter) | ✓ | ✓ | ✓ | ✓ | – | – | – |
| [`exclude`](../cms/pages-cms/#exclude-files) | – | – | – | – | ✓ | – | – |
| [`path`](#add-path) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [`media_folder`](#media-folders-of-a-collection) | ✓ | ✓ | ✓ | ✓ | – | – | – |
| [`slug`](#add-slug) | ✓ | ✓ | ✓ | ✓ | – | – | – |
| [`sortable_fields`](#add-sortable-fields) | ✓ | ✓ | ✓ | ✓ | ✓ | – | – |
| [`summary`](#add-summary) | ✓ | ✓ | ✓ | ✓ | – | ✓ | – |
| [`summary_fields`](#add-summary-fields) | – | ✓ | ✓ | – | ✓ | – | – |
| [`thumbnail`](#add-thumbnail) | – | ✓ | – | – | – | ✓ | – |
| [`view_filters`](#add-view-filters) | ✓ | ✓ | ✓ | ✓ | – | – | – |
| [`view_groups`](#add-view-groups) | ✓ | ✓ | ✓ | ✓ | – | – | – |
| [`reorder`](#add-reorder) | – | ✓ | – | – | – | – | – |
| [`bulk_edit`](#add-bulk-edit) | – | ✓ | – | – | – | – | – |
| [`icon`](#collection-icon) | – | ✓ | – | – | – | ✓ | – |
| [`nested`](#nested-collections) | ✓ | ✓ | ✓ | ✓ | ✓ | – | – |
| [`card_preview`](../cms/cloudcannon/#card-preview-collections) | – | – | – | – | – | ✓ | – |

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

## Order and group collections

{{< badge text="New in v2" state="success" >}}

Collections are listed in the order of `collection_groups`: the groups as they come, and the collections of each group as they are listed. `'*'` stands for every enabled collection that no group names, in alphabetical order.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collection_groups:
    - heading: Content
      collections: [pages, indexes]
    - heading: News
      collections: [posts, posts_categories, posts_tags]
    - heading: Other
      collections: ['*']
    - heading: Settings
      collections: [config]
```

Quote the `'*'`: in YAML, a bare `*` starts an alias.

Left undefined, the order is pages and indexes, then every other collection in alphabetical order, then config:

```yml
admin:
  collection_groups:
    - collections: [pages, indexes]
    - collections: ['*']
    - collections: [config]
```

To list every collection in alphabetical order, as v1 did, keep a single group holding `'*'`.

- Without `'*'`, the collections that no group names come last, in a group of their own. A collection never drops out of the list: to hide one, [disable it](#enable-or-disable-collections).
- A disabled collection is skipped, an unknown name is skipped with a warning, and a collection listed twice keeps its first place.

| CMS | Result |
| --- | --- |
| Sveltia CMS | Order, and a divider between two groups |
| Decap CMS, Netlify CMS, Static CMS | Order |
| Pages CMS, Tina | Order |
| CloudCannon | Groups with their heading, once `collection_groups` is set |

The `heading` is read by CloudCannon only. It requires one on each group, so it keeps its own order until `collection_groups` is set. A Sveltia CMS divider is a plain line, without a label.

## Enable or disable file creation

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      create: false
```

Pages CMS reads it as `operations.create`, CloudCannon as `disable_add`, Tina as `ui.allowedActions.create`.

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

## Media folders of a collection

{{< badge text="Decap, Sveltia, Static and Netlify CMS" state="warning" >}}

The uploads of a collection go to the global folders. Give the collection folders of its own:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    persons:
      media_folder: /assets/images/persons
      public_folder: /images/persons
```

## Add slug

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      slug: "{{id}}"
```

## Add sortable fields

{{< badge text="New in v2" state="success" >}}

The fields of the Sort menu, in order. It replaces the `sortable` string of v1.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    posts:
      sortable_fields:
        - field: date
          default_sort: desc
        - title
        - commit_date
```

- `default_sort` sorts the list by that field when it opens: `asc` (or `true`) or `desc`. One field takes it.
- `commit_date` and `commit_author` sort by the last commit, in the CMS that read the Git history.
- A `label` replaces the label of the field in the Sort menu. Decap CMS alone reads it.

Left undefined, each CMS offers its own defaults, such as the title and the date.

| CMS | Result |
| --- | --- |
| Decap CMS | `sortable_fields`, with `default_sort` and `label` on the field |
| Sveltia CMS | `sortable_fields`, as a `{ fields, default }` object once a field sorts by default |
| Static CMS | `sortable_fields`, as a `{ fields, default }` object |
| Netlify CMS | `sortable_fields`, field names alone |
| Pages CMS | `view.sort`, and `view.default` for the field sorting by default, without `commit_date` and `commit_author` |
| CloudCannon, Tina | Nothing: CloudCannon keeps its own Sort menu |

## Add summary

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      summary: "{{title}}"
```

CloudCannon shows it as the text of the card, the title standing in when it comes out empty. A field is written in its own way, `{{title}} - {{date}}` becoming `{title} - {date}`, and a transformation after a pipe is dropped, as the two CMS do not share their names.

## Add summary fields

{{< badge text="New in v2" state="success" >}} {{< badge text="Sveltia CMS, Static CMS and Pages CMS" state="warning" >}}

The columns of the table view, in order. It replaces the `view.fields` of Pages CMS.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    persons:
      summary_fields:
        - summary
        - lastname
        - field: contact.email
          label: Email
        - draft
```

- `summary` stands for the entry summary, as in Static CMS.
- A nested field takes dot notation.
- A `label` replaces the header the column takes from its field. Sveltia CMS alone reads it.

Left undefined, Sveltia CMS shows the summary followed by the sortable fields, Static CMS the summary alone, Pages CMS every field.

| CMS | Result |
| --- | --- |
| Sveltia CMS | `table_columns`, with `summary` written `_summary` |
| Static CMS | `summary_fields`, without labels |
| Pages CMS | `view.fields`, with `summary` written `title`, without labels |
| Decap CMS, Netlify CMS, Tina | Nothing: no table view |
| CloudCannon | Nothing: see [card preview](../cms/cloudcannon/#card-preview-collections) |

{{< alert-block title="Name a field of the collection" state="warning" >}}
Sveltia CMS rejects a config whose column names no field of the collection, and shows the error instead of the CMS. Static CMS leaves the column empty, and Pages CMS drops it.
{{< /alert-block >}}

Sveltia CMS also takes its special keys (`slug`, `commit_date`, `commit_author`) and templates such as `"{{date | date('YYYY-MM-DD')}}"` as columns.

## Add thumbnail

{{< badge text="New in v2" state="success" >}} {{< badge text="Sveltia CMS and CloudCannon" state="warning" >}}

The image shown beside each entry of the list, and in the grid view of Sveltia CMS.

A collection with `featured_image` shows it without a setting: that field is an `image` object holding the file in `src`, which Sveltia CMS would not find on its own, as it only looks for an Image field at the root of the entry. Name another field, or none:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    persons:
      thumbnail: image.src # the default with featured_image
    posts:
      thumbnail: false     # no image
```

A list tries its fields in turn and shows the first one filled, e.g. `thumbnail: [image.src, logo.src]`.

{{< alert-block title="Name an Image field of the collection" state="warning" >}}
Sveltia CMS rejects a config whose `thumbnail` names no field of the collection, and shows the error instead of the CMS.
{{< /alert-block >}}

| CMS | Result |
| --- | --- |
| Sveltia CMS | `thumbnail` |
| CloudCannon | the image of the card, `preview.gallery.image`. A [`card_preview`](../cms/cloudcannon/#card-preview-collections) setting it wins |
| Other CMS | Nothing: Decap, Netlify and Static CMS guess the image from the field names, Pages CMS shows an Image field as a column of [`summary_fields`](#add-summary-fields) |

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
        - label: 'Drafts'
          field: draft
          pattern: true
```

A pattern keeps its type: `true` matches a boolean field, `'2020'` a text. Static CMS gets the filters in its own `{ filters }` object, each named after its label.

## Add view groups

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      view_groups:
        - label: 'Draft'
          field: draft
        - label: 'Year'
          field: date
          pattern: '\d{4}'
```

Static CMS gets the groups in its own `{ groups }` object, each named after its label.

## Add reorder

{{< badge text="New in v2" state="success" >}} {{< badge text="Only available with Sveltia CMS" state="warning" >}}

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      reorder: true
```

## Add bulk edit

{{< badge text="New in v2" state="success" >}} {{< badge text="Only available with Sveltia CMS" state="warning" >}}

Edit the simple fields of many entries at once, in a table that works like a spreadsheet, and save them in a single commit: turn `draft` on for a batch of posts, fix titles. Filter the list first to edit some entries only.

It is on for every collection, with every simple top-level field as a column: `draft`, `title`, `date`, `weight`, `slug`, a select… Only Boolean, Color, DateTime, Number, Relation, Select and String fields can be edited in bulk.

{{< alert-block title="Saved on the branch" state="warning" >}}
Like reordering, a bulk edit is committed to the branch directly. So it is off by default with `publish_mode: editorial_workflow` or `preview`, where it would bypass the review.
{{< /alert-block >}}

Turn it off, or pick the columns, for every collection or for one. Fields are named as in the front matter:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  bulk_edit: false               # every collection
  collections:
    posts:
      bulk_edit: true            # back on for the posts
    persons:
      bulk_edit: [title, draft]  # these columns, in this order
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

{{< alert-block title="Pages CMS" state="info" >}}
Pages CMS shows a nested collection in its tree layout, the `_index.md` of each folder standing for the folder. It has no parent field: a page stays in the folder it was created in.
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

Left undefined, the collection ships `nav-header-primary`, `nav-header-secondary`, `nav-footer-primary`, `nav-footer-secondary`, `nav-legal`, `nav-social`, `banner`, `footer`, `credit`, `schema`, `seo`, `llms` and `llms-full`.

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

### llms.txt

{{< badge text="New in v2" state="success" >}}

`llms` and `llms-full` edit `/data/llms.yml` and `/data/llms-full.yml`, the bodies of the `/llms.txt` and `/llms-full.txt` files the theme writes at the root of the site. A body left empty publishes no file.

Like `blocks`, these files are not translated: agents look for one file at the root, so every language goes in it.

{{< button url="/docs/customization/seo/#llmstxt" text="See llms.txt" >}}

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

A collection file reads its options through one partial each, which writes the option for the CMS in use. The file sets its creation, preview, path and slug itself:

```go-html-template
{{ partial "admin/collections/config/create.yml" . }}
{{ partial "admin/collections/config/preview.yml" . }}
{{ partial "admin/collections/config/path.yml" . }}
{{ partial "admin/collections/config/slug.yml" . }}
```

Then `admin/collections/types/_default.yml` adds all the others, or the file picks the ones the collection needs:

```go-html-template
{{ partial "admin/collections/config/icon.yml" . }}
{{ partial "admin/collections/config/index_file.yml" . }}
{{ partial "admin/collections/config/filter.yml" . }}
{{ partial "admin/collections/config/exclude.yml" . }}
{{ partial "admin/collections/config/reorder.yml" . }}
{{ partial "admin/collections/config/sortable_fields.yml" . }}
{{ partial "admin/collections/config/summary.yml" . }}
{{ partial "admin/collections/config/summary_fields.yml" . }}
{{ partial "admin/collections/config/thumbnail.yml" . }}
{{ partial "admin/collections/config/view.yml" . }}
{{ partial "admin/collections/config/view_filters.yml" . }}
{{ partial "admin/collections/config/view_groups.yml" . }}
{{ partial "admin/collections/config/fields.yml" (dict "collection" .) }}
{{ partial "admin/collections/config/nested.yml" . }}
```

`view.yml` writes the `view` of Pages CMS, built from `summary_fields`, `sortable_fields` and `nested`. A partial writes nothing for a CMS without the option.

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/v2/layouts/partials/admin/collections/types" text="See examples in repository" >}}
