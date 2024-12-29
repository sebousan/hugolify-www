---
title: Decap CMS
description: Open-source content management Git-based.
weight: 2
image:
  src: /images/uploads/logo-decap-cms.png
---


## Setup

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-decap-cms
```

## Configuration

Only if you want customize your Hugolify Admin you can create some settings files.

### Collections

Create a `available-collections.js` file in your settings directory.

{{< alert text="`/static/admin/app/settings`" state="light" >}}

Example to have only Posts and Taxonomies (Categories and Tags)

```js
import posts from "../content/posts.js";
import categories from "../content/categories.js";
import tags from "../content/tags.js";

export default [posts, categories, tags];
```

### Blocks

Create a `available-blocks.js` file in your settings directory.

{{< alert text="`/static/admin/app/settings`" state="light" >}}

Example to have a selection of available blocks

```js
export { block_alert } from "../blocks/alert.js";
export { block_cta } from "../blocks/cta.js";
export { block_pages } from "../blocks/pages.js";
export { block_quote } from "../blocks/quote.js";
export { block_editorial } from "../blocks/editorial.js";
export { block_embed } from "../blocks/embed.js";
export { block_faq } from "../blocks/faq.js";
export { block_figure } from "../blocks/figure.js";
export { block_form } from "../blocks/form.js";
export { block_gallery } from "../blocks/gallery.js";
export { block_images } from "../blocks/images.js";
export { block_paragraph } from "../blocks/paragraph.js";
export { block_testimonials } from "../blocks/testimonials.js";
export { block_title } from "../blocks/title.js";
```

### Sections

Create a `available-sections.js` file in your settings directy.

{{< alert text="`/static/admin/app/settings`" state="light" >}}

Example to have a selection of available sections for specific blocks

```js
export const availableSections = ["posts", "projects"];
```

### Multilingual content edition

Create a `available-languages.js` file in your settings directy.

{{< alert text="`/static/admin/app/settings`" state="light" >}}

```js
export const availableLanguages = ["fr", "en"];
```

### Interface language

Create a `locale.js` file in your config directory.

{{< alert text="`/static/admin/app/config`" state="light" >}}

```js
export const locale = "fr"; // or 'en'
```

## Documention

- {{< blank_link link="https://decapcms.org/docs/intro/" text="https://decapcms.org/docs/intro/" >}}

## Module
- {{< blank_link link="https://github.com/hugolify/hugolify-decap-cms" text="Hugolify Decap CMS" >}}