---
title: Map
description: Displays a map with one or multiples markers in your body markdown.
---

# Map shortcode

Displays a map with one or multiples markers in your body markdown.

## Example

### Markdown usage

```go-html-template
{{</* map zoom="14" markers="[-0.5737107,44.8425666]" */>}}
```

### HTML rendered

```html
<div
  class="map js-map"
  data-markers="[-0.5737107,44.8425666]"
  data-zoom="14"
></div>
```

### Visual renderer

{{< map zoom="12" markers="[-0.5737107,44.8425666]" >}}

## Datas

```yml
zoom: "" // [1…20]
markers: []
```

## Decap CMS

{{< alert text="Not available" state="warning" >}}

## Related link

- [Shortcode file — hugolify-theme](https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/map.html)
