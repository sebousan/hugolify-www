---
title: Contributes
description: Help us to improve Hugolify.
weight: 10
icon: people
---

## Mainteners

- {{< blank_link link="https://www.sebousan.com/" text="Sébastien Moulène" >}}
- {{< blank_link link="https://arthaudproust.fr/" text="Arthaud Proust" >}}

## Publish a version

We use {{< blank_link link="https://github.com/release-it/release-it" text="release-it" >}} to automate version publication.

You juste have to run `npx release-it` and hit Enter to publish a version.
Then (if you have rights), publish version on Github by clicking on the link provided by release-it

Config:

```yml
create commit : true
push : true
create tag : true
publish on github : true
publish on npm : false
```
