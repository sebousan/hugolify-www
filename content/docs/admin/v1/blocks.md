---
title: Blocks
description: Add/modify blocks
weight: 3
icon: puzzle
---


## Disable or enable

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

All blocks are available by default but if you want hide or add your blocks, you can do it:

```yml
params:
  admin:
    blocks:
      # Array of available blocks
      enable:
        - alert
        - cta
        - editorial
        # …
```

## Personalize fields

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
params:
  admin:
    blocks:
      # Array of available fields for a block
      # e.g with paragraph block
      paragraph:
        fields:
          - title
          - text_markdown
          # …
```

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/fields" text="See Hugolify fields in repository" >}}

## How to create a block

### Fields allowed

Add a HTML block file contains fields (*e.g. alert.html*).

```txt
layouts/
└── partials/
    └── admin/
        └── blocks/
            └── fields/
```

Content of fields:

```go
{{- $fields := slice 
  "text_markdown" 
  "state" 
  "background" -}}
  
{{- $fields = partial "admin/func/GetFields.html" (dict "block" . "fields" $fields) -}}

{{- return $fields -}}
```

### Block types

Add a YAML block file with config (*e.g. alert.yml*).

```txt
layouts/
└── partials/
    └── admin/
        └── blocks/
            └── types/
```

Content of block type:

```yml
{{- $fields := partial "admin/blocks/fields/alert.html" . -}}

{{- $args := dict 
  "label" (i18n "admin.blocks.alert.label")
  "name" "alert"
  "collapsed" false
  "fields" $fields
  -}}

{{ partial "admin/widgets/object.js" $args }}
```

And add it in enable blocks: [see above](#disable-or-enable)

### Examples

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/blocks" text="See examples in repository" >}}

## List of Hugolify blocks

{{< button text="Hugolify blocks" url="/docs/blocks/" >}}
