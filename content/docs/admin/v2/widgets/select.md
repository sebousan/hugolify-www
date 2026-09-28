---
title: Select
description: Dropdown select field.
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
| `default` | string | — | Default selected value |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `label_options` | string | — | i18n key prefix for option labels |
| `multiple` | boolean | — | Allow multiple selections |
| `nameOverride` | string | — | Override the name in output |
| `required` | boolean | — | Mark as required |
