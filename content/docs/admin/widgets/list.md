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
| `field` | string or map | no | A single field definition, repeated: the list stores values instead of objects (Decap, Netlify, Static and Sveltia CMS) |
| `collapsed` | boolean | no | Collapse items by default (default: `true`) |
| `hidden` | boolean | no | Hide from the editor |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `label_singular` | string | no | Singular label |
| `max` | number | no | Maximum number of items |
| `min` | number | no | Minimum number of items |
| `nameOverride` | string | no | Override the name in output |
| `required` | boolean | no | Mark as required |
| `summary` | string | no | Summary template for collapsed view |
| `thumbnail` | string | no | Image subfield shown beside a folded item, e.g. `src` (Sveltia CMS) |
