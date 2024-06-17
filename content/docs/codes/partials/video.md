---
title: Video
description: Displays a video…
icon: camera-video
---
## Example

### Usage

```go-html-template
{{ $args := (dict
        "mp4" $src_mp4_video
        "webm" $src_webm_video
        "controls" true
        ) }}
{{ partial "commons/video" $args }}
```

### HTML rendered

```html
<video class="js-video is-lazy" controls muted playsinline>
  <source data-src="" type="video/webm" />
  <source data-src="" type="video/mp4" />
</video>
```

## Datas

```yml
mp4: "" // MP4 video’s URL, required
webm: "" // WEBM video’s URL, required
autoplay: false // to set autoplay video or not
controls: false // to add native controls video
loop: false // to set loop video or not
```

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/video.html" text="Commons file — hugolify-theme" >}}
