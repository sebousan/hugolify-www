---
title: Blocks
description: Add/modify blocks
weight: 5
icon: puzzle
---

## Disable or enable

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

All blocks are available by default but if you want hide or add your blocks, you can do it:

```yml
params:
  admin:
    blocks:
      # Array of available blocks
      enable:
        - alert
        - cta
        - editorial
        # …
```

## Personalize fields

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
params:
  admin:
    blocks:
      # Array of available fields for a block
      # e.g with paragraph block
      paragraph:
        fields:
          - title
          - text_markdown
          # …
```

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/fields" text="See Hugolify fields in repository" >}}

## Block icon

{{< badge text="New in v2" state="success" >}}

An icon is declared per icon set. See [Setup](../setup/#icon-sets).

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
params:
  admin:
    blocks:
      alert:
        icon:
          material_icons: warning_amber
```

## Appearance

Appearance is carried by a single `ui` object instead of sitting flat at the root of the block. A block opts in by listing `ui` among its fields, like any other field.

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

{{< alert-block title="This is a front matter change" state="warning" >}}
hugolify-theme v2 reads these keys from `ui`, hugolify-theme v1 reads them from the root of the block. Moving to admin v2 therefore means moving to the theme v2 as well, otherwise the values are written where the theme is not looking.
{{< /alert-block >}}

### Choosing which controls appear

v1 hardcoded the object to *theme*, *grid* and *offset*. In v2 the set is driven by params, so you decide which controls the editor sees and which values they offer.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
params:
  admin:
    fields:
      grid:
        options: [container, small, medium, large, full]
      theme:
        options: [light, dark, accent]
      ui:
        fields: [theme, grid, offset, align]
```

The field is labelled **Layout & appearance** instead of *UI*.

These params decide which controls the editor **sees**, never what they hold. No `ui` field is prefilled, because a CMS default is saved to the front matter of every entry created after it: the content would carry the site's design decisions, and changing one later would leave the existing entries behind.

A look given to a whole block type belongs outside the content, in the `blocks` file of the *config* collection.

{{< button url="../collections/#default-appearance-per-block-type" text="See defaults per block type" >}}

## How to create a block

### Fields allowed

Add a HTML block file contains fields (*e.g. alert.html*).

```txt
layouts/
└── partials/
    └── admin/
        └── blocks/
            └── fields/
```

Content of fields:

```go
{{- $fields := slice 
  "text_markdown" 
  "state" 
  "ui" -}}
  
{{- $fields = partial "admin/func/GetFields.html" (dict "block" . "fields" $fields) -}}

{{- return $fields -}}
```

### Block types

Add a YAML block file with config (*e.g. alert.yml*).

```txt
layouts/
└── partials/
    └── admin/
        └── blocks/
            └── types/
```

Content of block type:

```yml
{{- $fields := partial "admin/blocks/fields/alert.html" . -}}

{{- $args := dict 
  "label" (i18n "admin.blocks.alert.label")
  "name" "alert"
  "collapsed" false
  "fields" $fields
  -}}

{{ partial "admin/widgets/object.js" $args }}
```

And add it in enable blocks: [see above](#disable-or-enable)

### Examples

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/blocks" text="See examples in repository" >}}

## List of Hugolify blocks

{{< button text="Hugolify blocks" url="/docs/blocks/" >}}
