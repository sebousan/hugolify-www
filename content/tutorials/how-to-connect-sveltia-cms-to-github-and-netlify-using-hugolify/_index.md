---
draft: false
date: 2026-10-06T09:00:00.000Z
title: How to connect Sveltia CMS to GitHub and Netlify using Hugolify
description: This tutorial guides you through signing in to Sveltia CMS with
  GitHub through Netlify, and publishing content on demand with a Netlify build
  hook.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1781685847/634._Virtual-Assistance_cyuimh.svg
seo:
  image: https://res.cloudinary.com/uncinq/image/upload/v1781686050/634._Virtual-_Assistance_cqzlkq.png
hero:
  title: How to connect Sveltia CMS to GitHub and Netlify using Hugolify
  text: Sign in to Sveltia CMS with GitHub through Netlify, and publish content
    on demand with a Netlify build hook.
  surtitle: Tutorial
  image:
    src: https://res.cloudinary.com/uncinq/image/upload/v1781685847/634._Virtual-Assistance_cyuimh.svg
status:
  text: V2
  state: primary
---

## Introduction

Three services work together:

- **GitHub** stores the website and its content. Every save in the CMS is a commit.
- **Netlify** builds and hosts the website. It also acts as the OAuth server that lets Sveltia CMS sign in to GitHub.
- **Sveltia CMS** is the editing interface, served on `/admin/`.

Content is not published on every save. Editors save as often as they want, then click **Publish Changes** to rebuild the website.

| Step | How often |
| --- | --- |
| 1. Connect GitHub to Netlify | once per website |
| 2. Create the GitHub OAuth App | **once** for all your websites |
| 3. Add the OAuth App to Netlify | once per website |
| 4. Configure the CMS | once per website |
| 5. Create the Netlify build hook | once per website |
| 6. Sign in to the CMS | once per editor and per browser |
| 7. Give editors access | once per editor |

## Prerequisites

* A Hugolify **v2** project using Sveltia CMS - [See the Sveltia CMS tutorial](/tutorials/how-to-create-a-website-with-hugo-and-sveltia-cms-using-hugolify/)
* **hugolify-admin v2.0.0-26** or later, for the `skip_ci` option
* A GitHub repository and a Netlify account

## Step 1. Connect GitHub to Netlify

{{< alert text="`Netlify > Add new project > Import an existing project > GitHub`" state="light" >}}

Pick the repository of the website, branch `main`, and click **Deploy**. The `netlify.toml` file of the project already holds the build command.

{{< button url="/docs/getting-started/hosting/netlify/" text="Host on Netlify" >}}

## Step 2. Create the GitHub OAuth App

You only do this **once**: the same OAuth App serves all your websites hosted on Netlify, because its callback URL is always Netlify's.

Open the form on your account, or on your organization (*Organization > Settings > Developer settings > OAuth Apps > New OAuth App*) so the app does not depend on a single person.

{{< button url="https://github.com/settings/applications/new" text="Register a new OAuth App" blank="true" >}}

| Field | Value |
| --- | --- |
| Application name | A generic name, e.g. `Hugolify CMS`. Editors see it on the GitHub authorization screen. |
| Homepage URL | Any URL, e.g. your own website. It is only displayed. |
| Authorization callback URL | `https://api.netlify.com/auth/done` |
| Enable Device Flow | Unchecked |

Click **Register application**, then **Generate a new client secret**. Copy the **Client ID** and the **Client secret**: the secret is displayed **only once**, so keep it in your password manager.

{{< alert-block title="OAuth App, not GitHub App" state="warning" >}}
Create an **OAuth App**, not a **GitHub App**. If the form shows an *Expire user access tokens* checkbox, you are on the wrong one: the token would expire after 8 hours and editors would have to sign in again.
{{< /alert-block >}}

## Step 3. Add the OAuth App to Netlify

{{< alert text="`Project configuration > Access & security > OAuth`" state="light" >}}

Under **Authentication providers**, click **Install provider**, choose **GitHub**, paste the **Client ID** and the **Client secret** from step 2, and click **Install**.

Repeat this step on every Netlify project, with the same Client ID and secret.

{{< alert text="Regenerating the secret on GitHub means pasting it again on every Netlify project that uses it." state="info" >}}

## Step 4. Configure the CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  cms: sveltiacms
  name: github
  repo: owner/repo # your repository
  skip_ci: true
  auth:
    netlify_identity: false
```

- `skip_ci: true` adds `[skip ci]` to every commit made by the CMS, so Netlify does not build on each save. It is the default value.
- `netlify_identity: false` stops loading the Netlify Identity widget, which Sveltia CMS does not use.

No `base_url` is needed: without one, Sveltia CMS uses Netlify as its OAuth server.

Commit and push. Netlify builds the website with the CMS on `/admin/`.

## Step 5. Create the Netlify build hook

A build hook is a URL that starts a Netlify build when it is called. It is triggered when an editor clicks **Publish Changes**.

{{< alert text="`Project configuration > Build & deploy > Continuous deployment > Build hooks`" state="light" >}}

Click **Add build hook**, name it `Sveltia CMS`, choose the `main` branch, save, then copy the URL. It looks like `https://api.netlify.com/build_hooks/xxxxxxxx`.

{{< alert-block title="Keep it secret" state="danger" >}}
Anyone who knows this URL can start builds. Never commit it to the repository, and never put it in the CMS configuration, which is public.
{{< /alert-block >}}

Sveltia CMS can reach the build hook in two ways:

| | Option A: in the browser | Option B: with a GitHub Action |
| --- | --- | --- |
| Where the URL is stored | In each editor's browser | In a GitHub repository secret |
| What editors do | Paste the URL once per browser (step 6) | Nothing |
| Setup | None | A secret and a workflow file |

### Option A: in the browser

Nothing more to do here: each editor pastes the URL in the CMS settings at step 6.

### Option B: with a GitHub Action

When no build hook is set in the browser, **Publish Changes** sends a `repository_dispatch` event of type `sveltia-cms-publish` to the GitHub repository. A workflow receives it and calls the build hook, so the URL never leaves GitHub.

1. In the GitHub repository: *Settings > Secrets and variables > Actions > New repository secret*. Name it `NETLIFY_BUILD_HOOK` and paste the build hook URL as its value.
2. Create the workflow below, then commit and push it to `main`: GitHub only runs `repository_dispatch` workflows from the default branch.

{{< alert text="`/.github/workflows/publish.yml`" state="light" >}}

```yaml
# Triggered by the "Publish Changes" button of Sveltia CMS
name: Publish

on:
  repository_dispatch:
    types: [sveltia-cms-publish]

jobs:
  netlify:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger the Netlify build hook
        env:
          NETLIFY_BUILD_HOOK: ${{ secrets.NETLIFY_BUILD_HOOK }}
        run: curl --fail --silent --show-error -X POST -d '{}' "$NETLIFY_BUILD_HOOK"
```

{{< alert text="A build hook set in the browser takes precedence over the GitHub Action: with option B, leave the deploy hook field empty at step 6." state="info" >}}

## Step 6. Sign in to the CMS

1. Open `https://your-website/admin/`.
2. Click **Sign In with GitHub**, then **Authorize** in the GitHub window.
3. **Option A only**: in the top right corner, open the account menu, then **Settings > Advanced**, and paste the build hook URL from step 5 in the deploy hook field.

With option A, the URL is stored **in the browser**, not in the repository: each editor pastes it once in their own browser. Send it to them over a secure channel. With option B, editors have nothing to paste.

## Step 7. Give editors access

1. Each editor creates a GitHub account (free).
2. In the GitHub repository: *Settings > Collaborators > Add people*, with the **Write** role.
3. The editor accepts the invitation sent by email, then follows step 6.

{{< alert text="If the repository belongs to a client's GitHub organization that restricts third-party apps, an admin of that organization has to approve the OAuth App once." state="info" >}}

## Day-to-day publishing

| Action in the CMS | Result |
| --- | --- |
| **Save** | `[skip ci]` commit, the live website does not change |
| **Publish Changes** (in the header) | Calls the build hook, directly (option A) or through the GitHub Action (option B): Netlify rebuilds the website with all saved content |
| Arrow next to **Save > Save and Publish** | Saves and publishes at once |
| Deleting an entry or a media file | Published right away: deletions are never marked `[skip ci]` |

A code push by a developer also triggers a build, and pending content goes live with it.

### Local development

No GitHub sign-in is needed locally. Launch the project:

```bash
yarn watch
```

Open <http://localhost:1313/admin/>, click **Work with Local Repository** (Chrome or Edge) and select the project folder. Changes are written to the files without any commit: commit and push them yourself.

## Troubleshooting

| Problem | Solution |
| --- | --- |
| *Authentication Aborted* on sign-in | A `Cross-Origin-Opener-Policy` header blocks the sign-in window. Set it to `same-origin-allow-popups`, or remove it. |
| Error or repository not found after sign-in | The GitHub account is not a collaborator of the repository, or has not accepted the invitation (step 7). |
| No **Publish Changes** button | Check `skip_ci: true` and the hugolify-admin version (v2.0.0-26 or later). |
| **Publish Changes** does not start a build (option A) | The build hook is not set in this browser (step 6). If the website has a CSP, allow `https://api.netlify.com` in `connect-src`. |
| **Publish Changes** does not start a build (option B) | Open the **Actions** tab of the repository: if the *Publish* workflow did not run, check that it is on `main`; if it failed, check the `NETLIFY_BUILD_HOOK` secret. A build hook set in the browser bypasses the workflow. |
| The website does not change after **Save** | Expected with `skip_ci: true`: click **Publish Changes**. |

## Going further

* [Sveltia CMS in Hugolify](/docs/admin/v2/cms/sveltia-cms/)
* [Hugolify Admin setup](/docs/admin/v2/setup/)
* {{< blank_link link="https://sveltiacms.app/en/docs/backends/github" text="GitHub backend in Sveltia CMS documentation" >}}
* {{< blank_link link="https://sveltiacms.app/en/docs/deployments" text="Deployments in Sveltia CMS documentation" >}}
* {{< blank_link link="https://docs.netlify.com/manage/security/secure-access-to-sites/oauth-provider-tokens/" text="OAuth provider tokens in Netlify documentation" >}}
* {{< blank_link link="https://docs.netlify.com/build/configure-builds/build-hooks/" text="Build hooks in Netlify documentation" >}}
* {{< blank_link link="https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#repository_dispatch" text="repository_dispatch in GitHub documentation" >}}
