---
title: Twitch
description: Displays a twitch embed.
icon: brand:twitch
---

## Example

### Markdown usage

```go-html-template
{{</* twitch 2656646242 */>}}
```

### HTML rendered

```html
<iframe loading="lazy" src="https://player.twitch.tv/?channel=2656646242" allowfullscreen></iframe>
```

### Visual renderer

{{< twitch 2656646242 >}}

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

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_shortcodes/twitch.html" text="Shortcode file (hugolify-theme)" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/shortcodes/fields/twitch.html" text="Shortcode fields file (hugolify-admin)" >}}
