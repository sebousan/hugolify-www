---
title: PurgeCSS
description: To remove all unused CSS from Bootstrap and Hugolify, we use PurgeCSS to clean it.
weight: 5
icon: filetype-css
---

## Setup

{{< alert text="`/config/default/hugo.yaml`" state="light" >}}

```yml
build:
  buildStats:
    disableClasses: false
    disableIDs: true
    disableTags: false
    enable: true
```

## Configuration

* [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/css/#postcss-and-purgecss)

## Documentations

- {{< blank_link link="https://gohugo.io/hugo-pipes/postprocess/" text="https://gohugo.io/hugo-pipes/postprocess/" >}}
- {{< blank_link link="https://purgecss.com/guides/hugo.html" text="https://purgecss.com/guides/hugo.html" >}}
