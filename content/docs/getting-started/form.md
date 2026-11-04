---
title: Form
description: Use Netlify form or another services
weight: 7
icon: input-cursor
---

## Setup

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
form:
  ajax: false # Set true to submit without leaving the page
  netlify: true # Set false to disable Netlify forms
  action: false # Replace by URL from formspree, fabform, kwes…
```

The fields and the AJAX submission are documented with the [Form block](/docs/blocks/form/).

## Netlify Forms

- Form detection must be enabled in the Netlify UI (Forms), or every submission fails.
- Notifications are sent from `formresponses@netlify.com`, which Netlify does not let you change. A mail server that only accepts known senders, common in companies and regulated professions, must allow this address, or the notifications never arrive. The submissions stay in the Netlify UI either way.
- Name the email field `email`: Netlify makes it the Reply-To of the notification, so replying answers the visitor.
- A hidden field named `subject` sets the subject of the notification.

## Services available

* {{< blank_link link="https://fabform.io/" text="FabForm" >}}
* {{< blank_link link="https://formspree.io/" text="Formspree" >}}
* {{< blank_link link="https://kwesforms.com/" text="KwesForms" >}}
* {{< blank_link link="https://docs.netlify.com/forms/setup/" text="Netlify forms" >}}  {{< badge state="warning" text="Default" >}}
