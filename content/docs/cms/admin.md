---
title: Hugolify Admin
description: Brings together multiple CMSs and facilitates customization with Hugo Params
weight: 1
image:
  src: /images/uploads/logo-hugolify-picto.svg
---

{{< alert text="**Beta, still under development**" state="danger" >}}


## Setup

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-admin
```

## Params

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
# Default params
admin:
  cms: decapcms # [decapcms, sveltiacms, staticcms, netlifycms] 
  config:
    id: true # use ID for dir/name files and relation 
  i18n:
    default_locale: en # master lang for an i18n website 
    locales: false # "[en,fr]" for an i18n website
  locale: en # CMS lang
  media:
    max_file_size: 700000 # 700ko
    video_max_file_size: 5000000 # 5Mo
  nested:
    depth: 10 # set minimum 2
  netlify:
    identity: true # Add Netlify identity script
  preview: false
```

## Collections

Collections are automatically added based on Hugolify modules added ([Sections](/docs/sections/)) or ([Taxonomies](/docs/taxonomies/)), but you can hide a collection if needed.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    indexes: true
    pages: true
    # e.g. set to false to disable posts even if you load hugolify-theme-posts
    posts: false 
```

## Blocks

To disable or enable blocks for your cms, remove or add his name

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
# All blocks available https://www.hugolify.io/docs/blocks/
admin:
  blocks:
    available:
      - alert
      - cta
      - editorial
      - faq
      - figure
      - form
      - information
      - images
      - latest
      - paragraph
      - quote
      - selected
      - title
```

## Module
- {{< blank_link link="https://github.com/hugolify/hugolify-admin" text="Hugolify Admin" >}}