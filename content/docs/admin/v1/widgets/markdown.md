---
title: Markdown
description: Rich text / markdown editor.
---

## Usage

```go
{{ partial "admin/widgets/markdown.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `buttons` | array | — | Toolbar buttons to show |
| `default` | string | — | Default value |
| `editor_components` | array | — | Editor components to enable |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `minimal` | boolean | — | Minimal toolbar (default: `true`) |
| `modes` | array | — | Editor modes (default: `['rich_text']`) |
| `nameOverride` | string | — | Override the name in output |
| `pattern` | object | — | Validation pattern |
| `required` | boolean | — | Mark as required |
