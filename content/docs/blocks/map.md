---
title: Map
description: Displays a simple map with one marker.
icon: geo-alt
---

{{< badge text="RGPD compliant" state="success" >}}

## Frontmatter

```yml
blocks:
  - type: map
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    show_places: false # boolean (optional *)
    location: {} # map widget (optional *)
    coordinates: {} # (optional *)
      lat: # float
      lng: # float
    zoom: 13 # [1…20] (optional)
    grid: '' # [small, medium, large, container, full] (optional)
    background: false # boolean (optional)
```
\* use location (map widget from CMS), coordinates (object with lat and lng) or show_places (map with all markers from your places section).

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
