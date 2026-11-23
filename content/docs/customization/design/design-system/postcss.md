---
title: PostCSS
description: The PostCSS config of hugolify-theme-design-system, provided by the module
weight: 2
icon: brand:postcss
---

{{< alert-block title="Nothing to create in your project" state="info" >}}
The module ships its own PostCSS config and points Hugo at it. Your project only installs the npm packages that config needs.

Requires **hugolify-theme-design-system v1.50.0** or later. Older releases expected a copy in `postcss/design-system/`, see [Troubleshooting](#troubleshooting).
{{< /alert-block >}}

## How it is loaded

Hugo mounts the `postcss.config.*` files found at the root of each module, and of your project, into `assets/_jsconfig`. The module declares its own in its `hugo.yaml`, so there is nothing to declare in your project params:

```yml
# provided by hugolify-theme-design-system, do not repeat it
params:
  css:
    postcss: "postcss.config.cjs"
```

{{< button url="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/postcss.config.cjs" text="postcss.config.cjs in the module" blank="true" >}}

## The plugins

| Plugin | Role |
| --- | --- |
| `postcss-import` | Inlines the `@import` of the npm packages (`@uncinq/css-base`, `@uncinq/css-components`…). Hugo's own `inlineImports` resolves what it finds under `assets/` and skips the rest |
| `postcss-custom-media` | Resolves the `@custom-media` breakpoints at build time. See [CSS](/docs/customization/design/design-system/css/#breakpoints) |
| `autoprefixer` | Vendor prefixes, for the browsers the module targets. See [Browsers](#browsers) |

## Browsers

The browser list comes with the module too, in `assets/_jsconfig/browserslist`. Its floors are what the CSS needs without a fallback: native nesting and relative colors (`oklch(from …)`), so Chrome and Edge 131, Firefox 133, Safari and iOS 18.

A `.browserslistrc` in your project is **ignored**: you can delete it. To change the list, add `assets/_jsconfig/browserslist` to your project: the first file found wins, like any asset.

{{< button url="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/assets/_jsconfig/browserslist" text="browserslist in the module" blank="true" >}}

## Install the packages

```bash
hugo mod get && hugo mod npm pack && yarn install
```

Projects started from {{< blank_link link="https://github.com/Hugolify/hugolify-template/" text="hugolify-template" >}} have it as a script:

```bash
yarn install:hugolify
```

Run it again after every `hugo mod get -u`. The npm dependencies are declared by the **modules**, not by your project, and `hugo mod npm pack` is what copies them into your `package.json`. Update a module without re-running it and `node_modules` stays behind: a package the module has started importing breaks the build on an unresolved `@import`, and a package left at an older major is worse, the CSS reads tokens that do not exist yet and nothing errors.

## Override the config

Add a `postcss.config.cjs` at the root of your project: Hugo mounts it at the same place as the module's, and the files of your project come first. Start from the module's file.

Keep that exact name, it is the one the module points at. The `.cjs` extension makes it CommonJS: write it with `require()`, like the module's.

{{< alert text="Why CommonJS: Node loads the module's file from the Hugo module cache, which has no `node_modules`. The plugins come from the `node_modules` of your project, that Hugo passes as `NODE_PATH`. `require()` reads it on every Hugo version, an ESM `import` ignores it before Hugo 0.164." state="light" >}}

## Troubleshooting

### The build fails, or hangs, on the CSS

Check your Node.js version. Since Hugo 0.161, Node runs with the permission model, and older releases crash while resolving the config (`Access to this API has been restricted`) or never return. Use **Node 24.5** or later, or **22.20** or later on Node 22.

On Netlify, set the version in `netlify.toml`:

```toml
[build.environment]
  NODE_VERSION = "24"
```

### postcss config "postcss/design-system" not found

```txt
POSTCSS: failed to transform "css/main.css" (text/css):
postcss config "postcss/design-system" not found
```

The module is older than v1.50.0 and still looks for a copy in your project. Update it:

```bash
hugo mod get -u github.com/hugolify/hugolify-theme-design-system && yarn install:hugolify
```

Then delete what the project no longer needs: the `postcss/design-system/` directory, a `postcss.config.js` left at the root, and `.browserslistrc`.

### Cannot find module

```txt
Error: Cannot find module 'postcss-import'
```

The npm packages are not installed: run the [install command](#install-the-packages).
