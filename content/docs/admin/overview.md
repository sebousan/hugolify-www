---
title: Overview
description: What Hugolify Admin does, and how
weight: 1
icon: book
seo:
  title: Hugolify Admin overview
---

{{< alert-block title="Prerelease" state="warning" >}}
This documentation covers **hugolify-admin v2**, which runs with **hugolify-theme v2**. It stays in prerelease until Sveltia CMS reaches release 1.0 and Pages CMS reaches release 3.0: report anything you hit on {{< blank_link link="https://github.com/hugolify/hugolify-admin/issues" text="the issue tracker" >}}.

Still on v1? Its documentation lives on {{< blank_link link="https://v1.hugolify.io/docs/cms/admin/" text="the v1 site" >}}.
{{< /alert-block >}}

## What it does

A Git-based headless CMS reads a configuration file describing every collection and every field it edits. Hugolify Admin writes that file for you, at build time, from the modules your project imports:

- each [section](/docs/sections/) and [taxonomy](/docs/taxonomies/) module brings its collection,
- each enabled [block](/docs/blocks/) brings its form,
- each enabled [shortcode](/docs/shortcodes/) joins the markdown editor.

The same project runs any [supported CMS](/docs/admin/cms/): switching from one to another means changing one param.

## How it works

The module adds an `/admin/` page to the site, which loads the CMS, and writes its configuration to `/admin/config.yml` with the rest of the build. The configuration therefore always matches the modules and the params of the site it ships with.

Pages CMS, CloudCannon and TinaCMS read their configuration from the repository instead: a script copies the generated file there, see their pages under [CMS](/docs/admin/cms/).

Under the hood, collections, blocks and fields are Hugo partials. A field calls a [widget](/docs/admin/widgets/), one per field type, and the widget writes the syntax of the CMS in use.

## Customize it

Most changes happen in `/config/_default/params.yaml`, under `admin`:

| To change | See |
| --- | --- |
| The CMS, the Git backend, the media folders, the languages | [Setup](/docs/admin/setup/) |
| Which collections show, in which order, with which options | [Collections](/docs/admin/collections/) |
| Which blocks an editor can add, and their fields | [Blocks](/docs/admin/blocks/) |
| The fields of an object, the options of a select, the markdown editor | [Fields](/docs/admin/fields/) |
| Which shortcodes the markdown editor offers | [Shortcodes](/docs/admin/shortcodes/) |

When params are not enough, override a partial of the module, or add your own, in `/layouts/_partials/admin/`: [a block](/docs/admin/blocks/#create-a-block), [a field](/docs/admin/fields/#create-a-field), [a collection](/docs/admin/collections/#create-a-collection), [a shortcode](/docs/admin/shortcodes/#create-a-shortcode).

## Supported CMS

| CMS | Status | Configuration |
| --- | --- | --- |
| [Sveltia CMS](/docs/admin/cms/sveltia-cms/) | Preferred | `/admin/config.yml`, generated |
| [Decap CMS](/docs/admin/cms/decap-cms/) | Maintained | `/admin/config.yml`, generated |
| [Pages CMS](/docs/admin/cms/pages-cms/) | Maintained | `.pages.yml`, copied by a script |
| [CloudCannon](/docs/admin/cms/cloudcannon/) | Beta | `cloudcannon.config.yml`, copied by a script |
| [TinaCMS](/docs/admin/cms/tina-cms/) | Beta | `tina/config.js`, copied from the build |
| [Netlify CMS](/docs/admin/cms/netlify-cms/) | Archived | `/admin/config.yml`, generated |
| [Static CMS](/docs/admin/cms/static-cms/) | Archived | `/admin/config.yml`, generated |

{{< button url="/docs/admin/setup/" text="Set up Hugolify Admin" >}}

## Coming from v1

v2 groups the appearance of a block under a `ui` object, moves the menus to a collection of their own, and gives every collection option one name for every CMS. Front matter written by v2 is read by hugolify-theme v2 only.

{{< button url="/docs/admin/whats-new/" text="See what v2 changes" >}} {{< button url="/docs/admin/migration/" text="Migrate from v1" >}}
