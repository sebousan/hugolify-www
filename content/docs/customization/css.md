---
title: CSS
description: Preload CSS or add print CSS
icon: filetype-css
---

## PostCSS

{{< alert text="`/config/default/params.yaml`" state="light" >}}

Each design module ships its own PostCSS config. Set the file name in your params:

```yaml
css:
  postcss: "postcss.config.bootstrap.js"       # hugolify-theme-bootstrap
  # postcss: "postcss.config.design-system.js" # hugolify-theme-design-system
```

The file must exist at the root of your project. If omitted, Hugo falls back to `postcss.config.js`.

{{< button text="Bootstrap PostCSS & PurgeCSS" url="/docs/customization/design/bootstrap/css/#purgecss" >}}

---

## Preload CSS

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yaml
css:
  preload: true   # adds <link rel="preload"> for performance
```

---

## Print CSS

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yaml
css:
  print: true     # loads sass/print.sass or css/print.css with media="print"
```
