---
isIndex: false
title: Static CMS
description: Open-source content management Git-based.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758126045/logo-static-cms_us9twk.svg
status:
  text: Deprecated
  state: secondary
---
{{< badge text="Available in production" state="success" >}}
{{< badge text="Deprecated CMS" state="secondary" >}}

{{< alert-block title="Warning: Not supported features" state="warning" >}}
- Cloud assets
- Nested pages
{{< /alert-block >}}

## Enable Static CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  cms: staticcms
```

## Documentation

- [Hugolify Admin setup](../setup/)
- {{< blank_link link="https://staticjscms.netlify.app/" text="https://staticjscms.netlify.app/" >}}
