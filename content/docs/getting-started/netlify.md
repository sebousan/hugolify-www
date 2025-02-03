---
title: Netlify
description: Identity, Git gateway…
weight: 6
icon: database
---

## Identity

To create user accounts for Netlify CMS you must activate the Identify Netlify.
{{< alert text="`Site settings > Identity > Enable`" state="light" >}}

## Git Gateway

To connect Netlify CMS to the Github API, it must be activated.
{{< alert text="`Site settings > Identity > Services > Enable Git Gateway`" state="light" >}}

## Emails notifications

To redirect each email template to those in the repository.
{{< alert text="`Site settings > Identity > Email`" state="light" >}}

Then modify the path:

- Invitation template: `/admin/emails/invitation.html`
- Confirmation template: `/admin/emails/confirmation.html`
- Recovery template: `/admin/emails/recovery.html`
- Email change template: `/admin/emails/email-change.html`
