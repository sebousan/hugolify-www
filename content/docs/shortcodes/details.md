---
title: Details
description: Displays a details HTML markup in your body markdown.
icon: caret-down
---

## Example

### Markdown usage

```go-html-template
{{</* details title="This is a question" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum facilisis gravida. Nam diam ipsum, tempus vitae posuere at, mattis non lacus." */>}}
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

{{< details title="This is a question" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum facilisis gravida. Nam diam ipsum, tempus vitae posuere at, mattis non lacus." >}}

## Datas

```yml
title: ""
text: ""
```

## CMS

- Hugolify admin {{< alert text="Available" state="success" >}}
- Decap CMS {{< alert text="Not available" state="danger" >}}

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/details.html" text="Shortcode file — hugolify-theme" >}}
