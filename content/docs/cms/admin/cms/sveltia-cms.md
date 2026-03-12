---
isIndex: false
title: Sveltia CMS
description: Open-source content management Git-based.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758126005/logo-sveltia-cms_eh8ftl.png
seo:
  description: Simplify your Sveltia CMS setup with Hugolify’s easy-to-use configuration builder.
---
{{< badge text="Available in production" state="success" >}}
{{< badge text="Maintened CMS" state="success" >}}

{{< alert-block title="Warning: Not supported features" state="warning" >}}
- Git Gateway
- Nested pages
- Netlify Identify

See [current limitations](https://sveltiacms.app/en/docs/migration/netlify-decap-cms#current-limitations) and [features not to be implemented](https://sveltiacms.app/en/docs/migration/netlify-decap-cms#features-not-to-be-implemented) in Sveltia CMS documentation.
{{< /alert-block >}}

## Setup

- [Hugolify-admin](../setup/)

## Enable Sveltia CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  cms: sveltiacms
  repo: Hugolify/hugolify-template # set your repository’s URL
```

## Additional featured

### Disable Netlify identify

```yaml
admin:
  auth:
    netlify_identity: false
```

### Including Hugo’s special index file in a folder collection

Disables unnecessary indexes collection ({{< blank_link link="https://sveltiacms.app/en/docs/collections/entries#managing-hugo-s-special-index-file" text="See more about this on Sveltia’s documentation" >}}):

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  collections:
    indexes:
      enable: false
```

### Shortcodes

Since {{< badge text="hugolify-admin v1.0.0" state="success" >}}

## Icon library

- {{< blank_link link="https://fonts.google.com/icons?icon.set=Material+Symbols&icon.platform=web" text="Material Symbols" >}}

## Documentations

- {{< blank_link link="https://sveltiacms.app/en/docs/" text="Sveltia CMS documentation" >}}
- {{< blank_link link="https://github.com/sveltia/sveltia-cms" text="Sveltia CMS repository" >}}

## Tutorial

- [How to create a Website with Hugo and Sveltia CMS using Hugolify](/tutorials/how-to-create-a-website-with-hugo-and-sveltia-cms-using-hugolify/)
