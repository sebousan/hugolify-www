---
title: Datetime
description: Date and time picker.
---

## Usage

```go
{{ partial "admin/widgets/datetime.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | date or string | — | Default value |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `nameOverride` | string | — | Override the name in output |
| `required` | boolean | — | Mark as required |
