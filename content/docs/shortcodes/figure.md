---
title: Figure
description: Displays a responsive image with legend and credit.
icon: image
---

## Example 1

### Markdown usage

```go-html-template
{{</* figure src="/images/uploads/test.jpg" alt="" legend="Lorem ipsum" credit="Unsplash" */>}}
```

### HTML rendered

```html
<figure>
  <picture>
    <source srcset="" type="image/webp" media="(min-width: 577px)" />
    <source srcset="" type="image/webp" media="(max-width: 576px)" />
    <source srcset="" type="image/jpg" media="(max-width: 576px)" />
    <img src="" alt="" width="" loading="lazy" height="" decoding="async" />
  </picture>
  <figcaption>
    <p>Lorem ipsum</p>
    <p class="credit">Unsplash</p>
  </figcaption>
</figure>
```

### Visual renderer

{{< figure src="/images/uploads/test.jpg" alt="" legend="Lorem ipsum" credit="Unsplash" >}}

## Example 2

### Markdown usage

```go-html-template
{{</* figure src="/images/uploads/admin-home.png" alt="" legend="Screenshot" screenshot=true */>}}
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
      <img src="" alt="" width="" loading="lazy" height="" decoding="async" />
    </picture>
    <figcaption>
      <p>Screenshot</p>
    </figcaption>
  </figure>
</div>
```


### Visual renderer

{{< figure src="/images/uploads/admin-home.png" alt="" legend="Screenshot" screenshot=true >}}


## Datas

```yml
src: ""
alt: ""
legend: ""
credit: "" // Markdown accept
screenshot: false // Set true you want add fake browser around your picture (and linear filter compression)
```

## Decap CMS

{{< alert text="Available" state="success" >}}

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/figure.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/editor/shortcodes/figure.js" text="Decap CMS file — hugolify-decap-cms" >}}
