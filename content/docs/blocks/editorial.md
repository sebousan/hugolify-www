---
title: Editorial
description:
  Displays a block with content (title, text, button) on the left and image on
  the right (possible to reverse the direction). In mobile the image is first.
icon: postcard
---

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
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/editorial.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/editorial.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_editorial.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/editorial.js" text="Decap CMS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/editorial.yml" text="Hugolify admin file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}
