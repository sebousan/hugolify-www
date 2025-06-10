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

## Add filter

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      filter:
        - field: isPage
          value: true
```

## Add summary

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      summary: "{{title}}"
```

## Add sortable

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      sortable: "['title']"
```

## Add view filters

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      view_filters:
        - label: 'Posts published in 2020'
          field: date
          pattern: '2020'
```

## Add view groups

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  collections:
    pages:
      view_groups:
        - label: 'Draft'
          field: draft
```

## Create a collection

Add a yml collection file

```txt
layouts/
└── partials/
    └── admin/
        └── collections/
            └── types/
```

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/collections/types" text="See examples in repository" >}}
