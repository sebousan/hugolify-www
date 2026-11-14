---
title: Form
description: Use Netlify form or another services
weight: 7
icon: text-cursor
---

## Setup

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
form:
  ajax: false # Set true to submit without leaving the page
  netlify: true # Set false to disable Netlify forms
  action: false # Replace by URL from formspree, fabform, kwes…
```

A form block may set its own `action`, which wins over these params: each form can post to its own endpoint, like a Brevo form per request type. The fields, the AJAX submission and the providers are documented with the [Form block](/docs/blocks/form/).

## Netlify Forms

- Form detection must be enabled in the Netlify UI (Forms), or every submission fails.
- Notifications only go to **active members of the Netlify team**: another address is refused when the notification is saved, so invite each recipient first.
- They are sent from `formresponses@netlify.com`. A mail server that only accepts known senders, common in companies and regulated professions, must allow this address, or the notifications never arrive. The submissions stay in the Netlify UI either way.
- Name the email field `email`: Netlify makes it the Reply-To of the notification, so replying answers the visitor.
- A hidden field named `subject` sets the subject of the notification.

## Brevo

- In Brevo, Forms › the form › Share › Embed › HTML: copy the `action` URL of the `<form>` (`https://….sibforms.com/serve/…`) into the block's `action`, one per form. Brevo's HTML, CSS and scripts are not needed: the form script of the theme posts to Brevo and reads its answer (`params.form.ajax: true`).
- Each field `name` is the Brevo attribute, in upper case (`EMAIL`, `NOM`…), and a choice goes out as text: its value is what Brevo stores.
- Add the `hiddens` of Brevo's code: `locale` (`fr`, `en`…) and the `email_address_check` honeypot, empty.
- Brevo takes no file, and keeps one value per attribute: the checkboxes sharing a `name` are joined with ` ; `.
- A reCAPTCHA added in Brevo needs Brevo's own script, which the theme does not load.

## Services available

- {{< blank_link link="https://www.brevo.com/" text="Brevo" >}}
- {{< blank_link link="https://fabform.io/" text="FabForm" >}}
- {{< blank_link link="https://formspree.io/" text="Formspree" >}}
- {{< blank_link link="https://kwesforms.com/" text="KwesForms" >}}
- {{< blank_link link="https://docs.netlify.com/forms/setup/" text="Netlify forms" >}}  {{< badge state="warning" text="Default" >}}
