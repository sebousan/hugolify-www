---
title: Map
description: Displays a simple map with one marker.
icon: geo-alt
---

{{< alert text="RGPD compliant" state="success" >}}

## Frontmatter

```yml
blocks:
  - type: map
    heading: {}
    location: {} // map
    zoom: 13 // [1…20]
    background: false
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/map/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/map.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/map.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_map.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/assets/js/components/map.js" text="JS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/map.js" text="Decap CMS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/map.yml" text="Hugolify admin file" >}}

## CMS

- [Hugolify Admin](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}


## Related links

- [Enable / Disable javascript](/docs/getting-started/customization/javascript/#map-leaflet)
- {{< blank_link link="https://www.openstreetmap.org/" text="Open street map" >}}
- {{< blank_link link="https://leafletjs.com/" text="leafletjs documentation" >}}
