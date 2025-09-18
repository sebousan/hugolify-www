---
isIndex: false
title: Details
description: Displays a details HTML markup in your body markdown.
icon: caret-down
---

## Example

### Markdown usage

```go-html-template
{{</* details summary="This is a question" */>}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum facilisis gravida. Nam diam ipsum, tempus vitae posuere at, mattis non lacus.
{{</* /details */>}}
```

### HTML rendered

```html
<details>
  <summary>This is a question</summary>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum
    facilisis gravida. Nam diam ipsum, tempus vitae posuere at, mattis non
    lacus.
  </div>
</details>
```

### Visual renderer

{{< details summary="This is a question" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum facilisis gravida. Nam diam ipsum, tempus vitae posuere at, mattis non lacus.
{{< /details >}}

## Datas

```yaml
name: "" # string
title: "" # string
summary: "" # string
contents: "" # markdown
```

## CMS

- Hugolify admin {{< badge text="Available" state="success" >}}
- Decap CMS {{< badge text="Not available" state="danger" >}}

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/details.html" text="Shortcode file — hugolify-theme" >}}
