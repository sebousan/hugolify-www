---
title: Span lang
description: Displays a span HTML with lang attribute to specifi another language.
icon: translate
---
In accessibility, it is necessary to identify words corresponding to a language other than the content of the page.

## Example

### Markdown usage

```go-html-template
{{</* span_lang text="English text" lang="en" */>}}
```

### HTML rendered

```html
<span lang="en">English text</span>
```

### Visual renderer

{{< span_lang text="Lorem ipsum" lang="en" >}}

## Datas

```yml
text: ""
lang: ""
```

## CMS

- Hugolify admin {{< badge text="Not available" state="danger" >}}
- Decap CMS {{< badge text="Not available" state="danger" >}}

## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/span_lang.html" text="Shortcode file — hugolify-theme" >}}
