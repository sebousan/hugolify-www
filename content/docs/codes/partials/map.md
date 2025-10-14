---
title: Map
description: Displays an openstreetmap with markers.
icon: geo-alt
---
## Example

### Usage

```go-html-template
{{ $args := (dict
    "location" (slice (dict "coordinates" "[44.8425666,-0.5737107]" "coordinates" "[45.8425666,1.5937107]"))
    ) }}
{{ partial "commons/map.html" $args }}
```

### HTML rendered

```go-html-template
<div
  class="map js-map"
  data-markers="[{&quot;coordinates&quot;:[44.8425666,-0.5737107]},{&quot;coordinates&quot;:[45.8425666,1.5937107]}]"
></div>
```

## Datas

```yml
location: [] // array of markers
marker_hidden: false // boolean (optional)
zoom: "" // int (optional)
```

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/map.html" text="Map commons file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/assets/js/features/map.js" text="Map javascript file — hugolify-theme" >}}
