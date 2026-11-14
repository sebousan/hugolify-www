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
| `default` | string | no | Default selected value |
| `hidden` | boolean | no | Hide from the editor |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `label_options` | string | no | i18n key prefix for option labels |
| `multiple` | boolean | no | Allow multiple selections |
| `nameOverride` | string | no | Override the name in output |
| `required` | boolean | no | Mark as required |
