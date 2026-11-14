---
title: Blank link
description: Displays a blank target link in your body markdown.
icon: square-arrow-up-right
---

## Example

### Markdown usage

```go-html-template
{{</* blank_link link="https://www.hugolify.io/" text="Link with target blank" */>}}
```

### HTML rendered

```html
<a
  href="https://www.hugolify.io/"
  target="_blank"
  rel="noreferrer noopener"
  title="« Link with target blank » - external link"
  >Link with target blank</a
>
```

### Visual renderer

{{< blank_link link="https://www.hugolify.io/" text="Link with target blank" >}}

## Datas

```yaml
link: "" # string
text: "" # string
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

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_shortcodes/blank_link.html" text="Shortcode file (hugolify-theme)" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/shortcodes/fields/blank_link.html" text="Shortcode fields file (hugolify-admin)" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/editor/shortcodes/blank_link.js" text="Shortcode file (hugolify-decap-cms)" >}}
