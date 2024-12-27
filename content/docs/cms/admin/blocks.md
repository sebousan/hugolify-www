---
title: Blocks
description: Add/modify blocks
weight: 3
icon: puzzle
---

## List of Hugolify blocks

{{< button text="See Hugolify blocks on Github" url="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/blocks" blank="true" >}}

## Add or remove blocks

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

```yml
params:
  admin:
    blocks:
      # Array of available fields for a block
      # e.g with paragraph block
      paragraph:
        - title
        - text_markdown
        # …
```

{{< button text="List of Hugolify fields" url="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/fields" blank="true" >}}

## Create or override a block

Add a yml block file

```yml
layouts
  partials
    admin
      blocks
```

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/blocks" text="See examples in repository" >}}
