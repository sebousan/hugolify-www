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
| `default` | string | — | Default value |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `max` | number | — | Maximum value |
| `min` | number | — | Minimum value |
| `nameOverride` | string | — | Override the name in output |
| `range` | boolean | — | Render as a range slider |
| `required` | boolean | — | Mark as required |
| `step` | number | — | Step increment |
