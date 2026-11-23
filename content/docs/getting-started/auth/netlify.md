---
isIndex: false
title: Netlify
description: Identity, Git gateway…
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758128557/logo-netlify_r7ywd6.svg
aliases:
  - /docs/getting-started/netlify/
---
{{< alert text="Only for Decap/Netlify/Static CMS" state="warning" >}}

{{< alert-block state="info" >}}
With Sveltia CMS, [Sveltia CMS Additions](/docs/getting-started/auth/sveltia-cms-additions/) gives editors their own accounts instead.
{{< /alert-block >}}

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

* Invitation template: `/admin/emails/invitation.html`
* Confirmation template: `/admin/emails/confirmation.html`
* Recovery template: `/admin/emails/recovery.html`
* Email change template: `/admin/emails/email-change.html`
