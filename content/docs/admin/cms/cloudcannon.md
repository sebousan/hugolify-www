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
  state: secondary
---
{{< badge text="Not available in production" state="danger" >}}
{{< badge text="Maintained CMS" state="success" >}}
{{< badge text="Beta" state="secondary" >}}

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

The script builds the site, copies `/public/admin/config.yml` to `cloudcannon.config.yml`, and writes one archetype per collection in `/archetypes/`, from `/public/admin/config/archetypes.json`, so a new entry starts with the fields of its collection.

It ships with the {{< blank_link link="https://github.com/hugolify/hugolify-template" text="GitHub template" >}}. Elsewhere, copy the `scripts` folder of {{< blank_link link="https://github.com/hugolify/hugolify-admin/tree/v2/scripts" text="hugolify-admin" >}} to your project and add the command to `package.json`:

```json
"scripts": {
  "build:config:cloudcannon": "node scripts/build-config-cloudcannon.js"
}
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

{{< button url="/docs/admin/collections/#order-and-group-collections" text="See order and group collections" >}}

## Card preview collections

The card of an entry reads the options the other CMS share:

| Card | Option | Default |
| --- | --- | --- |
| `text` | [`summary`](/docs/admin/collections/#add-summary), written as a CloudCannon template | `title` |
| `subtext` | None | `description` |
| `gallery.image` | [`thumbnail`](/docs/admin/collections/#add-thumbnail) | `image.src` |

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

- [Hugolify Admin setup](/docs/admin/setup/)
- {{< blank_link link="https://cloudcannon.com/documentation/" text="CloudCannon documentation" >}}
