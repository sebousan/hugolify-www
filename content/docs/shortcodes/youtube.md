---
title: Youtube
description: Displays a youtube embed.
icon: youtube
---

## Example

### Markdown usage

```go-html-template
{{</* youtube id="JP8HNPKQWfI" title="Proin maximus" class="youtube" */>}}
```

### HTML rendered

```html
<div class="youtube">
  <iframe loading="lazy" src="https://www.youtube.com/embed/JP8HNPKQWfI?autoplay=0&controls=1&end=0&loop=0&mute=0&start=0" allowfullscreen></iframe>
</div>
```

### Visual renderer

{{< youtube id="JP8HNPKQWfI" title="Proin maximus" class="youtube" >}}

## Datas

```yaml
id: "" # string
```

## CMS

- Hugolify admin {{< badge text="Not available" state="danger" >}}
- Decap CMS {{< badge text="Not available" state="danger" >}}
- Netlify CMS {{< badge text="Not available" state="danger" >}}
- Sveltia CMS {{< badge text="Not available" state="danger" >}}

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/twitch.html" text="Shortcode file — hugolify-theme" >}}
