---
title: Image
description: Displays a responsive image with srcset, type, retina, lazy loading…
icon: card-image
---

## Available for

- {{< blank_link link="https://gohugo.io/content-management/image-processing/" text="Hugo image processing" >}}
- {{< blank_link link="https://uploadcare.com/" text="Uploadcare" >}}

## Usage

```go-html-template
{{ partial "commons/image" $image }}
```

## HTML rendered

```html
<picture>
  <source srcset="" type="image/webp" media="(min-width: 577px)" />
  <source srcset="" type="image/webp" media="(max-width: 576px)" />
  <source srcset="" type="image/jpg" media="(max-width: 576px)" />
  <img src="" alt="" width="" height="" />
</picture>
```

## Datas

```yml
image:
  src: ""
  alt: ""
lazy: true
class: ""
itemprop: ""
```

## Related link

- [Commons file — hugolify-theme](https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/image.html)
