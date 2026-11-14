---
title: Span lang
description: Displays a span HTML with lang attribute to specifi another language.
icon: languages
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

```yaml
text: "" # string
lang: "" # string (e.g: de)
```

## CMS availability

| CMS | Hugolify Admin v2 |
| --- | --- |
| [CloudCannon](/docs/admin/cms/cloudcannon/) | {{< badge text="Available" state="success" >}} |
| [Decap CMS](/docs/admin/cms/decap-cms/) | {{< badge text="Available" state="success" >}} |
| [Netlify CMS](/docs/admin/cms/netlify-cms/) | {{< badge text="Available" state="success" >}} |
| [Pages CMS](/docs/admin/cms/pages-cms/) | {{< badge text="Not available" state="danger" >}} |
| [Static CMS](/docs/admin/cms/static-cms/) | {{< badge text="Not available" state="danger" >}} |
| [Sveltia CMS](/docs/admin/cms/sveltia-cms/) | {{< badge text="Available" state="success" >}} |
| [Tina CMS](/docs/admin/cms/tina-cms/) | {{< badge text="Not available" state="danger" >}} |

## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_shortcodes/span_lang.html" text="Shortcode file (hugolify-theme)" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/shortcodes/fields/span_lang.html" text="Shortcode fields file (hugolify-admin)" >}}
