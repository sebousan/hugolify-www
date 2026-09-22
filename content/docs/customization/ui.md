---
title: UI
description: Layout classes shared by blocks and hero — theme, grid, align, layout, offset
icon: ui-checks-grid
weight: 2
---

{{< alert-block title="Overview" state="info" >}}
Blocks and hero expose their layout options through a `ui` object in the front matter. **hugolify-theme** turns each value into a CSS class — it holds no style itself, so the class is only meaningful if the active styling module implements it.
{{< /alert-block >}}

The value **is** the class: `theme: dark` renders `block-dark`, `grid: full` renders `block-full`. A value the module does not style renders markup with no visual effect, never an error — which is why the tables below list the coverage of each module.

## Blocks

{{< alert text="`ui` object in a block's front matter" state="light" >}}

```yml
blocks:
  - type: editorial
    ui:
      theme: dark    # block-dark
      grid: medium   # block-medium + col-medium on the row child
      offset: center # block-center + offset-center
      align: center  # block-align-center
      layout: carousel # block-carousel
```

The class string is built by {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/func/GetBlockClasses.html" text="func/GetBlockClasses.html" >}}, always prefixed with `block-`, alongside the block's own type class (`block-editorial`).

| Front matter | Class | Design System | Bootstrap |
| --- | --- | --- | --- |
| `theme` | `block-<value>` | `accent` `black` `dark` `highlight` `light` `neutral` `white` | — only the legacy `.block-bg` (`background: true`) |
| `align` | `block-align-<value>` | `start` `center` `end` | — |
| `layout` | `block-<value>` | `carousel` | — |
| `grid` | `block-<value>` | `full` (padding), width via `col-*` | width via `col-*` |
| `offset` | `block-<value>` | position via `offset-*` | position via `offset-*` |

Available `theme` and `grid` values are declared per project in the admin config (`params.admin.fields.theme.options` and `.grid.options`, default `light` `dark` `accent` and `container` `small` `medium` `large` `full`). `align` and `offset` are always `start`, `center` or `end`.

### Columns

`grid` and `offset` do not size the block themselves: {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/func/GetColOffsetClass.html" text="func/GetColOffsetClass.html" >}} maps them to semantic column classes, implemented by both modules.

| Class | Span | Design System | Bootstrap |
| --- | --- | --- | --- |
| `col-xsmall` | 1/3 | ✓ | ✓ |
| `col-small` | 1/2 | ✓ | ✓ |
| `col-medium` | 2/3 | ✓ | ✓ |
| `col-large` | 5/6 | ✓ | ✓ |
| `offset-center` | centered | ✓ | ✓ |
| `offset-end` | pushed right | ✓ | ✓ |

The spans are relative to the active column count, not hardcoded to 12: `@uncinq/css-base` computes them from `--columns`, Bootstrap from `$grid-columns` via `make-col()`.

### Defaults per block

A `ui` value in the front matter belongs to that block alone. To give every block of a type the same look, declare it once outside the content: changing it later restyles the blocks already written, instead of leaving them behind.

Two places take that declaration, and they stack.

#### In the config — what the project ships

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
params:
  blocks:
    latest:
      ui:
        align: center
        grid: large
        layout: grid
        offset: center
```

This is the developer's level. It travels with the repository and is not editable from the CMS, which is what you want for a decision the project should not drift away from.

#### In the data — what the CMS can retune

`/data/blocks.yml` holds the same thing in the same shape, and hugolify-admin exposes it as a **Blocks** file in the *config* collection. An integrator adjusts a block type there without touching the repository.

{{< alert text="`/data/blocks.yml`" state="light" >}}

```yml
latest:
  ui:
    align: center
    grid: large
    layout: grid
    offset: center
```

The form lists every block type the project enables, one collapsible section each, `selected-*` variants included. A section arrives open when it already carries a value, so the screen says at a glance which of the types the site actually styles.

Values are read key by key, so a field left empty in the CMS falls back to the config rather than erasing it. A type can therefore be split between the two: the grid fixed in `params.yaml`, the theme left open to the CMS.

The file is not translated. How a block looks is not language content, so one `/data/blocks.yml` answers for every locale.

#### The ladder

{{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/func/GetBlockUI.html" text="func/GetBlockUI.html" >}} resolves four levels, from the weakest to the strongest:

1. `params.blocks.<type>.ui` — the look the project ships
2. `data/blocks.yml` → `<type>.ui` — the look the CMS sets, key by key
3. the keys at the root of the block — the legacy v1 form
4. the keys under the block's own `ui` — **they win even when empty**, which is how one block opts out of a default

What an editor picks on a block itself lands in the fourth level, so it always wins over both defaults.

Every key of the table above is accepted. `scrollsnap` goes in either place too, in the same order, though it is resolved by `SetScrollsnap` rather than `GetBlockUI` and keeps a ladder of its own — see [scrollsnap](/docs/blocks/#scrollsnap).

{{< alert-block title="Calling a block template by hand" state="warning" >}}
A partial rendering a block outside the `blocks` list of a page has to name it through `type`, the way `blocks/range.html` does, otherwise the block takes no default and falls back to the generic params.
{{< /alert-block >}}

```go-html-template
{{ partial "blocks/templates/latest.html" (dict "type" "latest" "section" "posts") }}
```

## Hero

{{< alert text="`hero` object in a page's front matter" state="light" >}}

```yml
hero:
  ui:
    align: center         # hero-center
    vertical_align: end   # hero-vertical-end
    theme: dark           # hero-dark
    darken: true          # hero-with-darken (darken under text only)
  image:
    src: '/images/cover.jpg'
    background: true      # hero-with-cover hero-with-cover-image (darken whole background)
```

Classes are built by {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/hero.html" text="commons/hero.html" >}}.

| Front matter | Class | Design System | Bootstrap |
| --- | --- | --- | --- |
| `align: center` / `end` | `hero-center` `hero-end` | ✓ | ✓ |
| `theme` | `hero-<value>` — `accent` `black` `dark` `highlight` `light` `neutral` `white` | ✓ | ✓ |
| `image` / `video` + `background` | `hero-with-cover` + `hero-with-cover-image` / `-video` | ✓ | ✓ |
| `image` / `video` (side media) | `hero-with-image` / `hero-with-video` | ✓ | ✓ |
| cover darkening | `hero-cover-darken` | ✓ | ✓ |
| `vertical_align` | `hero-vertical-<value>` | ✓ | — |
| `darken: true` | `hero-with-darken` | ✓ | — |

The hero themes are the one place where the two modules are explicitly kept in sync: `_hero-theme.sass` in **hugolify-theme-bootstrap** is a port of `hero-theme.css` from `@uncinq/css-components`, generated from the same seven names.

## Adding a variant

A value with no CSS is inert, so a project-specific variant only needs a rule in the right layer — no template change:

```css
/* assets/css/site.css — hugolify-theme-design-system */
@layer components {
  .block-brand {
    --block-color-background: var(--color-brand);
    --color-text: var(--color-text-on-brand);
  }
}
```

Then expose the value to the editors:

```yml
# /config/_default/params.yaml
admin:
  fields:
    theme:
      options: [light, dark, accent, brand]
```
