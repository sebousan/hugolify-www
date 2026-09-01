---
title: Badge
description: Displays a badge with different state in your body markdown.
icon: patch-check
---

## Example

### Markdown usage

```go-html-template
{{</* badge text="Lorem ipsum" state="warning" */>}}
```

### HTML rendered

```html
<span class="badge badge-warning">Lorem</span>
```

### Visual renderer

{{< badge text="Lorem ipsum" state="warning" >}}

## Datas

```yaml
text: "" # string
state:
  [
    "danger",
    "dark",
    "info",
    "light",
    "primary",
    "secondary",
    "success",
    "warning",
  ] # select
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


## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/badge.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/shortcodes/fields/badge.html" text="Shortcode fields file — hugolify-admin" >}}
- {{< blank_link link="https://getbootstrap.com/docs/5.3/components/badge/" text="Boostrap component" >}}
