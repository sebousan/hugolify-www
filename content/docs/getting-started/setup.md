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

# Core theme
- path: github.com/hugolify/hugolify-theme/v2

# Styling layer
- path: github.com/hugolify/hugolify-theme-bootstrap

# Headless CMS
- path: github.com/hugolify/hugolify-admin
```

{{< alert-block text="hugolify-theme" state="warning" >}}
Since v2, **hugolify-theme** is the agnostic core. It provides templates, functions, layouts and vendors JS. It requires a **styling module** to supply variables, vendors, and framework-specific styles. The default is **hugolify-theme-bootstrap**. See [Design customization](/docs/customization/design/) for alternatives.

In v1, Bootstrap CSS and JS were bundled directly inside **hugolify-theme**.
{{< /alert-block >}}

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

# Core theme
- path: github.com/hugolify/hugolify-theme/v2

# Styling layer
- path: github.com/hugolify/hugolify-theme-bootstrap

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

# Core theme
- path: github.com/hugolify/hugolify-theme/v2

# Styling layer
- path: github.com/hugolify/hugolify-theme-bootstrap

# CMS
- path: github.com/hugolify/hugolify-admin
```

## Content

Use your Headless CMS to add content in your website or add it directly in the content directory.

{{< alert text="`/content/`" state="light" >}}
