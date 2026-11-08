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
    action: '' # url, the endpoint this form posts to, overrides params.form (optional)
    submit: '' # string, the submit button label (optional)
    hiddens: [] # (optional)
      name: '' # string
      value: '' # string
    items: []
      label: '' # string
      type: '' # [checkbox, email, file, hidden, radio, select, switch, tel, text, textarea, url]
      name: '' # string, sent as written, defaults to the slugified label (optional)
      options: [] # if type is select
        title: '' # string
        value: '' # string (optional, defaults to title)
      value: '' # string (optional)
      placeholder: '' # string (optional)
      accept: '' # string, accepted file types if type is file (optional)
      pattern: '' # string, a validation regexp (optional)
      maxlength: 0 # number, the maximum number of characters of an input or a textarea (optional)
      required: false # boolean (optional)
      full: false # boolean, the field takes the whole row (optional)
      autocomplete: '' # autocomplete value like postal-code, email… (optional)
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
```

A field `name` goes out as written, upper case included, as some services expect it (Brevo: `NOM`, `EMAIL`…); only the fallback on the label is slugified. Several checkboxes may share a `name`, each with its own `value`. The `hiddens` are sent with the fields, as the service asks (a list ID, a language, a honeypot…).

A `tel`, `email`, `url`, `accept` or `pattern` field gets a matching hint paragraph, wired through `aria-describedby`. One required field anywhere in the form adds the legend explaining the asterisk, above the first field: the RGAA wants it before the asterisk's first use, visually and in the source order.

See [Common keys](/docs/blocks/) for `heading`, `footing` and the full `ui` reference.

## Params

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

Where the forms post by default, whether they post over AJAX, and the height of their text areas. A block with its own `action` posts there, without the Netlify Forms attributes: each form can go to its own endpoint.

```yml
params:
  form:
    netlify: false # boolean, adds the Netlify Forms attributes and a honeypot
    action: '' # url, the endpoint the form posts to
    ajax: false # boolean, submits without leaving the page and shows the answer above the submit button
    rows: 5 # number, the visible lines of a textarea
```

With `ajax: true` the styling module loads its form script (`js/features/form.js`), on every page that has a form, the [Jobs](/docs/sections/jobs/) application form included. Without it, or before the script loads, the form posts natively. The answer, the `form.success` or `form.error` translation, takes the focus: on success it replaces the fields, on error they stay and the button is enabled again.

The script picks the provider from the hostname of the action, among the modules of `js/providers/`, shared with the [Newsletter](/docs/blocks/newsletter/) block:

- **Brevo** (`*.sibforms.com`, the `serve` URL of a Brevo form): posted as Brevo's own script does, to the action with `?isAjax=1`, and the answer is read from Brevo's JSON. Brevo keeps one text value per attribute, so the values of checkboxes sharing a `name` are joined with ` ; `, and takes no file, so file fields are left out. Add the hidden fields of Brevo's embed code: `locale` and the `email_address_check` honeypot, empty.
- **Mailchimp** (`*.list-manage.com`): JSONP on `/subscribe/post-json`, Mailchimp blocking CORS on `/subscribe/post`. File fields are left out.
- **Any other endpoint**: the same multipart body as a native post, files included, judged on the HTTP status. Netlify Forms posts to the page itself; another origin (Formspree, Fabform…) is asked for JSON, so that it answers instead of redirecting to its own thank-you page.

Another service is one more module in `js/providers/`, listed in its `index.js`.

{{< alert-block state="warning" >}}
With Netlify Forms, form detection must be enabled in the Netlify UI (Forms), or every submission fails, with or without AJAX. The notifications come from a Netlify address, see [Form setup](/docs/getting-started/form/#netlify-forms).
{{< /alert-block >}}

{{< button url="https://demo.hugolify.io/blocks/form/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/form.html" text="HTML file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_form.sass" text="SASS file — hugolify-theme-bootstrap" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/js/features/form.js" text="Javascript file" >}}
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
The CMS offers `checkbox`, `email`, `file`, `radio`, `select`, `tel`, `text` and `textarea` as field types. The `hidden`, `switch` and `url` types are read by the theme but have no option in the CMS: a hidden field goes in `hiddens`.
{{< /alert-block >}}
