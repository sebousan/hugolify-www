---
title: What's new in v2
description: What v2 changes, and why
weight: 2
icon: sparkles
seo:
  title: What's new in Hugolify Admin v2
---

{{< alert-block title="Feedback" state="danger" >}}
**v2 is still moving**. Report anything you hit on {{< blank_link link="https://github.com/hugolify/hugolify-admin/issues" text="the issue tracker" >}}.

v2 will remain in pre-release until Sveltia CMS reaches release 1.0 and Pages CMS reaches release 3.0.

See the {{< blank_link link="https://v1.hugolify.io/docs/cms/admin/" text="v1 documentation" >}} if you are not ready to move to v2, and the [migration guide](/docs/admin/migration/) when you are.
{{< /alert-block >}}

## The UI object

A block or a hero has always carried a handful of appearance parameters: how many columns, which grid, how it is aligned. In v1 they sat flat at the root of the block, next to its content, and there were only a few of them.

They are now grouped into a single `ui` object, which separates *what the block says* from *how it looks*, and leaves room to grow without cluttering the block.

{{< alert text="`/content/_index.md`" state="light" >}}

```yaml
# Before: flat, and only a few parameters
blocks:
  - type: informations
    column: 3
    ratio: 1

# After: everything under ui
blocks:
  - type: informations
    ui:
      column: 3
      ratio: 1
      grid: large
      offset: center
      align: center
      theme: dark
      scrollsnap: md
```

{{< alert-block title="This is a front matter change" state="warning" >}}
hugolify-theme v2 reads these keys from `ui`, hugolify-theme v1 reads them from the root of the block. Moving to admin v2 therefore means moving to the theme v2 as well, otherwise the values are written where the theme is not looking.
{{< /alert-block >}}

### Choosing which controls appear

v1 hardcoded the object to *theme*, *grid* and *offset*. In v2 the set is driven by params, so you decide which controls the editor sees and which values they offer.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  fields:
    grid:
      options: [container, small, medium, large, full]
    theme:
      options: [light, dark, accent]
    ui:
      fields: [theme, grid, offset, align]
```

The field is now labelled **Layout & appearance** instead of *UI*.

These params decide which controls the editor **sees**, never what they hold. No `ui` field is prefilled, because a CMS default is saved to the front matter of every entry created after it: the content would carry the site's design decisions, and changing one later would leave the existing entries behind. A look given to a whole block type belongs outside the content, which is what the next section is for.

{{< button url="/docs/admin/blocks/#appearance" text="See blocks" >}}

### Default appearance per block type

The *config* collection gains a `blocks` file, written to `/data/blocks.yml`, holding the default `ui` of each block type. It has the shape a block takes in its front matter, and is read key by key, so a field left empty is ignored rather than erasing a default.

Add it to the collection the way you add any config file, by listing it in `files`:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  collections:
    config:
      files: [banner, footer, credit, blocks, seo]
```

The form is generated from `admin.blocks.enable`, one collapsible section per block type, with the `selected-*` variants expanded per enabled collection exactly as the block picker expands them. A section arrives open when it already carries a value, so the screen says at a glance which types the site styles.

Unlike the rest of the *config* collection, this file is not translated: how a block looks is not language content.

{{< button url="/docs/customization/ui/#defaults-per-block" text="See defaults per block" >}}

## The fields of a config file

Each file of the *config* collection ships its own set of fields. `admin.files.<name>.fields` replaces that set, without touching the `files` list, so changing the fields of one file no longer means restating every other:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  files:
    footer:
      fields: [newsletter, cta, blocks]
    seo:
      fields: [title, description, image_seo]
```

Available on every file of the module but `schema` and `blocks`. Left undefined, each keeps the fields the module declares, such as `title, text_area, cta, blocks` for the footer.

{{< button url="/docs/admin/fields/#the-fields-of-a-config-file" text="See the fields of a config file" >}}

## Navigation

The menus leave the *config* collection for a collection of their own, *menus*, listed just before it. The header and the footer each get two menus, a primary and a secondary one, where v1 had one menu for the header and one for the footer.

The footer also accepts blocks, not just an information text.

{{< button url="/docs/admin/collections/#the-menus-collection" text="See the menus collection" >}} {{< button url="/docs/customization/menu/" text="See menus" >}}

## Nested collections

A collection can show its entries as a folder tree and let editors organise them in subfolders. Entries are stored as Hugo branch bundles (an `_index` file in a folder of its own), so a page can carry children and page resources.

Set the depth globally, or per collection when only one of them is a tree:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
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
| `1` | Nothing emitted: a flat collection |
| `2` | Folder tree, one level of children |
| `3` and up | Folder tree, plus a **parent** field so an editor picks where a page goes and moves it later |

{{< alert-block title="Sveltia CMS" state="info" >}}
Nested collections used to be Decap-only. **Sveltia CMS supports them now**, and fixes several long-standing problems of the Decap implementation along the way: entry paths, preview paths, media folders, folder labels and i18n.

The parent field differs between the two: Decap gets a custom Hugolify widget, Sveltia its own folder picker. Hugolify writes the Decap `widget` and `label` either way, and Sveltia accepts both for compatibility and ignores them, so the same config serves the two.
{{< /alert-block >}}

## New fields

| Field | Purpose |
| --- | --- |
| `ratio` | Media aspect ratio, `1` being square |
| `scrollsnap` | Breakpoints at which items scroll sideways (`none`, `sm`, `md`, `lg`, `xl`, `all`) |
| `selected_source` | Choose block items manually or by taxonomy |
| `vertical_align` | Vertical text alignment (`start`, `center`, `end`) |
| `image.src_mobile` | Dedicated mobile image, used by the hero |
| `weight_select` | The v1 stepped weight select, kept as an opt-in |

Other additions: a reorder configuration for collections (Sveltia CMS), the [columns of the table view](/docs/admin/collections/#add-summary-fields) (Sveltia CMS, Static CMS and Pages CMS), a [default sort](/docs/admin/collections/#add-sortable-fields) for the entry list, the [image of each entry](/docs/admin/collections/#add-thumbnail) in the list (Sveltia CMS, CloudCannon), collection options written for [every CMS that has an equivalent](/docs/admin/collections/#options-by-cms), a chosen [order for the collections](/docs/admin/collections/#order-and-group-collections), with dividers between groups in Sveltia CMS, blocks on the *persons* and *products* collections, *firstname* and *lastname* on *persons*, a `file` input for form fields, and an optional `format` on the datetime widget for Decap and Sveltia storage.

An [`icon` shortcode](/docs/shortcodes/icon/) joins the markdown editor as well, for CloudCannon, Decap, Netlify and Sveltia CMS.

## Computed values

A new `compute` widget builds a read-only field from the other fields of the entry, and refreshes it as they are typed. {{< badge text="Only available with Sveltia CMS" state="warning" >}}

{{< alert text="`admin/widgets/compute.js`" state="light" >}}

It has no equivalent elsewhere, neither in Decap, Netlify and Static CMS nor in Pages CMS, CloudCannon and TinaCMS, so every other CMS emits an empty field and the value stays typed by hand.

A value template references a field with `{{fields.name}}` and accepts a string transformation after a pipe, as in `{{fields.title | slugify}}`. Inside a List, `{{index}}` returns the item position, stored as a number.

{{< blank_link link="https://sveltiacms.app/en/docs/fields/compute" text="See the Sveltia CMS documentation" >}}

### A title built from other fields

`title_page` reads a `compute` template and hands it to the widget. Left undefined, it stays the regular text input, which is also what a project running any other CMS gets.

The *persons* collection does this by default: a person is named after their first and last name, so the page title is derived rather than asked for, and never typed twice.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  collections:
    persons:
      fields:
        - draft
        - title_page: { i18n: duplicate, compute: '{{fields.firstname}} {{fields.lastname}}' }
        - firstname
        - lastname
        - body
```

{{< button url="/docs/admin/widgets/compute/" text="See the compute widget" >}}
