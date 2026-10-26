---
title: Structured data
description: The schema.org graph every page publishes, and where it comes from.
icon: diagram-3
---

{{< badge text="New in v2" state="success" >}}

Every page publishes a schema.org graph in JSON-LD. It is built from what the site already knows — its title, logo, social menu, SEO data and sections — and from two data files, both editable in Hugolify admin: the identity of the organization, and a few settings only the structured data reads.

## What is published

| Page | Nodes |
| --- | --- |
| Every page | The `WebSite`, a reference to the `Organization`, the page itself (`WebPage`, `CollectionPage`…) and, below the home page, its `BreadcrumbList` |
| Home page of each language | The `Organization` in full, and the alternate names of the `WebSite` |
| Contact page | A `ContactPage`, and an office (`LocalBusiness` or a subtype) for every place of the organization |
| A person | A `Person`: job title, expertises and sectors, awards, languages, the office they work in |
| A job | A `JobPosting`, valid until its `expiryDate` |
| A page typed as an article | An `Article`, see [below](#articles) |
| A video with controls | A `VideoObject`, its duration read from the MP4 file |
| A FAQ block | One `FAQPage` for the whole page, made of the items whose title ends with a question mark |

Modules add their own: products, events, real estate, services…

The organization is described in full once per language, on the home page, where Google looks for it. Every other page only references it — `@id`, name, URL and logo — which is what a job posting or an article needs to name its employer or publisher.

## The organization

{{< alert text="`/data/organization.yml`" state="light" >}}

```yml
legal_name: Acme SAS          # when it differs from the site title
alternate_name:               # other names, also read by Google to name the site
  - name: Acme
date_founded: '1924'          # a year, or a full date
number_of_employees: '200'    # or a range, 150-250
languages:                    # ISO 639-1 codes; the languages of the site when empty
  - fr
  - en
area_served:                  # published as typed
  - name: FR
  - name: Worldwide
place: paris                  # the head office, among the places
places:                       # the other places
  - lyon
address: …                    # without places, the address of the organization…
contact: …                    # …and its contact
awards:                       # keys of the awards section, or names typed in
  - an-award
vat_id: FR…
tax_id: '123456789'           # the SIREN in France
```

{{< alert text="Editable in Hugolify admin, *Config › Organization*." state="info" >}}

The file is not translated: one legal name, one head office, one set of awards. What varies with the language lives in `/data/seo.yml`: the description and the slogan of the organization are those of the site. Its name is the site title, its profiles are the links of the social menu, and what it knows about is the list of top level expertises.

The head office lends its address, coordinates and contact — a page of the places section or an entry of `/data/places` alike. The other places add their address.

The rest of the site can read the file as well, a block listing the awards of the organization or a footer listing its places:

```go-html-template
{{ partial "func/GetOrganizationData.html" "awards" }}
```

## Settings

{{< alert text="`/data/schema.yml`" state="light" >}}

```yml
organization:
  type: LegalService            # any Organization subtype
  logo: /assets/images/logo.png # a raster logo, when the header one is an SVG
  same_as:                      # its pages elsewhere: a directory, a ranking…
    - url: https://…
contact_page: contact           # the page listing the offices
email: true                     # false keeps email addresses out of the JSON-LD
```

{{< alert text="Editable in Hugolify admin, *Config › Structured data*." state="info" >}}

An organization typed as a `LocalBusiness` subtype keeps that type on the home page, and is referenced as a plain `Organization` everywhere else: Google rejects a local business as the employer of a job posting.

The identity of the organization used to sit under `organization` in this file. A key not moved to `/data/organization.yml` yet is still read from here.

### With Decap CMS

Decap CMS only reads the i18n of a collection, never the one of a file: in the *config* collection, translated as a whole, it saves these files keyed by the default language. The theme reads them either way.

```yml
fr:
  organization:
    type: LegalService
```

A file written by hand on a Decap site takes the same shape, or Decap opens it empty, and overwrites it on save.

## Articles

A page becomes an `Article` — or a `BlogPosting`, a `NewsArticle`… — through `schema.type`, in its front matter or for a whole section with a cascade:

{{< alert text="`/config/_default/hugo.yaml`" state="light" >}}

```yml
cascade:
  - params:
      schema:
        type: Article
    target:
      path: /knowledge/**
```

## Names of languages and countries

The CMS stores languages and countries as codes, ISO 639-1 and ISO 3166-1, and the structured data publishes those codes. The pages show their names in the language of the page, as the CLDR — the Unicode reference browsers rely on — writes them:

```go-html-template
{{ partial "func/GetLanguageName.html" "de" }} → Allemand, German, Deutsch…
{{ partial "func/GetCountryName.html" "DE" }}  → Allemagne, Germany, Deutschland…
```

The theme downloads the names at build time, from jsDelivr or unpkg, at a pinned version of the CLDR, and Hugo keeps them in its cache: each language is downloaded once. Without network and with an empty cache, the build goes on and shows the codes, with a `hugolify-display-names` warning.

## Check

Test a page with Google's {{< blank_link link="https://search.google.com/test/rich-results" text="Rich Results Test" >}}, and the whole graph with the {{< blank_link link="https://validator.schema.org/" text="Schema Markup Validator" >}}.
