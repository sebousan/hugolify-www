---
title: Javascript
description: To replace or add javascript…
icon: filetype-js
---

## File override

The js files override is possible by keeping the same tree structure and allows to overwrite the javascript of the theme to replace it with a specific javascript.

```txt
assets/
└── js/
    └── blocks/
        └── chart.js
```

## Add specific files

import your specific files in custom files.

### Components

```txt
assets/
└── js/
    └── components/
        └── custom.js
```

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

## Enable/disable

### Animation

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
animation: false # default true, Set true to enable
```

### Bootstrap

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
bootstrap:
  carousel: false # default false, Set true to enable
  collapse: true # default true, Set true to enable
  dropdown: true # default true, Set true to enable
  modal: true # default true, Set true to enable
  offcanvas: true # default true, Set true to enable
  popover: false # default false, Set true to enable
  scrollspy: false # default false, Set true to enable
  tab: false # default false, Set true to enable
  toast: false # default false, Set true to enable
  tooltip: false # default false, Set true to enable
```

### Blocks

Files from enabled blocks (w/ Hugolify admin) are automatically added. The name of the javascript file is the same as the block name and must be in the blocks directory `/assets/js/blocks/`.


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

{{< blank_link link="https://leafletjs.com/" text="Leaflet JS" >}}

### Parallax (Rellax)

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
parallax: 
  enable: false # default false, Set true to enable
```

{{< blank_link link="https://dixonandmoe.com/rellax/" text="Rellax" >}}