---
draft: false
date: 2025-10-03T09:00:00.000Z
title: How to create a Website with Hugo and Sveltia CMS using Hugolify
description: This tutorial guides you through creating a Website editable via Sveltia CMS.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758116925/420.Dual-Monitor_xu2t2k.svg
seo:
  image: https://res.cloudinary.com/uncinq/image/upload/v1760354326/share-tuto-pagescms_zpra7q.png
hero:
  title: How to create a Website with Hugo and Sveltia CMS using Hugolify
  text: This tutorial guides you through creating a Website editable via Sveltia CMS.
  surtitle: Tutorial
  image:
    src: https://res.cloudinary.com/uncinq/image/upload/v1758116925/420.Dual-Monitor_xu2t2k.svg
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

### Add content type modules (optional)

Feel free to add some type of content Hugolify modules ([sections](/docs/sections/) and [taxonomies](/docs/taxonomies/)).

#### Example

```yaml
imports:
  # Content type modules examples
  - path: github.com/hugolify/hugolify-theme-posts-authors # taxonomy
  - path: github.com/hugolify/hugolify-theme-posts-categories # taxonomy
  - path: github.com/hugolify/hugolify-theme-posts # section
  - path: github.com/hugolify/hugolify-theme-publications # section
  - path: github.com/hugolify/hugolify-theme-persons # section
  # Required modules
  - path: github.com/hugolify/hugolify-theme
  - path: github.com/hugolify/hugolify-admin
```

#### Tutorials

* [How to create a blog featuring categories and tags using Hugolify](how-to-create-a-blog-with-hugo-and-decap-cms-using-hugolify)
* [How to create a portfolio featuring categories using Hugolify](how-to-create-a-portfolio-with-hugo-and-decap-cms-using-hugolify)

## Configuration

### Set Sveltia CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  cms: sveltiacms # set Sveltia CMS as CMS for Hugolify
  repo: Hugolify/hugolify-demo-sveltiacms # set your repository’s url
  collections:
    indexes:
      enable: false # disable unused collection
```

### More about customizations

- [About Admin](/docs/cms/admin/setup/)
- [About Sveltia CMS](/docs/cms/admin/cms/sveltia-cms/)
- [About Collections](/docs/cms/admin/collections/)
- [About Blocks](/docs/cms/admin/blocks/)
- [About Fields](/docs/cms/admin/fields/)

## Launch project

Install packages

```bash
yarn
```

To launch Hugo project with livereload.

```bash
yarn watch
```

## Admin

Edit all your content in <http://localhost:1313/admin/>.

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1760429707/screenshot-sveltiacms-signin_xkrpis.png" alt="screenshot of Sveltia CMS, signin page" legend="Sveltia CMS, signin page" screenshot="true" >}}

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1760473008/screenshot-sveltiacms-pages_oygogh.png" alt="screenshot of Sveltia CMS, pages list" legend="Sveltia CMS, pages list" screenshot="true" >}}

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1760429329/screenshot-sveltiacms-page-contact_nkxxil.png" alt="screenshot of Sveltia CMS, contact page" legend="Sveltia CMS, contact page" screenshot="true" >}}


## Hosting your project

[Host your website on Netlify or others hosters.](/docs/getting-started/hosting/)

## Repository demo

{{< button url="https://github.com/hugolify/hugolify-demo-sveltiacms/" blank="true" text="Check hugolify-demo-sveltiacms repository" >}}
