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
| `extensions` | array | no | Allowed file extensions |
| `hidden` | boolean | no | Hide from the editor |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `label_singular` | string | no | Singular label |
| `max` | number | no | Maximum number of files |
| `min` | number | no | Minimum number of files |
| `multiple` | boolean | no | Allow multiple files |
| `nameOverride` | string | no | Override the name in output |
| `required` | boolean | no | Mark as required |
