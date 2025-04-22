---
title: Blocks
description: More than twenty blocks available.
weight: 3
icon: puzzle
blocks:
  - type: cta
    heading:
      title: How to customize with Hugolify-admin
    ctas:
      - text: Blocks
        url: /docs/cms/admin/blocks/
      - text: Fields
        url: /docs/cms/admin/fields/
---

## Fields

Each block is composed of one or more fields, they can be common between blocks or unique. A field can also contain one or more fields.

### Fields

Example of common fields:

{{< alert text="`/layouts/partials/admin/fields/align.yml`" state="light" >}}

```yml
align: '' // [start, end, center]
```

{{< alert text="`/layouts/partials/admin/fields/align.yml`" state="light" >}}


```yml
background: false // boolean
```

{{< alert text="`/layouts/partials/admin/fields/grid.yml`" state="light" >}}

```yml
grid: '' // [small, medium, large, container, full]
```

{{< alert text="`/layouts/partials/admin/fields/offset.yml`" state="light" >}}

```yml
offset: '' // [start, end, center]
```

{{< alert text="`/layouts/partials/admin/fields/state.yml`" state="light" >}}

```yml
state: '' // [danger, dark, info, light, primary, secondary, success, warning]
```

### Group fields

Example of group fields:

{{< alert text="`/layouts/partials/admin/fields/heading.yml`" state="light" >}}

```yml
heading:
  surtitle: '' // string (optional)
  title: '' // string (optional)
  text: '' // markdown (optional)
```

{{< alert text="`/layouts/partials/admin/fields/cta.yml`" state="light" >}}

```yml
cta:
  text: '' // string
  url: '' // string
  blank: false // boolean (optional)
```

{{< alert text="`/layouts/partials/admin/fields/image.yml`" state="light" >}}

```yml
image:
  src: '' // string
  filter: '' // string (optional)
  alt: '' // string (optional)
  legend: '' // string (optional)
  credit: '' // markdown (optional)
```

### All fields

List of available fields:

{{< alert text="`/layouts/partials/admin/fields/`" state="light" >}}

{{< button text="See all Hugolify-admin fields on Github" url="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/fields" blank="true" >}}
