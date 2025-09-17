---
draft: false
date: 2025-05-12T09:00:00.000Z
title: How to create a blog with Hugo and Decap CMS using Hugolify
description: This tutorial guides you through creating a blog featuring
  categories and tags using Hugolify.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758116874/361.Reading-The-News_h2lohi.svg
seo:
  image: /images/uploads/share-how-to-blog.png
hero:
  title: How to create a blog with Hugo and Decap CMS using Hugolify
  text: This tutorial guides you through creating a blog featuring categories and
    tags using Hugolify.
  surtitle: Tutorial
  image:
    src: https://res.cloudinary.com/uncinq/image/upload/v1758116874/361.Reading-The-News_h2lohi.svg
---
## Prerequisites

* Git, Go and Hugo installed - [See Hugolify documentation](/docs/getting-started/prerequisites/)
* Use Hugolify template - [See Hugolify documentation](/docs/getting-started/install/) 

## Choose the necessary Hugolify modules

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

### Add required modules

```yaml
imports:
  - path: github.com/hugolify/hugolify-theme
  - path: github.com/hugolify/hugolify-admin
```

### Add posts modules (section and taxonomies)

```yaml
  - path: github.com/hugolify/hugolify-theme-posts-tags
  - path: github.com/hugolify/hugolify-theme-posts-categories
  - path: github.com/hugolify/hugolify-theme-posts
```

### You should be to have

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

{{< alert text="The section module (hugolify-theme-posts) should always be listed after taxonomies in this configuration." state="warning" >}}

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

Edit all your content in <http://localhost:1313/admin/>.

{{< figure src="/images/uploads/screenshot-hugolify-admin-blog-decapcms.png" alt="screenshot of Hugolify admin" legend="Hugolify admin with Decap CMS" screenshot=true >}}

### Create content

* [Add new categories (localhost link)](http://localhost:1313/admin/#/collections/categories/new)
* [Add new tags (localhost link)](http://localhost:1313/admin/#/collections/tags/new)
* [Add new posts (localhost link)](http://localhost:1313/admin/#/collections/posts/new)

### Your first post

{{< figure src="/images/uploads/screenshot-hugolify-admin-new-posts-decapcms.png" alt="screenshot of Hugolify admin" legend="Create your first post" screenshot=true >}}

## Front

See locally your website in <http://localhost:1313/>.

{{< figure src="/images/uploads/screenshot-hugolify-home-blog.png" alt="screenshot of Hugolify website" legend="Your local website" screenshot=true >}}

## Customization

* [Add an available Hugolify theme](/docs/getting-started/themes/)
* [How to customize design](/docs/getting-started/customization/)
* [How to customize admin fields](/docs/cms/admin/fields/)

## Hosting

[Host your website on Netlify or others hosters.](/docs/getting-started/hosting/)

## Repository demo

{{< button url="https://github.com/hugolify/hugolify-demo-blog/" blank="true" text="Check hugolify-demo-blog repository" >}}
