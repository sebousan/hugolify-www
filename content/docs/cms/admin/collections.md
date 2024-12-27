---
title: Collections
description: All sections and taxonomies.
weight: 2
icon: collection
---

Collections are automatically added based on Hugolify modules added ([Sections](/docs/sections/)) or ([Taxonomies](/docs/taxonomies/))

## Enable or disable collections

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    indexes:
      enable: true
    pages:
      enable: true
    # e.g. set to false to disable posts even if you load hugolify-theme-posts
    posts:
      enable: false
    # …
```

## Override fields avalaible for a collection

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      fields:
        - is_draft
        - title_page
        - description
        - featured_image
        - body
        # …
```

## Create or override a collection

Add a yml collection file

```yml
layouts
  partials
    admin
      collections
        types
```

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/collections/types" text="See examples in repository" >}}
