---
title: CSS
description: Preload CSS or add print CSS
icon: brand:css
---

## PostCSS

Each styling module ships its own PostCSS config and points Hugo at it in its **hugo.yaml**. There is nothing to copy, and nothing to declare in your project params:

```yaml
# Set by the styling module (e.g. hugolify-theme-design-system/hugo.yaml)
css:
  postcss: "postcss.config.cjs"
```

A **postcss.config.cjs** at the root of your project replaces the module's. The PostCSS pipeline needs Node.js 24.5 or later (22.20 on Node 22), see [Prerequisites](/docs/getting-started/prerequisites/#nodejs).

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
