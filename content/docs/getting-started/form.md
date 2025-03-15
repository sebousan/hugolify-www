---
title: Form
description: Use Netlify form or another services
weight: 6
icon: input-cursor
---

## Setup

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
form:
  netlify: true # Set false to disable Netlify forms
  action: false # Replace by URL from formspree, fabform, kwes…
```

## Services available

* {{< blank_link link="https://fabform.io/" text="FabForm" >}}
* {{< blank_link link="https://formspree.io/" text="Formspree" >}}
* {{< blank_link link="https://kwesforms.com/" text="KwesForms" >}}
* {{< blank_link link="https://docs.netlify.com/forms/setup/" text="Netlify forms" >}}  {{< badge state="warning" text="Default" >}}
