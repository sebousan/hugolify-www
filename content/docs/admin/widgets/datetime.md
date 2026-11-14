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
| `format` | string | no | Storage format in Day.js tokens, for Decap and Sveltia CMS (default: `YYYY-MM-DD[T]HH:mm:ss`, or `YYYY-MM-DD` without `time`) |
| `hidden` | boolean | no | Hide from the editor |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `nameOverride` | string | no | Override the name in output |
| `required` | boolean | no | Mark as required |
| `time` | boolean | no | `false` for a date picker alone, a day without a time of day (default: `true`) |
