---
title: Map
description: Displays a simple map with one marker.
icon: geo-alt
seo:
  title: Block Map
---

{{< badge text="GDPR compliant" state="success" >}}

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


{{< button url="https://demo.hugolify.io/blocks/map/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/map.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_map.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/assets/js/features/map.js" text="Javascript file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/map.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/map.yml" text="Hugolify admin file" >}}

## Related links

- [Enable / Disable javascript](/docs/getting-started/customization/javascript/#map-leaflet)
- {{< blank_link link="https://www.openstreetmap.org/" text="Open street map" >}}
- {{< blank_link link="https://leafletjs.com/" text="leafletjs documentation" >}}

## CMS availability

### Hugolify Admin

- [Hugolify Admin](/docs/cms/admin/)
  - [Decap CMS](/docs/cms/admin/cms/decap-cms/) {{< badge text="Available" state="success" >}}
  - [Netlify CMS](/docs/cms/admin/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
  - [Pages CMS](/docs/cms/admin/cms/pages-cms/) {{< badge text="Available" state="success" >}} {{< badge text="Not with map widget" state="warning" >}}
  - [Sveltia CMS](/docs/cms/admin/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

### Old repositories 

- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Available" state="success" >}}
