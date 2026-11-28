---
isIndex: false
title: Decap CMS
description: Open-source content management Git-based.
image:
  src: https://res.cloudinary.com/uncinq/image/upload/v1758125974/logo-decap-cms_s1xnvt.svg
seo:
  description: Simplify your Decap CMS setup with Hugolify’s easy-to-use configuration builder.
---
{{< badge text="Available in production" state="success" >}}
{{< badge text="Maintained CMS" state="success" >}}

{{< alert-block title="Warning: Not supported features" state="warning" >}}
- UUID widget: Decap CMS has none. With [`config.id: true`](/docs/admin/setup/#entry-ids), Hugolify loads a community one, `netlify-cms-widget-uuid-v4`.
{{< /alert-block >}}

## Enable Decap CMS

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  cms: decapcms
```

Decap CMS is the default: without `cms`, Hugolify Admin already loads it.

## How it works

The CMS is served at `/admin/` of the site. On each build, Hugo writes its configuration to `/admin/config.yml`, from the modules and the params of the site: each section and taxonomy module brings its collection, each enabled block its form, each enabled shortcode joins the markdown editor. Adding a module adds its collection, with nothing to write by hand.

The script is loaded from unpkg, `^3.0.0` by default. Set `version` to pin a release: see [CMS version](/docs/admin/setup/#cms-version).

## Authentication

Netlify Identity with Git Gateway is the default of Decap CMS: editors get an account invited from Netlify, without a GitHub account.

{{< button url="/docs/getting-started/auth/netlify/" text="Set up Netlify Identity and Git Gateway" >}}

`git` and `auth` pick another Git backend and its sign-in: see [Authentication](/docs/admin/setup/#authentication).

## Local backend

`local_backend: true`, the default, lets Decap CMS edit the files of your local copy instead of the remote repository. Run its proxy server in a second terminal, next to `hugo server`:

```bash
yarn cms
```

The CMS is then available at `http://localhost:1313/admin/`.

## Supported features

| Feature | Decap CMS |
| --- | --- |
| [Multilingual site](/docs/admin/setup/#multilingual-site) | One file per language |
| [Nested collections](/docs/admin/collections/#nested-collections) | {{< badge text="Available" state="success" >}} |
| [Filters, view filters and view groups](/docs/admin/collections/) | {{< badge text="Available" state="success" >}} |
| [Sortable fields](/docs/admin/collections/#add-sortable-fields) | {{< badge text="Available" state="success" >}} |
| [Preview pane](/docs/admin/setup/#cms-params) | With `preview: true` |
| [Cloud media](/docs/getting-started/cloud/) | Cloudinary and Uploadcare |
| [Shortcodes](/docs/admin/shortcodes/) | {{< badge text="Available" state="success" >}} |
| [Table view](/docs/admin/collections/#add-summary-fields) | {{< badge text="Not available" state="danger" >}} |

The interface follows the site language, **defaultContentLanguage**: set `locale` to show it in another one.

## Decap CMS or Sveltia CMS?

Both read the same `/admin/config.yml`, so switching is one param. Keep Decap CMS for editors signing in with Netlify Identity. [Sveltia CMS](/docs/admin/cms/sveltia-cms/), the preferred CMS, adds the table view, bulk edit, reorder and stock photos, but has no Git Gateway nor Netlify Identity.

## Icon library

- {{< blank_link link="https://icons.getbootstrap.com/" text="Bootstrap Icons (via CSS)" >}}

## Screenshot

{{< figure alt="Homepage screenshot of Hugolify Admin" src="https://res.cloudinary.com/uncinq/image/upload/v1758126305/screenshot-hugolify-decapcms-home_ynatqv.png" screenshot="true" >}}

## Documentation

- [Hugolify Admin setup](/docs/admin/setup/)
- {{< blank_link link="https://decapcms.org/docs/intro/" text="Decap CMS documentation" >}}
- {{< blank_link link="https://github.com/decaporg/decap-cms" text="Decap CMS repository" >}}

## Tutorials

- [How to create a multisite with Hugo and Decap CMS using Hugolify](/tutorials/how-to-create-a-multisite-with-hugo-and-decap-cms-using-hugolify/)
- [How to create a portfolio with Hugo and Decap CMS using Hugolify](/tutorials/how-to-create-a-portfolio-with-hugo-and-decap-cms-using-hugolify/)
- [How to create a blog with Hugo and Decap CMS using Hugolify](/tutorials/how-to-create-a-blog-with-hugo-and-decap-cms-using-hugolify/)
