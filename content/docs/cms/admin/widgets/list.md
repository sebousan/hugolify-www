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
