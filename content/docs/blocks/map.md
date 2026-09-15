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
    location: {} # GeoJSON point, from the CMS map widget (optional *)
    coordinates: {} # (optional *)
      lat: '' # float
      lng: '' # float
    zoom: 13 # [1…20] (optional)
    marker_hidden: false # boolean, renders the map without its marker (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
```

\* Pick one: `location` (the CMS map widget), `coordinates` (an object with `lat` and `lng`), or `show_places` (one marker per page of your places section). `show_places` wins over the other two.

See [Common keys](/docs/blocks/) for `heading`, `footing` and the full `ui` reference.

{{< button url="https://demo.hugolify.io/blocks/map/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/map.html" text="HTML file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_map.sass" text="SASS file — hugolify-theme-bootstrap" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-map.css" text="CSS file — hugolify-theme-design-system" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/js/features/map.js" text="Javascript file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/map.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/partials/admin/blocks/types/map.yml" text="Hugolify admin file" >}}

## Related links

- [Enable / Disable javascript](/docs/customization/design/bootstrap/javascript/#map-leaflet)
- {{< blank_link link="https://www.openstreetmap.org/" text="Open street map" >}}
- {{< blank_link link="https://leafletjs.com/" text="leafletjs documentation" >}}

## CMS availability

| CMS | Hugolify Admin v2 |
| --- | --- |
| [CloudCannon](/docs/admin/v1/cms/cloudcannon/) | {{< badge text="Without the map widget" state="warning" >}} |
| [Decap CMS](/docs/admin/v1/cms/decap-cms/) | {{< badge text="Available" state="success" >}} |
| [Netlify CMS](/docs/admin/v1/cms/netlify-cms/) | {{< badge text="Available" state="success" >}} |
| [Pages CMS](/docs/admin/v1/cms/pages-cms/) | {{< badge text="Without the map widget" state="warning" >}} |
| [Static CMS](/docs/admin/v1/cms/static-cms/) | {{< badge text="Available" state="success" >}} |
| [Sveltia CMS](/docs/admin/v1/cms/sveltia-cms/) | {{< badge text="Available" state="success" >}} |
| [Tina CMS](/docs/admin/v1/cms/tina-cms/) | {{< badge text="Without the map widget" state="warning" >}} |

{{< alert-block state="warning" >}}
CloudCannon, Pages CMS and Tina CMS have no map widget, so the admin gives them a `coordinates` object with `lat` and `lng` fields instead of the `location` picker. The block itself works the same.
{{< /alert-block >}}
