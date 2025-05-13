---
draft: false
title: How to create a multisite with Hugo and Decap CMS using Hugolify
description: With common and different content.
image:
  src: /images/uploads/303.Apps.svg
hero:
  title: How to create a multisite with Hugo and Decap CMS using Hugolify
  text: With common and different content.
  surtitle: Tutorial
  image:
    src: /images/uploads/303.Apps.svg
---

## Introduction

We'll be creating two websites, each with shared and different content, on a single Hugo instance and hosted by Netlify. They'll be managed from a single location via Decap CMS.

## Prerequisites

* Hugo installed - [See Hugolify documentation](/docs/getting-started/prerequisites/)
* Use Hugolify template - [See Hugolify documentation](/docs/getting-started/install/)


## Edit and create specific config files

We need to create a config file for each websites.

### Remove all config from module

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

### Site A config

Create a specific site_a config file:

{{< alert text="`/config/_default/site_a.yaml`" state="light" >}}

```yaml
title: Site A
publishDir: public/site_a

module:
  imports:
    # Content
    # -> Hugolify content types and taxonomies available https://www.hugolify.io/docs/sections/
    - path: github.com/hugolify/hugolify-theme-posts

    # Core theme
    - path: github.com/hugolify/hugolify-theme

    # Admin
    - path: github.com/hugolify/hugolify-admin

  # Get specific contents
  mounts:
    # Index posts file
    - source: 'content/site_a/posts.md'
      target: 'content/posts/_index.md'

    # Posts
    - source: 'content/posts'
      target: 'content/posts'

    # Sitemap
    - source: 'content/sitemap'
      target: 'content/sitemap'

    # Content
    - source: 'content/site_a'
      target: 'content'

    # Data
    - source: 'data/site_a'
      target: 'data'

    # SASS Variables
    - source: 'assets/sass/abstracts/_variables-site-a.sass'
      target: 'assets/sass/abstracts/_variables-site.sass'
```

Now add specific site params in same file:

```yaml
# Set site param
params:
  _merge: deep
  site: site_a
  logo:
    header: '/assets/images/logo_site-a.svg'
    footer: '/assets/images/logo_site-a.svg'
  share: '/assets/images/share_site-a.png'
```

Now add Hugolify admin params in same file and same params:

```yaml
  # Admin
  admin:
    
    # Disable nested pages
    nested:
      depth: 1
    
    collections:
      # Disable collections originals
      indexes:
        enable: false
      pages:
        enable: false

      # Enable all sites
      site_a:
        enable: true
      site_b:
        enable: true
```

Add specific config production file:

{{< alert text="`/config/production/site_a.yaml`" state="light" >}}

```yaml
baseURL: https://www.site_a.com/
```


### Site B config

Create a specific site_b config file:

{{< alert text="`/config/_default/site_b.yaml`" state="light" >}}

```yaml
title: Site B
publishDir: public/site_b

module:
  imports:
    # Content
    # -> Hugolify content types and taxonomies available https://www.hugolify.io/docs/sections/
    - path: github.com/hugolify/hugolify-theme-posts

    # Core theme
    - path: github.com/hugolify/hugolify-theme

  # Get specific contents
  mounts:
    # Index posts file
    - source: 'content/site_b/posts.md'
      target: 'content/posts/_index.md'

    # Posts
    - source: 'content/posts'
      target: 'content/posts'

    # Sitemap
    - source: 'content/sitemap'
      target: 'content/sitemap'

    # Content
    - source: 'content/site_b'
      target: 'content'

    # Data
    - source: 'data/site_b'
      target: 'data'

    # SASS Variables
    - source: 'assets/sass/abstracts/_variables-site-b.sass'
      target: 'assets/sass/abstracts/_variables-site.sass'
```

Add specific config production file:

{{< alert text="`/config/production/site_b.yaml`" state="light" >}}

```yaml
baseURL: https://www.site_b.com/
```

## Prepare your directories

### SASS

```txt
assets/
└── sass/
    └── abstracts/
        └── _variables-site-a.sass
        └── _variables-site-b.sass
```

### Content

Common and specific content:

```txt
content/
├── posts/
├── site_a/
│   └── _index.md
│   ├── about/
│   │   └── _index.md
│   ├── legal-mentions/
│   │   └── _index.md
│   ├── posts/
│   │   └── _index.md
│   └── privacy-policy/
│       └── _index.md
├── site_b/
│   └── _index.md
│   ├── about/
│   │   └── _index.md
│   ├── legal-mentions/
│   │   └── _index.md
│   ├── posts/
│   │   └── _index.md
│   └── privacy-policy/
│       └── _index.md
└── sitemap
```

### Data

Specific menus by websites:

```txt
data/
├── site_a/
│   ├── banner.yml
│   ├── footer.yml
│   └── menu/
│       └── legal.yml
│       └── primary.yml
│       └── secondary.yml
│       └── social.yml
└── site_b/
    ├── banner.yml
    ├── footer.yml
    └── menu/
        └── legal.yml
        └── primary.yml
        └── secondary.yml
        └── social.yml
```

### Static

Example: your website specific image share

```txt
static/
└── assets/
    └── images/
        └── logo_site-a.svg
        └── logo_site-b.svg
        └── share_site-a.png
        └── share_site-b.png
```

## Create specific commands

```json
{
  "scripts": {
    "build": "hugo --noChmod --gc --minify",
    "build-site_a": "hugo --config config/_default/site_a.yaml,config/production/site_a.yaml --noChmod --gc --minify",
    "build-site_b": "hugo --config config/_default/site_b.yaml,config/production/site_b.yaml --noChmod --gc --minify",
    "watch-site_a": "hugo server --config config/_default/site_a.yaml",
    "watch-site_b": "hugo server --config config/_default/site_b.yaml",
  }
}
```

## Launch project

### Site A

To launch Hugo project with livereload.

```bash
yarn watch-site_a
```

{{< figure src="/images/uploads/screenshot-multisite-home-site-a.png" alt="screenshot of homepage of site A" legend="Homepage of Site A" screenshot=true >}}

And in a second terminal, launch Decap CMS in localhost.

```bash
yarn cms
```

### Site B

To launch Hugo project with livereload.

```bash
yarn watch-site_b
```

{{< figure src="/images/uploads/screenshot-multisite-home-site-b.png" alt="screenshot of homepage of site A" legend="Homepage of Site A" screenshot=true >}}

## Admin

Edit all your content in [http://localhost:1313/admin/](http://localhost:1313/admin/).

{{< figure src="/images/uploads/screenshot-multisite-hugolify-admin-site-a.png" alt="screenshot of Hugolify admin" legend="Hugolify admin with Decap CMS" screenshot=true >}}

### Create content

* [Add new common posts (localhost link)](http://localhost:1313/admin/#/collections/posts/new)
* [Add new site A page (localhost link)](http://localhost:1313/admin/#/collections/site_a/new)
* [Add new site B page (localhost link)](http://localhost:1313/admin/#/collections/site_b/new)

### Your first posts

{{< figure src="/images/uploads/screenshot-hugolify-admin-new-posts-decapcms.png" alt="screenshot of Hugolify admin" legend="Create your first posts" screenshot=true >}}

## Hosting

[Host your website on Netlify.](/docs/getting-started/hosting/netlify/)

## Github repository

{{< button url="https://github.com/hugolify/hugolify-demo-multisite/" blank="true" text="Check hugolify-demo-multisite repository" >}}
