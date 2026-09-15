---
title: Informations
description:
  Displays some cards informations in column. Icon, images and button are
  available
icon: card-heading
seo:
  title: Block Informations
---

## Frontmatter

```yml
blocks:
  - type: informations
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    items: []
      icon: '' # string, icon name (optional)
      image: {} # (optional)
        src: '' # url
        alt: '' # string (optional)
        isLogo: false # boolean, renders it as a logo rather than a cropped image (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
      cta: {} # (optional)
        text: '' # string
        url: '' # url
        blank: false # boolean (optional)
        lang: '' # code lang, sets the hreflang attribute (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
      column: 3 # number, columns per row on desktop (optional)
      ratio: '' # number, image aspect ratio (optional)
      scrollsnap: '' # [none, sm, md, lg, xl, all] or object (optional)
```

An item shows an icon, an image or a logo, in that order of precedence. Only a real image is cropped to `ratio`; a logo keeps its own proportions.

See [Common keys](/docs/blocks/) for `heading`, `footing`, `scrollsnap` and the full `ui` reference.

## Params

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

Default image ratio for every informations block.

```yml
params:
  blocks:
    informations:
      image:
        ratio: .5 # number
```

{{< button url="https://demo.hugolify.io/blocks/informations/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/informations.html" text="HTML file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_informations.sass" text="SASS file — hugolify-theme-bootstrap" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-informations.css" text="CSS file — hugolify-theme-design-system" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/informations.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/partials/admin/blocks/types/informations.yml" text="Hugolify admin file" >}}

## Related link

- [Icons](/docs/customization/design/icons/)

## CMS availability

| CMS | Hugolify Admin v2 |
| --- | --- |
| [CloudCannon](/docs/admin/v1/cms/cloudcannon/) | {{< badge text="Available" state="success" >}} |
| [Decap CMS](/docs/admin/v1/cms/decap-cms/) | {{< badge text="Available" state="success" >}} |
| [Netlify CMS](/docs/admin/v1/cms/netlify-cms/) | {{< badge text="Available" state="success" >}} |
| [Pages CMS](/docs/admin/v1/cms/pages-cms/) | {{< badge text="Available" state="success" >}} |
| [Static CMS](/docs/admin/v1/cms/static-cms/) | {{< badge text="Available" state="success" >}} |
| [Sveltia CMS](/docs/admin/v1/cms/sveltia-cms/) | {{< badge text="Available" state="success" >}} |
| [Tina CMS](/docs/admin/v1/cms/tina-cms/) | {{< badge text="Available" state="success" >}} |
