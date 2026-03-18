---
title: Menu
description: Layout of primary navigation menu, colors…
icon: list
---

## Layout

Offcanvas is the default layout.

### Modal

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
header:
  layout: modal
  modal:
    size: fullscreen # default, or lg, xl
    centered: true # default, or false
```

{{< alert-block state="info" >}}
Modal layout requires `hugolify-theme-bootstrap`. Make sure you have not disabled the corresponding [Bootstrap JS component](/docs/customization/javascript/#bootstrap).
{{< /alert-block >}}

{{< blank_link link="https://getbootstrap.com/docs/5.3/components/modal/" text="Bootstrap modal documentation" >}}

### Offcanvas

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
header:
  layout: offcanvas
  offcanvas:
    position: end # default, or start, top, bottom
```

{{< alert-block state="info" >}}
Offcanvas layout requires `hugolify-theme-bootstrap`. Make sure you have not disabled the corresponding [Bootstrap JS component](/docs/customization/javascript/#bootstrap).
{{< /alert-block >}}

{{< blank_link link="https://getbootstrap.com/docs/5.3/components/offcanvas/" text="Bootstrap offcanvas documentation" >}}

## Navbar expand breakpoint

{{< alert-block state="info" >}}
This variable is provided by `hugolify-theme-bootstrap`. Override it in your project's `_variables.sass`.
{{< /alert-block >}}

```sass
$navbar-expand: lg // false to disable
```

## Colors

Override menu colors in your project's `_variables.sass` (or `site.sass` for scoped overrides):

```sass
$menu-background-color: // $header-background-color !default
$menu-color: // $header-color !default
```
