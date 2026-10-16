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
      position: right
```

The `analytics` category loads Google Analytics and [Matomo](/docs/getting-started/analytics/#matomo) with `cookies: true`. The `marketing` category loads [Meta Pixel](/docs/getting-started/analytics/#meta-pixel). The other analytics services are cookieless and load without consent. See [Analytics](/docs/getting-started/analytics/).

## Your own scripts

CookieConsent runs any script marked with a category once the visitor accepts it. Add them to the script partial, rendered at the end of `body`.

{{< alert text="`/layouts/partials/footer/scripts.html`" state="light" >}}

```html
<script type="text/plain" data-category="marketing" data-service="Example">
  // Runs after consent to the marketing category
</script>

<script type="text/plain" data-category="marketing" data-service="Example" data-src="https://example.com/tag.js"></script>
```

- `data-category` is `analytics`, `functionality` or `marketing`. Enable the matching category under `cookieconsent`, so visitors see it in the preferences modal.
- `data-service` lists the script as a separate service in the preferences modal.
- `data-src` replaces `src` for an external script.

Unlike the [analytics services](/docs/getting-started/analytics/), these scripts are rendered in every build. Wrap them in `{{ if hugo.IsProduction }}` to keep local builds out.

## Documentation

A complete documentation of how to use CookieConsent.

{{< button url="https://playground.cookieconsent.orestbida.com/" text="See documentation" blank=true >}}
