---
isIndex: false
title: Blocks
description: More than twenty five blocks available.
weight: 3
icon: puzzle
---

{{< alert-block title="Overview" state="info" >}}
A page builds its content from a `blocks` list in its front matter. Each entry declares a `type`, the fields that type understands, and an optional `ui` object holding everything about how the block looks.
{{< /alert-block >}}

```yml
blocks:
  - type: title
    heading:
      surtitle: 'Lorem ipsum'
      title: 'Dolor sit amet'
    ui:
      theme: dark
      grid: medium
      offset: center
```

## Common keys

Every block page below documents its own fields. These three are shared.

### heading

Rendered at the top of the block by {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/heading.html" text="blocks/heading.html" >}}. Blocks whose content *is* a heading — `paragraph`, `editorial`, `alert`, `quote` — carry `surtitle` / `title` / `text` at their root instead.

```yml
heading: {} # (optional)
  surtitle: '' # string (optional)
  title: '' # string (optional)
  text: '' # markdown (optional)
  ctas: [] # (optional, front matter only)
```

### footing

Rendered at the bottom of the block by {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/footing.html" text="blocks/footing.html" >}}. The `title` block has no footer.

```yml
footing: {} # (optional, front matter only)
  text: '' # markdown (optional)
  ctas: [] # (optional)
```

{{< alert-block state="warning" >}}
`footing` and `heading.ctas` are read by the theme but have no field in Hugolify Admin yet: they are set in the front matter, not from the CMS.
{{< /alert-block >}}

### ctas

The same shape everywhere a block takes buttons.

```yml
ctas: []
  text: '' # string
  url: '' # url
  blank: false # boolean, open in a new tab (optional)
  link: false # boolean, render as a plain link instead of a button (optional)
  lang: '' # code lang, sets the hreflang attribute (optional)
```

`hreflang` is accepted as a synonym of `lang`, and wins when both are set.

### ui

Everything about how the block looks. The value **is** the CSS class: `theme: dark` renders `block-dark`, `grid: full` renders `block-full`. A value the active styling module does not implement renders markup with no visual effect, never an error.

| Key | Values | Blocks |
| --- | --- | --- |
| `theme` | `accent` `black` `dark` `highlight` `light` `neutral` `white` | all |
| `grid` | `xsmall` `small` `medium` `large` `container` `full` | all |
| `offset` | `start` `center` `end` | all |
| `align` | `start` `center` `end` | all |
| `column` | number of columns per row on desktop | comparison, datas, gallery, informations, logos, paragraph-list, pushes |
| `ratio` | number, thumbnail aspect ratio | gallery, informations |
| `scrollsnap` | `none` `sm` `md` `lg` `xl` `all`, or an object | comparison, datas, gallery, informations, latest, logos, pushes, selected, testimonials |
| `layout` | `grid` `list` `carousel`, per block | gallery, latest, logos, pushes, selected, testimonials |
| `direction` | `ltr` `rtl` | editorial |
| `carousel` | object, only with `layout: carousel` | gallery, logos, pushes, selected, testimonials |

{{< button url="/docs/customization/ui/" text="See the UI reference" >}}

### scrollsnap

Below a breakpoint, a row of items becomes a horizontal carousel with snap points. The value is the rung at which the carousel **stops** and the grid comes back.

```yml
ui:
  scrollsnap: md # shorthand for breakpoint: md
```

```yml
ui:
  scrollsnap:
    breakpoint: md # [sm, md, lg, xl, all, none]
    nav: pointer # [true, false, pointer] prev/next buttons
    pagination: true # [true, false, pointer] dots
```

Each key falls back through the params ladder, most specific first, so a block overrides one without repeating the others:

```yml
params:
  blocks:
    datas:
      scrollsnap:
        breakpoint: lg
    scrollsnap:
      nav: pointer
  scrollsnap:
    pagination: true
```

Defaults: breakpoint `md`, `nav: false`, `pagination: false`.

### carousel

A real carousel, driven by Splide, as opposed to the CSS-only `scrollsnap`. Only read when `layout: carousel`.

`column` does not apply here: it sizes the grid layout, while a carousel slot's width comes from `params.perPage`.

```yml
ui:
  carousel: {} # (optional)
    params: {} # (optional)
      focus: '' # boolean (optional)
      autoplay: true # boolean (optional)
      arrows: true # boolean (optional)
      pagination: false # boolean (optional)
      type: '' # [slide, loop, fade] (optional)
      perPage: '' # number (optional)
      padding: '' # number (optional)
      gap: '' # number (optional)
    responsive: {} # (optional)
      breakpoints: 640 # number [640, 768, 1024, 1280, 1440]
      params: {} # same keys as above
```

## Legacy front matter

Before v2 the `ui` keys sat flat at the root of the block, and the theme mapped `background: true` to the `bg` theme. {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/func/GetBlockUI.html" text="func/GetBlockUI.html" >}} still reads that form, so v1 content keeps rendering — but `ui` wins whenever both are set, and only `ui` is documented here.

```yml
# Legacy, still read
blocks:
  - type: informations
    background: true
    column: 3

# Current
blocks:
  - type: informations
    ui:
      theme: bg
      column: 3
```

{{< button url="/docs/getting-started/migration/" text="See the v1 to v2 migration guide" >}}
