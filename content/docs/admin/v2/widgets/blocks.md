---
title: Blocks
description: Variable-type list field for page builder blocks.
---

## Usage

```go
{{ partial "admin/widgets/blocks.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `blocks` | array | yes | Array of block type definitions |
| `collapsed` | boolean | — | Collapse items by default (default: `true`) |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `label_singular` | string | — | Singular label |
| `max` | number | — | Maximum number of blocks |
| `min` | number | — | Minimum number of blocks |
| `required` | boolean | — | Mark as required |
