---
title: Setup
description: Install module and config
weight: 1
icon: sliders
---

## Install

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-admin
```

## CMS params

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
# Default params
admin:
  branch: main # optional, default "main"
  cms: decapcms # optional, [decapcms, sveltiacms, staticcms, netlifycms] 
  config:
    id: false # use ID for dir/name files and relation
  git: git-gateway # optional, default "git-gateway" but not supported for Sveltia CMS
  i18n:
    default_locale: en # master lang for an i18n website 
    locales: false # "[en,fr]" for an i18n website
  media:
    # Optional cloud settings [start], not supported for Sveltia CMS
    cloud:
      name: cloudinary # or uploadcare
      cloud_name: # your cloudinary cloud name
      api_key: # your cloudinary api key
      publicKey: # your uploadcare public api key
    # Optional cloud settings [end] 
    max_file_size: 700000 # 700ko
    specific_filter: false # set true to add a selected filter by image
    video_max_file_size: 5000000 # 5Mo
  nested:
    depth: 2 # optional, set minimum 2, not supported for Sveltia CMS
  netlify:
    identity: true # Add Netlify identity script
  preview: false
  publish_mode: simple # optional, default "simple"
  repo: # optional

```

## CMS language

{{< alert text="`/config/_default/hugo.yaml`" state="light" >}}

Language set with **defaultContentLanguage** from Hugo config.

## Repository

{{< blank_link link="https://github.com/hugolify/hugolify-admin" text="Hugolify Admin" >}}
