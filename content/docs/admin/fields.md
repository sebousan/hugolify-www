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

### Simple widget

```yml
{
  label: '',
  name: '',
  widget: '',
  required: false,
  i18n: true 
}
```

### List or Object widget

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

### Relation widget

Use our {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/fields/relation.yml" text="relation field partial" >}}.

**Arguments**

```yml
collection: string # collection name, required
display_fields: slice # ["title"] default, optional
filters: string # value for filtering datas, optional
name: string # name field, required
multiple: boolean # false default, optional
options: slice # list of options, required
required: boolean # false default, optional
search_fields: slice # ["title"] default, optional
```

**Examples**

In fields via get_fields:

```yml
{{- $relation := dict "relation" (dict 
  "collection" $collection 
  "name" "items" 
  "multiple" true 
  "required" true) -}} 
```

Via partial:

```yml
{{- partial "admin/fields/relation.yml" (dict 
  "collection" $collection 
  "name" "items" 
  "multiple" true 
  "required" true) }}
```

### Select widget

Use our {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/fields/select.yml" text="select field partial" >}}.

**Arguments**

```yml
default: string # value name of selected item, optional
field: string # name field, required
i18n: string # target a specifc nested node in file, optional
multiple: boolean # false default, optional
options: slice # list of options, required
required: boolean # false default, optional
```

**Examples**

In fields via get_fields:

```yml
{{- $select := (dict "select" (dict 
  "field" "align" 
  "options" (slice "start" "center" "end") 
  "required" false
  )) }}
```

Via partial:

```yml
{{- partial "admin/fields/select.yml" (dict 
  "field" "align" 
  "options" (slice "start" "center" "end") 
  "required" false
  ) }}
```

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
        fields:
          - title
          - text_markdown
          # e.g with nested fields
          - image:
              fields:
                - image_src
                - image_alt
```

## List of Hugolify fields

{{< button text="Hugolify fields" url="/docs/fields/" >}}
{{< button text="See fields in repository" url="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/fields" blank="true" >}}
