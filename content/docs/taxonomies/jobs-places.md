---
title: Jobs places
description: Taxonomy places for jobs section.
icon: geo-alt
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-places" text="Hugolify theme places" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs" text="Hugolify theme jobs" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs-places" text="Hugolify theme jobs places" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-jobs-places
  - path: github.com/hugolify/hugolify-theme-jobs
  - path: github.com/hugolify/hugolify-theme-places
  - path: github.com/hugolify/hugolify-theme
```

## Related sections

- [Jobs](/docs/sections/jobs/)
- [Places](/docs/sections/places/)

## CMS

- [Hugolify Admin (Multiple CMS)](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Not available" state="danger" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Not available" state="danger" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Not available" state="danger" >}}


## Example

- {{< blank_link link="https://demo.hugolify.io/jobs/places/" text="Demo visual renderer" >}}
