---
title: Events
description: Page for an event.
icon: calendar-event
---
{{< badge text="Beta" state="warning" >}}

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-events" text="Hugolify theme events" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-events
  - path: github.com/hugolify/hugolify-theme
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-events/tree/main/layouts/partials/events" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-events/blob/main/assets/sass/pages/_event.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-events/blob/main/assets/sass/pages/_events.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-events/blob/main/assets/sass/components/_event.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-events/blob/main/assets/sass/components/_events.sass" text="Items component" >}}


## CMS

- [Hugolify Admin (Multiple CMS)](/docs/cms/admin/) {{< badge text="Available" state="success" >}}
- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Not available" state="danger" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Not available" state="danger" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Not available" state="danger" >}}
