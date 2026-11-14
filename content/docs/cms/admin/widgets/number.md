---
title: Number
description: Numeric input or range slider.
---

## Usage

```go
{{ partial "admin/widgets/number.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | string | no | Default value |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `max` | number | no | Maximum value |
| `min` | number | no | Minimum value |
| `nameOverride` | string | no | Override the name in output |
| `range` | boolean | no | Render as a range slider |
| `required` | boolean | no | Mark as required |
| `step` | number | no | Step increment |
