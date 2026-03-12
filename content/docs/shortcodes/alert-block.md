---
title: Alert block
description: Displays an alert block with different state in your body markdown.
icon: exclamation-octagon
---

## Example

### Markdown usage

```go-html-template
{{</* alert-block title="Tempus vitae" state="danger" */>}}
Lorem {{</* blank_link link="https://www.hugolify.io" text="ipsum" */>}} dolor sit amet, consectetur adipiscing elit.

* In condimentum facilisis gravida.
* Nam diam ipsum, tempus vitae [posuere](https://www.hugolify.io).
* mattis non lacus.
{{</* /alert-block */>}}
```

### HTML rendered

```html
<div class="alert alert-danger">
  <h4 class="alert-heading">Tempus vitae</h4>
  <p>Lorem <a href="https://www.hugolify.io" target="_blank">ipsum</a> dolor sit amet, consectetur adipiscing elit.</p>
  <ul>
    <li>In condimentum facilisis gravida.</li>
    <li>Nam diam ipsum, tempus vitae <a href="https://www.hugolify.io">posuere</a>.</li>
    <li>mattis non lacus.</li>
  </ul>
</div>
```

### Visual renderer

{{< alert-block title="Tempus vitae" state="danger" >}}
Lorem {{< blank_link link="https://www.hugolify.io" text="ipsum" >}} dolor sit amet, consectetur adipiscing elit.

* In condimentum facilisis gravida.
* Nam diam ipsum, tempus vitae [posuere](https://www.hugolify.io).
* mattis non lacus.
{{< /alert-block >}}

## Datas

```yaml
Inner: "" # markdown
title: "" # string
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

## Params

{{< alert text="`/config/_default/hugo.yaml`" state="light" >}}

```yaml
markup:
  goldmark:
    renderer:
      unsafe: true
```

## CMS availability

### Hugolify Admin

- [Hugolify Admin](/docs/cms/admin/)
  - [CloudCannon](/docs/cms/admin/cms/cloudcannon/) {{< badge text="Available" state="success" >}} {{< badge text="Since v1.0.0" state="info" >}}
  - [Decap CMS](/docs/cms/admin/cms/decap-cms/) {{< badge text="Available" state="success" >}}
  - [Netlify CMS](/docs/cms/admin/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
  - [Pages CMS](/docs/cms/admin/cms/pages-cms/) {{< badge text="Not available" state="danger" >}}
  - [Sveltia CMS](/docs/cms/admin/cms/sveltia-cms/) {{< badge text="Available" state="success" >}} {{< badge text="Since v1.0.0" state="info" >}}
  - [Tina CMS](/docs/cms/admin/cms/tina-cms/) {{< badge text="Not available" state="danger" >}}

### Old repositories

- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Not available" state="danger" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Not available" state="danger" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Not available" state="danger" >}}

## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/alert-block.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/shortcodes/fields/alert-block.html" text="Shortcode fields file — hugolify-admin" >}}
- {{< blank_link link="https://getbootstrap.com/docs/5.3/components/alerts/" text="Boostrap component" >}}
