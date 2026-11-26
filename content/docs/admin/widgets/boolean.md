---
title: Boolean
description: Toggle / checkbox field.
icon: toggle-right
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
| `default` | boolean or string | no | Default value |
| `hidden` | boolean | no | Hide from the editor |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `nameOverride` | string | no | Override the name in output |
| `required` | boolean | no | Mark as required |
