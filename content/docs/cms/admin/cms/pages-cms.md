---
isIndex: false
title: Pages CMS
description: Open-source content management Git-based (GitHub only).
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758126024/logo-pages-cms_f6i6vw.svg
---
{{< badge text="Available in production" state="success" >}}
{{< badge text="Maintened CMS" state="success" >}}
{{< badge text="Compatibility WIP" state="warning" >}}

## Setup

- [Hugolify-admin](../setup/)

## Enable Pages CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  cms: pagescms
```

## Build your .pages.yml

Build a config.yml file

```bash
yarn build
```

Then copy it

{{< alert text="`/public/admin/config.yml`" state="light" >}}

Create a .pages.yml file to the root, paste config content and commit it.

{{< alert text="`/.pages.yml`" state="light" >}}


## Not supported featured

- Cloud assets
- i18n structure
- Map Widget
- Nested pages

## Documention

- {{< blank_link link="https://pagescms.org/docs/" text="https://pagescms.org/docs/" >}}
