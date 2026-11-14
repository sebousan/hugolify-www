---
title: Youtube
description: Displays a youtube embed.
icon: brand:youtube
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

| CMS | Hugolify Admin v2 |
| --- | --- |
| [CloudCannon](/docs/admin/cms/cloudcannon/) | {{< badge text="Available" state="success" >}} |
| [Decap CMS](/docs/admin/cms/decap-cms/) | {{< badge text="Available" state="success" >}} |
| [Netlify CMS](/docs/admin/cms/netlify-cms/) | {{< badge text="Available" state="success" >}} |
| [Pages CMS](/docs/admin/cms/pages-cms/) | {{< badge text="Not available" state="danger" >}} |
| [Static CMS](/docs/admin/cms/static-cms/) | {{< badge text="Not available" state="danger" >}} |
| [Sveltia CMS](/docs/admin/cms/sveltia-cms/) | {{< badge text="Available" state="success" >}} |
| [Tina CMS](/docs/admin/cms/tina-cms/) | {{< badge text="Not available" state="danger" >}} |

## Related link

- {{< blank_link link="https://gohugo.io/shortcodes/youtube/" text="Shortcode documentation (Hugo)" >}}
- {{< blank_link link="https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_shortcodes/youtube.html" text="Shortcode file (Hugo)" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/shortcodes/fields/youtube.html" text="Shortcode fields file (hugolify-admin)" >}}
