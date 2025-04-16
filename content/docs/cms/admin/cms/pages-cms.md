---
title: Pages CMS
description: Open-source content management Git-based (GitHub only).
image:
  src: /images/uploads/logo-pages-cms.png
---

{{< alert text="Currently: we work on Pages CMS compatibility" state="danger" >}}


## Setup

- [Hugolify-admin](../setup/)

## Enable Pages CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  cms: pagescms
```

## Build your `.pages.yml`

Build a `config.yml`

```console
yarn build
```

Then copy it

{{< alert text="`/public/admin/config.yml`" state="light" >}}

Create a `.pages.yml` to the root and commit it.


## Not supported featured

- Blocks
- Cloud assets
- i18n structure
- Map Widget


## Documention

- {{< blank_link link="https://pagescms.org/docs/" text="https://pagescms.org/docs/" >}}
