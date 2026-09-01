---
title: Migration from v0.9
description: Breaking changes and migration guide from hugolify-admin v0.9 to v1
weight: 1
icon: arrow-up-circle
---


{{< alert-block title="Overview" state="info" >}}
v1 introduces a two-layer architecture for blocks and a widget partial system that replaces raw YAML. These are **breaking changes** for any custom blocks, fields or collections.
{{< /alert-block >}}

## Blocks

In v0.9, a custom block was a single YAML file directly in blocks:

```txt
layouts/partials/admin/blocks/
└── myblock.yml          ← single file, raw YAML
```

In v1, each block requires **two files**:

```txt
layouts/partials/admin/blocks/
├── fields/
│   └── myblock.html     ← returns field array
└── types/
    └── myblock.yml      ← block config using widget partials
```

{{< alert text="`/layouts/partials/admin/blocks/fields/myblock.html`" state="light" >}}

```go-template
{{- $fields := slice "title" "text_markdown" "background" -}}
{{- $fields = partial "admin/func/GetFields.html" (dict "block" . "fields" $fields) -}}
{{- return $fields -}}
```

{{< alert text="`/layouts/partials/admin/blocks/types/myblock.yml`" state="light" >}}

```go-template
{{- $fields := partial "admin/blocks/fields/myblock.html" . -}}
{{- $args := dict
  "label" (i18n "admin.blocks.myblock.label")
  "name" "myblock"
  "collapsed" false
  "fields" $fields
  -}}
{{ partial "admin/widgets/object.js" $args }}
```

## Function rename

All calls to `get_fields.html` must be updated to `GetFields.html` (camelCase).

```go-template
{{/* v0.9 */}}
{{- $fields = partial "admin/func/get_fields.html" (dict "block" . "fields" $fields) -}}

{{/* v1 */}}
{{- $fields = partial "admin/func/GetFields.html" (dict "block" . "fields" $fields) -}}
```

The function signature also changed: it now reads `.fields` from the params object, supports `.block`, `.collection`, `.field` and `.shortcode` context, and falls back to the explicit `fields` slice.

## Widget system

In v0.9, fields output raw YAML directly. In v1, every field delegates to a **widget partial** via a `dict`:

```js
{{/* v0.9 — raw JS */}}
{
  label: 'MP3',
  name: 'mp3',
  widget: 'file',
  required: false,
  media_folder: '/static/assets/audios'
}
```

```go-template
{{/* v1 — widget partial */}}
{{- $args := dict
  "label" (i18n "admin.fields.audio.mp3.label")
  "name" "mp3"
  "type" "audio"
  -}}
{{ partial "admin/widgets/file.js" $args }}
```

{{< button text="Available widgets" url="/docs/admin/v1/widgets/" >}}

## Collections config

Files moved

| v0.9 | v1 |
| --- | --- |
| `collections/fields.yml` | `collections/config/fields.yml` |
| `collections/files.yml` | `collections/config/files.yml` |

If you overrode any of these files in your site, move them to the new paths.

## Params

Field and block customization now use a nested **.fields** structure.

```yaml
# v0.9
params:
  admin:
    blocks:
      paragraph:
        - title
        - text_markdown

# v1
params:
  admin:
    blocks:
      paragraph:
        fields:
          - title
          - text_markdown
```

Same change applies to **fields** and **collections** customization.
