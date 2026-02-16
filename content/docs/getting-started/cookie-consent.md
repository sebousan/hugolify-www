---
title: Cookie banner
description: Enable a cookie banner
weight: 7
icon: cookie
---

## Setup

{{< alert text="`/config/default/params.yaml`" state="light" >}}

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

## Documentation

A complete documentation of how to use CookieConsent.

{{< button url="https://playground.cookieconsent.orestbida.com/" text="See documentation" blank=true >}}
