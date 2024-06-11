---
title: Editorial
description:
  Displays a block with content (title, text, button) on the left and image on
  the right (possible to reverse the direction). In mobile the image is first.
---

# Editorial block

Displays a block with content (title, text, button) on the left and image on
the right (possible to reverse the direction). In mobile the image is first.

## Frontmatter

```yml
blocks:
  - type: editorial
    direction: ""
    title: ""
    text: ""
    cta:
      text: ""
      url: ""
      blank: false
    image:
      src: ""
      alt: ""
```

## Params

Image size

```yml
params:
  blocks:
    editorial:
      desktop: "624x"
      mobile: "336x"
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/editorial/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/blocks/editorial/_index.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/editorial.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_editorial.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/editorial.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
