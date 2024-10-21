---
title: Setup
description: Install module and config
weight: 1
icon: sliders
---

{{< alert text="**Beta, still under development**" state="danger" >}}


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
  cms: decapcms # [decapcms, sveltiacms, staticcms, netlifycms] 
  config:
    id: true # use ID for dir/name files and relation 
  i18n:
    default_locale: en # master lang for an i18n website 
    locales: false # "[en,fr]" for an i18n website
  media:
    max_file_size: 700000 # 700ko
    video_max_file_size: 5000000 # 5Mo
  nested:
    depth: 10 # set minimum 2
  netlify:
    identity: true # Add Netlify identity script
  preview: false
```

## CMS language

{{< alert text="`/config/_default/hugo.yaml`" state="light" >}}

Language set with **defaultContentLanguage** from Hugo config.

## Repository

{{< blank_link link="https://github.com/hugolify/hugolify-admin" text="Hugolify Admin" >}}