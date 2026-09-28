---
title: Text
description: Multi-line plain text input.
---

## Usage

```go
{{ partial "admin/widgets/text.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | string | — | Default value |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `nameOverride` | string | — | Override the name in output |
| `pattern` | object | — | Validation pattern |
| `required` | boolean | — | Mark as required |
