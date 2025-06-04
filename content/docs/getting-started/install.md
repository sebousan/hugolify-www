---
title: Install
description: Easy to install
weight: 2
icon: gear
---

## Use Github template

Go to our {{< blank_link link="https://github.com/Hugolify/hugolify-template" text="Github template repository" >}} and click to *use this template* button then *create a new repository*.

{{< figure src="/images/uploads/screenshot-use-template.png" alt="screenshot of hugolify-template repository" legend="Hugolify template on Github" screenshot=true >}}

{{< button url="https://github.com/hugolify/hugolify-template/generate" blank="true" text="Use Github template" >}}


## Create a new repository

{{< figure src="/images/uploads/screenshot-create-a-new-repository.png" alt="screenshot of Github" legend="Create a new repository on Github" screenshot=true >}}

## Clone repository localy

In your repository, click on *code* button and copy SSH git url.

{{< figure src="/images/uploads/screenshot-clone-repository-blog.png" alt="screenshot of Github" legend="Clone repository" screenshot=true >}}

### Command

In your terminal and where you want to install the repository.
```bash
git clone git@github.com:hugolify/hugolify-template.git
```

## Rename to your informations

### Module

{{< alert text="`/go.mod`" state="light" >}}

This part needs modify (use your repository name):

```yaml
module github.com/hugolify/hugolify-template
```

### Package

{{< alert text="`/package.json`" state="light" >}}

This part needs modify with your informations:

```json
{
  "name": "hugolify-www",
  "version": "1.2.3",
  "homepage": "https://www.hugolify.io",
  "repository": "https://github.com/sebousan/hugolify-www",
  "author": {
    "name": "Sébastien Moulène",
    "url": "https://www.sebastienmoulene.com/"
  }
}
```

## Install packages

With yarn

```bash
yarn
```

With npm

```bash
npm install
```
