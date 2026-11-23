---
title: Setup
description: Install the module and set up the CMS
weight: 4
icon: sliders-horizontal
---

{{< alert-block title="Prerelease" state="warning" >}}
v2 is published as prerelease tags only, the latest being **v2.0.0-54**. With no stable v2 release, Go resolves the latest prerelease, so `hugo mod get` picks it up.

v2 requires **hugolify-theme v2**. The two are versioned together and a mismatched pair fails silently, see [Compatibility](/docs/admin/migration/#compatibility).
{{< /alert-block >}}

## Install

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme/v2
  - path: github.com/hugolify/hugolify-theme-design-system # or hugolify-theme-bootstrap
  - path: github.com/hugolify/hugolify-admin/v2
```

```bash
hugo mod get github.com/hugolify/hugolify-admin/v2@v2.0.0-54
```

The tag pins a prerelease. Prereleases are published often: leave it out to take the latest one.

{{< alert text="The module path carries the major: `hugolify-admin/v2`. Without it Go resolves v1." state="warning" >}}

The CMS is then served at `/admin/` of the site, `http://localhost:1313/admin/` with `hugo server`. Hugo writes its configuration to `/admin/config.yml` on each build.

{{< blank_link link="https://github.com/hugolify/hugolify-admin/releases" text="See the latest prereleases" >}}

## CMS params

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
# Default params
admin:

  cms: decapcms # optional, decapcms by default
  branch: main # optional, default "main"
  git: git-gateway # optional, "git-gateway" by default, "github" with Sveltia CMS, which has no Git Gateway
  repo: # optional, e.g "hugolify/hugolify-template"
  version: # optional, CMS script version, see below
  locale: # optional, language of the CMS interface, the site language by default
  local_backend: true # Decap, Netlify and Sveltia CMS, see below
  title: Hugolify CMS # Sveltia CMS only, name shown in the CMS
  skip_ci: true # Sveltia CMS only, adds [skip ci] to every commit
  bulk_edit: true # Sveltia CMS only, false under editorial_workflow or preview, overridable per collection

  config:
    id: false # true gives every entry an ID, see below
  nested:
    depth: 1 # 1 disables the tree, 2 and up enable it, overridable per collection
  preview: false # true shows the preview pane of the editor, Decap, Netlify, Static and Sveltia CMS
  publish_mode: simple # optional, simple, editorial_workflow, or preview with Sveltia CMS

  # Auth
  auth:
    app_id: # The Client ID provided by Gitea/GitLab
    auth_type: # pkce for GitLab with app_id, Decap and Sveltia CMS; additions for Sveltia CMS Additions
    api_root: # API URL of your Gitea/GitLab instance
    auth_endpoint: # Auth endpoint of your Gitea/GitLab instance
    base_url: # Root URL of your Gitea/GitLab instance, or URL of your Sveltia CMS Additions Worker
    netlify_identity: true # loads Netlify Identity, the sign-in of Git Gateway

  # Languages
  i18n:
    default_locale: en # master lang for an i18n website
    locales: false # "[en,fr]" for an i18n website
    initial_locales: # Sveltia CMS: "default", "all" or "[en,fr]", locales a new entry starts with

  # Assets
  media:
    # Image
    media_folder: '/assets/images/uploads'
    public_folder: '/images/uploads'
    max_file_size: 700000 # 700ko
    specific_filter: false # set true to pick the resampling filter of each image
    choose_url: false # set true to insert an image from a URL, e.g. audio_choose_url for the audio
    slugify_filename: false # Sveltia CMS only, set true to slugify the name of uploaded files

    # Audio
    audio_max_file_size: 1000000 # 1Mo
    audio_folders: false # Pages CMS only, see below
    audio_media_folder: '/static/assets/audios'
    audio_public_folder: '/assets/audios'

    # Document
    document_max_file_size: 5000000 # 5Mo
    document_folders: false # Pages CMS only
    document_media_folder: '/static/assets/documents'
    document_public_folder: '/assets/documents'

    # File
    file_max_file_size: 5000000 # 5Mo
    file_folders: false # Pages CMS only
    file_media_folder: '/static/assets/files'
    file_public_folder: '/assets/files'

    # PDF
    pdf_max_file_size: 5000000 # 5Mo
    pdf_folders: false # Pages CMS only
    pdf_media_folder: '/static/pdf'
    pdf_public_folder: '/pdf'

    # Video
    video_max_file_size: 5000000 # 5Mo
    video_folders: false # Pages CMS only
    video_media_folder: '/static/assets/videos'
    video_public_folder: '/assets/videos'

    # Optional cloud settings, for Decap, Netlify and Sveltia CMS
    cloud:
      name: cloudinary # or uploadcare
      cloud_name: # your cloudinary cloud name
      api_key: # your cloudinary api key
      public_key: # your uploadcare public api key
      tabs: # uploadcare only, the sources offered, e.g. "['file', 'url', 'gdrive']"

    providers: # for sveltia-cms, the stock photos offered, e.g. [unsplash, pexels, pixabay], false to hide them

    # Conversion on upload, Sveltia CMS only
    transformations:
      heic: # photos from phones, which only Safari displays, become WebP
        width: 2560
        height: 2560
```

### Media folders per type

Images go to `media_folder`, published at `public_folder`. The other files go to the folder of their type, published at the matching path, within the size limit of the type:

| Type | Fields | Folder | Size limit |
| --- | --- | --- | --- |
| Image | Every image | `/assets/images/uploads` | 700 KB |
| Audio | MP3 and OGG files | `/static/assets/audios` | 1 MB |
| Document | PDF files | `/static/assets/documents` | 5 MB |
| Video | MP4 and WebM files | `/static/assets/videos` | 5 MB |
| File | A file field of your own, given no type | `/static/assets/files` | 5 MB |

Images sit in `/assets/` so that Hugo can resize them. The other files are published as they are, from `/static/`.

Pages CMS sorts the files in media libraries, one per folder. It always declares the image library, and one more per type set to `true` under `<type>_folders`: turn on the types the site uses, their fields upload there. The `pdf_*` keys feed its PDF library alone.

A collection can have folders of its own, see [Media folders of a collection](/docs/admin/collections/#media-folders-of-a-collection), and so can an image field, see [Media folder of a field](/docs/admin/fields/#media-folder-of-a-field).

### Cloud media

Cloudinary and Uploadcare replace the media library of Decap, Netlify and Sveltia CMS. Sveltia CMS also takes a list of services under `cloud`, and offers each of them.

{{< button url="/docs/getting-started/cloud/" text="See cloud" >}}

### Resampling filter

`specific_filter: true` adds a select to each image field, offering the filter Hugo resizes that image with: `Box`, `Lanczos`, `CatmullRom` or `Linear`. Left empty, Hugo applies the `resampleFilter` of its `imaging` config, `Box` by default.

## Local backend

`local_backend: true`, the default, lets the CMS edit the files of your local copy instead of the remote repository:

- **Decap CMS** and **Netlify CMS** go through a proxy server, run in a second terminal next to `hugo server`: `npx decap-server`, or `npx netlify-cms-proxy-server` for Netlify CMS.
- **Sveltia CMS** needs no server: on `localhost`, its login screen offers to work with a local repository, in a Chromium-based browser.

## Entry IDs

`config.id: true` gives every entry an `id` field holding a UUID. The entry file is named after it rather than after its title, and relation fields store it instead of the slug.

## Icon sets

CloudCannon and Sveltia CMS show an icon beside each collection, and CloudCannon beside each block too. Pick the icon set each one draws from:

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

## Multilingual site

List the languages the editors write in, the default one first:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  i18n:
    default_locale: en
    locales: "[en,fr]"
    initial_locales: default # Sveltia CMS only: default, all or "[en,fr]"
```

- An entry is stored as one file per language, such as `my-post.en.md` and `my-post.fr.md`, the way Hugo pairs translations.
- The files of the *menus* and *config* collections hold every language in one file, keyed by language. The `blocks`, `organization`, `schema` and `llms` files are not translated.
- `initial_locales` sets the languages a new entry starts with in Sveltia CMS. The editor enables the others later, from the menu of the entry.

Pages CMS, CloudCannon and TinaCMS have no i18n structure: see their pages under [CMS](/docs/admin/cms/).

## Authentication

`git` picks the Git backend, and `auth` its sign-in. Netlify Identity with Git Gateway is the default of Decap CMS. With Sveltia CMS, Sveltia CMS Additions gives editors their own accounts, without GitHub.

{{< button url="/docs/getting-started/auth/" text="See authentication" >}} {{< button url="/docs/getting-started/auth/sveltia-cms-additions/" text="See Sveltia CMS Additions" >}} {{< button url="/docs/admin/cms/sveltia-cms/#gitlab-with-pkce" text="See GitLab with PKCE" >}}

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

{{< blank_link link="https://github.com/hugolify/hugolify-admin/tree/v2" text="Hugolify Admin v2" >}}
