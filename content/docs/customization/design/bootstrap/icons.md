---
title: Icons
description: Bootstrap, Materials, Icomoon icons…
weight: 4
icon: emoji-smile
---

{{< alert-block title="Overview" state="info" >}}
**hugolify-theme-bootstrap** includes {{< blank_link link="https://icons.getbootstrap.com/" text="Bootstrap Icons" >}} by default. But you can replace it with any other icon set.
{{< /alert-block >}}

## Optimize

To strip unused icons from the font, run:

```bash
yarn build:icons:bootstrap
```

This script parses templates and SASS to detect which icons are actually used and rebuilds the icon font with only those.

## Custom icon sets

You can replace or extend the default icon set by overriding the icons SASS in your project.

### Material icons

Use {{< blank_link link="https://fonts.google.com/icons" text="Google Material Icons" >}}.

```bash
assets/
└── sass/
    └── base/
        └── _icons.sass
```

```sass
@import "base/icons/material-icons/icons"
```

Add icon variables with glyph names:

```sass
// example
$icon-arrow-right: 'east'
```



### Icomoon

For custom SVG icon sets via {{< blank_link link="https://icomoon.io/app/" text="Icomoon" >}}:

```bash
assets/
└── sass/
    └── base/
        └── _icons.sass
```

```sass
@import "base/icons/icomoon/icons"
```

```scss
$icons-map: ();
```