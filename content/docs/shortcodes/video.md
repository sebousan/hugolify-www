---
title: Video
description: Displays a video with legend and credit.
icon: camera-video
---

## Example

### Markdown usage

```go-html-template
{{</* video 
    mp4="/videos/lawyerify-international.mp4"
    webm="/videos/lawyerify-international.webm"
    controls=true
    screenshot=true
    legend="Lorem ipsum"
    credit="Lawyerify" */>}}
```

### HTML rendered

```html
<figure>
  <video muted playsinline controls> 
    <source src="/videos/lawyerify-international.webm" type="video/webm">
    <source src="/videos/lawyerify-international.mp4" type="video/mp4">
  </video> 
  <figcaption>
    <p>Lorem ipsum</p>
    <p class="credit">Lawyerify</p>
  </figcaption>
</figure>
```

### Visual renderer

{{< video mp4="/videos/lawyerify-international.mp4" webm="/videos/lawyerify-international.webm" controls=true screenshot=true legend="Lorem ipsum" credit="Lawyerify" >}}


## Datas

```yaml
mp4: "" # string
webm: "" # string
controls: false # boolean
autoplay: false # boolean
loop: false # boolean
legend: "" # string
credit: "" # markdown
screenshot: false # boolean (set true if you want add a fake browser around your picture)
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

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/video.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/shortcodes/fields/video.html" text="Shortcode fields file — hugolify-admin" >}}
