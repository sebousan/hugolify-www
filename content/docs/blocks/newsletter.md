---
title: Newsletter
description: Displays a newsletter signup form.
icon: envelope
seo:
  title: Block Newsletter
---

## Frontmatter

```yml
blocks:
  - type: newsletter
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    form: {}
      url: '' # url, the provider endpoint the form posts to
      submit: '' # string, the submit label (optional)
      checkboxes: [] # (optional)
        label: '' # string, HTML allowed
        name: '' # string, sent as written
        value: '' # string
        required: false # boolean (optional)
      hiddens: [] # (optional)
        name: '' # string
        value: '' # string
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
```

The email input, its label, the default button label and the fallback messages come from the theme's `newsletter.*` translations (`button`, `label`, `placeholder`, `success`, `error`), so the block needs nothing but the endpoint. `hiddens` carries the extra fields a provider expects, such as a list id or a honeypot.

`checkboxes` are shown under the email field and sent only when checked, typically the consent a provider requires: `OPT_IN` with the value `1` for Brevo, `gdpr[ID]` with the value `Y` for Mailchimp. Their `name` is the provider's own and is sent as written.

See [Common keys](/docs/blocks/) for `heading`, `footing` and the full `ui` reference.

## Submission

The form is sent over AJAX by `js/components/newsletter.js` of hugolify-theme-design-system, and the provider's answer is shown under the fields in an [alert](https://github.com/uncinq/css-components/blob/main/docs/content/alert.md), `alert-success` or `alert-danger`. The provider is read from `form.url`:

| Provider | `form.url` | Request |
| --- | --- | --- |
| Brevo | `https://….sibforms.com/serve/…` | `fetch`, Brevo answers JSON and allows CORS |
| Mailchimp | `https://….list-manage.com/subscribe/post?u=…&id=…` | JSONP on `/subscribe/post-json`, Mailchimp blocking CORS on `/subscribe/post` |
| Other | any URL | `fetch`, success read from the HTTP status |

When the provider sends no message, or the request fails, the block shows the `newsletter.success` or `newsletter.error` translation. On success the fields are hidden and the focus moves to the message. The provider's message is shown as plain text, its links removed.

The block has no captcha: switch it off in the provider's form settings, or the provider rejects every signup.

### Brevo

Take the URL from the `action` of the form's HTML embed code.

```yml
form:
  url: https://xxxxxxxx.sibforms.com/serve/MUIFA…
  checkboxes:
    - label: I agree to receive the newsletter
      name: OPT_IN # only if the Brevo form has a consent field
      value: '1'
      required: true
  hiddens:
    - name: locale # language of Brevo's messages
      value: en
    - name: email_address_check # honeypot, stays empty
      value: ''
```

### Mailchimp

Take the URL from the `action` of the embedded form, and the honeypot name from its hidden `b_…` field.

```yml
form:
  url: https://xxxxxxxx.us21.list-manage.com/subscribe/post?u=…&id=…&f_id=…
  checkboxes:
    - label: Email
      name: gdpr[123] # one per marketing permission, if GDPR fields are on
      value: Y
  hiddens:
    - name: b_<u>_<id> # honeypot, stays empty
      value: ''
```

{{< button url="https://demo.hugolify.io/blocks/newsletter/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/newsletter.html" text="HTML file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_newsletter.sass" text="SASS file — hugolify-theme-bootstrap" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/css/components/blocks/block-newsletter.css" text="CSS file — hugolify-theme-design-system" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/js/components/newsletter.js" text="Javascript file — hugolify-theme-design-system" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/newsletter.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/partials/admin/blocks/types/newsletter.yml" text="Hugolify admin file" >}}

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
