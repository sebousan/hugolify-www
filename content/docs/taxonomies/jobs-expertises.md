---
title: Jobs expertises
description: Taxonomy expertises for jobs section.
icon: bookmark-check
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-expertises" text="Hugolify theme expertises" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs" text="Hugolify theme jobs" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-jobs-expertises" text="Hugolify theme jobs expertises" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-jobs-expertises
  - path: github.com/hugolify/hugolify-theme-jobs
  - path: github.com/hugolify/hugolify-theme-expertises
  - path: github.com/hugolify/hugolify-theme
```

## Related sections

- [Expertises](/docs/sections/expertises/)
- [Jobs](/docs/sections/jobs/)

## CMS

- [Hugolify Admin (Multiple CMS)](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Not available" state="danger" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Not available" state="danger" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Not available" state="danger" >}}


## Example

- {{< blank_link link="https://demo.hugolify.io/jobs/expertises/" text="Demo visual renderer" >}}
