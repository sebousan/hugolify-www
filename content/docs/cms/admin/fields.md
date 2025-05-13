---
title: Fields
description: Add/modify fields
weight: 4
icon: input-cursor-text
---

## How to create a field

### Create file

Add a yml field file in fields directory.

```txt
layouts/
└── partials/
    └── admin/
        └── fields/
```

### Add content

```yml
{
  label: '',
  name: '',
  widget: '',
  required: false,
  i18n: true 
}
```

**If a object or list field**

```yml
{{- $fields := slice 
  "title" 
  "text" 
  "image" -}}
# This line allows you to modify the fields via the parameters
{{- $fields = partial "admin/func/get_fields.html" (dict "block" . "fields" $fields) -}}
{
  label: '',
  name: '',
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  {{ partial "admin/fields/_fields.yml" $fields }}
}
```

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/fields" text="See examples in repository" >}}

## Add or remove fields in object field

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

In this example, we set two fields (title and text with markdown) for the Hero field.

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

## List of Hugolify fields

{{< button text="Hugolify fields" url="/docs/fields/" >}}
