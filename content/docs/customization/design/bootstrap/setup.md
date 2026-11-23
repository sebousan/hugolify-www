---
title: Setup
description: Setup hugolify-theme-bootstrap
weight: 1
icon: sliders-horizontal
---

{{< alert-block title="hugolify-theme-bootstrap" state="info" >}}
Bootstrap is include in hugolify-theme-bootstrap module.

It provides Bootstrap 5:

- SASS components and variables
- Bootstrap Icons
- Bootstrap JS components
- Vanilla JS
{{< /alert-block >}}

{{< blank_link link="https://github.com/Hugolify/hugolify-theme-bootstrap" text="hugolify-theme-bootstrap on GitHub" >}}

## Example project

Start from `hugolify-template` and swap its styling module for this one in `config/_default/module.yaml`, see [Install](#install). The module provides its PostCSS config (PurgeCSS included), see [PostCSS](/docs/customization/design/bootstrap/postcss/).

{{< button url="https://github.com/Hugolify/hugolify-template" text="hugolify-template" blank="true" >}}

## What it provides

- {{< blank_link link="https://getbootstrap.com/" text="Bootstrap 5" >}} (CSS + SASS + JS)
- {{< blank_link link="https://icons.getbootstrap.com/" text="Bootstrap Icons" >}}
- SASS variables (`abstracts/_variables.sass`)
- Vendor packages (`vendors/_packages.sass`)
- Bootstrap JS component overrides (menu, tooltip, search…)
- Semantic column classes (`col-small`, `col-medium`…)
- Semantic badge classes (`badge-primary`, `badge-success`…)
- 5 color themes

## Install

```yml
# /config/_default/module.yaml
imports:
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-bootstrap
  - path: github.com/hugolify/hugolify-admin/v2
```

## Migration from v1

In v1, Bootstrap was bundled directly inside `hugolify-theme`. No styling module needed to be declared.

In v2, declare `hugolify-theme-bootstrap` explicitly:

```yml
# /config/_default/module.yaml
imports:
  - path: github.com/hugolify/hugolify-theme/v2 # add /v2
  - path: github.com/hugolify/hugolify-theme-bootstrap  # add this
  - path: github.com/hugolify/hugolify-admin/v2
```

No template or content changes are required: the rendering is identical to v1.
