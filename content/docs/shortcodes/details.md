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

## CMS availability

### Hugolify Admin

- [Hugolify Admin](/docs/admin/v1/)
  - [CloudCannon](/docs/admin/v1/cms/cloudcannon/) {{< badge text="Available" state="success" >}} {{< badge text="Since v1.0.0" state="info" >}}
  - [Decap CMS](/docs/admin/v1/cms/decap-cms/) {{< badge text="Available" state="success" >}}
  - [Netlify CMS](/docs/admin/v1/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
  - [Pages CMS](/docs/admin/v1/cms/pages-cms/) {{< badge text="Not available" state="danger" >}}
  - [Sveltia CMS](/docs/admin/v1/cms/sveltia-cms/) {{< badge text="Available" state="success" >}} {{< badge text="Since v1.0.0" state="info" >}}
  - [Tina CMS](/docs/admin/v1/cms/tina-cms/) {{< badge text="Not available" state="danger" >}}


## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/details.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/shortcodes/fields/details.html" text="Shortcode fields file — hugolify-admin" >}}
