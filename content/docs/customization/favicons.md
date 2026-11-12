---
title: Favicons
description: To replace or add favicons…
icon: brand:googlechrome
---

## Icons

{{< alert text="`/static/assets/images/favicons/`" state="light" >}}

- favicon.svg
- favicon.ico `32x32px`
- favicon-96x96.png `96x96px`
- apple-touch-icon.png `180x180px`

[RealFaviconGenerator](https://realfavicongenerator.net/) produces this set, with the manifest icons `web-app-manifest-192x192.png` and `web-app-manifest-512x512.png`.

Still read for older sets: favicon-32x32.png, favicon-16x16.png and favicon.png.

## Files

{{< alert text="`/static/`" state="light" >}}

- site.webmanifest

The `theme-color` comes from `color` in `/data/seo.yml`. Without it, the browser picks its toolbar colour from the page.
  