---
title: Migration from v1
description: Compatibility and breaking changes, admin v1 to v2
weight: 2
icon: arrow-up-circle
seo:
  title: Migration from Hugolify Admin v1 to v2
---

{{< alert-block title="Overview" state="info" >}}
The admin and the theme are versioned together: a v2 project runs **hugolify-admin/v2** with **hugolify-theme/v2**. You can move the theme first and keep admin v1 for a while, but admin v2 does not work against the theme v1.

This page covers the admin alone. For the modules, the styling layer and PostCSS, see the [project migration guide](/docs/getting-started/migration/).
{{< /alert-block >}}

## Compatibility

Pair the majors: a v1 project runs hugolify-admin v1 with hugolify-theme v1, a v2 project runs both in v2. One off-pair combination degrades gracefully, the other does not work at all.

| | hugolify-theme v1 | hugolify-theme v2 |
| --- | --- | --- |
| hugolify-admin v1 | {{< badge text="Supported" state="success" >}} | {{< badge text="Partially supported" state="warning" >}} |
| hugolify-admin v2 | {{< badge text="Not supported" state="danger" >}} | {{< badge text="Supported" state="success" >}} |

### admin v1 on theme v2 — partial

The theme resolves a block's appearance through `func/GetBlockUI`, which reads the parameters from the root of the block *and* accepts a nested `ui` object as an override, with a fallback mapping the legacy `background` flag to the `bg` theme. Front matter written by admin v1 is therefore understood, and pages render as intended.

What you lose is reach, not correctness: admin v1 has no field for `ratio` or `scrollsnap`, so those two theme v2 controls cannot be set from the CMS. Every other control — `column`, `align`, `grid`, `layout`, `offset`, `theme` — comes through.

Useful as a transition, when you want to move the theme first and the admin later.

### admin v2 on theme v1 — no

hugolify-theme v1 has no equivalent resolver and never reads `ui`, while admin v2 writes the appearance parameters there only.

{{< alert-block title="This one fails silently" state="warning" >}}
Nothing errors. The values are written where the theme is not reading, so blocks render with their default appearance and every control set from the CMS is quietly ignored.
{{< /alert-block >}}

## Breaking changes

| | v1 | v2 |
| --- | --- | --- |
| Module path | `hugolify-admin` | `hugolify-admin/v2` |
| hugolify-theme | v1 or v2 | v2 |
| Weight widget | select (10, 20, 30…) | number input (`min: 1`, integer) |
| Background colour field | `background-color.yml` | `background_color.yml` |
| Draft field | `is_draft` | `draft` |
| UI fields | hardcoded in the module | configurable through params |
| Appearance in front matter | flat at the root of the block | grouped under `ui` |
| Sort menu partial of a custom collection type | `admin/collections/config/sortable.yml` | `admin/collections/config/sortable_fields.yml` |

If you relied on the stepped weight select, the previous behaviour is preserved in a separate field:

{{< alert text="`admin/fields/weight_select.yml`" state="light" >}}

## Update the module

The `/v2` suffix is required: Go modules treat a major version as a distinct module path, so `hugolify-admin` and `hugolify-admin/v2` are two different modules.

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-admin/v2
```

v2 is published as prerelease tags only, so Go will not pick it up on its own:

```bash
hugo mod get github.com/hugolify/hugolify-admin/v2@v2.0.0-24
hugo mod tidy
```

{{< blank_link link="https://github.com/hugolify/hugolify-admin/releases" text="See the latest prereleases" >}}

## Check your params

The params renamed or reshaped in v2 are the ones a project is most likely to have overridden.

| Param | Change |
| --- | --- |
| `admin.nested.depth` | Default drops from `2` to `1`, so the folder tree is now opt-in |
| `admin.media` | Gains a folder pair and a size limit per media type |
| `admin.fields.ui.fields` | Chooses which appearance controls the editor sees |
| `admin.files.<name>.fields` | Replaces the fields of one config file |
| `admin.collection_groups` | Orders the collections of every CMS, not just CloudCannon. Left undefined, pages and indexes come first and config last, where v1 listed them alphabetically |
| `admin.collections.<name>.sortable` | Replaced by [`sortable_fields`](../collections/#add-sortable-fields), a list instead of a string, which can set the default sort |
| `admin.collections.<name>.view` | Removed. Pages CMS builds its `view` from [`summary_fields`](../collections/#add-summary-fields), [`sortable_fields`](../collections/#add-sortable-fields) and [`nested`](../collections/#nested-collections), the options the other CMS read too |

The build warns about a `sortable` or a `view` left in the params, then ignores it.

{{< button url="../setup/" text="See the v2 params" >}}

## Collection options

{{< badge text="New in v2" state="success" >}}

A collection option has one name for every CMS, and Hugolify writes it the way each CMS reads it. See [Options by CMS](../collections/#options-by-cms).

### Rename the Sort menu

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
# v1
admin:
  collections:
    posts:
      sortable: "['date', 'title']"
```

```yml
# v2
admin:
  collections:
    posts:
      sortable_fields:
        - field: date
          default_sort: desc # optional: the list opens sorted by date
        - title
```

The Hugolify modules that set one ship `sortable_fields` from v2 on.

### Replace the Pages CMS view

| v1 | v2 |
| --- | --- |
| `view.fields` | `summary_fields` |
| `view.sort` | `sortable_fields` |
| `view.layout: tree` and `view.node` | `nested.depth` of 2 and up |

### Update a custom collection type

A collection file of the project, in `/layouts/partials/admin/collections/types/`, calls the partial of each option itself, unless it calls `admin/collections/types/_default.yml`. Rename `sortable.yml`, and add the partials of the new options it needs: `summary_fields.yml` for the table view, `thumbnail.yml` for the image of each entry, `exclude.yml` for Pages CMS:

```go-html-template
{{ partial "admin/collections/config/sortable_fields.yml" . }}
{{ partial "admin/collections/config/summary_fields.yml" . }}
{{ partial "admin/collections/config/thumbnail.yml" . }}
{{ partial "admin/collections/config/exclude.yml" . }}
```

See [Create a collection](../collections/#create-a-collection) for the full list.

The old partial name now fails the build: `partial "admin/collections/config/sortable.yml" not found`.

### What the generated config gains

Without a change to the params, the config of some CMS changes:

| CMS | Change |
| --- | --- |
| Sveltia CMS | `create: false` applies, so the *indexes* collection no longer offers a **New** button. A collection with `featured_image` shows it beside each entry, see [`thumbnail`](../collections/#add-thumbnail) |
| Static CMS | The list is no longer sorted by commit date by default: set `default_sort` on a field. `summary`, `create` and `preview` are written. View filters and groups take the object form Static CMS requires, where v1 wrote a list it rejected |
| Netlify CMS | Each collection gets its own `summary`, sortable fields and view filters, where v1 repeated those of the first collection. View groups are written as groups, not as filters. `create` and `preview` are written |
| Pages CMS | A nested collection opens in the tree layout. `create: false` applies, as `operations.create`. [`exclude`](../cms/pages-cms/#exclude-files) is written, where v1 dropped it |
| Tina | `create: false` applies, where v1 wrote it in a `ui` key that the filename replaced |
| CloudCannon | The card of an entry shows its `summary` and its `thumbnail`, where v1 always showed the title and `image.src`. A list or an object with a summary previews it as a template, `{title}`, where v1 wrote an entry CloudCannon could not read |
| Decap CMS, Sveltia CMS | A boolean view filter pattern stays a boolean, where v1 turned it into the text `"true"` |
| Every CMS | A collection without a file of its own reads `create` and `preview` from the params, where v1 forced `create: true` |

## What has not changed

- Collection, block and field overrides through `admin.collections`, `admin.blocks` and `admin.fields`
- Custom collections, blocks, fields and shortcodes declared in `/layouts/partials/admin/`
- The widget partials and their parameters, apart from the new [compute](../widgets/compute/) widget

{{< button url="../overview/" text="See what v2 changes" >}}
