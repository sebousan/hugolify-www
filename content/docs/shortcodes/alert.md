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

```yml
text: ""
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
  ]
```

## Decap CMS

{{< alert text="Not available" state="warning" >}}

## Related links

- [Shortcode file — hugolify-theme](https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/alert.html)
- [Boostrap component](https://getbootstrap.com/docs/5.3/components/alerts/)
