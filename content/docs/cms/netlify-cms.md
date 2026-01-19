---
title: Netlify CMS
description: Open-source content management Git-based.
weight: 3
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758126072/logo-netlify-cms_yrrarb.svg
status:
  text: Deprecated CMS
  state: warning
---
{{< badge text="Archived repository" state="warning" >}} 

{{< alert-block title="Warning" state="danger" >}}
Now, you need to use [Hugolify-admin](https://www.hugolify.io/docs/cms/admin/) with Netlify CMS.\
[Check the setup here](https://www.hugolify.io/docs/cms/admin/cms/netlify-cms/).
{{< /alert-block >}}

## Setup

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-netlify-cms
```

## Documentation

- {{< blank_link link="https://github.com/netlify/netlify-cms-legacy" text="https://github.com/netlify/netlify-cms-legacy" >}} {{< badge text="Deprecated CMS" state="warning" >}}

## Module

- {{< blank_link link="https://github.com/hugolify/hugolify-netlify-cms" text="Hugolify Netlify CMS" >}} {{< badge text="Archived repository" state="warning" >}}
