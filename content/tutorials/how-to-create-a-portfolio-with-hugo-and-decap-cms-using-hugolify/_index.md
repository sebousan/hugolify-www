---
draft: false
date: 2025-05-13T09:00:00Z
title: How to create a portfolio with Hugo and Decap CMS using Hugolify
description: Portfolio with projects and categories.
image:
  src: /images/uploads/307.Writing.svg
hero:
  title: How to create a portfolio with Hugo and Decap CMS using Hugolify
  text: Portfolio with projects and categories.
  surtitle: Tutorial
  image:
    src: /images/uploads/307.Writing.svg
---

## Prerequisites

* Hugo installed - [See Hugolify documentation](/docs/getting-started/prerequisites/)
* Use Hugolify template - [See Hugolify documentation](/docs/getting-started/install/) 

## Choose the necessary Hugolify modules

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yaml
imports:
  # projects modules
  - path: github.com/hugolify/hugolify-theme-projects-types
  - path: github.com/hugolify/hugolify-theme-projects
  # Required modules
  - path: github.com/hugolify/hugolify-theme
  - path: github.com/hugolify/hugolify-admin
```

You have additional module like projects-tags

```yaml
  - path: github.com/hugolify/hugolify-theme-projects-tags
```

{{< alert text="Section module (hugolify-theme-projects) need be always after taxonomies in this list." state="warning" >}}

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

{{< figure src="/images/uploads/screenshot-hugolify-home-portfolio.png" alt="screenshot of Hugolify website" legend="Your locally website" screenshot=true >}}

## Hosting

[Host your website on Netlify or others hosters.](/docs/getting-started/hosting/)

## Github repository

{{< button url="https://github.com/hugolify/hugolify-demo-portfolio/" blank="true" text="Check hugolify-demo-portfolio repository" >}}
