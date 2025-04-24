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

```yml
mp4: ""
webm: ""
controls: false // boolean
autoplay: false // boolean
loop: false // boolean
legend: "" // string
credit: "" // markdown
screenshot: false // Set true you want add fake browser around your picture
```

## CMS

- Hugolify admin {{< badge text="Not available" state="danger" >}}
- Decap CMS {{< badge text="Not available" state="danger" >}}

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/video.html" text="Shortcode file — hugolify-theme" >}}
