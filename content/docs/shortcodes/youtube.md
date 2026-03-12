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

## CMS availability

### Hugolify Admin

- [Hugolify Admin](/docs/cms/admin/)
  - [CloudCannon](/docs/cms/admin/cms/cloudcannon/) {{< badge text="Available" state="success" >}} {{< badge text="Since v1.0.0" state="info" >}}
  - [Decap CMS](/docs/cms/admin/cms/decap-cms/) {{< badge text="Available" state="success" >}}
  - [Netlify CMS](/docs/cms/admin/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
  - [Pages CMS](/docs/cms/admin/cms/pages-cms/) {{< badge text="Not available" state="danger" >}}
  - [Sveltia CMS](/docs/cms/admin/cms/sveltia-cms/) {{< badge text="Available" state="success" >}} {{< badge text="Since v1.0.0" state="info" >}}
  - [Tina CMS](/docs/cms/admin/cms/tina-cms/) {{< badge text="Not available" state="danger" >}}

### Old repositories

- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Not available" state="danger" >}}

## Related link

- {{< blank_link link="https://gohugo.io/shortcodes/youtube/" text="Shortcode documentation — Hugo" >}}
- {{< blank_link link="https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_shortcodes/youtube.html" text="Shortcode file — Hugo" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/youtube.html" text="Shortcode fields file — hugolify-theme" >}}
