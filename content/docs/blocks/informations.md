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
    column: '' # number, columns by row in desktop (optional)
    items: []
      icon: '' # string (bootstrap icon)
      image: {} # (optional)
        src: '' # string
        alt: '' # string (optional)
        isLogo: false # boolean (optional)
      title: '' # string (optional)
      text: '' # string (optional)
      cta: {} # (optional)
        text: '' # string
        url: '' # url
        blank: false # boolean (optional)
        lang: '' # code lang (optional)
    background: false # boolean (optional)
```

{{< button url="https://demo.hugolify.io/blocks/informations/" text="Demo visual renderer" blank="true" >}}

## Params

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

Image size

```yml
blocks:
  informations:
    image:
      ratio: .5
```

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/informations.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_informations.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/informations.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/informations.yml" text="Hugolify admin file" >}}

## Related link

- {{< blank_link link="https://icons.getbootstrap.com/" text="Icon list" >}}


## CMS availability

### Hugolify Admin

- [Hugolify Admin](/docs/admin/v1/)
  - [Decap CMS](/docs/admin/v1/cms/decap-cms/) {{< badge text="Available" state="success" >}}
  - [Netlify CMS](/docs/admin/v1/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
  - [Pages CMS](/docs/admin/v1/cms/pages-cms/) {{< badge text="Available" state="success" >}}
  - [Sveltia CMS](/docs/admin/v1/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}
