---
title: Button
description: Displays a button link in your body markdown.
icon: pointer
---

## Example

### Markdown usage

```go-html-template
{{</* button text="This is a button" url="https://www.hugolify.io/" blank="true" */>}}
```

### HTML rendered

```html
<a
  href="https://www.hugolify.io/"
  class="btn btn-primary"
  target="_blank"
  rel="noreferrer noopener"
  title="« This is a button » - external link"
  >This is a button</a
>
```

### Visual renderer

{{< button text="This is a button" url="https://www.hugolify.io/" blank="true" >}}

## Datas

```yaml
text: "" # string
url: "" # string
blank: false # boolean
class: "" # string
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

## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_shortcodes/button.html" text="Shortcode file (hugolify-theme)" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/shortcodes/fields/button.html" text="Shortcode fields file (hugolify-admin)" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/editor/shortcodes/button.js" text="Shortcode file (hugolify-decap-cms)" >}}
