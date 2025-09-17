---
title: Static CMS
description: Open-source content management Git-based.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758126045/logo-static-cms_us9twk.svg
status:
  text: Deprecated CMS
  state: warning
---
{{< badge text="Available in production" state="success" >}}
{{< badge text="Deprecated CMS" state="warning" >}}

## Setup

- [Hugolify-admin](../setup/)

## Enable Static CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  cms: staticcms
```

## Documention

- {{< blank_link link="https://staticjscms.netlify.app/" text="https://staticjscms.netlify.app/" >}}
