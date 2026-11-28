---
isIndex: false
title: Tina CMS
description: Open-source content management Git-based and API driven.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1765298678/tina-cropped_ozj5qm.svg
seo:
  description: Simplify your Tina CMS setup with Hugolify’s easy-to-use configuration builder.
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
- Shortcodes
{{< /alert-block >}}

## Enable Tina CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  cms: tinacms
```

## Build config file

Hugo writes the TinaCMS configuration to `/public/admin/config.js` on each build. TinaCMS reads it from `tina/config.js`: copy it there, and version it.

```bash
hugo && mkdir -p tina && cp public/admin/config.js tina/config.js
```

Copy it again after a change to the modules or to the `admin` params.

The file comes from the same generator as the other CMS: each section and taxonomy module brings its collection, each enabled block its form. Switching to Tina CMS keeps your content and your modules as they are.

## Supported features

Each collection option is written the way Tina CMS reads it, and left out where it has no equivalent.

| Feature | Tina CMS |
| --- | --- |
| [`enable`, `fields`, `blocks`, `path`](/docs/admin/collections/) | {{< badge text="Available" state="success" >}} |
| [`create`](/docs/admin/collections/#enable-or-disable-file-creation) | Written as `ui.allowedActions.create` |
| [Order of the collections](/docs/admin/collections/#order-and-group-collections) | {{< badge text="Available" state="success" >}} |
| [`filter`, `media_folder`, `slug`](/docs/admin/collections/) | {{< badge text="Not available" state="danger" >}} |
| [Sortable fields](/docs/admin/collections/#add-sortable-fields) | {{< badge text="Not available" state="danger" >}} |
| [Table view, summary](/docs/admin/collections/#add-summary) | {{< badge text="Not available" state="danger" >}} |
| [Nested collections](/docs/admin/collections/#nested-collections) | {{< badge text="Not available" state="danger" >}} |
| [Multilingual site](/docs/admin/setup/#multilingual-site) | {{< badge text="Not available" state="danger" >}} |

## Map and coordinates

Tina CMS has no map widget. The [Places](/docs/sections/places/) and [Real estates](/docs/sections/realestates/) sections, and the [Map block](/docs/blocks/map/), get a `coordinates` object with `lat` and `lng` fields instead of the location picker. The map itself is displayed the same.

## Lists

A [list](/docs/admin/widgets/list/) with a single `field` is taken as the only item of `fields`, so the list still stores objects.

## Raw markdown

The rich-text toolbar has its own raw markdown button, so the `minimal`, `modes` and `buttons` params of the markdown fields do not apply. See [Markdown editor](/docs/admin/fields/#markdown-editor).

## Documentation

- [Hugolify Admin setup](/docs/admin/setup/)
- {{< blank_link link="https://tina.io/docs/" text="Tina CMS documentation" >}}
- {{< blank_link link="https://github.com/tinacms/tinacms" text="Tina CMS repository" >}}
