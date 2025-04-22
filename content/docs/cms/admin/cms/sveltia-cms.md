---
title: Sveltia CMS
description: Open-source content management Git-based.
image:
  src: /images/uploads/logo-sveltia-cms.png
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

## Documention

- {{< blank_link link="https://github.com/sveltia/sveltia-cms" text="https://github.com/sveltia/sveltia-cms" >}}