---
title: List
description: Repeatable list of fields (an array of objects), or of a single field (an array of values).
---

## Usage

```go
{{ partial "admin/widgets/list.js" $args }}
```

By default each item is an object holding the `fields`. Give `field` instead to repeat a single field: each item is then its value, an array of strings for a text field.

```go
{{- $args := dict
  "label" (i18n "admin.fields.education.label" 2)
  "name" "education"
  "field" "text_area"
  -}}
{{ partial "admin/widgets/list.js" $args }}
```

```yaml
# fields: [text_area]     # field: text_area
education:                # education:
  - text: Master, 2004    #   - Master, 2004
```

`field` is the `field` option of Decap, Netlify, Static and Sveltia CMS. CloudCannon, Pages CMS and Tina CMS take it as the only item of `fields`, so their list still stores objects.

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `fields` | array | yes, unless `field` | Array of field definitions |
| `field` | string or map | — | A single field definition, repeated: the list stores values instead of objects (Decap, Netlify, Static and Sveltia CMS) |
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
