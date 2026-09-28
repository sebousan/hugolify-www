---
title: Icon
description: Displays an inline icon in your body markdown.
icon: emoji-smile
---

{{< alert text="Requires hugolify-theme v2 and Hugolify Admin v2" state="warning" >}}

## Example

### Markdown usage

```go-html-template
{{</* icon icon="phone" */>}}
{{</* icon icon="brand:github" */>}}
```

{{< alert-block state="info" >}}
The argument is named, never positional. The admin editors parse named arguments and would drop a positional one when saving the entry.
{{< /alert-block >}}

### HTML rendered

```html
<i class="icon icon-phone" aria-hidden="true"></i>
```

The markup is the same either way. What differs is who styles the class.

With **hugolify-theme-icons** the shortcode goes through `partials/icon.html`, which registers the name and serves the glyph from the stylesheet the module builds: [Lucide](/docs/customization/icons/#lucide) for content icons, [Simple Icons](/docs/customization/icons/#simple-icons) for the `brand:` prefix. Only the icons a page actually uses are built.

Without that partial the shortcode emits the class on its own, and the theme's icon font takes over, the Bootstrap Icons webfont in **hugolify-theme-bootstrap**. The `brand:` prefix is specific to hugolify-theme-icons and has no meaning there.

## Datas

```yaml
icon: "" # string
```

## CMS availability

### Hugolify Admin

- [Hugolify Admin](/docs/admin/v2/)
  - [CloudCannon](/docs/admin/v1/cms/cloudcannon/) {{< badge text="Available" state="success" >}} {{< badge text="Since v2" state="info" >}}
  - [Decap CMS](/docs/admin/v1/cms/decap-cms/) {{< badge text="Available" state="success" >}} {{< badge text="Since v2" state="info" >}}
  - [Netlify CMS](/docs/admin/v1/cms/netlify-cms/) {{< badge text="Available" state="success" >}} {{< badge text="Since v2" state="info" >}}
  - [Pages CMS](/docs/admin/v1/cms/pages-cms/) {{< badge text="Not available" state="danger" >}}
  - [Sveltia CMS](/docs/admin/v1/cms/sveltia-cms/) {{< badge text="Available" state="success" >}} {{< badge text="Since v2" state="info" >}}
  - [Tina CMS](/docs/admin/v1/cms/tina-cms/) {{< badge text="Not available" state="danger" >}}

In the editor, Decap, Netlify and Sveltia CMS preview the icon from a CDN, because the site stylesheet is not loaded there. Without hugolify-theme-icons the preview shows the icon name instead.

## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/icon.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/shortcodes/fields/icon.html" text="Shortcode fields file — hugolify-admin" >}}
- [Icons](/docs/customization/icons/), the hugolify-theme-icons module
