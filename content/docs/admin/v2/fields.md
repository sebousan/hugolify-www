---
title: Fields
description: Add/modify fields
weight: 6
icon: input-cursor-text
---

## How to create a field

### Create file

Add a yml field file in fields directory.

```txt
layouts/
└── partials/
    └── admin/
        └── fields/
```

### Simple widget

```yml
{{- $args := dict
  "label" (i18n "admin.fields.audio.mp3.label")
  "name" "mp3"
  "type" "audio"
  -}}
{{ partial "admin/widgets/file.js" $args }}
```

### List or Object widget

```yml
{{- $pin := cond (or (eq site.Params.admin.cms "decapcms") (eq site.Params.admin.cms "sveltiacms")) "location" "coordinates" -}}
{{- $fields := slice 
  "street" 
  "zipcode" 
  "city" 
  "country_code"
  $pin -}}

# This line allows you to modify the fields via the parameters
{{- $fields = partial "admin/func/GetFields.html" (dict "field" . "fields" $fields) -}}

{{- $args := dict 
  "label" (i18n "admin.fields.address.label")
  "name" "address"
  "collapsed" true
  "fields" $fields
  -}}

{{ partial "admin/widgets/object.js" $args }}
```

## Add or remove fields in object field

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

In this example, we set two fields (title and text with markdown) for the Hero field.

```yml
params:
  admin:
    fields:
      # Array of available fields for a fields
      # e.g with hero field
      hero:
        fields:
          - title
          - text_markdown
          # e.g with nested fields
          - image:
              fields:
                - image_src
                - image_alt
```

## Markdown editor

The markdown fields below read their editor settings from params, so a project can enlarge the editor, open the raw markdown or change the toolbar without overriding the field.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
params:
  admin:
    fields:
      text_markdown:
        minimal: false
        modes: "['rich_text', 'raw']"
        buttons: "['bold', 'italic', 'link', 'bulleted-list', 'numbered-list']"
```

- `minimal` — `true` keeps the editor compact: Sveltia CMS caps it at 240 px and scrolls past that, Decap CMS shrinks it to the smallest height. `false` lets it grow with the content.
- `modes` — `rich_text`, `raw`, or both. With both, the toolbar shows a switch, and the editor opens in the first mode listed.
- `buttons` — the formatting buttons of the rich text toolbar. See the {{< blank_link link="https://sveltiacms.app/en/docs/fields/richtext" text="Sveltia CMS" >}} and {{< blank_link link="https://decapcms.org/docs/widgets/#markdown" text="Decap CMS" >}} documentation for the names.

{{< alert-block title="Write `modes` and `buttons` as a quoted string" state="warning" >}}
The value is copied as is into the CMS config. A YAML list such as `[rich_text, raw]` comes out as a single, invalid mode named `rich_text raw`.
{{< /alert-block >}}

| Field | Used by | `minimal` | `buttons` | `modes` |
| --- | --- | --- | --- | --- |
| `text_markdown` | The `text` of most blocks, the *banner* and *credit* config files | `true` | `['bold', 'italic', 'link', 'bulleted-list']` | `['rich_text']` |
| `title_markdown` | Opt-in, a title that takes bold and italic | `true` | `['bold', 'italic']` | `['rich_text']` |
| `quote` | The *quote* and *testimonials* blocks, the `blockquote` shortcode | `true` | `['bold', 'italic', 'link']` | `['rich_text']` |
| `credit` | Image credits, the `figure` and `video` shortcodes | `true` | `['link']` | `['rich_text']` |
| `llms` | The body of the {{< blank_link link="https://llmstxt.org/" text="llms.txt" >}} and `llms-full.txt` files, in the *config* collection | `false` | All | `['raw']` |

`body` and `contents` — the inner text of the `details` and `alert-block` shortcodes — keep their own settings and ignore these params.

| CMS | What applies |
| --- | --- |
| Decap CMS, Netlify CMS, Static CMS, Sveltia CMS | `minimal`, `modes` and `buttons` |
| CloudCannon | `minimal` only: `true` gives a resizable editor 150 px high. There is no raw mode. |
| Pages CMS | None. The rich-text editor has its own *Editor / Source* switch. |
| TinaCMS | None. The rich-text toolbar has its own raw markdown button. |

## Collapse blocks

The blocks of an entry arrive unfolded. Fold them to their summary, so a long page reads as a list of sections:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
params:
  admin:
    fields:
      blocks:
        collapsed: true
```

## Options of a select field

`options` replaces the values a select field offers. It works on every select field, not only `grid` and `theme`: `align`, `breakpoints`, `direction`, `layout`, `offset`, `scrollsnap`, `vertical_align`…

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
params:
  admin:
    fields:
      align:
        options: [start, center]
```

Written next to the field in a fields list, the options apply to that list only:

```yaml
params:
  admin:
    blocks:
      cta:
        fields:
          - title
          - ui:
              - theme: { options: [light, dark] }
```

The languages and the countries offer the whole ISO lists, which come from the theme. `options` narrows them down the same way:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
params:
  admin:
    fields:
      country_code:
        options: [FR, BE, CH, LU]
```

## Default map position

The `location` field opens on Paris. Move it with a GeoJSON point — longitude first, then latitude:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
params:
  admin:
    widgets:
      map:
        default: '{"type": "Point", "coordinates": [4.8357, 45.7640]}'
```

## The fields of a config file

{{< badge text="New in v2" state="success" >}}

Each file of the *config* collection ships its own set of fields. `admin.files.<name>.fields` replaces that set, without touching the `files` list — so changing the fields of one file no longer means restating every other:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
params:
  admin:
    files:
      footer:
        fields: [newsletter, cta, blocks]
      seo:
        fields: [title, description, image_seo]
```

Available on `footer`, `seo`, `credit` and `banner`. Left undefined, each keeps the fields the module declares — respectively `title, text_area, cta, blocks`, `title, description, image_seo, twitter`, `text_markdown`, and `text_markdown, state`.

## New fields

{{< badge text="New in v2" state="success" >}}

| Field | Purpose |
| --- | --- |
| `ratio` | Media aspect ratio, `1` being square |
| `scrollsnap` | Breakpoints at which items scroll sideways (`none`, `sm`, `md`, `lg`, `xl`, `all`) |
| `selected_source` | Choose block items manually or by taxonomy |
| `vertical_align` | Vertical text alignment (`start`, `center`, `end`) |
| `image.src_mobile` | Dedicated mobile image, used by the hero |
| `weight_select` | The v1 stepped weight select, kept as an opt-in |
| `languages` | Languages a person or the organization works in, among the 183 of ISO 639-1, stored as codes |
| `area_served` | Areas the organization serves, published as typed (`FR`, `Worldwide`) |
| `number_of_employees` | Headcount of the organization, a number or a range (`150-250`) |
| `date_founded` | Founding date of the organization, a year or a full date |
| `date_expiry` | End date of a job offer, stored as `expiryDate` |
| `alternate_name`, `awards`, `head_office`, `other_places`, `same_as`, `schema_type`, `schema_logo`, `schema_email`, `contact_page`, `slogan`, `vat_id`, `tax_id` | The organization and its structured data, see [Structured data](/docs/customization/structured-data/) |

Other additions: blocks on the *persons* and *products* collections, *firstname* and *lastname* on *persons*, a `file` input for form fields, and an optional `format` on the datetime widget for Decap and Sveltia storage.

## Renamed and changed fields

| | v1 | v2 |
| --- | --- | --- |
| Draft | `is_draft` | `draft` |
| Background colour | `background-color.yml` | `background_color.yml` |
| Weight | select (10, 20, 30…) | number input (`min: 1`, integer) |
| Appearance | flat at the root of the block | grouped under `ui` |
| Country of an address | `country`, typed in | `country_code`, a select of the 249 ISO 3166-1 countries, shown in the language of the page |

If you relied on the stepped weight select, the previous behaviour is preserved in a separate field:

{{< alert text="`admin/fields/weight_select.yml`" state="light" >}}

A country typed in before stays on the page as long as the address has no `country_code`.

## A title built from other fields

{{< badge text="New in v2" state="success" >}} {{< badge text="Only available with Sveltia CMS" state="warning" >}}

`title_page` reads a `compute` template and hands it to the [compute widget](../widgets/compute/). Left undefined, it stays the regular text input, which is also what a project running any other CMS gets.

The *persons* collection does this by default: a person is named after their first and last name, so the page title is derived rather than asked for, and never typed twice.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
params:
  admin:
    collections:
      persons:
        fields:
          - draft
          - title_page: { i18n: duplicate, compute: '{{fields.firstname}} {{fields.lastname}}' }
          - firstname
          - lastname
          - body
```

## List of Hugolify fields

{{< button text="See fields in repository" url="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/fields" blank="true" >}}
