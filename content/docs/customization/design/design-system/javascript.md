---
title: Javascript
description: Vanilla JS
weight: 4
icon: filetype-js
---

{{< alert-block title="Overview" state="info" >}}
**hugolify-theme-design-system** ships **vanilla JS** only — no Bootstrap JS, no framework. Behaviour is progressive enhancement: JS adds behaviour, it never replaces structure.
{{< /alert-block >}}

## Structure

```txt
assets/js/
├── utils/       # pure helpers (a11y, global, scrollspy)
├── components/  # always-on UI, initialised on every page
├── features/    # optional, enabled per-site via params
├── blocks/      # block-specific JS, loaded conditionally
├── vendors/     # third-party integrations
├── datas/       # static JS data (map tiles…)
└── main.js      # entry point, executed as a Hugo template
```

## Components

Always loaded, no param to enable them:

| Component | Role |
| --- | --- |
| `dialog.js` | Modal panels — native `<dialog>` or `popover="auto"`, top layer and `::backdrop` in both cases |
| `dropdown.js` | Dropdown menus |
| `menu.js` | Main menu |
| `tooltip.js` | Tooltips |
| `video.js` | Video playback controls |

Panels driven by `dialog.js` (header, filters, sidebar menu, table of contents) switch between inline and overlay at the breakpoint declared in the site params — see [CSS](/docs/customization/design/design-system/css/#breakpoints).

## Features

### Vendors

Each feature is imported by `main.js` only when its param is true.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
animation: false # default false, data-anim scroll reveal
carousel: true   # default true, loads Splide
map: true        # default true, loads Leaflet
parallax:
  enable: false  # default false, loads Rellax
search:
  enable: false  # default false, focuses the input when the search panel opens
vimeo: false     # default false, Vimeo API
youtube: false   # default false, YouTube API
```

### Map tiles

```yml
tile: 1 # default 0, Set 1 to 11 to change tile
```

* {{< blank_link link="https://leafletjs.com/" text="Leaflet JS" >}}
* {{< blank_link link="https://splidejs.com/" text="Splide JS" >}}
* {{< blank_link link="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/assets/js/datas/map-tiles.js" text="List of map tiles" >}}

## Blocks

Files from enabled blocks (w/ Hugolify admin) are automatically added. The name of the javascript file is the same as the block name and must be in the blocks directory **/assets/js/blocks/**.

If you do not use Hugolify admin, blocks files are fallback in this file:

{{< alert text="`/assets/js/blocks/index.js`" state="light" >}}

## File override

Place a file at the same path to replace a theme JS file entirely (Hugo's asset priority: project > theme > modules).

```txt
assets/
└── js/
    └── components/
        └── menu.js
```

## Add specific files

Each layer has an extension point imported by `main.js` — add your code there rather than editing the barrels.

| File | Loaded |
| --- | --- |
| `assets/js/components/custom.js` | after all components |
| `assets/js/features/custom.js` | after all features |
| `assets/js/vendors/custom.js` | first, before everything else (npm imports) |

To change how components are imported:

{{< alert text="`/assets/js/components/index.js`" state="light" >}}
