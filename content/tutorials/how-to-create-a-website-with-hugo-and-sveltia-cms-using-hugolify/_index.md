---
draft: false
date: 2026-11-12T09:00:00.000Z
title: How to create a Website with Hugo and Sveltia CMS using Hugolify
description: This tutorial guides you through creating a Website editable via Sveltia CMS.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758116925/420.Dual-Monitor_xu2t2k.svg
seo:
  image: https://res.cloudinary.com/uncinq/image/upload/v1760515765/share-tuto-sveltiacms_vlubyb.png
hero:
  title: How to create a Website with Hugo and Sveltia CMS using Hugolify
  text: This tutorial guides you through creating a Website editable via Sveltia CMS.
  surtitle: Tutorial
  image:
    src: https://res.cloudinary.com/uncinq/image/upload/v1758116925/420.Dual-Monitor_xu2t2k.svg
status:
  text: V2
  state: primary
---
## Video walkthrough

Set up Sveltia CMS, add content modules and watch the admin build itself, create content, build a page with blocks and fine-tune the admin.

{{< youtube id="Je4clVcligQ" title="Hugolify + Sveltia CMS: the complete walkthrough" class="youtube" >}}

## Prerequisites

* Git, Go and Hugo installed - [See Hugolify documentation](/docs/getting-started/prerequisites/)
* Use Hugolify template - [See Hugolify documentation](/docs/getting-started/install/)

## Choose the necessary Hugolify modules

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

### Add required modules

```yaml
imports:
  # Content

  # Core theme
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-design-system # or hugolify-theme-bootstrap
  - path: github.com/hugolify/hugolify-theme-icons # optional, Lucide and Simple Icons

  # CMS
  - path: github.com/hugolify/hugolify-admin/v2
```

- **hugolify-theme/v2** provides layouts, content types, translations and archetypes, without CSS or JavaScript.
- A **styling module** brings the CSS and JavaScript: [hugolify-theme-design-system or hugolify-theme-bootstrap](/docs/customization/design/).
- **hugolify-admin/v2** generates the Sveltia CMS configuration from your modules.

### Add content type modules (optional)

Feel free to add some type of content Hugolify modules ([sections](/docs/sections/) and [taxonomies](/docs/taxonomies/)). Declare them under `# Content`, **above the core theme**, so they take precedence over it. Each module adds its collection to the admin, with its fields: no CMS configuration to write.

#### Example

```yaml
imports:
  # Content
  - path: github.com/hugolify/hugolify-theme-posts-categories/v2 # taxonomy
  - path: github.com/hugolify/hugolify-theme-posts-tags/v2 # taxonomy
  - path: github.com/hugolify/hugolify-theme-posts/v2 # section

  # Core theme
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-design-system
  - path: github.com/hugolify/hugolify-theme-icons

  # CMS
  - path: github.com/hugolify/hugolify-admin/v2
```

Then fetch the modules:

```bash
hugo mod get
```

#### Tutorials

* [How to create a blog featuring categories and tags using Hugolify](/tutorials/how-to-create-a-blog-with-hugo-and-decap-cms-using-hugolify/)
* [How to create a portfolio featuring categories using Hugolify](/tutorials/how-to-create-a-portfolio-with-hugo-and-decap-cms-using-hugolify/)

## Configuration

### Set Sveltia CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:

  cms: sveltiacms # set Sveltia CMS as CMS for Hugolify
  repo: Hugolify/hugolify-template # set your repository: owner/name

  collections:
    indexes:
      enable: false # disable unused collection
```

### More about customizations

- [About Admin](/docs/admin/v2/setup/)
- [About Sveltia CMS](/docs/admin/v2/cms/sveltia-cms/)
- [About Collections](/docs/admin/v2/collections/)
- [About Blocks](/docs/admin/v2/blocks/)
- [About Fields](/docs/admin/v2/fields/)

## Hosting your project

[Host your website on Netlify or others hosters.](/docs/getting-started/hosting/)

To let editors sign in with GitHub and publish on demand, follow [How to connect Sveltia CMS to GitHub and Netlify using Hugolify](/tutorials/how-to-connect-sveltia-cms-to-github-and-netlify-using-hugolify/).
