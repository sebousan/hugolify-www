---
title: Relation
description: Relation field — links to another collection entry.
---

## Usage

```go
{{ partial "admin/widgets/relation.js" $args }}
```

## Parameters

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
