---
title: Details
description: Displays a details HTML markup in your body markdown.
---

# Details shortcode

Displays a details HTML markup in your body markdown.

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

## Decap CMS

{{< alert text="Not available" state="warning" >}}

## Related link

- [Shortcode file — hugolify-theme](https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/details.html)
