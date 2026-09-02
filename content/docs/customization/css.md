---
title: CSS
description: Preload CSS or add print CSS
icon: filetype-css
---

## PostCSS

{{< alert text="`/config/default/params.yaml`" state="light" >}}

Each design module defines a directory where Hugo looks for **postcss.config.js**. This value is set in the theme's own **hugo.yaml**, you don't need to override it in your project params:

```yaml
# Set by the theme (e.g. hugolify-theme-bootstrap/hugo.yaml)
css:
  postcss: "postcss/bootstrap"       # hugolify-theme-bootstrap
```

The config file must exist at that path in your project (e.g. **postcss/bootstrap/postcss.config.js**). Each styling module ships the file at its root, ready to copy. A declared path with no file there is a build error. The fallback to **postcss.config.js** at the project root only applies when no path is declared at all.

* [PostCSS for hugolify-theme-bootstrap](/docs/customization/design/bootstrap/postcss/)
* [PostCSS for hugolify-theme-design-system](/docs/customization/design/design-system/postcss/)

## Preload CSS

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yaml
css:
  preload: true   # adds <link rel="preload"> for performance
```

## Print CSS

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yaml
css:
  print: true     # loads sass/print.sass or css/print.css with media="print"
```
