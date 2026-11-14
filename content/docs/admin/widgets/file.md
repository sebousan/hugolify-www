---
title: File
description: File upload field. Use type to restrict to a specific media category.
---

## Usage

```go
{{ partial "admin/widgets/file.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `type` | string | yes | Media category: `audio`, `document`, `file`, `video` |
| `extensions` | array | — | Allowed file extensions |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `label_singular` | string | — | Singular label |
| `max` | number | — | Maximum number of files |
| `min` | number | — | Minimum number of files |
| `multiple` | boolean | — | Allow multiple files |
| `nameOverride` | string | — | Override the name in output |
| `required` | boolean | — | Mark as required |
