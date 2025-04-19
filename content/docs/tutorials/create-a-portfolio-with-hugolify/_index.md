---
isPage: true
draft: false
title: Create a portfolio with Hugolify
description: How to create a portfolio with projects and categories.
---

## Prerequisites

* Hugo installed - {{< blank_link link="https://gohugo.io/installation/" text="See Hugo documentation" >}}
* Use Hugolify template - [See Hugolify documentation](/docs/getting-started/install/) 

## Choose the necessary Hugolify modules

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yaml
imports:
  - path: github.com/hugolify/hugolify-theme-projects-types
  - path: github.com/hugolify/hugolify-theme-projects
  - path: github.com/hugolify/hugolify-theme
  - path: github.com/hugolify/hugolify-admin
```

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

* Add new types [http://localhost:1313/admin/#/collections/projects_types/new](http://localhost:1313/admin/#/collections/projects_types/new)
* Add new projects [http://localhost:1313/admin/#/collections/projects/new](http://localhost:1313/admin/#/collections/projects/new)

### Your first project

{{< figure src="/images/uploads/screenshot-hugolify-admin-new-projects-decapcms.png" alt="screenshot of Hugolify admin" legend="Create your first project" screenshot=true >}}


## Front

See locally your website in [http://localhost:1313/](http://localhost:1313/).

## Repository demo

{{< blank_link link="https://github.com/sebousan/hugolify-demo-portfolio/" text="Check Hugolify demo portfolio repository" >}}
