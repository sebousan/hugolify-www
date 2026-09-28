---
title: Fields
description: Add/modify fields
weight: 6
icon: input-cursor-text
---

## How to create a field

### Create file

Add a yml field file in fields directory.

```txt
layouts/
└── partials/
    └── admin/
        └── fields/
```

### Simple widget

```yml
{{- $args := dict
  "label" (i18n "admin.fields.audio.mp3.label")
  "name" "mp3"
  "type" "audio"
  -}}
{{ partial "admin/widgets/file.js" $args }}
```

### List or Object widget

```yml
{{- $pin := cond (or (eq site.Params.admin.cms "decapcms") (eq site.Params.admin.cms "sveltiacms")) "location" "coordinates" -}}
{{- $fields := slice 
  "street" 
  "zipcode" 
  "city" 
  "country"
  $pin -}}

# This line allows you to modify the fields via the parameters
{{- $fields = partial "admin/func/GetFields.html" (dict "field" . "fields" $fields) -}}

{{- $args := dict 
  "label" (i18n "admin.fields.address.label")
  "name" "address"
  "collapsed" true
  "fields" $fields
  -}}

{{ partial "admin/widgets/object.js" $args }}
```

## Add or remove fields in object field

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

In this example, we set two fields (title and text with markdown) for the Hero field.

```yml
params:
  admin:
    fields:
      # Array of available fields for a fields
      # e.g with hero field
      hero:
        fields:
          - title
          - text_markdown
          # e.g with nested fields
          - image:
              fields:
                - image_src
                - image_alt
```

## The fields of a config file

{{< badge text="New in v2" state="success" >}}

Each file of the *config* collection ships its own set of fields. `admin.files.<name>.fields` replaces that set, without touching the `files` list — so changing the fields of one file no longer means restating every other:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
params:
  admin:
    files:
      footer:
        fields: [newsletter, cta, blocks]
      seo:
        fields: [title, description, image_seo]
```

Available on `footer`, `seo`, `credit` and `banner`. Left undefined, each keeps the fields the module declares — respectively `title, text_area, cta, blocks`, `title, description, image_seo, twitter`, `text_markdown`, and `text_markdown, state`.

## New fields

{{< badge text="New in v2" state="success" >}}

| Field | Purpose |
| --- | --- |
| `ratio` | Media aspect ratio, `1` being square |
| `scrollsnap` | Breakpoints at which items scroll sideways (`none`, `sm`, `md`, `lg`, `xl`, `all`) |
| `selected_source` | Choose block items manually or by taxonomy |
| `vertical_align` | Vertical text alignment (`start`, `center`, `end`) |
| `image.src_mobile` | Dedicated mobile image, used by the hero |
| `weight_select` | The v1 stepped weight select, kept as an opt-in |

Other additions: blocks on the *persons* and *products* collections, *firstname* and *lastname* on *persons*, a `file` input for form fields, and an optional `format` on the datetime widget for Decap and Sveltia storage.

## Renamed and changed fields

| | v1 | v2 |
| --- | --- | --- |
| Draft | `is_draft` | `draft` |
| Background colour | `background-color.yml` | `background_color.yml` |
| Weight | select (10, 20, 30…) | number input (`min: 1`, integer) |
| Appearance | flat at the root of the block | grouped under `ui` |

If you relied on the stepped weight select, the previous behaviour is preserved in a separate field:

{{< alert text="`admin/fields/weight_select.yml`" state="light" >}}

## A title built from other fields

{{< badge text="New in v2" state="success" >}} {{< badge text="Only available with Sveltia CMS" state="warning" >}}

`title_page` reads a `compute` template and hands it to the [compute widget](../widgets/compute/). Left undefined, it stays the regular text input, which is also what a project running any other CMS gets.

The *persons* collection does this by default: a person is named after their first and last name, so the page title is derived rather than asked for, and never typed twice.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
params:
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

## List of Hugolify fields

{{< button text="See fields in repository" url="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/fields" blank="true" >}}
