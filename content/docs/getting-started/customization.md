---
title: Customization
description: To replace or add style, structure, content…
weight: 10
icon: tools
---

> In Hugo you can override files. If you add the same file name in the same directory in your project you override it.

## CSS

### Variables

Variables files in the abstracts folder allows to add custom variables or bootstrap variables. {{< blank_link link="https://github.com/twbs/bootstrap/blob/v5.3.1/scss/_variables.scss" text="Boostrap 5 variables available list on Github" >}}.

```txt
assets/
└── sass/
    └── abstract/
        ├── _variables.sass # bootstrap variables override for Hugolify
        ├── _variables-site.sass # specific for your website
        └── _variables.default.sass # Hugolify core variables, do not override it
```

### File override

The sass files override is possible by keeping the same tree structure and allows to overwrite the style of the theme to replace it with a specific style.

```txt
assets/
└── sass/
    └── components/
        └── _author.sass
```

### File merge

The SASS files merge allows you to add style to that of the theme. To merge SASS files, it is necessary to reproduce the same tree structure in a folder called `site` and to indicate the files in `main.sass`.

#### Tree structure

```txt
assets/
└── sass/
    ├── site/
    │   └── components/
    │       └── _author.sass
    └── main.sass
```

#### Main sass file (main.sass)

```sass
// Theme
@import "main-theme"

// Site
@import "site/components/author"
```

## HTML

The HTML files override is possible by keeping the same tree structure.

```txt
layouts/
└── partials/
    └── posts/
        └── item.html
```

## CMS

{{< button url="/docs/cms/admin/" text="See Hugolify Admin section" >}}

## Icons

**Favicons**

{{< alert text="`/static/assets/images/favicons/`" state="light" >}}

- apple-touch-icon.png `180x180px`
- favicon-32x32.png `32x32px`
- favicon-16x16.png `16x16px`
- favicon.ico
- favicon.png
- favicon.svg
- safari-pinned-tab.svg

**Files**

{{< alert text="`/static/`" state="light" >}}

- site.webmanifest
  
## SEO

{{< alert text="`/data/seo.yml`" state="light" >}}

```yml
color: "#000000" // theme-color, msapplication-TileColor, mask-icon
title: "" // Global meta title
description: "" // Global meta description
```
