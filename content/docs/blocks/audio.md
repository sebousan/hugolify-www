---
isIndex: false
title: Audio
description: Displays a audio element.
icon: soundwave
seo:
  title: Block Audio
---

## Frontmatter

```yml
blocks:
  - type: audio
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    audio: {}
      mp3: '' # url (optional)
      ogg: '' # url (optional)
      autoplay: false # boolean
      loop: false # boolean
      transcription: '' # string (optional)
    background: false # boolean (optional)
```

{{< button url="https://demo.hugolify.io/blocks/audio/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/audio.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_audio.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/audio.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/audio.yml" text="Hugolify admin file" >}}


## CMS availability

### Hugolify Admin

- [Hugolify Admin](/docs/admin/v1/)
  - [Decap CMS](/docs/admin/v1/cms/decap-cms/) {{< badge text="Available" state="success" >}}
  - [Netlify CMS](/docs/admin/v1/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
  - [Pages CMS](/docs/admin/v1/cms/pages-cms/) {{< badge text="Available" state="success" >}}
  - [Sveltia CMS](/docs/admin/v1/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}
