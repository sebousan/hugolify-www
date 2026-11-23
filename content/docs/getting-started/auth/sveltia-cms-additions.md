---
isIndex: false
title: Sveltia CMS Additions
description: Accounts, roles, entry locks and comments for Sveltia CMS, on any host.
weight: 1
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758126005/logo-sveltia-cms_eh8ftl.png
---
{{< alert text="Only for Sveltia CMS, with a GitHub repository" state="warning" >}}

Sveltia CMS Additions is the free and open-source companion service of Sveltia CMS. You deploy it to your own Cloudflare account, on the Workers Free plan, and it brings what a team needs:

- accounts with the admin, editor and viewer roles: editors sign in with a username and a password, without a GitHub account
- entry locks, so two people don’t edit the same entry at once, and who else has an entry open
- comments on each entry, kept out of the repository
- API keys and the deploy hook, entered once by an admin for every editor
- several sites on one deployment, each with its own users

It takes the place of Netlify Identity and Git Gateway, which Sveltia CMS doesn’t support, whatever the host of the site.

{{< blank_link link="https://sveltiacms.app/en/docs/additions" text="See Sveltia CMS Additions in Sveltia CMS documentation" >}}

## Deploy the Worker

The **Deploy to Cloudflare** button copies a small repository into your GitHub account and deploys the Worker. The code comes from the `@sveltia/cms-additions` package, and Dependabot proposes each new release as a pull request.

{{< button url="https://deploy.workers.cloudflare.com/?url=https://github.com/sveltia/sveltia-cms-additions/tree/main/templates/cloudflare" text="Deploy to Cloudflare" blank=true >}}

The button asks for `ADMIN_SECRET`, at least 32 characters long. It unlocks the setup wizard and protects the stored data: keep it in a password manager.

```bash
openssl rand -base64 32
```

Cloudflare may leave the URL of the Worker turned off: in **Workers & Pages**, open the Worker, then **Domains**, and turn on the **Production** URL, such as `https://sveltia-cms-additions.example.workers.dev`.

## Connect the site

Sveltia CMS v0.271.0 or later is required, the release loaded by default unless `version` pins an older one.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  cms: sveltiacms
  repo: owner/name
  auth:
    auth_type: additions
    base_url: https://sveltia-cms-additions.example.workers.dev
    netlify_identity: false
```

Hugolify writes `auth_type` and `base_url` to the `backend` of the CMS configuration.

## Run the setup wizard

1. Deploy the site, open its `/admin/`, select **Use Admin Secret** and enter the admin secret.
2. The wizard creates the first admin account, and adds the domain of the site to the allowed domains.
3. It then creates a GitHub App for the site. Install it on **Only select repositories**, with the repository of the site only. The app is private and belongs to the owner of the repository: for an organization, one of its owners runs the wizard.
4. Sign in with the admin account, open **Administration** and add the editors. Each one gets a username and a temporary password to hand over.

## Publish changes

`skip_ci` is `true` by default: editors publish with the **Publish Changes** button. On Netlify, Cloudflare Pages and most hosts, the button calls a deploy hook: enter it once in **Administration** > **Credentials**, rather than in the settings of every editor. The keys of the translation services and of the stock photos are shared the same way.

{{< button url="/docs/admin/setup/#deployments" text="See deployments" >}}

## Several sites

One Worker serves several sites, each with its own users, settings and GitHub App. The first site is served at the root of the Worker. To add another, open the CMS of the first site, select **Use Admin Secret**, then **Manage Other Sites**, and give the new site an ID. Its URL, under `/t/`, becomes its `base_url`:

```yaml
admin:
  auth:
    auth_type: additions
    base_url: https://sveltia-cms-additions.example.workers.dev/t/my-site
```

Then run the setup wizard in the CMS of the new site.

## Good to know

- `hugo server` keeps working on the local repository, without signing in. To sign in from `localhost`, add it to the allowed domains, in **Administration** > **Domains**.
- A Content Security Policy on `/admin/` must allow the Worker in `connect-src`, both with `https://` and with `wss://`.
- Only the GitHub backend is supported for now.
- The setup guide ends with a security checklist, which includes a ruleset that blocks force pushes on the default branch of the repository.

{{< button url="https://sveltiacms.app/en/docs/additions/setup#security-checklist" text="See the security checklist" blank=true >}}
