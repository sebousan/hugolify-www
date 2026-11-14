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
| `hidden` | boolean | no | Hide from the editor |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `max` | number | no | Maximum number of images |
| `max_file_size` | number | no | Maximum file size in bytes |
| `media_folder` | string | no | Upload folder |
| `min` | number | no | Minimum number of images |
| `multiple` | boolean | no | Allow multiple images |
| `nameOverride` | string | no | Override the name in output |
| `public_folder` | string | no | Public path for images |
| `required` | boolean | no | Mark as required |
