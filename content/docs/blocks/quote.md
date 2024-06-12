---
title: Quote
description: Displays a quote and its author
icon: blockquote-left
---

# Quote block

Displays a quote and its author

## Frontmatter

```yml
blocks:
  - type: quote
    quote: '' // string
    author:
      title: '' // string
      text: '' // string
      image:
        src: '' // string
        alt: '' // string
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/quote/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/blocks/quote/_index.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/quote.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_quote.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/quote.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
