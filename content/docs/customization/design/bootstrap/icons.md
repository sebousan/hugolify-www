---
title: Icons
description: Bootstrap, Materials, Icomoon icons…
weight: 5
icon: face-slightly-smiling
---

{{< alert-block title="Overview" state="info" >}}
**hugolify-theme-bootstrap** includes {{< blank_link link="https://icons.getbootstrap.com/" text="Bootstrap Icons" >}} by default. But you can replace it with any other icon set.
{{< /alert-block >}}

## Optimize

The full Bootstrap Icons font is served by default. To serve only the icons your site uses, a script of the module scans the SASS of every module and of your project, then writes a subset of the font and its SASS map into your project:

- `static/assets/fonts/bootstrap-icons/`
- `assets/scss/bootstrap-icons/bootstrap-icons.scss`

The script ships with the module, in the Hugo module cache. A module cannot add npm scripts, so add this one to the `package.json` of your project: it asks Hugo where the module is, runs the script from there, then builds the site.

{{< alert text="`/package.json`" state="light" >}}

```json
"build:icons": "node \"$(hugo config mounts | grep -o '\"dir\": *\"[^\"]*hugolify-theme-bootstrap[^\"]*\"' | head -1 | cut -d'\"' -f4)/scripts/build-icons.mjs\" && yarn build"
```

```bash
yarn build:icons
```

Its dependencies (`subset-font`, `js-yaml`) come with the module, through `hugo mod npm pack && yarn install`. Run it again whenever the site uses a new icon, and commit the generated files.

## Custom icon sets

You can replace or extend the default icon set by overriding the icons SASS in your project.

### Material icons

Use {{< blank_link link="https://fonts.google.com/icons" text="Google Material Icons" >}}.

```txt
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