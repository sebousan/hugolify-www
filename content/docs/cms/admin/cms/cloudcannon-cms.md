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

## Setup

- [Hugolify-admin](../setup/)


## Enable CloudCannon

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  cms: cloudcannon
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

## Documention

- {{< blank_link link="https://cloudcannon.com/documentation/" text="https://cloudcannon.com/documentation/" >}}
