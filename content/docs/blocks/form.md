---
title: Form
description: Displays a form.
icon: input-cursor-text
seo:
  title: Block Form
---

## Frontmatter

```yml
blocks:
  - type: form
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    name: '' # string, the form name (optional)
    submit: '' # string, the submit button label (optional)
    items: []
      label: '' # string
      type: '' # [checkbox, email, file, hidden, radio, select, switch, tel, text, textarea, url]
      name: '' # string, defaults to the slugified label (optional)
      options: [] # if type is select
        title: '' # string
        value: '' # string (optional, defaults to title)
      value: '' # string (optional)
      placeholder: '' # string (optional)
      accept: '' # string, accepted file types if type is file (optional)
      pattern: '' # string, a validation regexp (optional)
      required: false # boolean (optional)
      full: false # boolean, the field takes the whole row (optional)
      autocomplete: '' # autocomplete value like postal-code, email… (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
```

A `tel`, `email`, `url`, `accept` or `pattern` field gets a matching hint paragraph, wired through `aria-describedby`. One required field anywhere in the form adds the legend explaining the asterisk.

See [Common keys](/docs/blocks/) for `heading`, `footing` and the full `ui` reference.

## Params

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

Where the form posts, and whether it posts over AJAX.

```yml
params:
  form:
    netlify: false # boolean, adds the Netlify Forms attributes and a honeypot
    action: '' # url, the endpoint the form posts to
    ajax: false # boolean, submits through js/blocks/form.js and shows a message
```

{{< button url="https://demo.hugolify.io/blocks/form/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/form.html" text="HTML file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_form.sass" text="SASS file — hugolify-theme-bootstrap" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/js/blocks/form.js" text="Javascript file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/form.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/partials/admin/blocks/types/form.yml" text="Hugolify admin file" >}}

## CMS availability

| CMS | Hugolify Admin v2 |
| --- | --- |
| [CloudCannon](/docs/admin/v1/cms/cloudcannon/) | {{< badge text="Available" state="success" >}} |
| [Decap CMS](/docs/admin/v1/cms/decap-cms/) | {{< badge text="Available" state="success" >}} |
| [Netlify CMS](/docs/admin/v1/cms/netlify-cms/) | {{< badge text="Available" state="success" >}} |
| [Pages CMS](/docs/admin/v1/cms/pages-cms/) | {{< badge text="Available" state="success" >}} |
| [Static CMS](/docs/admin/v1/cms/static-cms/) | {{< badge text="Available" state="success" >}} |
| [Sveltia CMS](/docs/admin/v1/cms/sveltia-cms/) | {{< badge text="Available" state="success" >}} |
| [Tina CMS](/docs/admin/v1/cms/tina-cms/) | {{< badge text="Available" state="success" >}} |

{{< alert-block state="warning" >}}
The CMS offers `checkbox`, `email`, `file`, `radio`, `select`, `tel`, `text` and `textarea` as field types. The `hidden`, `switch` and `url` types are read by the theme but have no option in the CMS.
{{< /alert-block >}}
