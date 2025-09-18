---
isIndex: false
title: Best practices
description: To lighten and make the code more semantic and readable.
weight: 8
icon: hand-thumbs-up
---

## Bootstrap

{{< blank_link link="https://www.getbootstrap.com/" text="Bootstrap" >}} in version 5.3 is used to support the theme.

To lighten and make the code more semantic and readable, as well as to facilitate site customizations, `@extend` of class are preferred.

### Example

Original bootstrap DOM

```html
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
  <div class="col">
    <div class="card"></div>
  </div>
</div>
```

Hugolify DOM for posts grid

```html
<div class="posts">
  <div>
    <article class="post"></article>
  </div>
</div>
```

Hugolify SASS for posts grid

```sass
.posts
  @extend .row
  @extend .row-cols-1
  @extend .row-cols-md-2
  @extend .row-cols-lg-3
```

## SASS

Styleguide for writing sane, maintainable and scalable Sass.

{{< blank_link link="https://sass-guidelin.es" text="https://sass-guidelin.es" >}}

## Prettier

We use {{< blank_link link="https://prettier.io/" text="prettier" >}} to keep same codestyle everywhere.

If you use Vs Code, you will need to install the {{< blank_link link="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" text="prettier extension" >}}.

Then, in settings:

- Select Prettier as default formater
- Enable "Format on save"

Create files: 

{{< alert text="`/.prettierrc`" state="light" >}}

```yml
"@hugolify/prettier-config"
```

{{< alert text="`/.prettierignore`" state="light" >}}

```yml
**/*.html
```
