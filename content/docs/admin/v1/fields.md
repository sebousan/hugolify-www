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
{{- $args := dict
  "label" (i18n "admin.fields.audio.mp3.label")
  "name" "mp3"
  "type" "audio"
  -}}
{{ partial "admin/widgets/file.js" $args }}
```

### List or Object widget

```yml
{{- $pin := cond (or (eq site.Params.admin.cms "decapcms") (eq site.Params.admin.cms "sveltiacms")) "location" "coordinates" -}}
{{- $fields := slice 
  "street" 
  "zipcode" 
  "city" 
  "country"
  $pin -}}

# This line allows you to modify the fields via the parameters
{{- $fields = partial "admin/func/GetFields.html" (dict "field" . "fields" $fields) -}}

{{- $args := dict 
  "label" (i18n "admin.fields.address.label")
  "name" "address"
  "collapsed" true
  "fields" $fields
  -}}

{{ partial "admin/widgets/object.js" $args }}
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

{{< button text="See fields in repository" url="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/fields" blank="true" >}}
