---
title: Events
description: Page for an event.
icon: calendar-event
---
{{< badge text="Beta" state="warning" >}}

{{< alert-block title="Not available in Hugolify v2" state="warning" >}}
This module has not been migrated to v2 yet — no `/v2` module path is published for it. It stays available for Hugolify v1.
{{< /alert-block >}}

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-events" text="Hugolify theme events" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-events
  - path: github.com/hugolify/hugolify-theme/v2
```

## Taxonomies

- [Categories](/docs/taxonomies/services-categories/)
- [Persons](/docs/taxonomies/services-persons/)

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-events-categories
  - path: github.com/hugolify/hugolify-theme-events
  - path: github.com/hugolify/hugolify-theme/v2
```

## Files

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme-events/tree/main/layouts/partials/events" text="HTML partials" >}}
- SASS Files
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-events/blob/main/assets/sass/pages/_event.sass" text="Single page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-events/blob/main/assets/sass/pages/_events.sass" text="List page" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-events/blob/main/assets/sass/components/_event.sass" text="Item component" >}}
  - {{< blank_link link="https://github.com/hugolify/hugolify-theme-events/blob/main/assets/sass/components/_events.sass" text="Items component" >}}


## CMS

- [Hugolify Admin (Multiple CMS)](/docs/admin/v1/) {{< badge text="Available" state="success" >}}
