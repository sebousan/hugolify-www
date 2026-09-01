---
title: Migration from v1
description: Breaking changes and migration guide from Hugolify v1 to v2
weight: 9
icon: arrow-up-circle
seo:
  title: Migration from Hugolify v1 to v2
---

{{< alert-block title="Overview" state="info" >}}
v2 turns **hugolify-theme** into an agnostic core and moves CSS and JavaScript into a separate **styling module**. With **hugolify-theme-bootstrap** the rendering is identical to v1.

The theme and the admin are versioned together: a v2 project uses **hugolify-theme/v2** with **hugolify-admin/v2**. Mixing majors is not supported.

Your content, front matter and layouts are unchanged.
{{< /alert-block >}}

## What changed

| | v1 | v2 |
| --- | --- | --- |
| Core theme | `hugolify-theme` | `hugolify-theme/v2` |
| Bootstrap CSS + JS | bundled in the core | separate module |
| Styling | fixed | `hugolify-theme-bootstrap` or `hugolify-theme-design-system` |
| PostCSS config | project root | path defined by the styling module |

## 1. Update the modules

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:

# Core theme
- path: github.com/hugolify/hugolify-theme/v2      # add /v2

# Styling layer
- path: github.com/hugolify/hugolify-theme-bootstrap  # add this

# Headless CMS
- path: github.com/hugolify/hugolify-admin/v2
```

The `/v2` suffix is required: Go modules treat a major version as a distinct module path, so `hugolify-theme` and `hugolify-theme/v2` are two different modules.

Keep your content modules (`hugolify-theme-posts`, `hugolify-theme-projects`…) declared above the core theme, exactly as in v1.

## 2. Choose a styling module

**hugolify-theme-bootstrap** is the default and a drop-in replacement for what v1 bundled: Bootstrap 5, Bootstrap Icons, SASS variables and the Bootstrap JS components. No template or content change is required.

**hugolify-theme-design-system** is the framework-free alternative, built on CSS custom properties and a lightweight icon system. Switching between the two is a one-line change in `module.yaml`.

{{< button url="/docs/customization/design/" text="Compare both design modules" >}}

## 3. Move your PostCSS config

Each styling module declares the directory where Hugo looks for `postcss.config.js`, through the `css.postcss` param set in the module's own `hugo.yaml`. With **hugolify-theme-bootstrap** that path is `postcss/bootstrap`.

```
postcss/
  bootstrap/
    postcss.config.js
```

If your project kept `postcss.config.js` at the root, move it into that directory. Each styling module ships an example you can copy.

{{< alert-block text="PurgeCSS" state="warning" >}}
This is the step most likely to break a build silently: if the file is not found at the expected path, Hugo falls back to the project root, and a stale or missing config produces an unpurged or over-purged stylesheet rather than an error.
{{< /alert-block >}}

## 4. Fetch the modules

```bash
hugo mod get -u
hugo mod tidy
```

## What has not changed

- Content structure, front matter and blocks
- Layout overrides in `/layouts/`
- Shortcodes
- Section and taxonomy modules

## Hugolify Admin

**hugolify-admin** moves with the theme. Each major of the admin targets the matching major of the theme, so a v2 project uses **hugolify-admin/v2** and the `/v2` suffix applies here too.

{{< alert-block title="Admin v2 is a prerelease" state="warning" >}}
There is no stable **v2.0.0** of hugolify-admin yet, only prerelease tags. Migrating to the theme v2 therefore means running a prerelease admin. If your project cannot take that, stay on v1 for now — theme and admin both.
{{< /alert-block >}}

{{< button url="/docs/admin/v2/" text="See Hugolify Admin v2" >}}

## GitHub template

{{< alert-block title="hugolify-template" state="warning" >}}
The {{< blank_link link="https://github.com/hugolify/hugolify-template" text="GitHub template" >}} still ships **v1** (`hugolify-theme v1.28.0`, `hugolify-admin v1.0.0`). If you start a new project from it today, apply this guide to move it to v2.
{{< /alert-block >}}

## Staying on v1

The v1 documentation remains available and is no longer updated.

{{< button url="https://v1.hugolify.io/" text="Browse the v1 documentation" blank="true" >}}
