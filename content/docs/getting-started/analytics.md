---
title: Analytics
description: Google Analytics, Plausible and consent
weight: 7
icon: graph-up
---

Hugolify ships with Google Analytics and Meta Pixel, both wired to the cookie banner. Cookieless services such as Plausible are added with a partial override.

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

## Plausible

Plausible is cookieless and collects no personal data, so it needs no consent banner. It has no dedicated parameter: add it through the script partial.

{{< alert text="`/layouts/partials/footer/scripts.html`" state="light" >}}

```html
<!-- Privacy-friendly analytics by Plausible -->
<script defer data-domain="example.com" src="https://plausible.io/js/script.js"></script>
```

The theme ships this partial empty, as an extension point rendered at the end of `body`. Any third party script that must not go through the banner belongs here.

### Generated domain

`data-domain` is your site host, so Hugo can fill it from the `baseURL`. Wrapping it in `hugo.IsProduction` also keeps your local builds out of the statistics.

{{< alert text="`/layouts/partials/footer/scripts.html`" state="light" >}}

```go-html-template
{{- if hugo.IsProduction }}
<script defer data-domain="{{ (urls.Parse site.BaseURL).Hostname }}" src="https://plausible.io/js/script.js"></script>
{{ end -}}
```

{{< alert text="The generated value has to match the site registered in Plausible, `www.` included. A `baseURL` of `https://www.example.com/` gives `www.example.com`, not `example.com`. Hardcode the domain when the two differ." state="warning" >}}

### Self-hosted

Replace `https://plausible.io` with your own instance. The `data-domain` value stays the site registered in Plausible.

## Which one

| | Google Analytics | Plausible |
| --- | --- | --- |
| Cookies | Yes | No |
| Consent banner | Required | Not required |
| Setup | Configuration | Partial override |
| Hosting | Google | SaaS or self-hosted |

## Documentation

{{< button url="https://gohugo.io/configuration/services/#googleanalytics" text="Hugo services" blank=true >}}
{{< button url="https://plausible.io/docs/plausible-script" text="Plausible script" blank=true >}}
