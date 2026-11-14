---
title: UUID
description: Auto-generated UUID field, read-only in the editor.
---

Decap and Netlify CMS have no UUID widget of their own: Hugolify loads a community one, `netlify-cms-widget-uuid-v4`, with Netlify CMS always, and with Decap CMS once [`config.id`](/docs/admin/setup/#entry-ids) is `true`.

## Usage

```go
{{ partial "admin/widgets/uuid.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `hidden` | boolean | no | Hide from the editor |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `nameOverride` | string | no | Override the name in output |
