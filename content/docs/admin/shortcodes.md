---
isIndex: false
title: Shortcodes
description: Choose the shortcodes of the markdown editor, or add your own
weight: 9
icon: braces
---

{{< alert text="Available for CloudCannon, Decap CMS, Netlify CMS and Sveltia CMS" state="warning" >}}

The enabled [shortcodes](/docs/shortcodes/) join the markdown editor of the body: editors insert them from the toolbar and fill in a form, rather than typing their syntax.

## Add or remove shortcodes

Every Hugolify shortcode is enabled by default. To offer fewer, or to add your own, list them under `enable`. The list replaces the default one, so name every shortcode editors should keep:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  shortcodes:
    enable:
      - alert
      - alert-block
      - badge
      - blank_link
      - blockquote
      - button
      - dailymotion
      - details
      - figure
      - icon
      - map
      - qr
      - span_lang
      - twitch
      - twitter
      - video
      - vimeo
      - youtube
```

{{< alert-block title="New in v2" state="info" >}}
The [`icon` shortcode](/docs/shortcodes/icon/) joins the default list.
{{< /alert-block >}}

## Disable shortcodes

`false` leaves the editor without shortcodes:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  shortcodes:
    enable: false
```

## Change the fields of a shortcode

{{< badge text="New in v2" state="success" >}}

Each shortcode ships with a list of fields. `fields` replaces it, the way it does for a block:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  shortcodes:
    button:
      fields:
        - text
        - url
        # …
```

## Create a shortcode

A shortcode joins the markdown editor through two files: the list of its fields, shared by every CMS, and its registration in the CMS. Here a `note` shortcode taking a text and a link.

### Fields

```txt
layouts/
└── _partials/
    └── admin/
        └── shortcodes/
            └── fields/
                └── note.html
```

```go-html-template
{{- $fields := slice
  "text"
  "url" -}}

{{- $fields = partial "admin/func/GetFields.html" (dict "shortcode" . "fields" $fields) -}}

{{- return $fields -}}
```

Each name is a Hugolify field, see [Fields](/docs/admin/fields/). `GetFields` lets `admin.shortcodes.note.fields` replace them, see [above](#change-the-fields-of-a-shortcode).

### Decap, Netlify and Sveltia CMS

```txt
layouts/
└── _partials/
    └── admin/
        └── cms/
            └── decapcms/
                └── shortcodes/
                    └── note.js
```

```go-html-template
{{ partial "admin/cms/decapcms/shortcodes/_register.js" (dict
  "shortcode" "note"
  "label" "Note"
  "preview" `<p class="note"><a href="${obj.url}">${obj.text}</a></p>`
) }}
```

`_register.js` reads the fields file and writes the editor component, which Netlify and Sveltia CMS load as well. `preview` is the body of a JavaScript template literal, each field under `obj`. Three options describe the syntax of the shortcode:

| Option | For a shortcode |
| --- | --- |
| `paired` | With an inner content and a closing tag, held by the `contents` field, like `details` |
| `positional` | Taking a positional argument rather than named ones, like `twitch` |
| `selfClosing` | Written self-closed, which shortcodes reading `.Inner` require, like `qr` |

### CloudCannon

CloudCannon reads a snippet of its own, `/layouts/_partials/admin/cms/cloudcannon/shortcodes/note.js`, declaring the arguments of the shortcode. Start from one of the module.

### Enable it

Add it to `enable`, [see above](#add-or-remove-shortcodes). The site renders it with the shortcode of the same name, `/layouts/_shortcodes/note.html`.

### Examples

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/v2/layouts/_partials/admin/cms/decapcms/shortcodes" text="See examples in repository (Decap CMS)" >}}

{{< blank_link link="https://github.com/Hugolify/hugolify-admin/tree/v2/layouts/_partials/admin/shortcodes/fields" text="See the fields of the shortcodes in repository" >}}

## List of Hugolify shortcodes

{{< button text="Hugolify shortcodes" url="/docs/shortcodes/" >}}
