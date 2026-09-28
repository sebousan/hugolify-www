---
isIndex: false
title: Widgets
description: Available widget partials and their parameters
weight: 5
icon: app
cascade:
  icon: app
---

{{< alert-block state="info" >}}
Instead of writing raw CMS-specific YAML or JSON, you call a widget partial and pass a standardized `dict`. The widget internally handles the output format for each supported CMS (Decap, Sveltia, CloudCannon, Pages CMS, TinaCMS…), so the same field definition works across all of them without any change.
{{</ alert-block >}}

Widgets are Hugo partials that generate CMS field configuration. Each widget is called with a **dict** of parameters.

```go
{{- $args := dict
  "label" (i18n "admin.fields.title.label")
  "name"  "title"
  -}}
{{ partial "admin/widgets/string.js" $args }}
```

Parameters marked **required** must always be provided.
