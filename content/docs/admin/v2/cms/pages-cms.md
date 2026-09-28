---
isIndex: false
title: Pages CMS
description: Open-source content management Git-based (GitHub only).
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758126024/logo-pages-cms_f6i6vw.svg
seo:
  description: Simplify your Pages CMS setup with Hugolify’s easy-to-use configuration builder.
---
{{< badge text="Available in production" state="success" >}}
{{< badge text="Maintened CMS" state="success" >}}
{{< badge text="Compatibility WIP" state="warning" >}}

{{< alert-block title="Warning: Not supported features" state="warning" >}}
- Cloud assets
- i18n structure
- Map Widget
- Nested pages
{{< /alert-block >}}

## Enable Pages CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  cms: pagescms
```

## Build config file

Build a `.pages.yml` file with Hugo and NodeJS script. This file needs to be versioned.

```bash
yarn build:config:pagescms
```

## Enable/disable media

With media from Pages CMS, you can configure how to handle files you want to upload, attach to or embed in your content.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  media:
    audio_folders: true
    pdf_folders: true
    video_folders: true
```

## Documentation

- [Hugolify Admin setup](../setup/)
- {{< blank_link link="https://pagescms.org/docs/" text="Pages CMS documentation" >}}
- {{< blank_link link="https://github.com/pages-cms/pages-cms" text="Pages CMS repository" >}}

## Tutorial

- [How to create a Website with Hugo and Pages CMS using Hugolify](/tutorials/how-to-create-a-website-with-hugo-and-pages-cms-using-hugolify/)
