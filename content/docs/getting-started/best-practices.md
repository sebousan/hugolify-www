---
isIndex: false
title: Best practices
description: To lighten and make the code more semantic and readable.
weight: 8
icon: hand-thumbs-up
---

## Agnostic templates

Since v2, `hugolify-theme` is **framework-agnostic**: templates use semantic CSS classes only, with no Bootstrap-specific class names in HTML.

This makes it possible to swap the styling layer (e.g. replace `hugolify-theme-bootstrap` with `hugolify-theme-design-system`) without touching any template.

Classes in templates are semantic: `col-medium`, `badge-primary`, `btn`, `posts`, etc. Each styling module maps them to its own framework.

## hugolify-theme-bootstrap

When using {{< blank_link link="https://www.getbootstrap.com/" text="Bootstrap" >}} via `hugolify-theme-bootstrap`, semantic classes are mapped to Bootstrap utilities using `@extend`. This keeps HTML clean and customizations easy.

To lighten and make the code more semantic and readable, as well as to facilitate site customizations, `@extend` of class are preferred over using Bootstrap classes directly in HTML.

### Example

Original Bootstrap DOM

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

Hugolify SASS for posts grid (in `hugolify-theme-bootstrap`)

```sass
.posts
  @extend .row
  @extend .row-cols-1
  @extend .row-cols-md-2
  @extend .row-cols-lg-3
```

## SASS

Styleguide for writing sane, maintainable and scalable Sass.

{{< blank_link link="https://sass-guidelin.es" text="Sass Guidelines" >}}

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
