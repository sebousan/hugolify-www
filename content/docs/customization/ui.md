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
