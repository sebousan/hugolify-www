---
draft: true
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

    # Menu
    - source: 'data/menu/site_a'
      target: 'data/menu'

    # Static
    - source: 'static/site_a'
      target: 'static'

    # Assets
    - source: 'assets'
      target: 'assets'
```

Now add Hugolify admin params in same file:

```yaml
# Set admin params
params:
  _merge: deep

  # Admin
  admin:
    collections:
      # Disable collections originals
      config:
        enable: false
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

    # Menu
    - source: 'data/menu/site_b'
      target: 'data/menu'

    # Static
    - source: 'static/site_b'
      target: 'static'

    # Assets
    - source: 'assets'
      target: 'assets'
```

Add specific config production file:

{{< alert text="`/config/production/site_b.yaml`" state="light" >}}

```yaml
baseURL: https://www.site_b.com/
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

## Prepare your directories

### Content

Common and specific content:

```txt
content/
├── posts/
├── site_a/
│   └── _index.md
│   └── posts.md
├── site_b/
│   └── _index.md
│   └── posts.md
├── sitemap
```

### Data

Specific menus by websites:

```txt
data/
├── site_a/
│   └── menu/
│       └── legal.yml
│       └── primary.yml
│       └── secondary.yml
│       └── social.yml
├── site_b/
│   └── menu/
│       └── legal.yml
│       └── primary.yml
│       └── secondary.yml
│       └── social.yml
```

### Static

Example: your website specific image share

```txt
static/
├── site_a/
│   └── assets/
│       └── images/
│           └── share.png
├── site_b/
│   └── assets/
│       └── images/
│           └── share.png
```


## Launch project

### Site A

To launch Hugo project with livereload.

```bash
yarn watch-site_a
```

And in a second terminal, launch Decap CMS in localhost.

```bash
yarn cms
```

### Site B

To launch Hugo project with livereload.

```bash
yarn watch-site_b
```

## Admin

Edit all your content in [http://localhost:1313/admin/](http://localhost:1313/admin/).

{{< figure src="/images/uploads/screenshot-hugolify-admin-multisite-decapcms.png" alt="screenshot of Hugolify admin" legend="Hugolify admin with Decap CMS" screenshot=true >}}

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
