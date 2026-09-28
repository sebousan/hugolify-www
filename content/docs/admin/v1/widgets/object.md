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
| `collapsed` | boolean | — | Collapse by default (default: `true`) |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `label_singular` | string | — | Singular label |
| `nameOverride` | string | — | Override the name in output |
| `required` | boolean | — | Mark as required |
| `summary` | string | — | Summary template for collapsed view |
