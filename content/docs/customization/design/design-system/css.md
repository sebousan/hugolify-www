---
title: CSS
description: CSS custom properties and design tokens
weight: 2
icon: filetype-sass
---

**hugolify-theme-design-system** uses **CSS custom properties** (design tokens) instead of SASS variables. Tokens are plain CSS, consumable by any tool (Figma, Tokens Studio, style dictionaries).

## CSS packages

The module does not ship its own reset or token system. It composes four framework-agnostic npm packages and adds the Hugolify-specific layer on top.

| Package | Contents | Layers |
| --- | --- | --- |
| {{< blank_link link="https://github.com/uncinq/design-tokens" text="@uncinq/design-tokens" >}} | Primitive + semantic custom properties (color, size, typography, spacing…) | `tokens` |
| {{< blank_link link="https://github.com/uncinq/component-tokens" text="@uncinq/component-tokens" >}} | Component-scoped custom properties (`--btn-*`, `--card-*`, `--container-*`…) | `tokens` |
| {{< blank_link link="https://github.com/uncinq/css-base" text="@uncinq/css-base" >}} | Reset, native element styles, layout primitives (container, grid, row), `@custom-media` breakpoints | `reset`, `base`, `layouts` |
| {{< blank_link link="https://github.com/uncinq/css-components" text="@uncinq/css-components" >}} | Generic UI components (alert, badge, button, card, form, nav, panel…) | `components` |
| **hugolify-theme-design-system** | Hugolify tokens, layouts, components, blocks, pages, utilities | all |

Each package is strictly additive — no package reaches into a lower layer. They are installed by `hugo mod npm pack`, see [Setup](/docs/customization/design/design-system/setup/#command).

## Token architecture

Tokens follow a three-level chain: **primitive → semantic → component**.

```text
primitive/color.css      → raw values (oklch…)
semantic/color.css       → purposeful aliases (--color-brand, --color-danger…)
components/button.css    → scoped tokens (--btn-color-background, --btn-border-radius…)
```

Never skip two levels: a component token should reference a semantic token, not a primitive directly — unless the primitive has no semantic meaning (e.g. `--radius-none`).

## CSS layers

All tokens and styles are assigned to a named layer. The order is declared **once**, at the very top of `assets/css/main.css`, before any `@import` — CSS fixes a layer's position the first time its name is seen.

```css
@layer reset, tokens, vendors, base, layouts, components, pages, utilities;
```

| Layer | Content | Provided by |
| --- | --- | --- |
| `reset` | CSS reset | `@uncinq/css-base` |
| `tokens` | All custom properties (primitive, semantic, component) | `@uncinq/design-tokens`, `@uncinq/component-tokens`, module |
| `vendors` | Third-party libraries (Leaflet, Splide) | module |
| `base` | Native element styles (body, headings, links, tables, forms…) | `@uncinq/css-base` |
| `layouts` | Layout primitives (container, grid, row) + hugolify layouts | `@uncinq/css-base`, module |
| `components` | UI components (.alert, .btn, .card…) and hugolify components | `@uncinq/css-components`, module |
| `pages` | Page-specific rules | module |
| `utilities` | Single-purpose classes — they win over a component's own rules | module |

The **last layer wins**. `reset` and `tokens` come first (lowest priority) so token defaults never override base, layout or component styles.

Custom media queries are **not** layered: `@custom-media` is resolved at build time by PostCSS.

## Breakpoints

Breakpoints are `@custom-media` rules from `@uncinq/css-base`, named as rungs on a ladder rather than devices.

| Custom media | Width | Deprecated alias |
| --- | --- | --- |
| `--sm` | >= 48rem (768px) | `--tablet` |
| `--md` | >= 64rem (1024px) | `--tablet-wide` |
| `--lg` | >= 90rem (1440px) | `--laptop` |
| `--xl` | >= 100rem (1600px) | `--desktop` |

```css
@media (--md) {
  .card { --card-padding-inline: var(--spacing-lg); }
}
```

The device names still work but are aliases kept for compatibility — prefer `--sm`/`--md`/`--lg`/`--xl` in new code.

Components that own a panel (header, filters, sidebar menu, table of contents) get their own semantic custom media, generated in `main.css` from site params — so the breakpoint and the `.panel-inline-*` classes in the markup cannot drift:

```yml
# /config/_default/params.yaml
header:
  expand: md # md by default, none = always an overlay
```

## Heading sizes

Heading font sizes are **fluid**: each level references a `clamp()` token from the semantic scale, so no media query is involved.

```css
/* @uncinq/design-tokens — semantic/typography.css */
--font-size-fluid-xl:   clamp(1.5rem, 0.9718rem + 2.2535vw, 3rem);
--font-size-heading-01: var(--font-size-fluid-xl);
--font-size-heading-02: var(--font-size-fluid-lg);
```

```css
/* @uncinq/css-base — base/headings.css */
h1 { --font-size-heading: var(--font-size-heading-01); }
```

To change a heading size, redefine the token — not the selector:

```css
/* assets/css/tokens/site.css */
@layer tokens {
  :root {
    --font-size-heading-01: var(--font-size-fluid-2xl);
  }
}
```

## Responsive tokens

Some component tokens change at breakpoints. The breakpoint logic lives in the **component CSS**, not in the token file: token files only hold static values, and the media query just reassigns the token the component reads.

```css
/* @uncinq/component-tokens — components/container.css — static values */
--container-max-width-tablet:      100%;
--container-max-width-tablet-wide: 100%;
--container-max-width-laptop:      100%;
--container-max-width-desktop:     var(--size-desktop);

/* @uncinq/css-base — layouts/container.css — responsive logic */
.container {
  max-width: var(--container-max-width, var(--container-max-width-mobile));

  @media (--tablet)      { --container-max-width: var(--container-max-width-tablet); }
  @media (--tablet-wide) { --container-max-width: var(--container-max-width-tablet-wide); }
  @media (--laptop)      { --container-max-width: var(--container-max-width-laptop); }
  @media (--desktop)     { --container-max-width: var(--container-max-width-desktop); }
}
```

## The two entry points

The module ships four empty files, imported last by `main.css`, in this order:

| File | Scope |
| --- | --- |
| `assets/css/tokens/theme.css` | token overrides of a **reusable look**, shared by several sites |
| `assets/css/tokens/site.css` | token overrides of **this site** |
| `assets/css/theme.css` | rules of a **reusable look** |
| `assets/css/site.css` | rules of **this site** |

Tokens come before rules, and **site always wins over theme** — so a project can start from a shared look and adjust it locally without touching it.

Pick by lifespan, not by size: what a second site would want too goes in the `theme` files (typically shipped as a theme module of your own); what only this project needs goes in the `site` files. A project that has no shared look uses `site.css` only.

The files are empty in the module — create them at the same path in your project and Hugo's asset priority (project > theme > modules) replaces them.

## Overriding tokens

Both `tokens/theme.css` and `tokens/site.css` are imported after `tokens/design-system.css`, so they cascade over every default.

```css
/* assets/css/tokens/site.css */
@layer tokens {
  :root {
    --color-brand: #e63946;
    --btn-border-radius: var(--radius-pill);
  }
}
```

## Overriding CSS

For rules that no token covers, write to the same layer as the rule you are overriding, in `assets/css/theme.css` or `assets/css/site.css`.

```css
/* assets/css/site.css */
@layer components {
  .card .media img { filter: grayscale(1); }
}
```

{{< alert-block title="Check first" state="warning" >}}
Two things to check first: a token often covers the case (`--card-color-background`, `--hero-min-height`…), and a modifier class often exists (`.hero-center`, `.block-dark`, `.btn-ghost`…) — reach for the markup or the token before writing a rule. The block and hero classes are listed in [UI](/docs/customization/ui/).
{{< /alert-block >}}

## Component variants

Color variants set CSS custom properties scoped to the modifier class, consumed by the base component:

```css
.alert { background-color: var(--alert-color-background); color: var(--alert-color-text); }

.alert-danger  { --alert-color-background: var(--color-danger-muted);  --alert-color-text: var(--color-danger-strong); }
.alert-success { --alert-color-background: var(--color-success-muted); --alert-color-text: var(--color-success-strong); }
```

Available variants (alert, badge, btn): `brand`, `primary`, `secondary`, `neutral`, `success`, `danger`, `warning`, `info`, `light`, `dark`.

Buttons add `ghost`, `link` and `control` variants, plus sizes `btn-xs` to `btn-xl`.
