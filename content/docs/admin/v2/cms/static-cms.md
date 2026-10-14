---
isIndex: false
title: Static CMS
description: Open-source content management Git-based.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758126045/logo-static-cms_us9twk.svg
status:
  text: Deprecated
  state: warning
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

## Entry list

The table view shows the columns of [`summary_fields`](../../collections/#add-summary-fields). The list opens sorted by the field carrying `default_sort` in [`sortable_fields`](../../collections/#add-sortable-fields): v1 sorted every list by commit date.

```yaml
admin:
  collections:
    posts:
      summary_fields: [summary, date, draft]
      sortable_fields:
        - field: date
          default_sort: desc
        - title
```

## Documentation

- [Hugolify Admin setup](../setup/)
- {{< blank_link link="https://staticjscms.netlify.app/" text="https://staticjscms.netlify.app/" >}}
