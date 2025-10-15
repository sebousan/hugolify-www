---
draft: false
date: 2025-05-13T09:00:00.000Z
title: How to create a portfolio with Hugo and Decap CMS using Hugolify
description: This tutorial guides you through creating a portfolio featuring
  categories using Hugolify.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758116855/307.Writing_pxggvn.svg
seo:
  image: https://res.cloudinary.com/uncinq/image/upload/v1758206688/share-how-to-portfolio_gknhww.png
hero:
  title: How to create a portfolio with Hugo and Decap CMS using Hugolify
  text: This tutorial guides you through creating a portfolio featuring categories
    using Hugolify.
  surtitle: Tutorial
  image:
    src: https://res.cloudinary.com/uncinq/image/upload/v1758116855/307.Writing_pxggvn.svg
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

### Add projects modules (section and taxonomies)

```yaml
  - path: github.com/hugolify/hugolify-theme-projects-types
  - path: github.com/hugolify/hugolify-theme-projects
```

### You should be to have

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


## Assets

If you want to host your images through a cloud service like Cloudinary or Uploadcare, here's what to do.

### Cloudinary

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  media:
    cloud:
      name: cloudinary
      cloud_name: # write your cloudinary cloud name
      api_key: # write your cloudinary api key
```

### Uploadcare

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  media:
    cloud:
      name: uploadcare
      publicKey: # write your uploadcare public api key
```

## Launch project

Install packages

```bash
yarn
```

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

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1758205507/screenshot-hugolify-decapcms-portfolio_q0tl39.png" alt="screenshot of Hugolify admin" legend="Hugolify admin with Decap CMS" screenshot="true" >}}

### Create content

* [Add new types (localhost link)](http://localhost:1313/admin/#/collections/projects_types/new)
* [Add new projects (localhost link)](http://localhost:1313/admin/#/collections/projects/new)

### Your first project

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1758205505/screenshot-hugolify-decapcms-new-projects_tarhxw.png" alt="screenshot of Hugolify admin" legend="Create your first project" screenshot="true" >}}

## Front

See locally your website in <http://localhost:1313/>.

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1758206166/screenshot-hugolify-home-portfolio_sgn7ep.png" alt="screenshot of Hugolify website" legend="Your local website" screenshot="true" >}}

## Customization

* [Add an available Hugolify theme](/docs/getting-started/themes/)
* [How to customize design](/docs/getting-started/customization/)
* [How to customize admin fields](/docs/cms/admin/fields/)

## Hosting

[Host your website on Netlify or others hosters.](/docs/getting-started/hosting/)

## Github repository

{{< button text="Check hugolify-demo-portfolio repository" url="https://github.com/hugolify/hugolify-demo-portfolio/" blank="true" >}}
