---
title: Video
description: Displays a video element.
icon: camera-video
---

## Frontmatter

```yml
blocks:
  - type: video
    heading: {}
    video:
      mp4: ''
      webm: ''
      controls: false // boolean
      autoplay: false // boolean
      loop: false // boolean
      screenshot: false // boolean
      legend: '' // string
      transcription: '' // string
    grid: ''
    background: false
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/video/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/video.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/video.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_video.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/video.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
