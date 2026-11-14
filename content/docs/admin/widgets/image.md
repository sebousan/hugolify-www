---
title: Image
description: Image upload field.
---

## Usage

```go
{{ partial "admin/widgets/image.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `max` | number | — | Maximum number of images |
| `max_file_size` | number | — | Maximum file size in bytes |
| `media_folder` | string | — | Upload folder |
| `min` | number | — | Minimum number of images |
| `multiple` | boolean | — | Allow multiple images |
| `nameOverride` | string | — | Override the name in output |
| `public_folder` | string | — | Public path for images |
| `required` | boolean | — | Mark as required |
