---
title: Boolean
description: Toggle / checkbox field.
---

## Usage

```go
{{ partial "admin/widgets/boolean.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | boolean or string | — | Default value |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `nameOverride` | string | — | Override the name in output |
| `required` | boolean | — | Mark as required |
