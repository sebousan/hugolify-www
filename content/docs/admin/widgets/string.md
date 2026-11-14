---
title: String
description: Single-line text input.
---

## Usage

```go
{{ partial "admin/widgets/string.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | string | no | Default value |
| `hidden` | boolean | no | Hide from the editor |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `nameOverride` | string | no | Override the name in output |
| `pattern` | object | no | Validation pattern |
| `required` | boolean | no | Mark as required |
