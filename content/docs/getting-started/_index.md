---
isIndex: false
title: Getting Started
description: How to install and setup Hugolify.
weight: 1
icon: rocket
---

Hugolify is a set of Hugolify modules. A site imports the core theme, a styling module, the headless CMS, then one module per section it needs: posts, projects, products, events… Each module brings its templates, its styles and its CMS collection.

## Quick start

1. Install the [prerequisites](/docs/getting-started/prerequisites/): Git, Go, Hugo 0.158.0 or later, and Node.js 24.5 or later (22.20 on Node 22).
2. Create your repository from the {{< blank_link link="https://github.com/Hugolify/hugolify-template" text="hugolify-template" >}}, then clone it: see [Install](/docs/getting-started/install/).
3. Download the modules and merge their npm dependencies:

```bash
yarn install:hugolify && yarn install
```

4. Launch the site with livereload, on `http://localhost:1313/`:

```bash
yarn watch
```

5. Add the sections your site needs in `/config/_default/module.yaml`: see [Setup](/docs/getting-started/setup/) and the list of [modules](/docs/getting-started/modules/).
6. Pick your CMS, served at `/admin/`: see [CMS](/docs/admin/cms/).
7. Build for production with `yarn build`, and deploy: see [Hosting](/docs/getting-started/hosting/).

{{< alert text="Run `yarn install:hugolify` again whenever you add, remove or update a module." state="info" >}}

## Architecture

| Layer | Module | Role |
| --- | --- | --- |
| Project | hugolify-template | Your content, your config, your token overrides |
| Core | hugolify-theme | Templates, functions, layouts and vendors JS |
| Styling | hugolify-theme-design-system | CSS and JS, with tokens |
| Icons | hugolify-theme-icons | Lucide and Simple Icons |
| CMS | hugolify-admin | The CMS configuration, generated on each build |
| Sections | hugolify-theme-* | One module per type of content |

## Next steps

- [Commands](/docs/getting-started/commands/): launch, build, update and clean.
- [Best practices](/docs/getting-started/best-practices/): lighter and more semantic code.
- [Migration from v1](/docs/getting-started/migration/): breaking changes of v2.
- [Search](/docs/getting-started/search/), [Form](/docs/getting-started/form/), [Analytics](/docs/getting-started/analytics/), [Cookie banner](/docs/getting-started/cookie-consent/): the features to switch on.
