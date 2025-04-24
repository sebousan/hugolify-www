---
title: Map
description: Displays a map with one or multiples markers in your body markdown.
icon: geo-alt
---

## Example

### Markdown usage


```go-html-template
{{</* map markers=`{"coordinates":[44.8425666,-0.5737107]},{"coordinates":[45.8425666,1.5937107]},{"coordinates":[46.8425666,-0.5737107]}` */>}}
```

### HTML rendered

```html
<div
  class="map js-map"
  data-markers="[{&quot;coordinates&quot;:[44.8425666,-0.5737107]},{&quot;coordinates&quot;:[45.8425666,1.5937107]},{&quot;coordinates&quot;:[46.8425666,-0.5737107]}]"
></div>
```

### Visual renderer

{{< map markers=`{"coordinates":[44.8425666,-0.5737107]},{"coordinates":[45.8425666,1.5937107]},{"coordinates":[46.8425666,-0.5737107]}` >}}


## Datas

```yml
markers: ""
zoom: "" // [1…20] if only one marker
```

## CMS

- Hugolify admin {{< badge text="Available" state="success" >}}
- Decap CMS {{< badge text="Not available" state="danger" >}}

## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/map.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/assets/js/components/map.js" text="JS file — hugolify-theme" >}}
