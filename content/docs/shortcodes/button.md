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

```yml
text: ""
url: ""
blank: false
class: "" // Not in Decap CMS
```

## Decap CMS

{{< alert text="Available" state="success" >}}

## Related links

- [Decap CMS file — hugolify-decap-cms](https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/editor/shortcodes/button.js)
- [Shortcode file — hugolify-theme](https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/button.html)
