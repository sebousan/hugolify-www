---
title: Fields
description: Add/modify fields
weight: 4
icon: input-cursor-text
---

## List of Hugolify fields 

{{< button text="See list of Hugolify fields on Github" url="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/fields" blank="true" >}}

## Add or remove fields in blocks

```yml
params:
  admin:
    fields:
      # Array of available fields for a fields
      # e.g with hero field
      hero:
        - title
        - text_markdown
```

## Create or override a field

Add a yml field file in this directory

```yml
layouts
  partials
    admin
      fields
```

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/fields" text="See examples in repository" >}}