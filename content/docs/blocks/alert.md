---
title: Alert
description: Displays an alert message with 3 different statutes.
icon: exclamation-octagon
---

## Frontmatter

```yml
blocks:
  - type: alert
    text: '' // string
    state: '' [danger, dark, light, infos, success, warning]
    background: false
```

## Examples

- {{< blank_link link="https://demo.hugolify.io/blocks/alert/" text="Demo visual renderer" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/alert.md" text="Demo content file on Github" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/alert.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_alert.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/alert.js" text="Decap CMS file" >}}

## Decap CMS

{{< alert text="Available" state="success" >}}
