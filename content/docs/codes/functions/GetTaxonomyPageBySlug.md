---
title: GetTaxonomyPageBySlug
description: Get pages of specific section with specific taxonomy
---

## Arguments

**section** {{< badge state="light" text="String" >}}\
Type of request pages

**taxonomy** {{< badge state="light" text="String" >}}\
Target taxonomy filter

**slug** {{< badge state="light" text="String" >}}\
The relation value to find (Slug or Title)

**additionalParams** (optional) {{< badge state="light" text="String" >}}\
Where expression additional

## Usage

```go-html-template
{{ partial "func/GetTaxonomyPageBySlug" $map }}
```

## Example

In this example, we want all people with "Lorem ipsum" as expertise (persons_expertises).

```go-html-template
{{- $pages := partial "func/GetTaxonomyPageBySlug" (dict 
  "section" "persons"
  "taxonomy" "persons_expertises"
  "slug" "lorem-ipsum") -}}
```


## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/func/GetTaxonomyPageBySlug" text="Func file" >}}
