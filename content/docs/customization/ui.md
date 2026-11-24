---
title: UI
description: "Layout classes shared by blocks and hero: theme, grid, align, layout, offset, scrollsnap…"
icon: list-checks
weight: 2
---

{{< alert-block title="Overview" state="info" >}}
Blocks and hero expose their layout options through a `ui` object in the front matter. **hugolify-theme** turns each value into a CSS class. It holds no style itself, so the class is only meaningful if the active styling module implements it.
{{< /alert-block >}}

The value **is** the class: `theme: dark` renders `block-dark`, `grid: full` renders `block-full`. A value the module does not style renders markup with no visual effect, never an error, which is why the tables below list the coverage of each module.

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

The class string is built by {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_partials/func/GetBlockClasses.html" text="func/GetBlockClasses.html" >}}, always prefixed with `block-`, alongside the block's own type class (`block-editorial`).

| Front matter | Class | Design System | Bootstrap |
| --- | --- | --- | --- |
| `theme` | `block-<value>` | `accent` `black` `dark` `highlight` `light` `neutral` `white` | Only the legacy `.block-bg` (`background: true`) |
| `align` | `block-align-<value>` | `start` `center` `end` | None |
| `layout` | `block-<value>` | `carousel` | None |
| `grid` | `block-<value>` | `full` (padding), width via `col-*` | width via `col-*` |
| `offset` | `block-<value>` | position via `offset-*` | position via `offset-*` |

Available `theme` and `grid` values are declared per project in the admin config (`params.admin.fields.theme.options` and `.grid.options`, default `light` `dark` `accent` and `container` `small` `medium` `large` `full`). `align` and `offset` are always `start`, `center` or `end`.

### Items, scroll snap and media

The keys that only some blocks take do not become a `block-*` class: they act on the row of items, or on the media.

{{< alert text="`ui` object in a block's front matter" state="light" >}}

```yml
blocks:
  - type: informations
    ui:
      column: 3      # items-3 on the row of items
      ratio: 1       # square images
      scrollsnap: md # scrollsnap-md: a carousel below md
```

| Front matter | Output | Design System | Bootstrap |
| --- | --- | --- | --- |
| `column` | `items-<value>` on the row of items | `1` to `20`, from tablet up | Per block: comparison, datas, gallery, informations, logos |
| `scrollsnap` | `scrollsnap` (every width) or `scrollsnap-<breakpoint>` on the row of items, plus `js-scrollsnap-nav` and `js-scrollsnap-pagination` for the buttons and the dots | ✓ every breakpoint, buttons and dots | Ignored: informations, latest, selected and testimonials scroll below `lg` on their own, without buttons or dots |
| `ratio` | Images cropped to the ratio, plus `--block-figure-ratio` or `--gallery-item-ratio` for the SVGs, which are never cropped | ✓ | Cropped images only |
| `direction` | `block-<type>-<value>`, such as `block-editorial-rtl` | ✓ | ✓ |
| `carousel` | Options of the Splide carousel, with `layout: carousel` | ✓ | ✓ |

`scrollsnap` takes a breakpoint (`sm` `md` `lg` `xl`, `all` or `none`), or an object adding the buttons and the dots. It is resolved by {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_partials/func/SetScrollsnap.html" text="func/SetScrollsnap.html" >}}, its classes come from `@uncinq/css-components`.

{{< button url="/docs/blocks/overview/#scrollsnap" text="See scrollsnap" >}} {{< button url="/docs/blocks/overview/#ui" text="See the ui keys of each block" >}}

### Columns

`grid` and `offset` do not size the block themselves: {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_partials/func/GetColOffsetClass.html" text="func/GetColOffsetClass.html" >}} maps them to semantic column classes, implemented by both modules.

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

A `ui` value in the front matter belongs to that block alone. To give every block of a type the same look, declare it once in `/data/blocks.yml`, outside the content: changing it later restyles the blocks already written, instead of leaving them behind.

{{< alert text="`/data/blocks.yml`" state="light" >}}

```yml
latest:
  ui:
    align: center
    grid: large
    layout: grid
    offset: center
```

hugolify-admin exposes the file as a **Blocks** file in the *config* collection, so an editor adjusts a block type without touching the repository. The form lists every block type the project enables, one collapsible section each, `selected-*` variants included. A section arrives open when it already carries a value, so the screen says at a glance which of the types the site actually styles.

Values are read key by key, so a field left empty in the CMS is ignored rather than erasing a default.

The file is not translated. How a block looks is not language content, so one `/data/blocks.yml` answers for every locale.

#### The ladder

{{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_partials/func/GetBlockUI.html" text="func/GetBlockUI.html" >}} resolves three levels, from the weakest to the strongest:

1. `/data/blocks.yml` → `<type>.ui`: the look of the block type
2. the keys at the root of the block: the legacy v1 form
3. the keys under the block's own `ui`: **they win even when empty**, which is how one block opts out of a default

What an editor picks on a block itself lands in the last level, so it always wins over the default.

Every key of the tables above is accepted. `scrollsnap` goes in the file too, though it is resolved by `SetScrollsnap` rather than `GetBlockUI` and keeps a ladder of its own, see [scrollsnap](/docs/blocks/overview/#scrollsnap).

{{< alert-block title="Defaults written in the params" state="info" >}}
Before the data file, these defaults went under `params.blocks.<type>.ui`, in `/config/_default/params.yaml`. hugolify-theme still reads them, below `/data/blocks.yml`, so a project moves them at its own pace.
{{< /alert-block >}}

{{< alert-block title="Calling a block template by hand" state="info" >}}
Each template names itself, so a partial rendering a block outside the `blocks` list of a page gets the defaults and the `block-<type>` class without passing anything. Pass `type` only to read the defaults of a more specific type, such as a `selected-*` variant rendered by `selected.html`.
{{< /alert-block >}}

```go-html-template
{{ partial "blocks/templates/latest.html" (dict "section" "posts") }}
{{ partial "blocks/templates/selected.html" (dict "type" "selected-awards" "section" "awards") }}
```

A project template does the same, with its own type in both calls. The context is merged over it, so the `type` of the entry still wins when there is one:

```go-html-template
{{- $ui := partial "func/GetBlockUI" (merge (dict "type" "title-xl") .) -}}
{{- $blockClass := partial "func/GetBlockClasses" (dict "type" "title-xl" "ui" $ui) -}}
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

Classes are built by {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/_partials/commons/hero.html" text="commons/hero.html" >}}.

| Front matter | Class | Design System | Bootstrap |
| --- | --- | --- | --- |
| `align: center` / `end` | `hero-center` `hero-end` | ✓ | ✓ |
| `theme` | `hero-<value>`: `accent` `black` `dark` `highlight` `light` `neutral` `white` | ✓ | ✓ |
| `image` / `video` + `background` | `hero-with-cover` + `hero-with-cover-image` / `-video` | ✓ | ✓ |
| `image` / `video` (side media) | `hero-with-image` / `hero-with-video` | ✓ | ✓ |
| cover darkening | `hero-cover-darken` | ✓ | ✓ |
| `vertical_align` | `hero-vertical-<value>` | ✓ | No |
| `darken: true` | `hero-with-darken` | ✓ | No |

The hero themes are the one place where the two modules are explicitly kept in sync: `_hero-theme.sass` in **hugolify-theme-bootstrap** is a port of `hero-theme.css` from `@uncinq/css-components`, generated from the same seven names.

## Adding a variant

A value with no CSS is inert, so a project-specific variant only needs a rule in the right layer, with no template change:

```css
/* assets/css/site.css, hugolify-theme-design-system */
@layer components {
  .block-brand {
    --block-color-background: var(--color-brand);
    --color-text: var(--color-on-brand);
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
