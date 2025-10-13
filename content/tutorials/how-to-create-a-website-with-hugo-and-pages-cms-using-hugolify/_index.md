---
draft: false
date: 2025-10-12T09:00:00.000Z
title: How to create a Website with Hugo and Pages CMS using Hugolify
description: This tutorial guides you through creating a Website editable via Pages CMS.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758117389/554.Urban-Puzzle_lwreua.svg
seo:
  image: https://res.cloudinary.com/uncinq/image/upload/v1760354326/share-tuto-pagescms_zpra7q.png
hero:
  title: How to create a Website with Hugo and Pages CMS using Hugolify
  text: This tutorial guides you through creating a Website editable via Pages CMS.
  surtitle: Tutorial
  image:
    src: https://res.cloudinary.com/uncinq/image/upload/v1758117389/554.Urban-Puzzle_lwreua.svg
---
## Prerequisites

* Git, Go and Hugo installed - [See Hugolify documentation](/docs/getting-started/prerequisites/)
* Use Hugolify template - [See Hugolify documentation](/docs/getting-started/install/) 
* Github account
* Pages CMS account

## Choose the necessary Hugolify modules

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

### Add required modules

```yaml
imports:
  - path: github.com/hugolify/hugolify-theme
  - path: github.com/hugolify/hugolify-admin
```

### Add facultatives modules

Feel free to add some content hugolify modules ([sections](/docs/sections/) and [taxonomies](/docs/taxonomies/)).

Examples:

* [How to create a blog featuring categories and tags using Hugolify](how-to-create-a-blog-with-hugo-and-decap-cms-using-hugolify)
* [How to create a portfolio featuring categories using Hugolify](how-to-create-a-portfolio-with-hugo-and-decap-cms-using-hugolify)

## Configuration

### Set Pages CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  cms: pagescms
```

### More about customizations

- [About Admin](/docs/cms/admin/setup/)
- [About Pages CMS](/docs/cms/admin/cms/pages-cms/)


## Get Pages CMS config file

Install packages

```bash
yarn
```

Command to build project and create Pages CMS config file

```bash
yarn build:config:pagescms
```

## Push in Github

{{< alert text="Config file `.pages.yml` needs to be in your root repository." state="warning" >}}

Commit and push to Github your changes.


## Pages CMS

Go to {{< blank_link link="https://app.pagescms.org/" text="https://app.pagescms.org/" >}}

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1760350211/pagescms-login_t13j53.png" alt="screenshot of Pages CMS app login page" legend="Pages CMS, login" screenshot="true" >}}

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1760350535/screenshot-pagescms-home_z3ps6g.png" alt="screenshot of Pages CMS app home page" legend="Pages CMS, home" screenshot="true" >}}

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1760351336/screenshot-pagescms-project_mmadxa.png" alt="screenshot of Pages CMS app project page" legend="Pages CMS, project" screenshot="true" >}}

## Hosting your project

[Host your website on Netlify or others hosters.](/docs/getting-started/hosting/)

## Repository demo

{{< button url="https://github.com/hugolify/hugolify-demo-pagescms/" blank="true" text="Check hugolify-demo-pagescms repository" >}}
