---
title: Dailymotion
description: Displays a dailymotion embed.
icon: brand:dailymotion
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

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_shortcodes/dailymotion.html" text="Shortcode file (hugolify-theme)" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/shortcodes/fields/dailymotion.html" text="Shortcode fields file (hugolify-admin)" >}}
