---
title: Best practices
description: To lighten and make the code more semantic and readable.
weight: 6
icon: hand-thumbs-up
---

## Code

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

## SASS Guidelines

Styleguide for writing sane, maintainable and scalable Sass.

{{< blank_link link="https://sass-guidelin.es" text="https://sass-guidelin.es" >}}

## Prettier

{{< blank_link link="https://prettier.io/" text="https://prettier.io/" >}}
