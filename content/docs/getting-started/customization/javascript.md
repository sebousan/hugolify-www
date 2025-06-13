---
title: Javascript
description: To replace or add javascript…
icon: filetype-js
---

## Variables

Variables files in the abstracts folder allows to add custom variables or bootstrap variables. {{< blank_link link="https://github.com/twbs/bootstrap/blob/v5.3.1/scss/_variables.scss" text="Boostrap 5 variables available list on Github" >}}.

```txt
assets/
└── sass/
    └── abstract/
        ├── _variables.sass # bootstrap variables override for Hugolify
        ├── _variables-site.sass # specific for your website
        └── _variables.default.sass # Hugolify core variables, do not override it
```

## File override

The sass files override is possible by keeping the same tree structure and allows to overwrite the style of the theme to replace it with a specific style.

```txt
assets/
└── sass/
    └── components/
        └── _author.sass
```

## File merge

The SASS files merge allows you to add style to that of the theme. To merge SASS files, it is necessary to reproduce the same tree structure in a folder called `site` and to indicate the files in `main.sass`.

### Tree structure

```txt
assets/
└── sass/
    ├── site/
    │   └── components/
    │       └── _author.sass
    └── main.sass
```

### Main sass file (main.sass)

```sass
// Theme
@import "main-theme"

// Site
@import "site/components/author"
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

Files from enabled blocks are automatically added. The name of the javascript file is the same as the block name and must be in the blocks directory `/assets/js/blocks/`


### Carousel (SplideJS)

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
carousel: true # default true, Set false to disable 
```

### Map (Leaflet)

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
map: true # default true, Set false to disable
```

### Parallax (Rellax)

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
parallax: 
  enable: false # default false, Set true to enable
```