---
title: Cookie banner
description: Enable a cookie banner
weight: 7
icon: cookie
---

## Setup

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
cookie_banner:
  enable: false # Enable Cookie banner
  cookieconsent:
    enable: false # Use CookieConsent
    analytics: false
    functionality: false
    marketing: false
    disablePageInteraction: false
    consentModal:
      layout: box
      position: bottom left
    preferencesModal:
      layout: box
      position: bottom left
```

The `analytics` category is what loads Google Analytics and Matomo when
`matomo.cookies: true`; the `marketing` category is what loads Meta Pixel.
See [Analytics](/docs/getting-started/analytics/).

Cookieless analytics services — Umami, Plausible, Seline, Fathom, GoatCounter,
Simple Analytics, Cabin and Matomo with `cookies: false` — load without the
banner and do not require consent.

## Documentation

A complete documentation of how to use CookieConsent.

{{< button url="https://playground.cookieconsent.orestbida.com/" text="See documentation" blank=true >}}
