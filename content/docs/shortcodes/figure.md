---
title: Figure
description: Displays a responsive image with legend and credit.
icon: image
---

## Example 1

### Markdown usage

```go-html-template
{{</* figure src="https://res.cloudinary.com/uncinq/image/upload/v1758204688/test_pfae0v.jpg" alt="" legend="Lorem ipsum" credit="Unsplash" */>}}
```

### HTML rendered

```html
<figure>
  <picture>
    <source srcset="" type="image/webp" media="(min-width: 577px)" />
    <source srcset="" type="image/webp" media="(max-width: 576px)" />
    <source srcset="" type="image/jpg" media="(max-width: 576px)" />
    <img src="https://res.cloudinary.com/uncinq/image/upload/v1758204688/test_pfae0v.jpg" alt="" width="" loading="lazy" height="" decoding="async" />
  </picture>
  <figcaption>
    <p>Lorem ipsum</p>
    <p class="credit">Unsplash</p>
  </figcaption>
</figure>
```

### Visual renderer

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1758204688/test_pfae0v.jpg" alt="" legend="Lorem ipsum" credit="Unsplash" >}}

## Example 2

### Markdown usage

```go-html-template
{{</* figure src="https://res.cloudinary.com/uncinq/image/upload/v1758126305/screenshot-hugolify-decapcms-home_ynatqv.png" alt="Screensot of Hugolify admin with Decap CMS" legend="Screenshot" screenshot="true" */>}}
```
### HTML rendered

```html
<div class="screenshot">
  <span></span>
  <figure>
    <picture>
      <source srcset="" type="image/webp" media="(min-width: 577px)" />
      <source srcset="" type="image/webp" media="(max-width: 576px)" />
      <source srcset="" type="image/jpg" media="(max-width: 576px)" />
      <img src="https://res.cloudinary.com/uncinq/image/upload/v1758126305/screenshot-hugolify-decapcms-home_ynatqv.png" alt="Screensot of Hugolify admin with Decap CMS" width="" loading="lazy" height="" decoding="async" />
    </picture>
    <figcaption>
      <p>Screenshot</p>
    </figcaption>
  </figure>
</div>
```


### Visual renderer

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1758126305/screenshot-hugolify-decapcms-home_ynatqv.png" alt="Screensot of Hugolify admin with Decap CMS" legend="Screenshot" screenshot="true" >}}

## Datas

```yaml
src: "" # image
alt: "" # string
legend: "" # string (or caption)
credit: "" # markdown
screenshot: false # boolean (set true if you want add a fake browser around your picture and linear filter compression)
class: "" # string
link: "" # string
target: "" # string
rel: "" # string
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

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_shortcodes/figure.html" text="Shortcode file (hugolify-theme)" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/shortcodes/fields/figure.html" text="Shortcode fields file (hugolify-admin)" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/editor/shortcodes/figure.js" text="Decap CMS file (hugolify-decap-cms)" >}}
