---
title: Code
description: Code editor field with optional syntax highlighting.
---

## Usage

```go
{{ partial "admin/widgets/code.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | boolean or string | — | Default value |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `language` | string | — | Syntax language (e.g. `html`, `css`, `javascript`) |
| `nameOverride` | string | — | Override the name in output |
| `required` | boolean | — | Mark as required |
