---
isIndex: false
title: Shortcodes
description: Add/modify shortcodes
weight: 6
icon: braces-asterisk
---

{{< alert text="Available for CloudCannon, Decap CMS, Netlify CMS and Sveltia CMS" state="warning" >}}

## Add or remove shortcodes

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

All shortcodes are available by default but if you want hide or add your shortcodes, you can do it:

```yml
admin:
  shortcodes:
    # Array of available shortcodes
    enable:
      - alert
      - badge
      - blank_link
      - blockquote
      - button
      - details
      - map
      - twitter
      - youtube
```


## Disable shortcodes

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  shortcodes:
    enable: false
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

{{< alert text="Keep these files in `layouts/partials/`: hugolify-admin v1 looks for them there, not in `layouts/_partials/`." state="warning" >}}

And add it in enable shortcodes: [see above](#add-or-remove-shortcodes)

### Examples

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/cms/decapcms/shortcodes" text="See examples in repository (for decap CMS)" >}}

## List of Hugolify shortcodes

{{< button text="Hugolify shortcodes" url="/docs/shortcodes/" >}}
