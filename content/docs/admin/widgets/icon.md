---
title: Icon
description: Icon picker, a searchable grid of the site's icons.
icon: layout-grid
---

## Usage

```go
{{ partial "admin/widgets/icon.js" $args }}
```

In Decap and Sveltia CMS, the field shows a thumbnail of the chosen icon and a button that opens a searchable grid of every icon the site can show. Click the thumbnail or the button to open the grid, then pick an icon. Hovering the thumbnail shows its name.

The value stays the icon name as a string, such as `book` or `brand:github`. Without the icon catalog (the site's icon engine, `hugolify-theme-icons` v1.9.0 or later), the field falls back to a plain text input, so the name can still be typed.

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | string | no | Default icon name |
| `brands` | boolean | no | Also offer the brand logos (`brand:github`, `brand:x`, …) |
| `hidden` | boolean | no | Hide from the editor |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `required` | boolean | no | Mark as required |

Brand logos are left out of the grid unless a field sets `brands: true`, because the brand set is heavy to load.

## Example

```yaml
- label: Icon
  name: icon
  widget: icon
  brands: true
  hint: Pick an icon from the grid, or type its name.
```
