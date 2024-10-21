---
title: Collections
description: All sections and taxonomies.
weight: 2
icon: collection
---

Collections are automatically added based on Hugolify modules added ([Sections](/docs/sections/)) or ([Taxonomies](/docs/taxonomies/))

## Add or remove collections

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    indexes: true
    pages: true
    # e.g. set to false to disable posts even if you load hugolify-theme-posts
    posts: false 
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
