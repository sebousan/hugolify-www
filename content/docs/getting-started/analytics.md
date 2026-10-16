---
title: Analytics
description: Google Analytics, alternative analytics services and consent
weight: 7
icon: graph-up
---

Hugolify ships with Google Analytics and Meta Pixel, both wired to the cookie
banner, and supports eight alternative analytics services configured under
`analytics`: Umami, Plausible, Matomo, Seline, Fathom, GoatCounter, Simple
Analytics and Cabin.

Cookieless services load without a consent banner. Google Analytics, Meta
Pixel and Matomo (with cookies) require one.

## Google Analytics

### Setup

{{< alert text="`/config/_default/services.yaml`" state="light" >}}

```yml
googleAnalytics:
  id: "G-XXXXXXXXXX"
```

This is the native Hugo service configuration. Keep it in `/config/production/services.yml` to avoid tracking your local and staging builds.

{{< alert text="Google Analytics is only loaded when the cookie banner is enabled. Without it, the ID is ignored." state="warning" >}}

### Enable the banner

See [Cookie banner](/docs/getting-started/cookie-consent/) for the full banner reference.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
cookie_banner:
  enable: true # Required
  cookieconsent:
    enable: true # Use CookieConsent
    analytics: true # Required to load Google Analytics
```

### Behaviours

The banner has two modes, and each one loads Google Analytics differently.

| | Simple banner | CookieConsent |
| --- | --- | --- |
| `cookieconsent.enable` | `false` | `true` |
| Required to load GA | `cookie_banner.enable` | `cookieconsent.analytics` |
| Consent Mode v2 | No | Yes |
| Preferences modal | No | Yes |
| Consent cookie | `cookie-consent` (31 days) | `cc_cookie` |
| On accept | `gtag` with `anonymize_ip` | `analytics_storage: granted` |
| On refuse | `_ga*` cookies deleted | Tracking disabled, `_ga*` cookies erased |
| Meta Pixel | No | Yes |

In CookieConsent mode, nothing is sent before a choice is made: consent defaults to `denied` for every storage type, with `ads_data_redaction` on and `url_passthrough` on.

## Meta Pixel

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
services:
  meta: "000000000000000" # Meta Pixel ID
```

Loaded under the same `cookieconsent.analytics: true` switch as Google Analytics, and listed as a separate service in the preferences modal.

## Alternative analytics services

### Activation

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

- A service is activated by the presence of its block under `analytics`. The
  example configuration ships with every service disabled.
- An activated service with an incomplete configuration fails the build: each
  partial validates its required keys with `errorf` and points back to this
  page.
- Scripts are rendered only when `hugo.IsProduction` is true, so local and
  staging builds are never tracked.

{{< alert text="Deploy previews are often built in production mode and are tracked too. Restrict the tracker with the `domains` option when the service provides one (see Umami)." state="warning" >}}

### Umami

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
analytics:
  umami:
    website_id: "94db1cb1-74f4-4a40-ad6c-962362670409"
```

The Umami Cloud script is loaded by default from `https://cloud.umami.is/script.js`.

Self-hosting:

```yml
analytics:
  umami:
    website_id: "94db1cb1-74f4-4a40-ad6c-962362670409"
    url: "https://analytics.example.com/script.js"
```

Restrict the tracker to specific hostnames (staging, deploy previews):

```yml
analytics:
  umami:
    website_id: "94db1cb1-74f4-4a40-ad6c-962362670409"
    domains: "example.com,www.example.com"
```

### Plausible

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
analytics:
  plausible:
    script_id: "pa-XXXXXXXXX" # current per-site script, Site settings → Site installation
```

Since October 2025, each Plausible site gets its own script (`pa-XXXX.js`,
with an init stub); the generic `script.js` + `data-domain` still works but is
deprecated. `url` overrides the Plausible instance URL (self-hosted).

The legacy format is still supported:

```yml
analytics:
  plausible:
    domain: "example.com" # optional, defaults to the baseURL hostname
```

The legacy format needs no configuration key: `domain` defaults to the
`baseURL` hostname, and the build fails if the resolved domain is empty
(for instance with `baseURL: /`).

#### Generated domain

`data-domain` is the site registered in Plausible, `www.` included. A
`baseURL` of `https://www.example.com/` gives `www.example.com`, not
`example.com`. Hardcode the domain when the two differ.

#### Self-hosted

```yml
analytics:
  plausible:
    domain: "example.com"
    url: "https://plausible.example.com/js/script.js"
```

{{< alert text="If you previously added Plausible through a `layouts/partials/footer/scripts.html` override, remove the snippet and use the configuration instead, otherwise page views are tracked twice. `scripts.html` remains the extension point for any other third-party script." state="warning" >}}

### Matomo

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
analytics:
  matomo:
    url: "https://matomo.example.com"
    site_id: "1"
    cookies: false
```

Matomo is the only alternative service with two modes:

- `cookies: false` (default): the tracker runs with `disableCookies`, is
  cookieless and needs no consent banner.
- `cookies: true`: the tracker is registered in the `analytics` category of
  CookieConsent and loads only after consent. This requires
  `cookieconsent.enable` and `cookieconsent.analytics` (see
  [Cookie banner](/docs/getting-started/cookie-consent/)); it is not supported
  with the simple banner.

### Seline

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
analytics:
  seline:
    token: "PROJECT_TOKEN"
```

The token is required (project settings). Seline is cookieless by default.

### Fathom

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
analytics:
  fathom:
    site_id: "ABCDEFG"
```

The script is always loaded from `https://cdn.usefathom.com/script.js`:
custom domains were discontinued in March 2023, so there is no `url` option.

### GoatCounter

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
analytics:
  goatcounter:
    code: "yoursite"
```

`code` is your GoatCounter subdomain (`https://yoursite.goatcounter.com`) or
the self-hosted `endpoint` is required.

Self-hosting (endpoint and/or script on your own domain — nothing is then
loaded from goatcounter.com or zgo.at, which also avoids adblockers):

```yml
analytics:
  goatcounter:
    endpoint: "https://stats.example.com/count"
    src: "/count.js"
```

GoatCounter is cookieless and open source; the hosted service is free for
non-commercial use.

{{< alert text="The JavaScript-free tracking pixel (`<noscript><img src=...>` documented by GoatCounter) is not rendered: it needs the page path in the HTML source, which is incompatible with the cached partial, and GoatCounter's own documentation warns that it loses the referrer and records more bot requests. Add it in an override of the partial if you need it." state="warning" >}}

### Simple Analytics

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
analytics:
  simpleanalytics: true
```

Simple Analytics needs no identifier. The `<noscript>` fallback is rendered
automatically.

### Cabin

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
analytics:
  cabin: true
```

Cabin needs no identifier: add your domain on the Domains page of your Cabin
dashboard. The 2 KB script is cookieless, open source and carbon-conscious —
a natural fit for low-carbon websites.

### Overriding the partials

Each service renders through
`layouts/partials/footer/analytics/<service>.html`. Copy a partial into your
project to customize its snippet: advanced options (SPA mode, tags, URL
masking…) are documented by each service and intentionally not duplicated as
configuration.

## Which one

| | Cookies | Consent banner | Hosting |
| --- | --- | --- | --- |
| Google Analytics | Yes | Required | Google |
| Meta Pixel | Yes | Required | Meta |
| Umami | No | Not required | SaaS or self-hosted |
| Plausible | No | Not required | SaaS or self-hosted |
| Matomo | By default | Required unless `cookies: false` | SaaS or self-hosted |
| Seline | No | Not required | SaaS |
| Fathom | No | Not required | SaaS |
| GoatCounter | No | Not required | SaaS or self-hosted |
| Simple Analytics | No | Not required | SaaS |
| Cabin | No | Not required | SaaS |

## Documentation

- {{< blank_link link=https://gohugo.io/configuration/services/#googleanalytics" text="Hugo services" blank=true >}}
- {{< blank_link link=https://umami.is/docs" text="Umami" blank=true >}}
- {{< blank_link link=https://plausible.io/docs" text="Plausible" blank=true >}}
- {{< blank_link link=https://matomo.org/docs/" text="Matomo" blank=true >}}
- {{< blank_link link=https://seline.com/docs" text="Seline" blank=true >}}
- {{< blank_link link=https://usefathom.com/docs" text="Fathom" blank=true >}}
- {{< blank_link link=https://www.goatcounter.com/help" text="GoatCounter" blank=true >}}
- {{< blank_link link=https://docs.simpleanalytics.com/" text="Simple Analytics" blank=true >}}
- {{< blank_link link=https://docs.withcabin.com/" text="Cabin" blank=true >}}
- {{< blank_link link=https://playground.cookieconsent.orestbida.com/" text="CookieConsent" blank=true >}}
