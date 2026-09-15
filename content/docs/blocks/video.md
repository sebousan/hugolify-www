---
title: Video
description: Displays a video element.
icon: camera-video
seo:
  title: Block Video
---

## Frontmatter

```yml
blocks:
  - type: video
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    video: {}
      mp4: '' # video url (optional)
      webm: '' # video url (optional)
      mp4_mobile: '' # video url, a lighter source for phones (optional)
      webm_mobile: '' # video url (optional)
      poster: '' # image url (optional)
      controls: false # boolean (optional)
      autoplay: false # boolean (optional)
      loop: false # boolean (optional)
      muted: true # boolean, muted unless explicitly set to false (optional)
      screenshot: false # boolean, frames the video in a fake browser (optional)
      legend: '' # string (optional)
      credit: '' # markdown (optional)
      transcription: '' # markdown (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
```

An autoplaying video with no `controls` gets a play/pause button of its own, which is what WCAG asks for. The sources are lazy-loaded, and a `*_mobile` source is swapped in on small screens.

See [Common keys](/docs/blocks/) for `heading`, `footing` and the full `ui` reference.

{{< button url="https://demo.hugolify.io/blocks/video/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/video.html" text="HTML file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_video.sass" text="SASS file — hugolify-theme-bootstrap" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-video.css" text="CSS file — hugolify-theme-design-system" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/js/components/video.js" text="Javascript file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/video.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/partials/admin/blocks/types/video.yml" text="Hugolify admin file" >}}

## CMS availability

| CMS | Hugolify Admin v2 |
| --- | --- |
| [CloudCannon](/docs/admin/v1/cms/cloudcannon/) | {{< badge text="Available" state="success" >}} |
| [Decap CMS](/docs/admin/v1/cms/decap-cms/) | {{< badge text="Available" state="success" >}} |
| [Netlify CMS](/docs/admin/v1/cms/netlify-cms/) | {{< badge text="Available" state="success" >}} |
| [Pages CMS](/docs/admin/v1/cms/pages-cms/) | {{< badge text="Available" state="success" >}} |
| [Static CMS](/docs/admin/v1/cms/static-cms/) | {{< badge text="Available" state="success" >}} |
| [Sveltia CMS](/docs/admin/v1/cms/sveltia-cms/) | {{< badge text="Available" state="success" >}} |
| [Tina CMS](/docs/admin/v1/cms/tina-cms/) | {{< badge text="Available" state="success" >}} |
