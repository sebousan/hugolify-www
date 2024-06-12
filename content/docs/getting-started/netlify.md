---
title: Netlify
description: Identity, Git gateway…
weight: 6
icon: database
---

## Identity

To create user accounts for Netlify CMS you must activate the Identify Netlify.
{{< alert text="`Site settings > Identity > Enable`" state="light" >}}

## Emails notifications

To redirect each email template to those in the repository.
{{< alert text="`Site settings > Identity > Email`" state="light" >}}

Then modify the path:

- Invitation template: `/admin/emails/invitation.html`
- Confirmation template: `/admin/emails/confirmation.html`
- Recovery template: `/admin/emails/recovery.html`
- Email change template: `/admin/emails/email-change.html`

## Git Gateway

To connect Netlify CMS to the Github API, it must be activated.
{{< alert text="`Site settings > Identity > Services > Enable Git Gateway`" state="light" >}}

## Large Media

{{< alert text="Netlify LM doesn’t support WebP" state="danger" >}}

### Git Attributes

create .gitattributes

```shell
assets/images/upload/** filter=lfs diff=lfs merge=lfs -text
```

### Large Media setup

1/ Login to Netlify:

```shell
netlify login
```

2/ Link your local repository to your site on Netlify:

```shell
netlify link
```

3/ Run the following command for Large Media:

```shell
netlify lm:setup
```
