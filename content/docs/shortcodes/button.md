---
title: Button
description: Displays a button link in your body markdown.
icon: hand-index
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

## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/button.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/shortcodes/fields/button.html" text="Shortcode fields file — hugolify-admin" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/editor/shortcodes/button.js" text="Shortcode file — hugolify-decap-cms" >}}
