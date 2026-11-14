---
title: Object
description: Groups multiple fields into a collapsible object.
---

## Usage

```go
{{ partial "admin/widgets/object.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `fields` | array | yes | Array of field definitions |
| `collapsed` | boolean | no | Collapse by default (default: `true`) |
| `description` | string | no | For a block type, the line shown under its label in the menu of the Add button (Sveltia CMS) |
| `hidden` | boolean | no | Hide from the editor |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `label_singular` | string | no | Singular label |
| `nameOverride` | string | no | Override the name in output |
| `required` | boolean | no | Mark as required |
| `summary` | string | no | Summary template for collapsed view |
