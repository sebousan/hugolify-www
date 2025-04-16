---
title: Install
description: Easy to install
weight: 2
icon: gear
---

## Use Github template

Create your repository with Hugolify template **(recommended)**

{{< button url="https://github.com/hugolify/hugolify-template/generate" blank="true" text="Use Github template" >}}

Or clone repository

```bash
git clone git@github.com:hugolify/hugolify-template.git
```

## Rename module
{{< alert text="`/go.mod`" state="light" >}}

```yaml
# rename github.com/hugolify/hugolify-template to your repository
module github.com/hugolify/hugolify-template
```

## Packages install

With yarn

```bash
yarn
```

With npm

```bash
npm install
```
