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
| `default` | date or string | no | Default value |
| `hidden` | boolean | no | Hide from the editor |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `nameOverride` | string | no | Override the name in output |
| `required` | boolean | no | Mark as required |
