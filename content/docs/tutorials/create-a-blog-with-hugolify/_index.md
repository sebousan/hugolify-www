---
isPage: true
draft: false
title: Create a blog with Hugolify
description: How to create a blog with categories and tags.
---

## Prerequisites

* Hugo installed - {{< blank_link link="https://gohugo.io/installation/" text="See Hugo documentation" >}}
* Use Hugolify template - [See Hugolify documentation](/docs/getting-started/install/) 

## Choose the necessary Hugolify modules

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yaml
imports:
  - path: github.com/hugolify/hugolify-theme-posts-tags
  - path: github.com/hugolify/hugolify-theme-posts-categories
  - path: github.com/hugolify/hugolify-theme-posts
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

{{< figure src="/images/uploads/screenshot-hugolify-admin-blog-decapcms.png" alt="screenshot of Hugolify admin" legend="Hugolify admin with Decap CMS" screenshot=true >}}

### Create content

* Add new categories [http://localhost:1313/admin/#/collections/categories/new](http://localhost:1313/admin/#/collections/categories/new)
* Add new tags [http://localhost:1313/admin/#/collections/tags/new](http://localhost:1313/admin/#/collections/tags/new)
* Add new posts [http://localhost:1313/admin/#/collections/posts/new](http://localhost:1313/admin/#/collections/posts/new)

### Your first post

{{< figure src="/images/uploads/screenshot-hugolify-admin-new-posts-decapcms.png" alt="screenshot of Hugolify admin" legend="Create your first post" screenshot=true >}}


## Front

See locally your website in [http://localhost:1313/](http://localhost:1313/).

{{< figure src="/images/uploads/screenshot-hugolify-home-blog.png" alt="screenshot of Hugolify website" legend="Your locally website" screenshot=true >}}

## Repository demo

{{< blank_link link="https://github.com/sebousan/hugolify-demo-blog/" text="Check Hugolify demo blog repository" >}}
