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
| `default` | string | — | Default value |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `nameOverride` | string | — | Override the name in output |
| `pattern` | object | — | Validation pattern |
| `required` | boolean | — | Mark as required |
