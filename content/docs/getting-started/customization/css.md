---
title: CSS
description: To replace or add style…
icon: filetype-sass
---

## Variables

{{< alert-block state="warning" >}}
Hugolify uses {{< blank_link link="https://github.com/twbs/bootstrap/blob/v5.3.8/scss/_variables.scss" text="Bootstrap variables" >}} and {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/assets/sass/abstracts/_variables.default.sass" text="Hugolify variables" >}}.
{{< /alert-block >}}

```bash
assets/
└── sass/
    └── abstract/
        ├── _variables.sass # bootstrap variables override for Hugolify
        ├── _variables-site.sass # specific for your website
        └── _variables.default.sass # Hugolify core variables, do not override it
```

## Mixins

{{< alert-block state="warning" >}}
Hugolify uses {{< blank_link link="https://github.com/twbs/bootstrap/blob/v5.3.8/scss/_mixins.scss" text="Bootstrap mixins" >}} and {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/assets/sass/abstracts/_mixins.default.sass" text="Hugolify mixins" >}}.
{{< /alert-block >}}

```bash
assets/
└── sass/
    └── abstract/
        ├── _mixins.sass # specific for your website
        └── _mixins.default.sass # Hugolify core mixins, do not override it
```

## File override

The sass files override is possible by keeping the same tree structure and allows to overwrite the style of the theme to replace it with a specific style.

```bash
assets/
└── sass/
    └── components/
        └── _author.sass
```

## File merge

The SASS files merge allows you to add style to that of the theme. To merge SASS files, it is necessary to reproduce the same tree structure in a folder called `site` and to indicate the files in `site.sass`.

### Tree structure

```bash
assets/
└── sass/
    ├── site/
    │   └── components/
    │       └── _author.sass
    └── site.sass
```

### Site SASS file (site.sass)

```sass
// Site
@import "site/components/author"
```
