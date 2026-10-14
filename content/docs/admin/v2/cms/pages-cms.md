---
isIndex: false
title: Pages CMS
description: Open-source content management Git-based (GitHub only).
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758126024/logo-pages-cms_f6i6vw.svg
seo:
  description: Simplify your Pages CMS setup with Hugolify’s easy-to-use configuration builder.
---
{{< badge text="Available in production" state="success" >}}
{{< badge text="Maintened CMS" state="success" >}}
{{< badge text="Compatibility WIP" state="warning" >}}

{{< alert-block title="Warning: Not supported features" state="warning" >}}
- Cloud assets
- i18n structure
- Map Widget
- Parent field of nested pages
{{< /alert-block >}}

## Enable Pages CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  cms: pagescms
```

## Build config file

Build a `.pages.yml` file with Hugo and NodeJS script. This file needs to be versioned.

```bash
yarn build:config:pagescms
```

## Enable/disable media

With media from Pages CMS, you can configure how to handle files you want to upload, attach to or embed in your content.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  media:
    audio_folders: true
    pdf_folders: true
    video_folders: true
```

## Settings page

Hugolify hides the Pages CMS settings page, so editors cannot change `.pages.yml` from the interface. Show it again with:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  settings:
    hide: false
```

## Entry list

{{< badge text="New in v2" state="success" >}}

Hugolify builds the `view` of each collection from the options the other CMS read too. There is no `view` param any more.

| Option | `view` key |
| --- | --- |
| [`summary_fields`](../../collections/#add-summary-fields) | `fields`, with `summary` written `title` |
| [`sortable_fields`](../../collections/#add-sortable-fields) | `sort`, and `default` for the field sorting by default |
| [`nested`](../../collections/#nested-collections) of 2 and up | `layout: tree`, each `_index.md` standing for its folder |

```yaml
admin:
  collections:
    posts:
      summary_fields: [title, date, draft]
      sortable_fields:
        - field: date
          default_sort: desc
        - title
```

## Exclude files

Pages CMS cannot filter entries on a field value, as [`filter`](../../collections/#add-filter) does elsewhere. Leave files out of a collection by name instead:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  collections:
    posts:
      exclude: [_index.md]
```

The name is compared at every level of the folder: in a [nested collection](../../collections/#nested-collections), whose pages are all `_index.md` files, excluding it would hide every page.

## Raw markdown

The rich-text editor has its own *Editor / Source* switch, so the `minimal`, `modes` and `buttons` params of the markdown fields do not apply. See [Markdown editor](../../fields/#markdown-editor).

## Documentation

- [Hugolify Admin setup](../setup/)
- {{< blank_link link="https://pagescms.org/docs/" text="Pages CMS documentation" >}}
- {{< blank_link link="https://github.com/pages-cms/pages-cms" text="Pages CMS repository" >}}

## Tutorial

- [How to create a Website with Hugo and Pages CMS using Hugolify](/tutorials/how-to-create-a-website-with-hugo-and-pages-cms-using-hugolify/)
