---
title: Dailymotion
description: Displays a dailymotion embed.
icon: camera-reels
---

## Example

### Markdown usage

```go-html-template
{{</* dailymotion 2656646242 */>}}
```

### HTML rendered

```html
<iframe loading="lazy" src="https://geo.dailymotion.com/player.html?video=x9t0c4w" allowfullscreen></iframe>
```

### Visual renderer

{{< dailymotion x9t0c4w >}}


## Datas

```yaml
id: "" # string
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

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/dailymotion.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/shortcodes/fields/dailymotion.html" text="Shortcode fields file — hugolify-admin" >}}
