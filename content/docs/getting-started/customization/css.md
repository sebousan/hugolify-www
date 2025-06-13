---
title: CSS
description: To replace or add style…
icon: filetype-sass
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