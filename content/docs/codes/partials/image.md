---
title: Image
description: Displays a responsive image with srcset, type, retina, lazy loading…
icon: card-image
---
## Example

### Usage

```go-html-template
{{ $args := (dict
        "src" $src_image
        "alt" $alt_text
        "desktop" $desktop_size
        "mobile" $mobile_size
        ) }}
{{ partial "commons/image" $args }}
```

### HTML rendered

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
src: "" // Image’s URL, required
alt: "" // Alternative text for a11y
desktop: "" // width x height of desktop image, required
mobile: "" // width x height of mobile image
lazy: true // set false if above the fold, default true
class: "" // class to <img>
itemprop: "" // add a Schema.org information
```

## Available for

- {{< blank_link link="https://gohugo.io/content-management/image-processing/" text="Hugo image processing" >}}
- {{< blank_link link="https://uploadcare.com/" text="Uploadcare" >}}


## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/image.html" text="Commons file — hugolify-theme" >}}
