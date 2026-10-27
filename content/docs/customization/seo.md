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

There is one file for every language, at the root, where agents look for it, even when the default language lives in a subdirectory: fill it in the default language only, and on a multilingual site let the same text cover every language. Decap CMS nests the body under the default language; one written under another language key is ignored.

There is nothing else to set up: the theme publishes both files straight from the data, with no page or output format to turn on.

A site that serves its own `/static/llms.txt`, or builds one with an output format of its own, leaves the matching data file empty.
