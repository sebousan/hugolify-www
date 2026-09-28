---
title: List
description: Repeatable list of fields (an array of objects).
---

## Usage

```go
{{ partial "admin/widgets/list.js" $args }}
```

## Parameters

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
