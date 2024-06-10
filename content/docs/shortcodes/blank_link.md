---
title: Blank link
description: Displays a blank target link in your body markdown.
---

# Blank link shortcode

Displays an alert with different state in your body markdown.

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

```yml
link: ""
text: ""
```

## Decap CMS

{{< alert text="Available" state="success" >}}

## Related link

- [Shortcode file — hugolify-theme](https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/blank_link.html)
