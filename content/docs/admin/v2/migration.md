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

{{< button url="../setup/" text="See the v2 params" >}}

## What has not changed

- Collection, block and field overrides through `admin.collections`, `admin.blocks` and `admin.fields`
- Custom collections, blocks, fields and shortcodes declared in `/layouts/partials/admin/`
- The widget partials and their parameters, apart from the new [compute](../widgets/compute/) widget

{{< button url="../overview/" text="See what v2 changes" >}}
