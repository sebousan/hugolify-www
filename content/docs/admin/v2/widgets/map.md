---
title: Map
description: Map / geolocation field.
---

{{< badge text="Not available with CloudCannon, Pages and TinaCMS" state="warning" >}}

## Usage

```go
{{ partial "admin/widgets/map.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `default` | string | — | Default value |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode |
