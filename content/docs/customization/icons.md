---
title: Icons
description: To change or optimize icons…
icon: emoji-smile
---


## Bootstrap icons

By default, Hugolify use {{< blank_link link="https://icons.getbootstrap.com/" text="Bootstrap icons" >}}.

{{< alert text="`/assets/sass/base/_icons.sass`" state="light" >}}

```sass
@import "base/icons/bootstrap-icons/icons"
```

### Optimise

For optimise automatically bootstrap icons font with icons used. This command will run a node script that parses the content and sass to determine useful icons.


```bash
yarn build:icons:bootstrap
```


## Material icons

{{< badge text="Beta" state="warning" >}}

If you want to use {{< blank_link link="https://fonts.google.com/icons" text="Google material icons" >}}.

{{< alert text="`/assets/sass/base/_icons.sass`" state="light" >}}

```sass
@import "base/icons/material-icons/icons"
```

Add icons variables with glyph.

{{< alert text="`/assets/sass/base/icons/material-icons/_variables.sass`" state="light" >}}

```sass
// example
$icon-arrow-right: 'east'
```

## Icomoon

If you used custom icons and {{< blank_link link="https://icomoon.io/app/" text="icomoon app" >}}.

{{< alert text="`/assets/sass/base/_icons.sass`" state="light" >}}

```sass
@import "base/icons/icomoon/icons"
```

Add icons variable with glyph.

{{< alert text="`/assets/sass/base/icons/icomoon/_variables.scss`" state="light" >}}

```scss
$icons-map: ();
```