---
title: Blocks
description: Variable-type list field for page builder blocks.
icon: puzzle
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
| `collapsed` | boolean | no | Collapse items by default (default: `true`) |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `label_singular` | string | no | Singular label |
| `max` | number | no | Maximum number of blocks |
| `min` | number | no | Minimum number of blocks |
| `required` | boolean | no | Mark as required |
