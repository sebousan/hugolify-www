---
title: Fields
description: Change the fields, or add your own
weight: 7
icon: text-cursor-input
---

A field is a partial of the module, in `admin/fields/`, declaring one key of the front matter to the CMS. Collections, blocks and config files list their fields by name: `title`, `text_markdown`, `featured_image`… An object field, such as `hero` or `address`, lists the fields it holds the same way.

{{< button text="See fields in repository" url="https://github.com/Hugolify/hugolify-admin/tree/v2/layouts/_partials/admin/fields" blank="true" >}}

## Change the fields of an object

`admin.fields.<name>.fields` replaces the fields an object holds, wherever the object is used. Here the hero keeps a title and a text, and its image only a file and an alternative text:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  fields:
    hero:
      fields:
        - title
        - text_markdown
        - image:
            fields:
              - image_src
              - image_alt
```

A field of the list takes its own settings next to its name, as `image` does here.

The fields of a collection, of a block and of a config file change the same way, see [Collections](/docs/admin/collections/#override-fields-available-for-a-collection), [Blocks](/docs/admin/blocks/#change-the-fields-of-a-block) and [The fields of a config file](#the-fields-of-a-config-file).

## Options of a select field

`options` replaces the values a select field offers. It works on every select field, not only `grid` and `theme`: `align`, `breakpoints`, `direction`, `layout`, `offset`, `scrollsnap`, `vertical_align`…

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  fields:
    align:
      options: [start, center]
```

Written next to the field in a fields list, the options apply to that list only:

```yaml
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
admin:
  fields:
    country_code:
      options: [FR, BE, CH, LU]
```

## Markdown editor

The markdown fields below read their editor settings from params, so a project can enlarge the editor, open the raw markdown or change the toolbar without overriding the field.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  fields:
    text_markdown:
      minimal: false
      modes: "['rich_text', 'raw']"
      buttons: "['bold', 'italic', 'link', 'bulleted-list', 'numbered-list']"
```

- `minimal`: `true` keeps the editor compact: Sveltia CMS caps it at 240 px and scrolls past that, Decap CMS shrinks it to the smallest height. `false` lets it grow with the content.
- `modes`: `rich_text`, `raw`, or both. With both, the toolbar shows a switch, and the editor opens in the first mode listed.
- `buttons`: the formatting buttons of the rich text toolbar. See the {{< blank_link link="https://sveltiacms.app/en/docs/fields/richtext" text="Sveltia CMS" >}} and {{< blank_link link="https://decapcms.org/docs/widgets/#markdown" text="Decap CMS" >}} documentation for the names.
- `editor_components`: the components the editor can insert. `body` offers them all by default, the CMS's own `image` and `code-block` plus the [enabled shortcodes](/docs/admin/shortcodes/#add-or-remove-shortcodes). Set, a field offers only the ones listed, so name the shortcodes too: `"['button']"` drops the image and the code block and keeps the `button` shortcode, `"[]"` removes them all.

{{< alert-block title="Write `modes`, `buttons` and `editor_components` as a quoted string" state="warning" >}}
The value is copied as is into the CMS config. A YAML list such as `[rich_text, raw]` comes out as a single, invalid mode named `rich_text raw`.
{{< /alert-block >}}

| Field | Used by | `minimal` | `buttons` | `modes` | `editor_components` |
| --- | --- | --- | --- | --- | --- |
| `text_markdown` | The `text` of most blocks, the *banner* and *credit* config files | `true` | `['bold', 'italic', 'link', 'bulleted-list']` | `['rich_text']` | None |
| `title_markdown` | Opt-in, a title that takes bold and italic | `true` | `['bold', 'italic']` | `['rich_text']` | None |
| `quote` | The *quote* and *testimonials* blocks, the `blockquote` shortcode | `true` | `['bold', 'italic', 'link']` | `['rich_text']` | None |
| `credit` | Image credits, the `figure` and `video` shortcodes | `true` | `['link']` | `['rich_text']` | None |
| `legal` | The fine print under the submit button of the *form* block, the legal notice of a real estate | `true` | `['bold', 'italic', 'link']` | `['rich_text']` | None |
| `llms` | The body of the {{< blank_link link="https://llmstxt.org/" text="llms.txt" >}} and `llms-full.txt` files, in the *config* collection | `false` | All | `['raw']` | None |
| `body` | The body of an entry | `true` | All | `['rich_text']` | All |
| `contents` | The inner text of the `details` and `alert-block` shortcodes | `true` | `['bold', 'italic', 'link']` | `['rich_text']` | `['blank_link']` |

| CMS | What applies |
| --- | --- |
| Decap CMS, Netlify CMS, Sveltia CMS | `minimal`, `modes`, `buttons` and `editor_components` |
| Static CMS | `minimal`, `modes` and `buttons`. Hugolify registers no shortcodes there, so `editor_components` is left out. |
| CloudCannon | `minimal` only: `true` gives a resizable editor 150 px high. There is no raw mode. |
| Pages CMS | None. The rich-text editor has its own *Editor / Source* switch. |
| TinaCMS | None. The rich-text toolbar has its own raw markdown button. |

## Collapse blocks

The blocks of an entry arrive unfolded. Fold them to their summary, so a long page reads as a list of sections:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  fields:
    blocks:
      collapsed: true
```

## Default map position

The `location` field opens on Paris. Move it with a GeoJSON point, longitude first, then latitude:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  widgets:
    map:
      default: '{"type": "Point", "coordinates": [4.8357, 45.7640]}'
```

## Media folder of a field

An image field uploads to the folder of its collection, or else to the global one, see [Setup](/docs/admin/setup/#media-folders-per-type). Give a field folders and a size limit of its own under the name it is saved as:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  fields:
    poster:
      media:
        media_folder: /assets/images/posters
        public_folder: /images/posters
        max_file_size: 300000
```

The name is the key of the front matter: `poster` for the poster of a video, `image` for the SEO image, `src` for the file of every image object. The folders are not written when the global `media_folder` or `public_folder` is set to `false`.

## The fields of a config file

{{< badge text="New in v2" state="success" >}}

Each file of the *config* collection ships its own set of fields. `admin.files.<name>.fields` replaces that set, without touching the `files` list, so changing the fields of one file no longer means restating every other:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  files:
    footer:
      fields: [newsletter, cta, blocks]
    seo:
      fields: [title, description, image_seo]
```

Available on every file of the module but `schema` and `blocks`, and on [a file of your own](/docs/admin/collections/#a-file-of-your-own). Left undefined, each keeps the fields the module declares:

| File | Default fields |
| --- | --- |
| `banner` | `text_markdown, state` |
| `credit` | `text_markdown` |
| `footer` | `title, text_area, cta, blocks` |
| `seo` | `title, description, slogan, image_seo, twitter` |
| `llms`, `llms-full` | `llms` |
| `organization` | The identity of the organization, see [Structured data](/docs/customization/structured-data/) |

## A title built from other fields

{{< badge text="New in v2" state="success" >}} {{< badge text="Only available with Sveltia CMS" state="warning" >}}

`title_page` reads a `compute` template and hands it to the [compute widget](/docs/admin/widgets/compute/). Left undefined, it stays the regular text input, which is also what a project running any other CMS gets.

The *persons* collection does this by default: a person is named after their first and last name, so the page title is derived rather than asked for, and never typed twice.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
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
| `education` | Degrees of a person: `title`, `school`, `year` and `category` (`degree` or `certificate`), published as `hasCredential` and `alumniOf`. In the default fields of *persons*; hugolify-theme-persons lists it in the sidebar of the person page |
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

## Create a field

Add a file named after the field to the fields directory. It sets the label and the key of the field, and calls the [widget](/docs/admin/widgets/) of its type:

```txt
layouts/
└── _partials/
    └── admin/
        └── fields/
            └── subtitle.yml
```

```go-html-template
{{- $args := dict
  "label" (i18n "admin.fields.subtitle.label")
  "name" "subtitle"
  -}}
{{ partial "admin/widgets/string.js" $args }}
```

The label comes from the i18n files of the project, `admin.fields.subtitle.label`. Then list the field by name where it should appear: in the `fields` of a collection, of a block or of an object.

### An object field

An object lists its own fields, and lets the params change them through `GetFields`. Here the `address` field of the module:

```go-html-template
{{- $pin := cond (or (eq site.Params.admin.cms "decapcms") (eq site.Params.admin.cms "sveltiacms")) "location" "coordinates" -}}
{{- $fields := slice
  "street"
  "zipcode"
  "city"
  "country_code"
  $pin -}}

{{- /* This line lets the params change the fields */ -}}
{{- $fields = partial "admin/func/GetFields.html" (dict "field" . "fields" $fields) -}}

{{- $args := dict
  "label" (i18n "admin.fields.address.label")
  "name" "address"
  "collapsed" true
  "fields" $fields
  -}}

{{ partial "admin/widgets/object.js" $args }}
```

A file named after a field of the module replaces it.
