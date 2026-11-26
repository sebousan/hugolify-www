---
title: Markdown
description: Rich text / markdown editor.
icon: pilcrow
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
| `buttons` | string | no | Toolbar buttons to show, as an array string (e.g. `"['bold', 'italic']"`) |
| `default` | string | no | Default value |
| `editor_components` | array | no | Editor components to enable |
| `hidden` | boolean | no | Hide from the editor |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `minimal` | boolean | no | Compact editor with a capped height (default: `true`) |
| `modes` | string | no | Editor modes as an array string, the first one opens (default: `"['rich_text']"`) |
| `nameOverride` | string | no | Override the name in output |
| `pattern` | object | no | Validation pattern |
| `required` | boolean | no | Mark as required |

The Hugolify markdown fields pass `minimal`, `modes` and `buttons` from params. See [Markdown editor](/docs/admin/fields/#markdown-editor).
