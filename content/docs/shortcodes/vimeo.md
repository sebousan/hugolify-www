---
title: Vimeo
description: Displays a vimeo embed.
icon: vimeo
---

## Example

### Markdown usage

```go-html-template
{{</* vimeo 146022717 vimeo "iframe title" */>}}
```

### HTML rendered

```html
<div class="vimeo">
  <iframe loading="lazy" title="iframe title" src="https://player.vimeo.com/video/JP8HNPKQWfI?autoplay=0&controls=1&end=0&loop=0&mute=0&start=0" allowfullscreen></iframe>
</div>
```

### Visual renderer

{{< vimeo 146022717 vimeo "iframe title" >}}

## Datas

```yaml
id: "" # string
class: "" # string
title: "" # string
```

## CMS availability

### Hugolify Admin

- [Hugolify Admin](/docs/admin/v1/)
  - [CloudCannon](/docs/admin/v1/cms/cloudcannon/) {{< badge text="Available" state="success" >}} {{< badge text="Since v1.0.0" state="info" >}}
  - [Decap CMS](/docs/admin/v1/cms/decap-cms/) {{< badge text="Available" state="success" >}}
  - [Netlify CMS](/docs/admin/v1/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
  - [Pages CMS](/docs/admin/v1/cms/pages-cms/) {{< badge text="Not available" state="danger" >}}
  - [Sveltia CMS](/docs/admin/v1/cms/sveltia-cms/) {{< badge text="Available" state="success" >}} {{< badge text="Since v1.0.0" state="info" >}}
  - [Tina CMS](/docs/admin/v1/cms/tina-cms/) {{< badge text="Not available" state="danger" >}}


## Related link

- {{< blank_link link="https://gohugo.io/shortcodes/vimeo/" text="Shortcode documentation — Hugo" >}}
- {{< blank_link link="https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_shortcodes/vimeo.html" text="Shortcode file — Hugo" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/vimeo.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/shortcodes/fields/vimeo.html" text="Shortcode fields file — hugolify-admin" >}}
