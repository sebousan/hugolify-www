---
title: QR
description: Displays a QR code image.
icon: qr-code
---

## Example

### Markdown usage

```go-html-template
{{</* qr text="https://www.hugolify.io" */>}}
```

### HTML rendered

```html
<img src="/qr_6cbabfe65842f919.png" width="132" height="132">
```

### Visual renderer

{{< qr text="https://www.hugolify.io" />}}

## Datas

```yaml
text: "" # string
```

## CMS availability

| CMS | Hugolify Admin v2 |
| --- | --- |
| [CloudCannon](/docs/admin/cms/cloudcannon/) | {{< badge text="Not available" state="danger" >}} |
| [Decap CMS](/docs/admin/cms/decap-cms/) | {{< badge text="Available" state="success" >}} |
| [Netlify CMS](/docs/admin/cms/netlify-cms/) | {{< badge text="Available" state="success" >}} |
| [Pages CMS](/docs/admin/cms/pages-cms/) | {{< badge text="Not available" state="danger" >}} |
| [Static CMS](/docs/admin/cms/static-cms/) | {{< badge text="Not available" state="danger" >}} |
| [Sveltia CMS](/docs/admin/cms/sveltia-cms/) | {{< badge text="Available" state="success" >}} |
| [Tina CMS](/docs/admin/cms/tina-cms/) | {{< badge text="Not available" state="danger" >}} |

## Related link

- {{< blank_link link="https://gohugo.io/shortcodes/qr/" text="Shortcode documentation (Hugo)" >}}
- {{< blank_link link="https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_shortcodes/qr.html" text="Shortcode file (Hugo)" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/shortcodes/fields/qr.html" text="Shortcode fields file (hugolify-admin)" >}}
