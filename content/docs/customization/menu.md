---
title: Menu
description: Layout of primary navigation menu, colors…
icon: list
---

## Layout

Offcanvas is default layout

### Modal

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
header:
  layout: modal
  modal:
    size: fullscreen # default, or lg, xl
    centered: true # default, or false
```

{{< alert text="Make sure you have not disabled the loading of the corresponding [JavaScript](/docs/getting-started/customization/javascript/#bootstrap) component" state="warning" >}}

{{< blank_link link="https://getbootstrap.com/docs/5.3/components/modal/" text="Bootstrap modal documentation" >}}

### Offcanvas

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
header:
  layout: offcanvas 
  offcanvas:
    position: end # default, or start, top, bottom
```

{{< alert text="Make sure you have not disabled the loading of the corresponding [JavaScript](/docs/getting-started/customization/javascript/#bootstrap) component" state="warning" >}}

{{< blank_link link="https://getbootstrap.com/docs/5.3/components/offcanvas/" text="Bootstrap offcanvas documentation" >}}

## Navbar expand breakpoint

{{< alert text="`/assets/sass/abstracts/_variables-site.sass`" state="light" >}}

```sass
$navbar-expand: lg // false to disable
```

## Colors

{{< alert text="`/assets/sass/abstracts/_variables-site.sass`" state="light" >}}

```sass
$menu-background-color: // $header-background-color !default
$menu-color: // $header-color !default
```
