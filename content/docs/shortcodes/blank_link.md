---
title: Blank link
description: Displays a blank target link in your body markdown.
icon: box-arrow-up-right
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
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Not available" state="danger" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Not available" state="danger" >}}

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/blank_link.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/shortcodes/fields/blank_link.html" text="Shortcode fields file — hugolify-admin" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/editor/shortcodes/blank_link.js" text="Shortcode file — hugolify-decap-cms" >}}