---
title: Fields
description: Add/modify fields
weight: 4
icon: input-cursor-text
---

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



## Create a field

### Create file

Add a yml field file in fields directory.

```txt
layouts/
├── partials/
│   └── admin/
│       └── fields/
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

#### If a object or list field

```yml
{{- $fields := slice 
  "title" 
  "text" 
  "image" -}}
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

## Create a field

Add a yml field file in this directory

```txt
layouts/
├── partials/
│   └── admin/
│       └── fields/
```

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/fields" text="See examples in repository" >}}

## List of Hugolify fields

{{< button text="Hugolify fields" url="/docs/fields/" >}}
