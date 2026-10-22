---
isIndex: false
title: Sveltia CMS
description: Open-source content management Git-based.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758126005/logo-sveltia-cms_eh8ftl.png
seo:
  description: Simplify your Sveltia CMS setup with Hugolify’s easy-to-use configuration builder.
---
{{< badge text="Available in production" state="success" >}}
{{< badge text="Maintened CMS" state="success" >}}

{{< alert-block title="Warning: Not supported features" state="warning" >}}
- Git Gateway
- Netlify Identify

See {{< blank_link link="https://sveltiacms.app/en/docs/migration/netlify-decap-cms#current-limitations" text="Current limitations" >}} and {{< blank_link link="https://sveltiacms.app/en/docs/migration/netlify-decap-cms#features-not-to-be-implemented" text="features not to be implemented" >}} in Sveltia CMS documentation.
{{< /alert-block >}}

## Enable Sveltia CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  cms: sveltiacms
  repo: Hugolify/hugolify-template # set your repository’s URL
```

## Additional featured

### Disable Netlify identify

```yaml
admin:
  auth:
    netlify_identity: false
```

### GitLab with PKCE

Since Sveltia CMS v0.223, the GitLab backend signs in through Netlify unless `auth_type` says otherwise. To sign in with a GitLab application, set `pkce` next to its Client ID:

```yaml
admin:
  git: gitlab
  auth:
    app_id: your-client-id
    auth_type: pkce
```

### Including Hugo’s special index file in a folder collection

Disables unnecessary indexes collection ({{< blank_link link="https://sveltiacms.app/en/docs/collections/entries#managing-hugo-s-special-index-file" text="See more about this on Sveltia’s documentation" >}}):

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  collections:
    indexes:
      enable: false
```

### Shortcodes

Since {{< badge text="hugolify-admin v1.0.0" state="success" >}}

### Raw markdown and editor height

The markdown fields open in rich text only, in a compact editor. Add the raw mode and let the editor grow:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  fields:
    text_markdown:
      minimal: false
      modes: "['rich_text', 'raw']"
```

{{< button url="../../fields/#markdown-editor" text="See markdown editor" >}}

### Deployments

`skip_ci` is `true` by default: commits made by the CMS do not trigger a build, and editors publish with the **Publish Changes** button.

{{< button url="../../setup/#deployments" text="See deployments" >}}

### Nested collections

{{< badge text="New in v2" state="success" >}}

Sveltia CMS supports nested collections, and fixes several long-standing problems of the Decap implementation along the way — entry paths, preview paths, media folders, folder labels and i18n.

{{< button url="../../collections/#nested-collections" text="See nested collections" >}}

### Reorder

{{< badge text="New in v2" state="success" >}}

```yaml
admin:
  collections:
    pages:
      reorder: true
```

### Table view

{{< badge text="New in v2" state="success" >}}

`summary_fields` chooses the columns of the table view, written as `table_columns`.

```yaml
admin:
  collections:
    persons:
      summary_fields:
        - summary
        - lastname
        - field: contact.email
          label: Email
```

{{< button url="../../collections/#add-summary-fields" text="See summary fields" >}}

### Thumbnails

{{< badge text="New in v2" state="success" >}}

A collection with `featured_image` shows that image beside each entry, and in the grid view. Sveltia CMS only looks for an Image field at the root of the entry, while `featured_image` keeps the file in `image.src`, so Hugolify writes the `thumbnail` option. Turn it off, or name another field:

```yaml
admin:
  collections:
    posts:
      thumbnail: false
```

{{< button url="../../collections/#add-thumbnail" text="See thumbnail" >}}

The lists of images, galleries, logos and testimonials show their image beside each folded item as well.

### Bulk edit

{{< badge text="New in v2" state="success" >}}

Every collection can edit the simple fields of many entries at once, in a table, saved in a single commit. It is off by default under the editorial workflow, as the commit bypasses the review. Turn it off, or pick the columns:

```yaml
admin:
  collections:
    persons:
      bulk_edit: [title, draft]
    posts:
      bulk_edit: false
```

{{< button url="../../collections/#add-bulk-edit" text="See bulk edit" >}}

### Publish mode

{{< badge text="New in v2" state="success" >}}

`publish_mode` also takes `preview`: each save goes to a pull request, checked on a deploy preview, then published without a review stage. An object sets the options of the workflow:

```yaml
admin:
  publish_mode:
    type: editorial_workflow
    stages: [draft, pending_publish] # leaves out In Review
    direct_publish: true # adds Save and Publish for a quick fix
```

{{< blank_link link="https://sveltiacms.app/en/docs/workflows/editorial#options" text="See the options in Sveltia CMS documentation" >}}

### Image conversion on upload

{{< badge text="New in v2" state="success" >}}

HEIC photos from phones, which only Safari can display, are converted to WebP on upload and scaled down to 2560 pixels. Add `raster_image` to convert every image, JPEG and PNG included, or set `transformations: false` to upload them as they are:

```yaml
admin:
  media:
    transformations:
      raster_image:
        quality: 85
        width: 2560
        height: 2560
```

The Asset Library accepts any file a field accepts: its size limit is the largest of the `*_max_file_size`, and each field keeps its own.

### Block descriptions

{{< badge text="New in v2" state="success" >}}

The menu of the Add button shows a line under each block, such as “Questions whose answer opens on click” for the FAQ, in the language of the site. A block from another module takes its own from `admin.blocks.{block}._description` in the i18n files.

### Dividers

{{< badge text="New in v2" state="success" >}}

A divider separates two groups of collections in the sidebar. Out of the box, pages and indexes come first, then the other collections, then config.

```yaml
admin:
  collection_groups:
    - collections: [pages, indexes]
    - collections: [posts, posts_categories, posts_tags]
    - collections: ['*']
    - collections: [config]
```

{{< button url="../../collections/#order-and-group-collections" text="See order and group collections" >}}

### Computed fields

{{< badge text="New in v2" state="success" >}}

The `compute` widget builds a read-only field from the other fields of the entry, and refreshes it as they are typed. No other supported CMS ships an equivalent.

{{< button url="../../widgets/compute/" text="See the compute widget" >}}

## Icon library

- {{< blank_link link="https://fonts.google.com/icons?icon.set=Material+Symbols&icon.platform=web" text="Material Symbols" >}}

## Documentations

- [Hugolify Admin setup](../setup/)
- {{< blank_link link="https://sveltiacms.app/en/docs/" text="Sveltia CMS documentation" >}}
- {{< blank_link link="https://github.com/sveltia/sveltia-cms" text="Sveltia CMS repository" >}}

## Tutorial

- [How to create a Website with Hugo and Sveltia CMS using Hugolify](/tutorials/how-to-create-a-website-with-hugo-and-sveltia-cms-using-hugolify/)
- [How to connect Sveltia CMS to GitHub and Netlify using Hugolify](/tutorials/how-to-connect-sveltia-cms-to-github-and-netlify-using-hugolify/)
