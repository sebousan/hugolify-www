---
title: CSS
description: Preload CSS or add print CSS
icon: filetype-css
---

## Preload CSS

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yaml
css:
  preload: true   # adds <link rel="preload"> for performance
```

## Add print CSS

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yaml
css:
  print: true     # loads sass/print.sass or css/print.css with media="print"
```