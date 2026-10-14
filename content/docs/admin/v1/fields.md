---
title: Fields
description: Add/modify fields
weight: 4
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
  "country"
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
| `text_markdown` | The `text` of most blocks, the *banner* config file | `true` | `['bold', 'italic', 'link', 'bulleted-list']` | `['rich_text']` |
| `title_markdown` | Opt-in, a title that takes bold and italic | `true` | `['bold', 'italic']` | `['rich_text']` |
| `quote` | The *quote* and *testimonials* blocks, the `blockquote` shortcode | `true` | `['bold', 'italic', 'link']` | `['rich_text']` |
| `credit` | Image credits, the `figure` and `video` shortcodes | `true` | `['link']` | `['rich_text']` |
| `llms` | Opt-in, the body of an {{< blank_link link="https://llmstxt.org/" text="llms.txt" >}} file | `false` | All | `['raw']` |

`body` and `contents` — the inner text of the `details` and `alert-block` shortcodes — keep their own settings and ignore these params.

| CMS | What applies |
| --- | --- |
| Decap CMS, Netlify CMS, Static CMS, Sveltia CMS | `minimal`, `modes` and `buttons` |
| CloudCannon | `minimal` only: `true` gives a resizable editor 150 px high. There is no raw mode. |
| Pages CMS | None. The rich-text editor has its own *Editor / Source* switch. |
| TinaCMS | None. The rich-text toolbar has its own raw markdown button. |

## List of Hugolify fields

{{< button text="See fields in repository" url="https://github.com/Hugolify/hugolify-admin/tree/main/layouts/partials/admin/fields" blank="true" >}}
