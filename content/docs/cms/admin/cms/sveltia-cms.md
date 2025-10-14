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
  repo: Hugolify/hugolify-template # set your repository’s URL
```

## Additional featured

### Including Hugo’s special index file in a folder collection

Disables unnecessary indexes collection ({{< blank_link link="https://github.com/sveltia/sveltia-cms?tab=readme-ov-file#including-hugos-special-index-file-in-a-folder-collection" text="See more about this on Sveltia’s repository" >}}):

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

- {{< blank_link link="https://fonts.google.com/icons?icon.set=Material+Symbols&icon.platform=web" text="Material Symbols" >}}

## Documention

- {{< blank_link link="https://github.com/sveltia/sveltia-cms" text="https://github.com/sveltia/sveltia-cms" >}}

## Tutorial

- [How to create a Website with Hugo and Sveltia CMS using Hugolify](/tutorials/how-to-create-a-website-with-hugo-and-sveltia-cms-using-hugolify/)

