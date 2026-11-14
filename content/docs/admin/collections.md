---
title: Collections
description: Choose the collections, their order and their options
weight: 5
icon: gallery-vertical-end
---

{{< alert-block title="Info" state="info" >}}
Collections are added automatically, one per Hugolify module the project imports: [sections](/docs/sections/) and [taxonomies](/docs/taxonomies/). The *pages*, *indexes*, *menus* and *config* collections come with the admin itself.
{{< /alert-block >}}

The options of a collection go under `admin.collections`, keyed by its name: `pages`, `posts`, `persons`, `posts_categories`…

## Options by CMS

{{< badge text="New in v2" state="success" >}}

An option has one name, whatever the CMS. Hugolify writes it the way each CMS reads it, and leaves it out where the CMS has no equivalent.

| Option | Decap | Sveltia | Static | Netlify | Pages CMS | CloudCannon | Tina |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [`enable`](#enable-or-disable-collections) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [`create`](#enable-or-disable-file-creation) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [`fields`](#override-fields-available-for-a-collection) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [`blocks`](#blocks-of-a-collection) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| [`filter`](#add-filter) | ✓ | ✓ | ✓ | ✓ | – | – | – |
| [`exclude`](/docs/admin/cms/pages-cms/#exclude-files) | – | – | – | – | ✓ | – | – |
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
| [`card_preview`](/docs/admin/cms/cloudcannon/#card-preview-collections) | – | – | – | – | – | ✓ | – |

## Enable or disable collections

A collection shows as soon as its module is imported. `enable: false` hides it, the module staying in place:

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
      collections: [menus, config]
```

Quote the `'*'`: in YAML, a bare `*` starts an alias.

Left undefined, the order is pages and indexes, then every other collection in alphabetical order, then menus and config:

```yml
admin:
  collection_groups:
    - collections: [pages, indexes]
    - collections: ['*']
    - collections: [menus, config]
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

`create: false` removes the button that adds an entry, as for *indexes*, whose entries come with the modules:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      create: false
```

Pages CMS reads it as `operations.create`, CloudCannon as `disable_add`, Tina as `ui.allowedActions.create`.

## Override fields available for a collection

Each collection ships with a list of fields. `fields` replaces it:

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

The default list of each collection is in its file under `collections/fields/`. A field can take options next to its name, see [Options of a select field](/docs/admin/fields/#options-of-a-select-field).

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/v2/layouts/_partials/admin/collections/fields" text="See the fields of each collection in repository" >}}

## Blocks of a collection

The `blocks` field of every collection offers the blocks of [`admin.blocks.enable`](/docs/admin/blocks/#enable-blocks). To offer a collection a list of its own, set `blocks` on the collection, and name the collection in its `blocks` field:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    posts:
      blocks: [paragraph, figure, quote]
      fields:
        - draft
        - title_page
        - description
        - body
        - blocks: posts # reads the blocks of the posts collection
```

Left as a plain `blocks`, the field keeps offering every enabled block.

## Add filter

`filter` lists only the entries whose field holds a value. This is how *pages* and *indexes* share the `content` folder: a page carries `isPage: true`, a section index `isIndex: true`, each written by a hidden field.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      filter:
        - field: isPage
          value: true
```

Pages CMS has no filter: it leaves files out by name instead, see [`exclude`](/docs/admin/cms/pages-cms/#exclude-files).

## Add path

`path` sets where a new entry is saved, inside the folder of the collection. It defaults to `{{slug}}/_index`: each entry gets a folder of its own, a Hugo branch bundle, which can hold its images and, in a [nested collection](#nested-collections), its children. Set `{{slug}}` to save the entries as single files instead:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    posts:
      path: "{{slug}}" # content/posts/my-post.md rather than content/posts/my-post/_index.md
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

`slug` names a new entry, and so its file or its folder. It defaults to `{{slug}}`, the title written for a URL, or to the ID of the entry with [`config.id: true`](/docs/admin/setup/#entry-ids). It takes the fields of the entry and the date of creation:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    posts:
      slug: "{{year}}-{{month}}-{{slug}}" # 2026-11-my-post
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

`summary` is the text each entry shows in the list of the collection, the title by default. It takes the fields of the entry in braces:

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
| CloudCannon | Nothing: see [card preview](/docs/admin/cms/cloudcannon/#card-preview-collections) |

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
| CloudCannon | the image of the card, `preview.gallery.image`. A [`card_preview`](/docs/admin/cms/cloudcannon/#card-preview-collections) setting it wins |
| Other CMS | Nothing: Decap, Netlify and Static CMS guess the image from the field names, Pages CMS shows an Image field as a column of [`summary_fields`](#add-summary-fields) |

## Add view filters

`view_filters` adds filters above the list: each one shows only the entries whose field matches its pattern.

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

`view_groups` offers to group the list by the value of a field, or by the part of it a pattern matches, such as the year of a date.

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

`reorder: true` lets editors order the entries by drag and drop. The order is saved in the `weight` of each entry, which Hugo sorts pages by.

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

{{< badge text="New in v2" state="success" >}} {{< badge text="Sveltia CMS and CloudCannon" state="warning" >}}

The icon shown beside the collection in the sidebar. It is declared per icon set, so the same collection works whichever set the CMS uses, see [Icon sets](/docs/admin/setup/#icon-sets).

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

A collection can show its entries as a folder tree and let editors organise them in subfolders. Entries are stored as Hugo branch bundles (an `_index` file in a folder of its own), so a page can carry children and page resources.

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

Left undefined, every collection is flat but two: *pages* is a tree five levels deep, and *indexes* two levels deep.

| Depth | Result |
| --- | --- |
| `1` | Nothing emitted: a flat collection |
| `2` | Folder tree, one level of children |
| `3` and up | Folder tree, plus a **parent** field so an editor picks where a page goes and moves it later |

{{< alert-block title="Sveltia CMS" state="info" >}}
Nested collections used to be Decap-only. **Sveltia CMS supports them now**, and fixes several long-standing problems of the Decap implementation along the way: entry paths, preview paths, media folders, folder labels and i18n.

The parent field differs between the two: Decap gets a custom Hugolify widget, Sveltia its own folder picker. Hugolify writes the Decap `widget` and `label` either way, and Sveltia accepts both for compatibility and ignores them, so the same config serves the two.
{{< /alert-block >}}

{{< alert-block title="Pages CMS" state="info" >}}
Pages CMS shows a nested collection in its tree layout, the `_index.md` of each folder standing for the folder. It has no parent field: a page stays in the folder it was created in.
{{< /alert-block >}}

## The menus collection

{{< badge text="New in v2" state="success" >}}

The *menus* collection holds the navigation files, written to `/data/menu/`. Pick which ones it shows with `files`:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    menus:
      files: [nav-header-primary, nav-footer-primary, nav-legal, nav-social]
```

Left undefined, the collection ships `nav-header-primary`, `nav-header-secondary`, `nav-footer-primary`, `nav-footer-secondary`, `nav-legal` and `nav-social`.

| File | Data file | Rendered in |
| --- | --- | --- |
| `nav-header-primary` | `/data/menu/header/primary.yml` | Header, with dropdowns |
| `nav-header-secondary` | `/data/menu/header/secondary.yml` | Header |
| `nav-footer-primary` | `/data/menu/footer/primary.yml` | Footer |
| `nav-footer-secondary` | `/data/menu/footer/secondary.yml` | Footer |
| `nav-legal` | `/data/menu/legal.yml` | Footer |
| `nav-social` | `/data/menu/social.yml` | Footer, as icons |

A link takes a title, a URL and a new tab option. It can be highlighted as a button, and hold sub-links, which the primary header menu shows as a dropdown. The footer menus also take a title, shown above their links, and the social menu takes a `rel` instead of the highlight and the sub-links.

{{< button url="/docs/customization/menu/" text="See menus" >}}

{{< alert-block title="Menus listed in config" state="warning" >}}
The menus used to be files of the *config* collection. A project that lists `nav-*` files in `config.files` moves them to `menus.files`: left there, a menu shows in both collections. A project that sets `collection_groups` names `menus` next to `config`, or the collection joins `'*'`.
{{< /alert-block >}}

## The config collection

The *config* collection holds the other site files an editor may change: banner, footer, credit, organization, structured data, SEO, llms.txt. Pick which ones it shows with `files`:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    config:
      files: [banner, footer, credit, blocks, seo]
```

Left undefined, the collection ships `banner`, `footer`, `credit`, `organization`, `schema`, `seo`, `llms` and `llms-full`.

The footer accepts blocks, not just an information text.

### Default appearance per block type

{{< badge text="New in v2" state="success" >}}

Add `blocks` to `files` and the collection gains a file written to `/data/blocks.yml`, holding the default `ui` of each block type. It has the shape a block takes in its front matter, and is read key by key, so a field left empty is ignored rather than erasing a default.

The form is generated from `admin.blocks.enable`, one collapsible section per block type, with the `selected-*` variants expanded per enabled collection exactly as the block picker expands them. A section arrives open when it already carries a value.

Each section offers the layouts of its block type, as the form of the block offers them, and the carousel settings when the carousel is one of them: a default carousel is set here like a default scroll snap. Every field shows whatever the layout. In the form of a block, choosing a layout reveals the fields that override these defaults, see [Fields that depend on another](/docs/admin/blocks/#fields-that-depend-on-another).

Unlike the rest of the *config* collection, this file is not translated: how a block looks is not language content. Decap CMS saves it keyed by the default language all the same, which the theme reads as well, see [With Decap CMS](/docs/customization/structured-data/#with-decap-cms).

{{< button url="/docs/customization/ui/#defaults-per-block" text="See defaults per block" >}}

### Organization and structured data

{{< badge text="New in v2" state="success" >}}

`organization` edits `/data/organization.yml`, the identity of the organization behind the site: legal name, other names, founding date, headcount, languages, areas served, head office and other places, awards, identifiers. The rest of the site may show it too, not only the structured data.

`schema` edits `/data/schema.yml`, what only the structured data reads: the schema.org type of the organization, a logo search engines can read, its pages elsewhere, the page listing its offices, and whether email addresses are published.

Like `blocks`, neither file is translated. The slogan of the organization, translated like the description, goes in `seo`.

{{< button url="/docs/customization/structured-data/" text="See structured data" >}}

### llms.txt

{{< badge text="New in v2" state="success" >}}

`llms` and `llms-full` edit `/data/llms.yml` and `/data/llms-full.yml`, the bodies of the `/llms.txt` and `/llms-full.txt` files the theme writes at the root of the site. A body left empty publishes no file.

Like `blocks`, these files are not translated: agents look for one file at the root, so every language goes in it.

{{< button url="/docs/customization/seo/#llmstxt" text="See llms.txt" >}}

### A file of your own

Each name of `files` reads the partial of the same name in `admin/datas/`. Add one to edit a data file of your own, here `/data/contact.yml`:

```txt
layouts/
└── _partials/
    └── admin/
        └── datas/
            └── contact.yml
```

```go-html-template
{{- $fields := slice "title" "text_markdown" -}}
{{- $fields = partial "admin/func/GetFields.html" (dict "file" "contact" "fields" $fields) -}}
{
  label: 'Contact',
  name: 'contact',
  file: 'data/contact.yml',
  i18n: true,
  {{- partial "admin/fields/_fields.yml" $fields -}}
}
```

Then list it in `files`, where it should appear: `files: [banner, footer, contact, seo]`. The same goes for the *menus* collection. `GetFields` lets `admin.files.contact.fields` replace the fields, as for the files of the module, see [The fields of a config file](/docs/admin/fields/#the-fields-of-a-config-file).

## Create a collection

### With params

A collection the admin does not know takes a generic type: its entries go to `content/<name>`, each in a folder of its own, with the fields of a page. Here a *recipes* collection:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    recipes:
      enable: true
      fields: # optional, the fields of a page by default
        - draft
        - title_page
        - description
        - featured_image
        - body
```

Its label comes from the i18n files of the project, `admin.collections.recipes.label`, or else from its name. The site renders the section with its own templates, or the default ones of the theme.

### With a file

For full control, declare the collection in a file named after it:

```txt
layouts/
└── _partials/
    └── admin/
        └── collections/
            └── types/
                └── recipes.yml
```

```go-html-template
{
  name: 'recipes',
  folder: 'content/recipes',
  label: '{{ i18n "admin.collections.recipes.label" 2 }}',
  label_singular: '{{ i18n "admin.collections.recipes.label" 1 }}',
  i18n: true,
  {{ partial "admin/collections/config/create.yml" . }}
  {{ partial "admin/collections/config/preview.yml" . }}
  {{ partial "admin/collections/config/path.yml" . }}
  {{ partial "admin/collections/config/slug.yml" . }}

  {{ partial "admin/collections/types/_default.yml" . }}
}
```

Each partial writes one option the way the CMS in use reads it, and nothing when the CMS has no equivalent. `_default.yml` adds all the other options. A file listing them itself can leave out the ones the collection does not need:

```go-html-template
{{ partial "admin/collections/config/icon.yml" . }}
{{ partial "admin/collections/config/index_file.yml" . }}
{{ partial "admin/collections/config/filter.yml" . }}
{{ partial "admin/collections/config/exclude.yml" . }}
{{ partial "admin/collections/config/reorder.yml" . }}
{{ partial "admin/collections/config/bulk_edit.yml" . }}
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

`view.yml` writes the `view` of Pages CMS, built from `summary_fields`, `sortable_fields` and `nested`.

The fields come from `admin.collections.recipes.fields`, or else from a file returning the default list, `admin/collections/fields/recipes.fields.default.html`.

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/v2/layouts/_partials/admin/collections/types" text="See examples in repository" >}}
