---
title: Map
description: Map / geolocation field.
icon: map-pin
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
| `default` | string | no | Default value |
| `hint` | string | no | Help text |
| `i18n` | boolean or string | no | i18n mode |
| `required` | boolean | no | Mark as required |
