---
title: PostCSS
description: The PostCSS config required by hugolify-theme-design-system
weight: 2
icon: filetype-js
---

{{< alert-block title="One file to create in your project" state="info" >}}
The module declares **where** Hugo looks for the PostCSS config. The file itself has to exist in your project: a module cannot provide it.
{{< /alert-block >}}

## The path

The module sets the directory in its own **hugo.yaml**, so there is nothing to declare in your project params:

```yml
# provided by hugolify-theme-design-system, do not repeat it
params:
  css:
    postcss: "postcss/design-system"
```

## The file

Create the file at that path:

{{< alert text="`/postcss/design-system/postcss.config.js`" state="light" >}}

```js
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': {},
    autoprefixer: {},
  }
};
```

The module ships that exact file at its root, ready to copy:

{{< button url="https://github.com/Hugolify/hugolify-theme-design-system/blob/main/postcss.config.js" text="postcss.config.js in the module" blank="true" >}}



## The plugins

| Plugin | Role |
| --- | --- |
| `postcss-import` | Inlines the `@import` of the npm packages (`@uncinq/css-base`, `@uncinq/css-components`…). Hugo's own `inlineImports` resolves what it finds under `assets/` and skips the rest |
| `postcss-custom-media` | Resolves the `@custom-media` breakpoints at build time. See [CSS](/docs/customization/design/design-system/css/#breakpoints) |
| `autoprefixer` | Vendor prefixes, driven by the `.browserslistrc` of your project |

## Install the packages

```bash
hugo mod get && hugo mod npm pack && yarn install
```

Projects started from {{< blank_link link="https://github.com/Hugolify/hugolify-template/" text="hugolify-template" >}} have it as a script:

```bash
yarn install:hugolify
```

Run it again after every `hugo mod get -u`. The npm dependencies are declared by the **modules**, not by your project, and `hugo mod npm pack` is what copies them into your `package.json`. Update a module without re-running it and `node_modules` stays behind: a package the module has started importing breaks the build on an unresolved `@import`, and a package left at an older major is worse, the CSS reads tokens that do not exist yet and nothing errors.

## Troubleshooting

### Why the module cannot provide it

Hugo resolves `css.postcss` **from the project root, on the real filesystem**, and the file is then loaded by Node (`postcss-load-config`), which knows nothing about Hugo's virtual filesystem. A module mount therefore cannot supply it, and Hugo does not fall back to the theme or to the modules:

```txt
POSTCSS: failed to transform "css/main.css" (text/css):
postcss config "postcss/design-system" not found
```

### The stylesheet is not processed, and nothing errors

If the `package.json` of your project declares `"type": "module"`, a `postcss.config.js` written in CommonJS loads as an **empty config**, without an error. The stylesheet comes out unprocessed: npm imports left as-is, `@custom-media` unresolved.

Name the file `postcss.config.cjs` instead: `postcss-load-config` looks for it and loads it with its CommonJS loader.

### The build fails on a missing config

```txt
postcss config "postcss/design-system" not found
```

The directory does not exist in the project. Create `postcss/design-system/postcss.config.js`. Hugo never looks anywhere else.
