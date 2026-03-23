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

The config file must exist at that path in your project (e.g. **postcss/bootstrap/postcss.config.js**). Each theme ships an example you can copy. If no directory is set, Hugo falls back to **postcss.config.js** at the project root.

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
