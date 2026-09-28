---
title: Setup
description: Install module and config
weight: 3
icon: sliders
---

{{< alert-block title="Prerelease" state="warning" >}}
v2 is published as prerelease tags only — the latest is **v2.0.0-24**. Go resolves stable versions by default, so `hugo mod get` will keep you on **v1** unless you pin a prerelease explicitly.

v2 requires **hugolify-theme v2**. The two are versioned together and a mismatched pair fails silently — see [Compatibility](/docs/admin/v2/migration/#compatibility).
{{< /alert-block >}}

## Install

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-bootstrap
  - path: github.com/hugolify/hugolify-admin/v2
```

```bash
hugo mod get github.com/hugolify/hugolify-admin/v2@v2.0.0-24
```

Replace the tag with the most recent one — prereleases are published often and Go will not pick them up on its own.

{{< alert text="The module path carries the major: `hugolify-admin/v2`. Without it Go resolves v1." state="warning" >}}

{{< blank_link link="https://github.com/hugolify/hugolify-admin/releases" text="See the latest prereleases" >}}

## CMS params

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
# Default params
admin:

  cms: decapcms # optional, decapcms by default
  branch: main # optional, default "main"
  git: git-gateway # optional, default "git-gateway" but not supported for Sveltia CMS
  repo: # optional, e.g "hugolify/hugolify-template"

  config:
    id: false # use ID for dir/name files and relation
  nested:
    depth: 1 # 1 disables the tree, 2 and up enable it, overridable per collection
  preview: false
  publish_mode: simple # optional, simple or editorial_workflow

  # Auth
  auth:
    app_id: # The Client ID provided by Gitea/GitLab
    api_root: # API URL of your Gitea/GitLab instance
    auth_endpoint: # Auth endpoint of your Gitea/GitLab instance
    base_url: # Root URL of your Gitea/GitLab instance
    netlify_identity: true # Add Netlify identity

  # Languages
  i18n:
    default_locale: en # master lang for an i18n website
    locales: false # "[en,fr]" for an i18n website

  # Assets
  media:
    # Image
    media_folder: '/assets/images/uploads'
    public_folder: '/images/uploads'
    max_file_size: 700000 # 700ko
    specific_filter: false # set true to add a selected filter by image

    # Audio
    audio_max_file_size: 1000000 # 1Mo
    audio_folders: false # set true to active
    audio_media_folder: '/static/assets/audios'
    audio_public_folder: '/assets/audios'

    # Document
    document_max_file_size: 5000000 # 5Mo
    document_folders: false # set true to active
    document_media_folder: '/static/assets/documents'
    document_public_folder: '/assets/documents'

    # File
    file_max_file_size: 5000000 # 5Mo
    file_folders: false # set true to active
    file_media_folder: '/static/assets/files'
    file_public_folder: '/assets/files'

    # PDF
    pdf_max_file_size: 5000000 # 5Mo
    pdf_folders: false # set true to active
    pdf_media_folder: '/static/pdf'
    pdf_public_folder: '/pdf'

    # Video
    video_max_file_size: 5000000 # 5Mo
    video_folders: false # set true to active
    video_media_folder: '/static/assets/videos'
    video_public_folder: '/assets/videos'

    # Optional cloud settings, not supported for Sveltia CMS
    cloud:
      name: cloudinary # or uploadcare
      cloud_name: # your cloudinary cloud name
      api_key: # your cloudinary api key
      publicKey: # your uploadcare public api key

    providers: # for sveltia-cms
```

### Media folders per type

Each media category carries its own folder pair and size limit. Set `<type>_folders: true` to store that category in its own folder instead of the image folder.

| Type | Toggle | Default folder |
| --- | --- | --- |
| Audio | `audio_folders` | `/static/assets/audios` |
| Document | `document_folders` | `/static/assets/documents` |
| File | `file_folders` | `/static/assets/files` |
| PDF | `pdf_folders` | `/static/pdf` |
| Video | `video_folders` | `/static/assets/videos` |

## Icon sets

CloudCannon and Sveltia CMS pick the icon library used by collections and blocks.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  cloudcannon:
    icon: material_icons
  sveltiacms:
    icon: material_symbols
```

Available sets: `bootstrap_icons`, `iconoir`, `lucide`, `material_icons`, `material_symbols`.

## CMS language

{{< alert text="`/config/_default/hugo.yaml`" state="light" >}}

Language set with **defaultContentLanguage** from Hugo config.

## Repository

{{< blank_link link="https://github.com/hugolify/hugolify-admin" text="Hugolify Admin" >}}
