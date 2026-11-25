---
title: Migration from v1
description: Breaking changes and migration guide from Hugolify v1 to v2
weight: 9
icon: circle-arrow-up
seo:
  title: Migration from Hugolify v1 to v2
---

{{< alert-block title="Overview" state="info" >}}
v2 turns **hugolify-theme** into an agnostic core and moves CSS and JavaScript into a separate **styling module**. With **hugolify-theme-bootstrap** the rendering is identical to v1.

The theme and the admin are versioned together: a v2 project uses **hugolify-theme/v2** with **hugolify-admin/v2**. You can move the theme first and keep admin v1 for a while: it still works against the theme v2, without the `ratio` and `scrollsnap` controls. Admin v2 does not work against the theme v1.

Your content, front matter and layouts are unchanged.
{{< /alert-block >}}

## What changed

| | v1 | v2 |
| --- | --- | --- |
| Core theme | `hugolify-theme` | `hugolify-theme/v2` |
| Bootstrap CSS + JS | bundled in the core | separate module |
| Styling | fixed | `hugolify-theme-bootstrap` or `hugolify-theme-design-system` |
| PostCSS config | project root | provided by the styling module |

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

The **/v2** suffix is required: Go modules treat a major version as a distinct module path, so `hugolify-theme` and `hugolify-theme/v2` are two different modules.

Keep your content modules (`hugolify-theme-posts`, `hugolify-theme-projects`…) declared above the core theme, exactly as in v1.

## 2. Choose a styling module

**hugolify-theme-bootstrap** is the drop-in replacement for what v1 bundled: Bootstrap 5, Bootstrap Icons, SASS variables and the Bootstrap JS components. No template or content change is required, which makes it the shortest way to migrate.

**hugolify-theme-design-system** is the default styling module of v2, framework-free, built on CSS custom properties, with its icons from **hugolify-theme-icons**. Switching from Bootstrap is a change in `module.yaml`, see [Switching from hugolify-theme-bootstrap](/docs/customization/design/design-system/setup/#switching-from-hugolify-theme-bootstrap).

{{< button url="/docs/customization/design/" text="Compare the styling modules" >}}

## 3. Delete your PostCSS config

Each styling module ships its own `postcss.config.cjs` and points Hugo at it, through the `css.postcss` param set in the module's own `hugo.yaml`. The `postcss.config.js` at the root of your project is no longer read: delete it.

{{< alert-block title="PurgeCSS" state="warning" >}}
With **hugolify-theme-bootstrap**, the module's config keeps the v1 PurgeCSS setup. If your own config had safelist entries of its own, keep them in a `postcss.config.cjs` at the project root, which replaces the module's. See [PostCSS](/docs/customization/design/bootstrap/postcss/#override-the-config).
{{< /alert-block >}}

The PostCSS pipeline needs Node.js 24.5 or later (22.20 on Node 22), see [Prerequisites](/docs/getting-started/prerequisites/#nodejs).

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

**hugolify-admin** moves with the theme. Each major of the admin targets the matching major of the theme, so a v2 project uses **hugolify-admin/v2** and the `/v2` suffix applies here too. Staying on admin v1 for a transition is workable, see [Compatibility](/docs/admin/migration/#compatibility).

{{< alert-block title="Admin v2 is a prerelease" state="warning" >}}
There is no stable **v2.0.0** of hugolify-admin yet, only prerelease tags. Migrating to the theme v2 therefore means running a prerelease admin. If your project cannot take that, stay on v1 for now, theme and admin both.
{{< /alert-block >}}

{{< button url="/docs/admin/migration/" text="Migrate Hugolify Admin" >}}

## GitHub template

{{< alert-block title="hugolify-template" state="info" >}}
The {{< blank_link link="https://github.com/hugolify/hugolify-template" text="GitHub template" >}} ships **v2**: hugolify-theme/v2 with hugolify-theme-design-system, hugolify-theme-icons and hugolify-admin/v2. A project started from it today needs no migration.
{{< /alert-block >}}

## Staying on v1

The v1 documentation remains available and is no longer updated.

{{< button url="https://v1.hugolify.io/" text="Browse the v1 documentation" blank="true" >}}
