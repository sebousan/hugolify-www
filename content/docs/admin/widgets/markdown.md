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
| `buttons` | string | — | Toolbar buttons to show, as an array string (e.g. `"['bold', 'italic']"`) |
| `default` | string | — | Default value |
| `editor_components` | array | — | Editor components to enable |
| `hidden` | boolean | — | Hide from the editor |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
| `minimal` | boolean | — | Compact editor with a capped height (default: `true`) |
| `modes` | string | — | Editor modes as an array string, the first one opens (default: `"['rich_text']"`) |
| `nameOverride` | string | — | Override the name in output |
| `pattern` | object | — | Validation pattern |
| `required` | boolean | — | Mark as required |

The Hugolify markdown fields pass `minimal`, `modes` and `buttons` from params. See [Markdown editor](../../fields/#markdown-editor).
