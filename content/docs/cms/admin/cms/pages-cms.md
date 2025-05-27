---
title: Pages CMS
description: Open-source content management Git-based (GitHub only).
image:
  src: /images/uploads/logo-pages-cms.svg
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


## Beta supported
- Blocks [(Not yet in production)](https://github.com/pages-cms/pages-cms/issues/200#issuecomment-2811807542)


## Not supported featured

- Cloud assets
- i18n structure
- Map Widget
- Nested pages

## Documention

- {{< blank_link link="https://pagescms.org/docs/" text="https://pagescms.org/docs/" >}}
