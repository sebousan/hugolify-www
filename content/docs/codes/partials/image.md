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

A lazy image, in responsive mode:

```html
<picture>
  <img src="" srcset=" 320w,  640w,  960w" sizes="auto" alt="" width="" height="" loading="lazy" decoding="async" />
</picture>
```

An eager image or one with a distinct mobile source, in default mode:

```html
<picture>
  <source srcset="" type="image/webp" media="(min-width: 577px)" />
  <source srcset="" type="image/webp" media="(max-width: 576px)" />
  <source srcset=",  2x,  3x" type="image/jpg" media="(max-width: 576px)" />
  <img src="" alt="" width="" height="" fetchpriority="high" />
</picture>
```

## Datas

```yml
src: "" // Image’s URL, required
src_mobile: "" // Another image for mobile (art direction)
alt: "" // Alternative text for a11y
desktop: "" // width x height of desktop image, required
mobile: "" // width x height of mobile image
crop: "" // Crop anchor, e.g. "center", "smart_faces" on Uploadcare, "g_auto:face" on Cloudinary
lazy: true // set false if above the fold, default true
sizes: "" // sizes attribute, e.g. "100vw, 50vw, 33vw" per breakpoint, turns the responsive mode on
widths: "" // srcset widths, e.g. "400, 800, 1200", turns the responsive mode on
class: "" // class to <img>
```

## Modes

Each provider has two ways of serving an image, picked by the partial:

- **Responsive**: one `srcset` of widths with `sizes`, the browser picks the file for the rendered width and the screen density. Used when `sizes` or `widths` is given, and by default for a lazy image.
- **Default**: fixed sizes from `desktop` and `mobile`, retina as 2x and 3x variants, the mobile one served under 576 pixels. Used for an eager image (`lazy: false`, e.g. the hero), a distinct mobile source (`src_mobile`), or a small image whose width is below `image.responsive_min_width` (320 by default).

An SVG is served as it is, with its dimensions, in both modes.

## Available for

The provider is told by the URL of the image:

- {{< blank_link link="https://gohugo.io/content-management/image-processing/" text="Hugo image processing" >}}, for the images of the repository
- {{< blank_link link="https://cloudinary.com/" text="Cloudinary" >}}
- {{< blank_link link="https://uploadcare.com/" text="Uploadcare" >}}
- {{< blank_link link="https://unsplash.com/" text="Unsplash" >}}, for the stock photos inserted by Sveltia CMS, resized on the fly by {{< blank_link link="https://docs.imgix.com/apis/rendering" text="Imgix" >}}
- {{< blank_link link="https://picsum.photos/" text="Lorem Picsum" >}}, for the stock photos inserted by Sveltia CMS, sized through their URL and always cropped around the center

{{< button url="../../../admin/v2/cms/sveltia-cms/#stock-photos" text="See stock photos in Sveltia CMS" >}}

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/image.html" text="Commons file — hugolify-theme" >}}
  - {{< blank_link link="https://github.com/Hugolify/hugolify-theme/tree/main/layouts/partials/commons/image/responsive" text="Responsive mode, a file per provider — hugolify-theme" >}}
  - {{< blank_link link="https://github.com/Hugolify/hugolify-theme/tree/main/layouts/partials/commons/image/default" text="Default mode, a file per provider — hugolify-theme" >}}
