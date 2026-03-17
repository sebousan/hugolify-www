---
isIndex: false
title: Tina CMS
description: Open-source content management Git-based and API driven.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1765298678/tina-cropped_ozj5qm.svg
seo:
  description: Simplify your Tina CMS setup with Hugolify’s easy-to-use configuration builder.
status:
  text: WIP
  state: danger
---
{{< badge text="Not available in production" state="danger" >}}
{{< badge text="Maintened CMS" state="success" >}}
{{< badge text="Compatibility WIP" state="warning" >}}

{{< alert-block title="Warning: Not supported features" state="warning" >}}
- i18n structure
- Map Widget
- Shortcodes
{{< /alert-block >}}

## Setup

- [Hugolify-admin](../setup/)

## Enable Tina CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  cms: tinacms
```

## Build config file

Build a `tina/config.js` file with Hugo and NodeJS script.

```bash
yarn build:config:tinacms
```

## Documentation

- {{< blank_link link="https://tina.io/docs/" text="https://tina.io/docs/" >}}
