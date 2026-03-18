---
title: Javascript
description: Bootstrap and Vanilla JS
weight: 3
icon: filetype-js
---

{{< alert-block title="Overview" state="info" >}}
**hugolify-theme-bootstrap** layers Bootstrap JS components. Each component can be enabled or disabled individually. Some Vanilla JS are also added (Menu, Blocks…).
{{< /alert-block >}}

## Enable/disable Bootstrap components

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
bootstrap:
  collapse: true   # default true
  dropdown: true   # default true
  modal: true      # default true
  offcanvas: true  # default true
  carousel: false  # default false
  popover: false   # default false
  scrollspy: false # default false
  tab: false       # default false
  toast: false     # default false
  tooltip: false   # default false
```

## Enable/disable Vanilla JS components

### Animation

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
animation: false # default true, Set true to enable
```

### Blocks

Files from enabled blocks (w/ Hugolify admin) are automatically added. The name of the javascript file is the same as the block name and must be in the blocks directory **/assets/js/blocks/**.

If you do not use Hugolify admin, blocks files are fallback in this file:

{{< alert text="`/assets/js/blocks/index.js`" state="light" >}}

### Carousel (SplideJS)

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
carousel: true # default true, Set false to disable
```

{{< blank_link link="https://splidejs.com/" text="Splide JS" >}}

### Map (Leaflet)

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
map: true # default true, Set false to disable
```

#### Tiles

```yml
tile: 1 # default 0, Set 1 to 11 to change tile
```

* {{< blank_link link="https://leafletjs.com/" text="Leaflet JS" >}}
* {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/assets/js/datas/map-tiles.js" text="List of map tiles — hugolify-theme" >}}

### Parallax (Rellax)

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
parallax:
  enable: false # default false, Set true to enable
```

{{< blank_link link="https://dixonandmoe.com/rellax/" text="Rellax" >}}

### Vimeo API

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
vimeo: false # default false, Set true to enable
```

### Youtube API

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
youtube: false # default false, Set true to enable
```

## File override

Place a file at the same path to replace a theme JS file entirely (Hugo's asset priority: project > theme > modules).

```txt
assets/
└── js/
    └── blocks/
        └── chart.js
```

## Add specific files

Import your specific files in custom files.

### Components

```txt
assets/
└── js/
    └── components/
        └── custom.js
```

To override how components are imported:

{{< alert text="`/assets/js/components/index.js`" state="light" >}}

### Features

```txt
assets/
└── js/
    └── features/
        └── custom.js
```

### Vendors

```txt
assets/
└── js/
    └── vendors/
        └── custom.js
```
