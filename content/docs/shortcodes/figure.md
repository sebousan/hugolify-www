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

## CMS

- Hugolify admin {{< badge text="Available" state="success" >}}
- Decap CMS {{< badge text="Not available" state="danger" >}}
- Netlify CMS {{< badge text="Not available" state="danger" >}}
- Sveltia CMS {{< badge text="Not available" state="danger" >}}

## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/figure.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/editor/shortcodes/figure.js" text="Decap CMS file — hugolify-decap-cms" >}}
