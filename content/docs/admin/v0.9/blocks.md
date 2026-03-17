---
title: Blocks
description: Add/modify blocks
weight: 3
icon: puzzle
---


## Add or remove blocks

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


## Add or remove fields in blocks

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

## Create a block

### Create file

Add a yml block file in blocks directory.

```txt
layouts/
└── partials/
    └── admin/
        └── blocks/
```

### Add content

#### Set fields block

```yml
{{- $fields := slice 
  "heading" 
  "background" -}}
{{- $fields = partial "admin/func/get_fields.html" (dict "block" . "fields" $fields) -}}
```

#### Add config field

```yml
{
  label: '',
  hint: '',
  name: '',
  widget: '',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{`{{heading.title}}`}}',
  {{ partial "admin/fields/_fields.yml" $fields }}
}
```

And add it in enable blocks: [see above](#add-or-remove-blocks)

### Examples

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/blocks" text="See examples in repository" >}}

## List of Hugolify blocks

{{< button text="Hugolify blocks" url="/docs/blocks/" >}}
