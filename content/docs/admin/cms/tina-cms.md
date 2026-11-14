---
isIndex: false
title: Tina CMS
description: Open-source content management Git-based and API driven.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1765298678/tina-cropped_ozj5qm.svg
seo:
  description: Simplify your Tina CMS setup with Hugolify’s easy-to-use configuration builder.
status:
  text: Beta
  state: warning
---
{{< badge text="Not available in production" state="danger" >}}
{{< badge text="Maintained CMS" state="success" >}}
{{< badge text="Beta" state="warning" >}}

{{< alert-block title="Warning: Not supported features" state="warning" >}}
- i18n structure
- Map Widget
- Shortcodes
{{< /alert-block >}}

## Enable Tina CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  cms: tinacms
```

## Build config file

Hugo writes the TinaCMS configuration to `/public/admin/config.js` on each build. TinaCMS reads it from `tina/config.js`: copy it there, and version it.

```bash
hugo && mkdir -p tina && cp public/admin/config.js tina/config.js
```

Copy it again after a change to the modules or to the `admin` params.

## Raw markdown

The rich-text toolbar has its own raw markdown button, so the `minimal`, `modes` and `buttons` params of the markdown fields do not apply. See [Markdown editor](/docs/admin/fields/#markdown-editor).

## Documentation

- [Hugolify Admin setup](/docs/admin/setup/)
- {{< blank_link link="https://tina.io/docs/" text="Tina CMS documentation" >}}
- {{< blank_link link="https://github.com/tinacms/tinacms" text="Tina CMS repository" >}}
