---
draft: false
date: 2025-05-13T09:00:00Z
title: How to create a portfolio with Hugo and Decap CMS using Hugolify
description: This tutorial guides you through creating a portfolio featuring categories using Hugolify.
image:
  src: /images/uploads/307.Writing.svg
seo:
  image: /images/uploads/share-how-to-portfolio.png
hero:
  title: How to create a portfolio with Hugo and Decap CMS using Hugolify
  text: This tutorial guides you through creating a portfolio featuring categories using Hugolify.
  surtitle: Tutorial
  image:
    src: /images/uploads/307.Writing.svg
---

## Prerequisites

* Git, Go and Hugo installed - [See Hugolify documentation](/docs/getting-started/prerequisites/)
* Use Hugolify template - [See Hugolify documentation](/docs/getting-started/install/) 

## Choose the necessary Hugolify modules

{{< alert text="`/config/_default/module.yaml`" state="light" >}}


### Add required modules:

```yaml
imports:
  - path: github.com/hugolify/hugolify-theme
  - path: github.com/hugolify/hugolify-admin
```

### Add projects modules (section and taxonomies):

```yaml
  - path: github.com/hugolify/hugolify-theme-projects-types
  - path: github.com/hugolify/hugolify-theme-projects
```

### You have something like that:

```yaml
imports:
  # Projects modules
  - path: github.com/hugolify/hugolify-theme-projects-types
  - path: github.com/hugolify/hugolify-theme-projects
  # Required modules
  - path: github.com/hugolify/hugolify-theme
  - path: github.com/hugolify/hugolify-admin
```

{{< alert text="The section module (hugolify-theme-projects) should always be listed after taxonomies in this configuration." state="warning" >}}
{{< alert text="Required module (hugolify-theme and hugolify-admin) need be always at the end of list." state="danger" >}}

## Launch project

To launch Hugo project with livereload.

```bash
yarn watch
```

And in a second terminal, launch Decap CMS in localhost.

```bash
yarn cms
```

## Admin

Edit all your content in [http://localhost:1313/admin/](http://localhost:1313/admin/).

{{< figure src="/images/uploads/screenshot-hugolify-admin-portfolio-decapcms.png" alt="screenshot of Hugolify admin" legend="Hugolify admin with Decap CMS" screenshot=true >}}

### Create content

* [Add new types (localhost link)](http://localhost:1313/admin/#/collections/projects_types/new)
* [Add new projects (localhost link)](http://localhost:1313/admin/#/collections/projects/new)

### Your first project

{{< figure src="/images/uploads/screenshot-hugolify-admin-new-projects-decapcms.png" alt="screenshot of Hugolify admin" legend="Create your first project" screenshot=true >}}

## Front

See locally your website in [http://localhost:1313/](http://localhost:1313/).

{{< figure src="/images/uploads/screenshot-hugolify-home-portfolio.png" alt="screenshot of Hugolify website" legend="Your local website" screenshot=true >}}

## Customization

* [Add an available Hugolify theme](/docs/getting-started/themes/)
* [How to customize design](/docs/getting-started/customization/)
* [How to customize admin fields](/docs/cms/admin/fields/)

## Hosting

[Host your website on Netlify or others hosters.](/docs/getting-started/hosting/)

## Github repository

{{< button url="https://github.com/hugolify/hugolify-demo-portfolio/" blank="true" text="Check hugolify-demo-portfolio repository" >}}
