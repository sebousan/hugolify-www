---
title: Relation
description: Relation field, linking to another collection entry.
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
| `display_fields` | array | no | Fields shown in the picker |
| `filters` | array | no | Filter entries by field values |
| `hidden` | boolean | no | Hide from the editor |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `label_singular` | string | no | Singular label |
| `multiple` | boolean | no | Allow multiple relations (default: `true`) |
| `nameOverride` | string | no | Override the name in output |
| `required` | boolean | no | Mark as required |
| `search_fields` | array | no | Fields to search in the picker |
