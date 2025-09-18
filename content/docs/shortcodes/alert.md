---
title: Alert
description: Displays an alert with different state in your body markdown.
icon: exclamation-octagon
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

## CMS

- Hugolify admin {{< badge text="Available" state="success" >}}
- Decap CMS {{< badge text="Not available" state="danger" >}}

## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/alert.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://getbootstrap.com/docs/5.3/components/alerts/" text="Boostrap component" >}}
