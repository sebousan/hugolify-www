---
title: CSS
description: CSS custom properties and design tokens
weight: 2
icon: filetype-sass
---

**hugolify-theme-design-system** uses **CSS custom properties** (design tokens) instead of SASS variables. Tokens are organized in three layers and consumable by any tool (Figma, Tokens Studio, style dictionaries).

## Token architecture

Tokens follow a three-level chain: **primitive → semantic → component**.

```text
primitive/color.css      → raw values (#3b82f6)
semantic/color.css       → purposeful aliases (--color-brand, --color-danger…)
component/button.css     → scoped tokens (--btn-surface, --btn-border-radius…)
```

Never skip two levels: a component token should reference a semantic token, not a primitive directly — unless the primitive has no semantic meaning (e.g. `--radius-none`).

## CSS layers

All tokens and component styles are assigned to a named layer:

```css
@layer config, base, components, utilities;
```

| Layer | Content |
| --- | --- |
| `config` | All tokens (primitive, semantic, component) + reset + media queries |
| `base` | Body, headings defaults |
| `components` | Component styles (.alert, .btn, .container…) |
| `utilities` | (reserved for utility classes) |

Higher layers override lower ones.

## Responsive heading sizes

Heading font sizes are defined per breakpoint via semantic tokens. Each heading level has a mobile (default), tablet, and laptop+ value — all referencing the primitive font scale.

```css
/* tokens/semantic/typography.css */
--font-size-heading-01:        var(--font-size-28);   /* mobile  — 1.75rem */
--font-size-heading-01-tablet: var(--font-size-4xl);  /* tablet  — 2.25rem */
--font-size-heading-01-laptop: var(--font-size-48);   /* laptop+ — 3rem    */
```

The breakpoint logic lives in `base/headings.css`:

```css
h1 { font-size: var(--font-size-heading-01); }
@media (--tablet) { h1 { font-size: var(--font-size-heading-01-tablet); } }
@media (--laptop) { h1 { font-size: var(--font-size-heading-01-laptop); } }
```

To override heading sizes at a specific breakpoint, redefine the token in `tokens/site.css`:

```css
@layer config {
  :root {
    --font-size-heading-01-laptop: var(--font-size-4xl); /* cap h1 at 2.25rem */
  }
}
```

## Responsive tokens

Some component tokens change at breakpoints. The breakpoint logic lives in the **component CSS**, not in the token file. Token files only hold static values.

```css
/* tokens/component/container.css — static values */
--container-max-width-tablet:      45rem;
--container-max-width-tablet-wide: 60rem;
--container-max-width-laptop:      75rem;
--container-max-width-desktop:     82.5rem;

/* components/container.css — responsive logic */
.container {
  @media (--tablet)      { max-width: var(--container-max-width-tablet); }
  @media (--tablet-wide) { max-width: var(--container-max-width-tablet-wide); }
  @media (--laptop)      { max-width: var(--container-max-width-laptop); }
  @media (--desktop)     { max-width: var(--container-max-width-desktop); }
}
```

## Overriding tokens

Override tokens in `assets/css/tokens/site.css` (site-level) or `assets/css/tokens/theme.css` (theme-level). Both files are imported after `tokens/design-system.css` and cascade over it.

```css
/* assets/css/tokens/site.css */
@layer config {
  :root {
    --color-brand: #e63946;
    --btn-border-radius: var(--radius-full);
  }
}
```

## Component variants

Color variants use CSS custom properties scoped to the modifier class, consumed by the base component:

```css
.alert { background-color: var(--alert-color-bg); color: var(--alert-color-text); }

.alert-danger  { --alert-color-bg: var(--color-danger-muted);  --alert-color-text: var(--color-danger-strong); }
.alert-success { --alert-color-bg: var(--color-success-muted); --alert-color-text: var(--color-success-strong); }
```

Available variants (alert, badge): `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`.
