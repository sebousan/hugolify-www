---
title: Blocks
description: Choose the blocks editors can add, and their fields
weight: 6
icon: puzzle
---

## Enable blocks

Every Hugolify block is enabled by default. To offer fewer, or to add your own, list them under `enable`. The list replaces the default one, so name every block editors should keep:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  blocks:
    enable:
      - alert
      - cta
      - editorial
      # …
```

The *selected* block becomes one block per enabled collection, such as `selected-posts`, each picking entries from its own collection.

A collection can offer a list of its own, see [Blocks of a collection](/docs/admin/collections/#blocks-of-a-collection).

{{< button text="See all blocks" url="/docs/blocks/" >}}

## Change the fields of a block

Each block ships with a list of fields. `fields` replaces it:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  blocks:
    paragraph:
      fields:
        - title
        - text_markdown
        - ui
```

Each name is a field of the module, named after the key it writes or close to it: `text_markdown` writes the `text` of the block, in markdown. Keep `ui` in the list to keep the appearance controls.

The default fields of each block are in its file under `blocks/fields/`, and its keys on its page under [Blocks](/docs/blocks/).

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/v2/layouts/_partials/admin/blocks/fields" text="See the fields of each block in repository" >}}

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/v2/layouts/_partials/admin/fields" text="See all Hugolify fields in repository" >}}

### Notes

The *paragraph*, *paragraph-list* and *editorial* blocks can carry notes, linked to the text by `[*]` markers. The field is hidden by default:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  blocks:
    paragraph:
      notes: true
    paragraph-list:
      notes: true
    editorial:
      notes: true
```

`notes` is ignored when the `fields` of the block are overridden: add `notes` to the list instead.

### Block icon

{{< badge text="New in v2" state="success" >}} {{< badge text="Only available with CloudCannon" state="warning" >}}

CloudCannon shows an icon beside each block of its picker. Declare it for the icon set CloudCannon uses, `material_icons` by default, see [Icon sets](/docs/admin/setup/#icon-sets):

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  blocks:
    alert:
      icon:
        material_icons: warning_amber
```

## Appearance

The appearance of a block is grouped in a single `ui` object, shown as **Layout & appearance** in the CMS:

{{< alert text="`/content/_index.md`" state="light" >}}

```yaml
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

{{< alert-block title="Requires hugolify-theme v2" state="warning" >}}
hugolify-theme v2 reads these keys from `ui`, hugolify-theme v1 reads them from the root of the block. Admin v2 therefore needs the theme v2, otherwise the values are written where the theme is not looking.
{{< /alert-block >}}

### Choose the controls

`admin.fields.ui.fields` sets the controls every block offers, and `options` the values of each one:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  fields:
    ui:
      fields: [theme, grid, offset, align] # the default
    grid:
      options: [container, small, medium, large, full]
    theme:
      options: [light, dark, accent]
```

Each block then adds the controls only it needs: `column` and `scrollsnap` for the blocks listing items, `ratio` for the media, `layout` for the blocks offering several layouts, `direction` for *editorial*… See [Options of a select field](/docs/admin/fields/#options-of-a-select-field) to change the values of any of them.

These params decide which controls the editor **sees**, never what they hold: no control is prefilled. A CMS default would be saved in every new entry, so the content would carry the design of the site, and changing it later would leave the existing entries behind. To give a whole block type a look, use the `blocks` file of the *config* collection instead.

{{< button url="/docs/admin/collections/#default-appearance-per-block-type" text="See defaults per block type" >}}

### Fields that depend on another

In Decap CMS and Sveltia CMS, some selects show only the fields that apply to their value:

- **Layout**: the carousel settings appear with the carousel layout, the scroll snap with the grid layout. While no layout is chosen, the block follows the default of its type, from the `blocks` file of the *config* collection, so neither shows. The blocks without a layout (*comparison*, *datas*, *informations*) always show their scroll snap.
- **Source**, in the selection blocks: a manual selection shows the items, a taxonomy its terms, the children of a page the parent page.

Hiding is visual only: a hidden field keeps its value, and the other CMS show every field.

`toggle` maps each value of the select to the fields it shows:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  fields:
    layout:
      toggle:
        grid: [scrollsnap, column] # merged with the default of the module
    selected_source:
      toggle: false # every field shown, whatever the source
```

- A field that no value lists is always shown. The empty key, `''`, lists the fields shown while the select is empty.
- `false` shows every field.
- The `layout` map is merged value by value with the one of the module, and the `selected_source` map is laid over the one computed from the collections.
- Both settings apply to every block at once.

## Create a block

Here an `alert` block, with a text and a state. Use the name of a module block instead to replace it.

### 1. Its fields

Add a file returning the fields of the block:

```txt
layouts/
└── _partials/
    └── admin/
        └── blocks/
            └── fields/
                └── alert.html
```

```go-html-template
{{- $fields := slice
  "text_markdown"
  "state"
  "ui" -}}

{{- $fields = partial "admin/func/GetFields.html" (dict "block" . "fields" $fields) -}}

{{- return $fields -}}
```

`GetFields` lets `admin.blocks.alert.fields` replace the list, see [above](#change-the-fields-of-a-block).

### 2. Its type

Add a file declaring the block to the CMS:

```txt
layouts/
└── _partials/
    └── admin/
        └── blocks/
            └── types/
                └── alert.yml
```

```go-html-template
{{- $fields := partial "admin/blocks/fields/alert.html" . -}}

{{- $args := dict
  "label" (i18n "admin.blocks.alert.label")
  "description" (i18n "admin.blocks.alert._description")
  "name" "alert"
  "collapsed" false
  "fields" $fields
  -}}

{{ partial "admin/widgets/object.js" $args }}
```

### 3. Its label

The label and the description come from the i18n files of the project. Sveltia CMS shows the description under the label, in the menu of the Add button:

{{< alert text="`/i18n/en.yaml`" state="light" >}}

```yml
admin:
  blocks:
    alert:
      label: Alert
      _description: A highlighted message, such as information or a warning
```

### 4. Enable it

Add `alert` to `admin.blocks.enable`, see [Enable blocks](#enable-blocks).

### 5. Render it

The site renders a block with the template of the same name, `/layouts/_partials/blocks/templates/alert.html`. A new block type brings its own.

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/v2/layouts/_partials/admin/blocks" text="See the blocks of the module in repository" >}}
