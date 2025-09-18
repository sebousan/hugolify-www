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

## CMS

- Hugolify admin {{< badge text="Available" state="success" >}}
- Decap CMS {{< badge text="Available" state="success" >}}

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/blank_link.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/editor/shortcodes/blank_link.js" text="Decap CMS file — hugolify-decap-cms" >}}