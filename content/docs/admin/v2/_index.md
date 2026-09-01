---
isIndex: false
title: Prerelease
url: /docs/admin/v2/
seo:
  title: Hugolify Admin v2
description: Prerelease version (v2) of Hugolify Admin
weight: 2
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758204585/logo-hugolify-picto_i6dlrq.svg
params:
  large: true
status:
  text: V2
  state: warning
---

{{< alert-block title="Prerelease" state="warning" >}}
v2 is published as prerelease tags only — the latest is **v2.0.0-11**. Go resolves stable versions by default, so `hugo mod get` will keep you on **v1** unless you pin a prerelease explicitly.

v2 is built for **hugolify-theme v2**. There is no hard dependency — the module is self-contained and will build against v1 — but it writes the layout and appearance parameters inside a `ui` object, and hugolify-theme v1 never reads that object. Every appearance control set from the CMS would be silently ignored. See [Compatibility](#compatibility).
{{< /alert-block >}}

{{< button url="/docs/admin/v1/" text="See the current stable version (v1)" >}}

## Install

```yml
# /config/_default/module.yaml
imports:
- path: github.com/hugolify/hugolify-theme/v2
- path: github.com/hugolify/hugolify-theme-bootstrap
- path: github.com/hugolify/hugolify-admin/v2
```

```bash
hugo mod get github.com/hugolify/hugolify-admin/v2@v2.0.0-11
```

Replace the tag with the most recent one — prereleases are published often and Go will not pick them up on its own.

{{< blank_link link="https://github.com/hugolify/hugolify-admin/releases" text="See the latest prereleases" >}}

## Compatibility

The two modules are not interchangeable in both directions.

| | hugolify-theme v1 | hugolify-theme v2 |
| --- | --- | --- |
| hugolify-admin v1 | Supported | Supported |
| hugolify-admin v2 | **Not supported** | Supported |

**hugolify-admin v1 with hugolify-theme v2 works.** The theme resolves a block's appearance through `func/GetBlockUI`, which reads the parameters from the root of the block *and* accepts a nested `ui` object as an override, with a fallback mapping the legacy `background` flag to the `bg` theme. Front matter written by admin v1 is therefore understood as-is. Only `ratio` and `scrollsnap` stay out of reach, because admin v1 has no field for them — a missing control, not a broken page.

That makes a staged migration possible: move to the theme v2 first, keep publishing with admin v1, and switch the admin afterwards.

**The reverse does not hold.** hugolify-theme v1 has no equivalent resolver and never reads `ui`, while admin v2 writes appearance parameters there only. Nothing errors — the values are simply written where the theme is not looking.

## Breaking changes

| | v1 | v2 |
| --- | --- | --- |
| Module path | `hugolify-admin` | `hugolify-admin/v2` |
| hugolify-theme | v1 or v2 | **v2 in practice** |
| Weight widget | select (10, 20, 30…) | number input (`min: 1`, integer) |
| Background colour field | `background-color.yml` | `background_color.yml` |
| UI fields | hardcoded in the module | configurable through params |

If you relied on the stepped weight select, the previous behaviour is preserved in a separate field:

{{< alert text="`admin/fields/weight_select.yml`" state="light" >}}

## The UI object

A block or a hero has always carried a handful of appearance parameters — how many columns, which grid, how it is aligned. In v1 they sat flat at the root of the block, next to its content, and there were only a few of them.

They are now grouped into a single `ui` object, which separates *what the block says* from *how it looks*, and leaves room to grow without cluttering the block.

{{< alert text="`/content/_index.md`" state="light" >}}

```yaml
# Before — flat, and only a few parameters
blocks:
  - type: informations
    column: 3
    ratio: 1

# After — everything under ui
blocks:
  - type: informations
    ui:
      column: 3
      ratio: 1
      grid: large
      offset: center
      align: center
      theme: dark
      scrollsnap: md
```

{{< alert-block title="This is a front matter change" state="warning" >}}
hugolify-theme v2 reads these keys from `ui`, hugolify-theme v1 reads them from the root of the block. Moving to admin v2 therefore means moving to the theme v2 as well, otherwise the values are written where the theme is not looking.
{{< /alert-block >}}

### Choosing which controls appear

v1 hardcoded the object to *theme*, *grid* and *offset*. In v2 the set is driven by params, so you decide which controls the editor sees and which values they offer.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
params:
  admin:
    fields:
      grid:
        options: [container, small, medium, large, full]
      theme:
        options: [light, dark, accent]
      ui:
        fields: [theme, grid, offset, align]
```

The field is now labelled **Layout & appearance** instead of *UI*.

## Navigation

Header and footer menus each gain three levels, replacing the single menu of v1.

- **Header** — primary, secondary, tertiary
- **Footer** — primary, secondary, tertiary

The footer also accepts blocks, not just an information text.

## New fields

| Field | Purpose |
| --- | --- |
| `ratio` | Media aspect ratio, `1` being square |
| `scrollsnap` | Breakpoints at which items scroll sideways (`none`, `sm`, `md`, `lg`, `xl`, `all`) |
| `selected_source` | Choose block items manually or by taxonomy |
| `vertical_align` | Vertical text alignment (`start`, `center`, `end`) |
| `image.src_mobile` | Dedicated mobile image, used by the hero |
| `weight_select` | The v1 stepped weight select, kept as an opt-in |

Other additions: a reorder configuration for collections (Sveltia CMS), blocks on the *persons* and *products* collections, *firstname* and *lastname* on *persons*, a `file` input for form fields, and an optional `format` on the datetime widget for Decap and Sveltia storage.

{{< alert-block text="Feedback" state="info" >}}
v2 is still moving. Report anything you hit on {{< blank_link link="https://github.com/hugolify/hugolify-admin/issues" text="the issue tracker" >}}.
{{< /alert-block >}}
