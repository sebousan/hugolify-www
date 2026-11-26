---
title: Select
description: Dropdown select field.
icon: chevrons-up-down
---

## Usage

```go
{{ partial "admin/widgets/select.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `options` | array or object | yes | Available options |
| `default` | string | no | Default selected value |
| `dropdown_threshold` | number | no | Up to this number of options, Sveltia CMS shows radio buttons or checkboxes instead of a dropdown (default: `1`) |
| `hidden` | boolean | no | Hide from the editor |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `label_options` | string or map | no | i18n key prefix for option labels, or the labels themselves, keyed by option |
| `multiple` | boolean | no | Allow multiple selections |
| `nameOverride` | string | no | Override the name in output |
| `required` | boolean | no | Mark as required |
| `toggle` | map | no | Option value → names of the sibling fields shown with it, the others being hidden (Decap and Sveltia CMS, single select only), see [Fields that depend on another](/docs/admin/blocks/#fields-that-depend-on-another) |
