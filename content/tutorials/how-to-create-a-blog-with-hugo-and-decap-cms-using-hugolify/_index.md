---
draft: false
date: 2025-05-12T09:00:00Z
title: How to create a blog with Hugo and Decap CMS using Hugolify
description: Blog with categories and tags.
image:
  src: /images/uploads/361.Reading-The-News.svg
seo:
  image: /images/uploads/share-how-to-blog.png
hero:
  title: How to create a blog with Hugo and Decap CMS using Hugolify
  text: Blog with categories and tags.
  surtitle: Tutorial
  image:
    src: /images/uploads/361.Reading-The-News.svg
---

## Prerequisites

* Hugo installed - [See Hugolify documentation](/docs/getting-started/prerequisites/)
* Use Hugolify template - [See Hugolify documentation](/docs/getting-started/install/) 

## Choose the necessary Hugolify modules

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yaml
imports:
  # posts modules
  - path: github.com/hugolify/hugolify-theme-posts-tags
  - path: github.com/hugolify/hugolify-theme-posts-categories
  - path: github.com/hugolify/hugolify-theme-posts
  # Required modules
  - path: github.com/hugolify/hugolify-theme
  - path: github.com/hugolify/hugolify-admin
```

You have additional modules:

```yaml
  - path: github.com/hugolify/hugolify-theme-posts-authors
  - path: github.com/hugolify/hugolify-theme-posts-expertises # need hugolify-theme-expertises too
```

{{< alert text="Section module (hugolify-theme-posts) need be always after taxonomies in this list." state="warning" >}}

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

* [Add new categories (localhost link)](http://localhost:1313/admin/#/collections/categories/new)
* [Add new tags (localhost link)](http://localhost:1313/admin/#/collections/tags/new)
* [Add new posts (localhost link)](http://localhost:1313/admin/#/collections/posts/new)

### Your first post

{{< figure src="/images/uploads/screenshot-hugolify-admin-new-posts-decapcms.png" alt="screenshot of Hugolify admin" legend="Create your first post" screenshot=true >}}

## Front

See locally your website in [http://localhost:1313/](http://localhost:1313/).

{{< figure src="/images/uploads/screenshot-hugolify-home-blog.png" alt="screenshot of Hugolify website" legend="Your locally website" screenshot=true >}}

## Hosting

[Host your website on Netlify or others hosters.](/docs/getting-started/hosting/)

## Customization

* [Add an available Hugolify theme](/docs/getting-started/themes/)
* [How to customize design](/docs/getting-started/customization/)
* [How to customize admin fields](/docs/cms/admin/fields/)

## Repository demo

{{< button url="https://github.com/hugolify/hugolify-demo-blog/" blank="true" text="Check hugolify-demo-blog repository" >}}
