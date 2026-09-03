---
title: Icons
description: Lucide and Simple Icons with hugolify-theme-icons module
icon: emoji-smile
aliases:
  - /docs/customization/design/design-system/icons/
---

{{< alert-block title="hugolify-theme-icons" state="info" >}}
Icons are a module of their own, **hugolify-theme-icons**. It renders {{< blank_link link="https://lucide.dev/icons/" text="Lucide" >}} for UI and content icons, and {{< blank_link link="https://simpleicons.org/" text="Simple Icons" >}} for brands.

The module is opt-in: a project that does not import it renders no icons. It ships no framework CSS and completes **hugolify-theme-design-system**, which bundles no icon of its own.
{{< /alert-block >}}

{{< alert-block title="Not compatible with hugolify-theme-bootstrap" state="warning" >}}
For now the module targets **hugolify-theme-design-system** only. **hugolify-theme-bootstrap** comes with its own icons — the {{< blank_link link="https://icons.getbootstrap.com/" text="Bootstrap Icons" >}} webfont — and both define a `.icon` class: importing the two together makes them collide.
{{< /alert-block >}}

{{< blank_link link="https://github.com/Hugolify/hugolify-theme-icons" text="hugolify-theme-icons on GitHub" >}}

## Icon sets

Two libraries are imported by the module, each with its own role.

### Lucide

{{< blank_link link="https://lucide.dev/icons/" text="Browse the Lucide icon list" >}}

The UI and content set, and the only one for that role: over 1700 outline icons, drawn on a 24x24 grid and stroked (see [Stroke weight](#stroke-weight)). Mounted on `assets/icons/ui/`, resolved by its Lucide name, as-is:

```go-html-template
{{ partial "icon" "map-pin" }}
```

### Simple Icons

{{< blank_link link="https://simpleicons.org/" text="Browse the Simple Icons list" >}}

The brand set: over 3400 logos, solid fills with no stroke, rendered monochrome. Mounted on `assets/icons/brands/`, resolved by its Simple Icons slug prefixed with `brand:`:

```go-html-template
{{ partial "icon" "brand:github" }}
```

Use the slug shown on the site, not the marketing name (`x`, not `twitter`).

The prefix also disambiguates a name held by both sets: `apple` gives the Lucide fruit, `brand:apple` the Apple logo.

## Install

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-design-system # styling module
  - path: github.com/hugolify/hugolify-theme-icons # icons
```

The module imports Lucide and Simple Icons as Hugo modules and mounts them on role-based paths (`assets/icons/ui/`, `assets/icons/brands/`), so swapping an icon set is a one-line change and no icon file is committed to your project.

Requires Hugo >= **0.128.0** (`templates.Defer`).

## Usage

```go-html-template
{{ partial "icon" "map-pin" }}      {{/* UI icon — Lucide name, as-is */}}
{{ partial "icon" "brand:github" }} {{/* brand icon — Simple Icons */}}
```

The name **is** the filename: there is no mapping table and no alias layer. Browse the {{< blank_link link="https://lucide.dev/icons/" text="Lucide icon list" >}} to find a name.

The rendered DOM is a single element, no inline SVG:

```html
<i class="icon icon-map-pin" aria-hidden="true"></i>
```

## Approach

Icons are rendered via CSS **mask-image** from inline SVG data-URIs. No icon font, no SVG sprite, no request per icon.

```css
.icon {
  background-color: var(--icon-color, currentColor);
  display: inline-block;
  height: var(--icon-size, 1em);
  mask: var(--icon-glyph) center / contain no-repeat;
  vertical-align: -0.125em;
  width: var(--icon-size, 1em);
}
```

Each icon only differs by its `--icon-glyph`. The SVG is used as an alpha mask, so its own colors are irrelevant: the icon inherits the current text color via `currentColor` and scales with the font size.

Size and color are overridden with the two custom properties:

```css
.main-menu .icon {
  --icon-color: var(--color-brand);
  --icon-size: var(--size-24);
}
```

Brand icons render **monochrome** — the norm for social rows. A colored logo needs an inline SVG instead of a mask.

## Stroke weight

Lucide ships every icon at `stroke-width="2"`, which reads heavy at UI sizes. The module treats stroke weight as a design token and defaults it to `1`. Change it with a single param:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
icons:
  strokeWidth: 1.5 # default 1, set 2 to restore Lucide's own weight
```

The unit is viewBox units, not pixels. All Lucide icons are 24x24, so the rendered thickness is `strokeWidth / 24 * --icon-size`: at the default `--icon-size: 1em` (16px), `1` gives 0.67px, `1.5` gives 1px and `2` gives 1.33px. A weight of `1` is genuinely hairline at 16px and depends on the browser antialiasing, so `1.5` is the safer pick for icon-dense interfaces.

Two limits come from the mask rendering described above:

- It is **not** a CSS variable. A mask exposes only its alpha channel, so no runtime custom property can reach the `stroke-width` attribute inside the SVG: the value is substituted into the source before encoding, at build time.
- It is **site-wide**. A per-component weight would require a second glyph set and would double the stylesheet.

The param only applies to UI icons. Simple Icons brands are solid fills and carry no stroke.

## Build

There is no project-side build step and no Node script. The subset ships natively:

1. `partial "icon"` registers each name used during the render.
2. After the full render, `templates.Defer` resolves the union of those names.
3. One stylesheet is emitted (minified and fingerprinted in production) with the base `.icon` rule plus one `--icon-glyph` per icon actually used.

Nothing to run, and nothing to commit: there is no `yarn build:icons` step as with the Bootstrap Icons font, and no generated font file in the project.

An unknown name logs a build warning and renders nothing — the default glyph is an empty SVG, so a missing icon is invisible rather than a solid square.

## Missing brands

Some brands are dropped by both Simple Icons and Lucide. The module ships curated SVGs in its own `assets/icons/brands/`, and local assets take precedence over the imported modules — so you can add a missing brand in your project at the same path:

```txt
assets/
└── icons/
    └── brands/
        └── linkedin.svg
```
