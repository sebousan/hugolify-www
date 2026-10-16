---
title: Analytics
description: Google Analytics, Meta Pixel and privacy-friendly alternatives
weight: 7
icon: graph-up
---

Hugolify ships with ten analytics services: Google Analytics and Meta Pixel, both wired to the cookie banner, and eight alternatives, most of them cookieless and loaded without consent.

## Which one

| Service | Cookies | License | Hosting | Free plan |
| --- | --- | --- | --- | --- |
| [Google Analytics](#google-analytics) | Yes | Proprietary | SaaS | Yes |
| [Meta Pixel](#meta-pixel) | Yes | Proprietary | SaaS | Yes |
| [Umami](#umami) | No | MIT | SaaS or self-hosted | Cloud Hobby: 1 site, 100k events/month |
| [Plausible](#plausible) | No | AGPL-3.0 | SaaS or self-hosted | Self-hosted only (Community Edition) |
| [Matomo](#matomo) | Optional | GPL-3.0 | SaaS or self-hosted | Self-hosted only (On-Premise) |
| [Seline](#seline) | No | Proprietary | SaaS | No, 7-day trial |
| [Fathom](#fathom) | No | Proprietary | SaaS | No, 7-day trial |
| [GoatCounter](#goatcounter) | No | EUPL-1.2 | SaaS or self-hosted | Yes, for reasonable use |
| [Simple Analytics](#simple-analytics) | No | Proprietary | SaaS | 5 sites, 30-day history |
| [Cabin](#cabin) | No | Proprietary | SaaS | 1 site, 10k pageviews/month |

Self-hosting Umami, Plausible, Matomo and GoatCounter is free: you only pay for the server.

{{< alert text="Free plans as of October 2026. Check the vendor's pricing page before choosing." state="warning" >}}

## How it works

- **Production only**: every service, Google Analytics and Meta Pixel included, is rendered when `hugo.IsProduction` is true. `hugo server` and `--environment staging` builds are never tracked.
- **Consent**: Google Analytics and [Matomo](#matomo) with `cookies: true` wait for the `analytics` category of the [cookie banner](/docs/getting-started/cookie-consent/), Meta Pixel for the `marketing` category. The other services are cookieless and load without consent.
- **Build checks**: an enabled service with a missing required parameter fails the build. A service whose banner or consent category is disabled is not loaded, and the build warns.
- **Overrides**: each service has its own partial, `/layouts/partials/footer/analytics/<service>.html`. Override it for options the configuration does not expose (SPA mode, tags, exclusions…).

{{< alert text="A plain `hugo` build runs in production. On Netlify, deploy previews built with `hugo -b $DEPLOY_PRIME_URL` are tracked too, unless the service restricts the hostnames, like Umami `domains`." state="warning" >}}

## Google Analytics

### Setup

{{< alert text="`/config/_default/services.yaml`" state="light" >}}

```yml
googleAnalytics:
  id: "G-XXXXXXXXXX"
```

This is the native Hugo service configuration.

{{< alert text="Google Analytics needs the cookie banner: without it, the build warns and the ID is ignored. In CookieConsent mode, it also needs `cookieconsent.analytics`." state="warning" >}}

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

Meta Pixel is an advertising tracker, so it waits for the `marketing` category of CookieConsent, not `analytics`.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
analytics:
  meta:
    pixel_id: "000000000000000" # Required
cookie_banner:
  enable: true # Required
  cookieconsent:
    enable: true # Required
    marketing: true # Required to load Meta Pixel
```

It is listed as a separate service in the advertisement section of the preferences modal. The simple banner is not supported: without CookieConsent and the `marketing` category, the build warns and the pixel is not loaded.

There is no `<noscript>` fallback pixel, because it would be sent before any consent.

## Other services

### Configuration

Every other service is configured under `analytics`, like Meta Pixel. A service is enabled by its block, or by `true` when it needs no parameter. An empty block (`{}`) is ignored.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
analytics:
  umami:
    website_id: "94db1cb1-74f4-4a40-ad6c-962362670409"
  cabin: true
```

Several services can run side by side, for example while comparing two of them.

### Migrating from `scripts.html`

If you added Plausible, or any other service below, in `/layouts/partials/footer/scripts.html` following a previous version of this page, remove it when you enable the service under `analytics`. Otherwise the script loads twice.

## Umami

Open source analytics with a simple dashboard: visits, page views, referrers and events. Umami Cloud is hosted in the US and the EU.

```yml
analytics:
  umami:
    website_id: "94db1cb1-74f4-4a40-ad6c-962362670409" # Required
    url: "" # Self-hosted script URL, defaults to https://cloud.umami.is/script.js
    domains: "" # Comma-separated hostnames allowed to send data
```

`domains` keeps deploy previews and staging hosts out of your statistics, for example `example.com,www.example.com`.

## Plausible

Lightweight, open source and privacy-first. Plausible Cloud is hosted in the EU.

```yml
analytics:
  plausible:
    script_id: "pa-XXXXXXXX" # Site settings > General > Site installation
    url: "" # Self-hosted instance URL, defaults to https://plausible.io
```

`script_id` loads the script Plausible generates for your site. It is the recommended setup since October 2025.

### Legacy script

The previous script, with a `data-domain` attribute, still works but Plausible no longer recommends it. Use it when your instance does not provide a per-site script yet, or to send stats to several dashboards at once. It applies when `script_id` is not set.

```yml
analytics:
  plausible:
    domain: "" # Defaults to the baseURL hostname
    url: "" # Full script URL, defaults to https://plausible.io/js/script.js
```

The build fails when the domain resolves to an empty value, for example with a `baseURL` of `/`.

{{< alert text="`domain` has to match the site registered in Plausible, `www.` included. A `baseURL` of `https://www.example.com/` gives `www.example.com`, not `example.com`. Set it explicitly when the two differ." state="warning" >}}

## Matomo

The most complete service on this page, Cloud or self-hosted. Matomo Cloud is hosted in Frankfurt.

```yml
analytics:
  matomo:
    url: "https://matomo.example.com" # Required, instance URL
    site_id: "1" # Required
    cookies: false # Optional, see below
```

| | `cookies: false` (default) | `cookies: true` |
| --- | --- | --- |
| Cookies | None (`disableCookies`) | `_pk_*` |
| Consent | Not required | CookieConsent `analytics` category |
| Loaded | On every page | After consent |
| On refuse | Nothing to clean | `_pk_*` cookies erased |

With `cookies: true`, Matomo needs the CookieConsent mode of the [cookie banner](/docs/getting-started/cookie-consent/):

```yml
cookie_banner:
  enable: true
  cookieconsent:
    enable: true
    analytics: true
```

Without CookieConsent, with the simple banner or no banner at all, the build warns and Matomo is not loaded.

## Seline

Privacy-first and cookieless, hosted in the EU.

```yml
analytics:
  seline:
    token: "PROJECT_TOKEN" # Required, project settings
```

## Fathom

Privacy-focused and cookieless, SaaS only, with an EU isolation option.

```yml
analytics:
  fathom:
    site_id: "ABCDEFG" # Required
```

## GoatCounter

Open source and cookieless. The hosted version is free for personal sites and small businesses, and you can self-host it.

```yml
analytics:
  goatcounter:
    code: "yoursite" # Hosted, https://yoursite.goatcounter.com
    endpoint: "" # Self-hosted count endpoint, takes precedence over code
    src: "" # Self-hosted script URL, defaults to https://gc.zgo.at/count.js
```

`code` or `endpoint` is required. Set `src` too and nothing is loaded from goatcounter.com or zgo.at.

## Simple Analytics

Cookieless and collects no personal data. Hosted in the Netherlands.

```yml
analytics:
  simpleanalytics: true
```

No identifier: declare your domains in the Simple Analytics dashboard. A `<noscript>` pixel is rendered for visitors without JavaScript.

## Cabin

Cookieless, with a lightweight script and carbon reporting. Data is stored in the EU.

```yml
analytics:
  cabin: true
```

No identifier: declare your domain on the Domains page of the Cabin dashboard.

## Documentation

- {{< blank_link link="https://gohugo.io/configuration/services/#googleanalytics" text="Hugo services" >}}
- {{< blank_link link="https://docs.umami.is/docs/tracker-configuration" text="Umami" >}}
- {{< blank_link link="https://plausible.io/docs/plausible-script" text="Plausible" >}}
- {{< blank_link link="https://developer.matomo.org/guides/tracking-javascript-guide" text="Matomo" >}}
- {{< blank_link link="https://seline.com/docs/install-seline" text="Seline" >}}
- {{< blank_link link="https://usefathom.com/docs/script/script-advanced" text="Fathom" >}}
- {{< blank_link link="https://www.goatcounter.com/help/start" text="GoatCounter" >}}
- {{< blank_link link="https://docs.simpleanalytics.com/script" text="Simple Analytics" >}}
- {{< blank_link link="https://docs.withcabin.com/install" text="Cabin" >}}
