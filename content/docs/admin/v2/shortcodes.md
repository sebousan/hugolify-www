---
isIndex: false
title: Shortcodes
description: Add/modify shortcodes
weight: 8
icon: braces-asterisk
---

{{< alert text="Available for CloudCannon, Decap CMS, Netlify CMS and Sveltia CMS" state="warning" >}}

## Add or remove shortcodes

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

All shortcodes are available by default but if you want hide or add your shortcodes, you can do it:

```yml
params:
  admin:
    shortcodes:
      # Array of available shortcodes
      enable:
        - alert
        - alert-block
        - badge
        - blank_link
        - blockquote
        - button
        - dailymotion
        - details
        - figure
        - icon
        - map
        - qr
        - span_lang
        - twitch
        - twitter
        - video
        - vimeo
        - youtube
```

{{< alert-block title="New in v2" state="info" >}}
The default list grew with `alert-block`, `dailymotion`, `figure`, `icon`, `qr`, `span_lang`, `twitch`, `video` and `vimeo`.

The [`icon` shortcode](/docs/shortcodes/icon/) joins the markdown editor for CloudCannon, Decap, Netlify and Sveltia CMS.
{{< /alert-block >}}

## Disable shortcodes

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
params:
  admin:
    shortcodes:
      enable: false
```

## Personalize fields

{{< badge text="New in v2" state="success" >}}

A shortcode's fields are overridable the way a block's are:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
params:
  admin:
    shortcodes:
      button:
        fields:
          - text
          - url
          # …
```

## Create a shortcodes

### Create file

Add a js shortcode file in shortcodes directory.

```txt
layouts/
└── partials/
    └── admin/
        └── cms/
            └── decapcms/
                └── shortcodes/
```

And add it in enable shortcodes: [see above](#add-or-remove-shortcodes)

### Examples

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/cms/decapcms/shortcodes" text="See examples in repository (for decap CMS)" >}}

## List of Hugolify shortcodes

{{< button text="Hugolify shortcodes" url="/docs/shortcodes/" >}}
