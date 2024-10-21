---
title: Customization
description: To replace or add style, structure, content…
weight: 8
icon: tools
---

## Override file

In Hugo you can override files. If you add the same file name in the same directory in your project you override it.

## SASS

### Variables

Variables files in the abstracts folder allows to add custom variables or bootstrap variables. {{< blank_link link="https://github.com/twbs/bootstrap/blob/v5.3.1/scss/_variables.scss" text="Boostrap 5 variables available list on Github" >}}.

```yml
abstract
  _variables.sass # bootstrap variables override for Hugolify
  _variables-site.sass # specific for your website
  _variables.default.sass # Hugolify core variables, do not override it
```

### File override

The sass files override is possible by keeping the same tree structure and allows to overwrite the style of the theme to replace it with a specific style.

```yml
components
  _author.sass
```

### File merge

The SASS files merge allows you to add style to that of the theme. To merge SASS files, it is necessary to reproduce the same tree structure in a folder called `site` and to indicate the files in main.sass.

```yml
site
  components
    _author.sass
main.sass
```

## HTML

The HTML files override is possible by keeping the same tree structure.

```yml
layouts
  partials
    posts
      item.html
```

## Decap CMS

4 settings files are available to customize admin. See originals settings files here:

```yml
static
  admin
    app
      settings
        available-blocks.js
        available-collections.js
        available-sections.js
        available-languages.js
```

You could add some specifics blocks.

```yml
static
  admin
    app
      blocks
        …
```

Or specifics collections.

```yml
static
  admin
    app
      content
        …
```


## Icons

**Favicons**

{{< alert text="`/assets/images/favicons/`" state="light" >}}

- apple-touch-icon.png `180x180px`
- favicon-32x32.png `32x32px`
- favicon-16x16.png `16x16px`
- favicon.ico
- favicon.png
- favicon.svg
- safari-pinned-tab.svg

**Files**

{{< alert text="`/`" state="light" >}}

- site.webmanifest
  
## SEO

{{< alert text="`/data/seo.yml`" state="light" >}}

```yml
color: "#000000" // theme-color, msapplication-TileColor, mask-icon
title: "" // Global meta title
description: "" // Global meta description
```
