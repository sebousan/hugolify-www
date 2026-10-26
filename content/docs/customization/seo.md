---
title: SEO
description: Edit global SEO…
icon: binoculars
---


## Global

{{< alert text="`/data/seo.yml`" state="light" >}}

```yml
color: "#000000" # theme-color, msapplication-TileColor, mask-icon
title: "" # Global meta title
description: "" # Global meta description
slogan: "" # Slogan of the organization, in the structured data
```

{{< alert text="Editable in Hugolify admin." state="info" >}}

The description and the slogan also describe the organization in the structured data, in each language.

{{< button url="/docs/customization/structured-data/" text="See structured data" >}}

## Specific

In frontmatter of pages.

```yml
---
seo:
  title: "" # Page meta title
  description: "" # Page meta description
---
```

{{< alert text="Not editable in Hugolify admin." state="warning" >}}

## llms.txt

{{< badge text="New in v2" state="success" >}}

The theme writes two files for language models at the root of the site, as {{< blank_link link="https://llmstxt.org/" text="llmstxt.org" >}} describes them:

- `/llms.txt`, the index: the site name and description, then lists of links to the main pages.
- `/llms-full.txt`, the full text of those pages.

Each file is the body of its data file, written as is. Left empty, or without a data file, no file is published.

{{< alert text="`/data/llms.yml` and `/data/llms-full.yml`" state="light" >}}

```yml
body: |
  # Site name

  > Short description of the site.

  ## Services

  - [Consulting](https://example.com/services/consulting/): What we do and for whom
```

{{< alert text="Editable in Hugolify admin." state="info" >}}

There is one file for every language, at the root, where agents look for it, even when the default language lives in a subdirectory: on a multilingual site, write one section per language in the same file. Only the body of the default language is published; one written under another language key is ignored, with a build warning (`llms-language`).

The theme provides the `llms_txt` and `llms_full_txt` output formats and their layouts. A page of the site turns them on: hugolify-template ships it, along with both data files. On a site started before, add it:

{{< alert text="`/content/llms.md`" state="light" >}}

```yml
---
type: llms
url: /
sitemap:
  disable: true
build:
  list: never
outputs:
  - llms_txt
  - llms_full_txt
---
```

A site that serves its own `/static/llms.txt`, or builds one with an output format of its own, leaves the matching data file empty.
