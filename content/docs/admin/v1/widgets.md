---
title: Widgets
description: Available widget partials and their parameters
weight: 5
icon: app
---

{{< alert-block state="info" >}}
Instead of writing raw CMS-specific YAML or JSON, you call a widget partial and pass a standardized `dict`. The widget internally handles the output format for each supported CMS (Decap, Sveltia, CloudCannon, Pages CMS, TinaCMS…), so the same field definition works across all of them without any change.
{{</ alert-block >}}

Widgets are Hugo partials that generate CMS field configuration. Each widget is called with a **dict** of parameters.

```go
{{- $args := dict
  "label" (i18n "admin.fields.title.label")
  "name"  "title"
  -}}
{{ partial "admin/widgets/string.js" $args }}
```

Parameters marked **required** must always be provided.

## Blocks

Variable-type list field for page builder blocks.

```go
{{ partial "admin/widgets/blocks.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `blocks` | array | yes | Array of block type definitions |
| `collapsed` | boolean | — | Collapse items by default (default: `true`) |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `label_singular` | string | — | Singular label |
| `max` | number | — | Maximum number of blocks |
| `min` | number | — | Minimum number of blocks |
| `required` | boolean | — | Mark as required |

## Boolean

Toggle / checkbox field.

```go
{{ partial "admin/widgets/boolean.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | boolean or string | — | Default value |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `nameOverride` | string | — | Override the name in output |
| `required` | boolean | — | Mark as required |

## Code

Code editor field with optional syntax highlighting.

```go
{{ partial "admin/widgets/code.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | boolean or string | — | Default value |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `language` | string | — | Syntax language (e.g. `html`, `css`, `javascript`) |
| `nameOverride` | string | — | Override the name in output |
| `required` | boolean | — | Mark as required |

## Color

Color picker.

```go
{{ partial "admin/widgets/color.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | boolean or string | — | Default value |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `required` | boolean | — | Mark as required |

## Datetime

Date and time picker.

```go
{{ partial "admin/widgets/datetime.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | date or string | — | Default value |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `nameOverride` | string | — | Override the name in output |
| `required` | boolean | — | Mark as required |

## File

File upload field. Use **type** to restrict to a specific media category.

```go
{{ partial "admin/widgets/file.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `type` | string | yes | Media category: `audio`, `document`, `file`, `video` |
| `extensions` | array | — | Allowed file extensions |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `label_singular` | string | — | Singular label |
| `max` | number | — | Maximum number of files |
| `min` | number | — | Minimum number of files |
| `multiple` | boolean | — | Allow multiple files |
| `nameOverride` | string | — | Override the name in output |
| `required` | boolean | — | Mark as required |

## Image

Image upload field.

```go
{{ partial "admin/widgets/image.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `max` | number | — | Maximum number of images |
| `max_file_size` | number | — | Maximum file size in bytes |
| `media_folder` | string | — | Upload folder |
| `min` | number | — | Minimum number of images |
| `multiple` | boolean | — | Allow multiple images |
| `nameOverride` | string | — | Override the name in output |
| `public_folder` | string | — | Public path for images |
| `required` | boolean | — | Mark as required |

## List

Repeatable list of fields (an array of objects).

```go
{{ partial "admin/widgets/list.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `fields` | array | yes | Array of field definitions |
| `collapsed` | boolean | — | Collapse items by default (default: `true`) |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `label_singular` | string | — | Singular label |
| `max` | number | — | Maximum number of items |
| `min` | number | — | Minimum number of items |
| `nameOverride` | string | — | Override the name in output |
| `required` | boolean | — | Mark as required |
| `summary` | string | — | Summary template for collapsed view |

## Map


Map / geolocation field. {{< badge text="Not available with CloudCannon, Pages and TinaCMS" state="warning" >}}

```go
{{ partial "admin/widgets/map.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | string | — | Default value |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |

## Markdown

Rich text / markdown editor.

```go
{{ partial "admin/widgets/markdown.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `buttons` | array | — | Toolbar buttons to show |
| `default` | string | — | Default value |
| `editor_components` | array | — | Editor components to enable |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `minimal` | boolean | — | Minimal toolbar (default: `true`) |
| `modes` | array | — | Editor modes (default: `['rich_text']`) |
| `nameOverride` | string | — | Override the name in output |
| `pattern` | object | — | Validation pattern |
| `required` | boolean | — | Mark as required |

## Number

Numeric input or range slider.

```go
{{ partial "admin/widgets/number.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | string | — | Default value |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `max` | number | — | Maximum value |
| `min` | number | — | Minimum value |
| `nameOverride` | string | — | Override the name in output |
| `range` | boolean | — | Render as a range slider |
| `required` | boolean | — | Mark as required |
| `step` | number | — | Step increment |

## Object

Groups multiple fields into a collapsible object.

```go
{{ partial "admin/widgets/object.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `fields` | array | yes | Array of field definitions |
| `collapsed` | boolean | — | Collapse by default (default: `true`) |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `label_singular` | string | — | Singular label |
| `nameOverride` | string | — | Override the name in output |
| `required` | boolean | — | Mark as required |
| `summary` | string | — | Summary template for collapsed view |

## Relation

Relation field — links to another collection entry.

```go
{{ partial "admin/widgets/relation.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `collection` | string | yes | Target collection name |
| `value_field` | string | yes | Field used as the stored value |
| `display_fields` | array | — | Fields shown in the picker |
| `filters` | array | — | Filter entries by field values |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `label_singular` | string | — | Singular label |
| `multiple` | boolean | — | Allow multiple relations (default: `true`) |
| `nameOverride` | string | — | Override the name in output |
| `required` | boolean | — | Mark as required |
| `search_fields` | array | — | Fields to search in the picker |

## Select

Dropdown select field.

```go
{{ partial "admin/widgets/select.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `options` | array or object | yes | Available options |
| `default` | string | — | Default selected value |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `label_options` | string | — | i18n key prefix for option labels |
| `multiple` | boolean | — | Allow multiple selections |
| `nameOverride` | string | — | Override the name in output |
| `required` | boolean | — | Mark as required |

## String

Single-line text input.

```go
{{ partial "admin/widgets/string.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | string | — | Default value |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `nameOverride` | string | — | Override the name in output |
| `pattern` | object | — | Validation pattern |
| `required` | boolean | — | Mark as required |

## Text

Multi-line plain text input.

```go
{{ partial "admin/widgets/text.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | string | — | Default value |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `nameOverride` | string | — | Override the name in output |
| `pattern` | object | — | Validation pattern |
| `required` | boolean | — | Mark as required |

## UUID

Auto-generated UUID field, read-only in the editor.

```go
{{ partial "admin/widgets/uuid.js" $args }}
```

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `nameOverride` | string | — | Override the name in output |
