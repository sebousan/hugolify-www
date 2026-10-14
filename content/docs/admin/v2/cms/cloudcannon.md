---
isIndex: false
title: CloudCannon
description: Content management Git-based.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1761313828/cloudcannon_yvmrjo.svg
seo:
  description: Simplify your CloudCannon CMS setup with Hugolify’s easy-to-use configuration builder.
status:
  text: Beta
  state: info
---
{{< badge text="Not available in production" state="danger" >}}
{{< badge text="Maintened CMS" state="success" >}}
{{< badge text="Beta" state="info" >}}

{{< alert-block title="Warning: Not supported features" state="warning" >}}
- i18n structure
- Map Widget
{{< /alert-block >}}

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

Each group needs a `heading`, and `'*'` stands for every enabled collection that no group names. The same setting orders the collections of the other CMS.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  collection_groups:
    - heading: Posts
      collections:
        - posts
        - posts_categories
        - posts_tags
    - heading: Other
      collections: ['*']
```

{{< button url="../../collections/#order-and-group-collections" text="See order and group collections" >}}

## Card preview collections

The card of an entry reads the options the other CMS share:

| Card | Option | Default |
| --- | --- | --- |
| `text` | [`summary`](../../collections/#add-summary), written as a CloudCannon template | `title` |
| `subtext` | — | `description` |
| `gallery.image` | [`thumbnail`](../../collections/#add-thumbnail) | `image.src` |

`card_preview` replaces any part of the card, in the [CloudCannon preview](https://cloudcannon.com/documentation/developer-reference/configuration-file/types/preview/) format. It is the only way to set the `subtext`, the `metadata` or the `icon`, which no other CMS has:

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

- [Hugolify Admin setup](../setup/)
- {{< blank_link link="https://cloudcannon.com/documentation/" text="CloudCannon documentation" >}}
