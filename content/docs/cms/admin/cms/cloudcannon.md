---
isIndex: false
title: CloudCannon
description: Content management Git-based.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1761313828/cloudcannon_yvmrjo.svg
seo:
  description: Simplify your CloudCannon CMS setup with Hugolify’s easy-to-use configuration builder.
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

## Enable CloudCannon

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  cms: cloudcannon
```

## Build config file

Build a `cloudcannon.config.yml` file with Hugo and NodeJS script. This file needs to be versioned.

```bash
yarn build:config:cloudcannon
```

## Group collections

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  collection_groups:
    - heading: Posts
      collections:
        - posts
        - posts_categories
        - posts_tags
```

## Card preview collections

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  collections:
    persons:
      card_preview:
        subtext:
          - key: persons_statutes
          - key: persons_expertises
          - key: description
```

## Documentation

- {{< blank_link link="https://cloudcannon.com/documentation/" text="https://cloudcannon.com/documentation/" >}}
