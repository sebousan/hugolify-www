---
title: Alert
description: Displays an alert with different state in your body markdown.
icon: octagon-exclamation-point
---

## Example

### Markdown usage

```go-html-template
{{</* alert text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum facilisis gravida. Nam diam ipsum, tempus vitae posuere at, mattis non lacus." state="danger" */>}}
```

### HTML rendered

```html
<div class="alert alert-danger">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum
    facilisis gravida. Nam diam ipsum, tempus vitae posuere at, mattis non
    lacus.
  </p>
</div>
```

### Visual renderer

{{< alert text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum facilisis gravida. Nam diam ipsum, tempus vitae posuere at, mattis non lacus." state="danger" >}}

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

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_shortcodes/alert.html" text="Shortcode file (hugolify-theme)" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/shortcodes/fields/alert.html" text="Shortcode fields file (hugolify-admin)" >}}
- {{< blank_link link="https://getbootstrap.com/docs/5.3/components/alerts/" text="Boostrap component" >}}
