---
title: Setup
description: How to add content and modules.
weight: 4
icon: sliders
---

## Modules

Edit config file

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

### Required modules

```yml
imports:

# Core theme required
- path: github.com/hugolify/hugolify-theme

# CMS
- path: github.com/hugolify/hugolify-admin
```

### Add modules

Adds modules according to your needs.

#### Example 1

In this example, I have a website with a blog and portfolio to show my projects.

```yml
imports:

# Content
- path: github.com/hugolify/hugolify-theme-projects
- path: github.com/hugolify/hugolify-theme-posts-categories
- path: github.com/hugolify/hugolify-theme-posts

# Core theme required
- path: github.com/hugolify/hugolify-theme

# CMS
- path: github.com/hugolify/hugolify-admin
```

#### Example 2

In this example, I have a website for to propose services and I would like to show my press publications.

```yml
imports:

# Content
- path: github.com/hugolify/hugolify-theme-services
- path: github.com/hugolify/hugolify-theme-publications

# Core theme required
- path: github.com/hugolify/hugolify-theme

# CMS
- path: github.com/hugolify/hugolify-admin
```

## Content

Use Decap CMS to add content in your website.

Or add it in content directory.

{{< alert text="`/content/`" state="light" >}}
