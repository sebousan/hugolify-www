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
<span class="badge text-bg-warning">Lorem</span>
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

## CMS

- Hugolify admin {{< badge text="Available" state="success" >}}
- Decap CMS {{< badge text="Not available" state="danger" >}}

## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/badge.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://getbootstrap.com/docs/5.3/components/badge/" text="Boostrap component" >}}
