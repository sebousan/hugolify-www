---
draft: false
date: 2025-10-03T09:00:00.000Z
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

Set up Sveltia CMS, add content modules and watch the admin build itself, create content, build a page with blocks and fine-tune the admin. The steps below follow the video.

{{< youtube id="Je4clVcligQ" title="Hugolify + Sveltia CMS: the complete walkthrough" class="youtube" >}}

## Prerequisites

* Git, Go and Hugo installed - [See Hugolify documentation](/docs/getting-started/prerequisites/)
* Use Hugolify template - [See Hugolify documentation](/docs/getting-started/install/)

## 1. Core modules

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yaml
imports:
  # Content

  # Core theme
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-icons # Lucide and Simple Icons
  - path: github.com/hugolify/hugolify-theme-design-system # CSS and JS

  # CMS
  - path: github.com/hugolify/hugolify-admin/v2
```

- **hugolify-theme/v2** provides layouts, content types, translations and archetypes, without CSS or JavaScript.
- **hugolify-theme-design-system** brings the CSS, built on design tokens, and vanilla JavaScript. It can be swapped for [hugolify-theme-bootstrap](/docs/customization/design/) without touching a template.
- **hugolify-theme-icons** is optional: Lucide for the interface, Simple Icons for brands, rendered as SVG.
- **hugolify-admin/v2** generates the CMS configuration from your modules.

Content modules go under `# Content`, **above the core modules**, so they take precedence.

## 2. Set Sveltia CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  cms: sveltiacms # set Sveltia CMS as CMS for Hugolify
  repo: hugolify/hugolify-template # set your repository: owner/name
  collections:
    indexes:
      enable: false # unused with Sveltia CMS
```

## 3. Launch the project and open the admin

Install packages, then launch Hugo with livereload:

```bash
yarn
yarn watch
```

Open <http://localhost:1313/admin/>, click **Work with Local Repository** (Chrome or Edge) and select the project folder. Changes are written to the files: commit and push them yourself.

Out of the box, the admin shows **Pages**, **Menus** and **Config**.

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1760429707/screenshot-sveltiacms-signin_xkrpis.png" alt="screenshot of Sveltia CMS, signin page" legend="Sveltia CMS, signin page" screenshot="true" >}}

## 4. Add content modules

Every content type is a module ([sections](/docs/sections/) and [taxonomies](/docs/taxonomies/)): add it under `# Content`, fetch it, reload the admin, and its collection appears with all its fields. No CMS configuration to write.

### A blog: posts, categories and tags

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yaml
imports:
  # Content
  - path: github.com/hugolify/hugolify-theme-posts-categories/v2
  - path: github.com/hugolify/hugolify-theme-posts-tags/v2
  - path: github.com/hugolify/hugolify-theme-posts/v2
```

```bash
hugo mod get
```

Reload the admin: **News**, **Categories** and **Tags** appear.

### Publications

```yaml
  - path: github.com/hugolify/hugolify-theme-publications/v2
```

### Persons and relation modules

**persons** manages people for the whole site. Relation modules link them to other content: **posts-authors** adds an Authors field to news, **publications-persons** adds a Persons field to publications.

```yaml
  - path: github.com/hugolify/hugolify-theme-posts-authors/v2
  - path: github.com/hugolify/hugolify-theme-publications-persons/v2
  - path: github.com/hugolify/hugolify-theme-persons/v2
```

### Projects

```yaml
  - path: github.com/hugolify/hugolify-theme-projects/v2
```

### Result

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yaml
imports:
  # Content
  - path: github.com/hugolify/hugolify-theme-projects/v2
  - path: github.com/hugolify/hugolify-theme-posts-authors/v2
  - path: github.com/hugolify/hugolify-theme-publications-persons/v2
  - path: github.com/hugolify/hugolify-theme-persons/v2
  - path: github.com/hugolify/hugolify-theme-publications/v2
  - path: github.com/hugolify/hugolify-theme-posts-categories/v2
  - path: github.com/hugolify/hugolify-theme-posts-tags/v2
  - path: github.com/hugolify/hugolify-theme-posts/v2

  # Core theme
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-icons
  - path: github.com/hugolify/hugolify-theme-design-system

  # CMS
  - path: github.com/hugolify/hugolify-admin/v2
```

## 5. Create content

In the admin:

1. **Persons** → New: first name, last name, a short description. Switch off **Draft** and save.
2. **News** → New: a title, a description, the author, a category and some text. The Markdown file is written in `content/posts/`.
3. **Menus** → header menu: add links to News, Publications and the Team page.

## 6. Build a page with blocks

Open **Pages** → Home and add blocks: a **Title**, a **Paragraph** and a **Latest items** block (section `posts`, limit `3`). Save and check the website: the latest news come straight from the posts.

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1760473008/screenshot-sveltiacms-pages_oygogh.png" alt="screenshot of Sveltia CMS, pages list" legend="Sveltia CMS, pages list" screenshot="true" >}}

## 7. Fine-tune the admin

All the next settings go in the same file, under `admin`.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

### Choose the blocks editors can use

```yaml
admin:
  blocks:
    enable:
      - title
      - paragraph
      - latest
      - cta
      - quote
      - faq
```

{{< button url="/docs/admin/v2/blocks/#disable-or-enable" text="See blocks" >}}

### Group collections

Set the order of the sidebar and group collections together:

```yaml
admin:
  collection_groups:
    - collections: [pages]
    - collections: [posts, posts_categories, posts_tags]
    - collections: [persons, publications, projects]
    - collections: [menus, config]
```

{{< button url="/docs/admin/v2/collections/#order-and-group-collections" text="See collection groups" >}}

### Filters, groups, columns and sort order

For the news list: a filter for drafts, a grouping by year, the table columns and the sort order.

```yaml
admin:
  collections:
    posts:
      view_filters:
        - label: Drafts
          field: draft
          pattern: true
      view_groups:
        - label: Year
          field: date
          pattern: '\d{4}'
      summary_fields: [title, date, draft]
      sortable_fields:
        - field: date
          default_sort: desc
        - title
```

{{< button url="/docs/admin/v2/collections/#add-view-filters" text="See list options" >}}

### Bulk edit

Bulk edit lets editors change several entries at once, right in the table view. It is on by default; turn it off or pick its columns per collection:

```yaml
admin:
  collections:
    persons:
      bulk_edit: [title, draft] # these columns, in this order
```

{{< button url="/docs/admin/v2/collections/#add-bulk-edit" text="See bulk edit" >}}

### Override fields

The hero keeps only a title and a text:

```yaml
admin:
  fields:
    hero:
      fields:
        - title
        - text_markdown
```

{{< button url="/docs/admin/v2/fields/#add-or-remove-fields-in-object-field" text="See fields" >}}

### Hide a collection

```yaml
admin:
  collections:
    posts_tags:
      enable: false
```

{{< button url="/docs/admin/v2/collections/#enable-or-disable-collections" text="See collections" >}}

### More about customizations

- [About Admin](/docs/admin/v2/setup/): languages, media folders, file size limits…
- [About Sveltia CMS](/docs/admin/v2/cms/sveltia-cms/)

{{< figure src="https://res.cloudinary.com/uncinq/image/upload/v1760429329/screenshot-sveltiacms-page-contact_nkxxil.png" alt="screenshot of Sveltia CMS, contact page" legend="Sveltia CMS, contact page" screenshot="true" >}}

## Hosting your project

[Host your website on Netlify or others hosters.](/docs/getting-started/hosting/)

To let editors sign in with GitHub and publish on demand, follow [How to connect Sveltia CMS to GitHub and Netlify using Hugolify](/tutorials/how-to-connect-sveltia-cms-to-github-and-netlify-using-hugolify/).

## Repository demo

{{< button url="https://github.com/hugolify/hugolify-demo-sveltiacms/" blank="true" text="Check hugolify-demo-sveltiacms repository" >}}
