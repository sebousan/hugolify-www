---
title: PurgeCSS
description: To remove all unused CSS from Bootstrap and Hugolify, we use PurgeCSS to clean it.
weight: 5
icon: filetype-css
---

## Setup

{{< alert text="`/config/default/hugo.yaml`" state="light" >}}

```yml
build:
  buildStats:
    disableClasses: false
    disableIDs: true
    disableTags: false
    enable: true
```

{{< alert text="`/postcss.config.js`" state="light" >}}

```js
module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: "default",
    },
    "@fullhuman/postcss-purgecss": {
      mode: "all",
      content: ["./hugo_stats.json"],
      dynamicAttributes: ["aria-current", "aria-hidden", "role", "type"],
      safelist: {
        standard: [
          "show",
          "showing",
          "hide",
          "fade",
          /-backdrop$/,
          /^is-/,
          /^splide_/, // if your need carousel
        ],
      },
      defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        els = els.tags.concat(els.classes);
        return els;
      },
    },
  },
};
```

## Documentations

- {{< blank_link link="https://gohugo.io/hugo-pipes/postprocess/" text="https://gohugo.io/hugo-pipes/postprocess/" >}}
- {{< blank_link link="https://purgecss.com/guides/hugo.html" text="https://purgecss.com/guides/hugo.html" >}}
