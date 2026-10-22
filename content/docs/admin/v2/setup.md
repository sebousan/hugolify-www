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
  version: # optional, CMS script version, see below
  locale: # optional, language of the CMS interface, the site language by default
  local_backend: true # Decap, Netlify and Sveltia CMS
  title: Hugolify CMS # Sveltia CMS only, name shown in the CMS
  skip_ci: true # Sveltia CMS only, adds [skip ci] to every commit
  bulk_edit: true # Sveltia CMS only, false under editorial_workflow or preview, overridable per collection

  config:
    id: false # use ID for dir/name files and relation
  nested:
    depth: 1 # 1 disables the tree, 2 and up enable it, overridable per collection
  preview: false
  publish_mode: simple # optional, simple, editorial_workflow, or preview with Sveltia CMS

  # Auth
  auth:
    app_id: # The Client ID provided by Gitea/GitLab
    auth_type: # pkce for GitLab with app_id, Decap and Sveltia CMS
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
    choose_url: false # set true to insert an image from a URL, e.g. audio_choose_url for the audio

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

    # Optional cloud settings, for Decap, Netlify and Sveltia CMS
    cloud:
      name: cloudinary # or uploadcare
      cloud_name: # your cloudinary cloud name
      api_key: # your cloudinary api key
      publicKey: # your uploadcare public api key

    providers: # for sveltia-cms

    # Conversion on upload, Sveltia CMS only
    transformations:
      heic: # photos from phones, which only Safari displays, become WebP
        width: 2560
        height: 2560
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

The interface of Decap, Netlify and Sveltia CMS follows the site language, **defaultContentLanguage** from the Hugo config. Set `locale` to show it in another language:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  locale: en
```

The labels of the Hugolify fields stay in the site language.

## CMS version

The CMS script is loaded from unpkg. Set `version` to pin it, for instance while an upgrade breaks something:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  version: 0.237.0 # a Sveltia CMS release
```

| CMS | Default |
| --- | --- |
| Decap CMS | `^3.0.0` |
| Netlify CMS | `^2.0.0` |
| Static CMS | `^4.0.0` |
| Sveltia CMS | The latest release |

## Deployments

{{< badge text="Only available with Sveltia CMS" state="warning" >}}

`skip_ci` is `true` by default: every commit made by the CMS carries `[skip ci]`, so the host does not build on each save, and editors publish with the **Publish Changes** button. Set it to `false` to build on every commit.

{{< button url="/tutorials/how-to-connect-sveltia-cms-to-github-and-netlify-using-hugolify/" text="See the Sveltia CMS and Netlify tutorial" >}}

## Deprecated keys

These keys are still read, but prefer the new ones:

| Deprecated | Use instead |
| --- | --- |
| `name` | `git` |
| `netlify.identity` | `auth.netlify_identity` |
| `automatic_deployments: true` | `skip_ci: false` |

## Repository

{{< blank_link link="https://github.com/hugolify/hugolify-admin" text="Hugolify Admin" >}}
