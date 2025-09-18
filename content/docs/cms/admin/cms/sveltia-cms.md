---
isIndex: false
title: Sveltia CMS
description: Open-source content management Git-based.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758126005/logo-sveltia-cms_eh8ftl.png
---
{{< badge text="Available in production" state="success" >}}
{{< badge text="Maintened CMS" state="success" >}}

## Setup

- [Hugolify-admin](../setup/)

## Enable Sveltia CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  cms: sveltiacms
```

## Additional featured

### Including Hugo’s special index file in a folder collection

https://github.com/sveltia/sveltia-cms?tab=readme-ov-file#including-hugos-special-index-file-in-a-folder-collection

Disables unnecessary indexes collection:

```yaml
admin:
  collections:
    indexes:
      enable: false
```

## Not supported featured

- {{< blank_link link="https://github.com/sveltia/sveltia-cms?tab=readme-ov-file#current-limitations" text="Current limitations" >}}
- {{< blank_link link="https://github.com/sveltia/sveltia-cms?tab=readme-ov-file#features-not-to-be-implemented" text="Features not to be implemented" >}}

## Icon library

[Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols&icon.platform=web)

## Documention

- {{< blank_link link="https://github.com/sveltia/sveltia-cms" text="https://github.com/sveltia/sveltia-cms" >}}