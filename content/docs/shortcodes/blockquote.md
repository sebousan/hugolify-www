---
title: Blockquote
description: Displays a blockquote in your body markdown.
icon: blockquote-left
---

## Example

### Markdown usage

```go-html-template
{{</* blockquote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum facilisis gravida. Nam diam ipsum, tempus vitae posuere at, mattis non lacus." title="John Doe" text="Founder" image="https://res.cloudinary.com/uncinq/image/upload/v1758205367/sebastien-moulene_ft0yg7.jpg" */>}}
```

### HTML rendered

```html
<figure class="quote">
  <blockquote>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum
      facilisis gravida. Nam diam ipsum, tempus vitae posuere at, mattis non
      lacus.
    </p>
  </blockquote>
  <figcaption>
    <picture>
      <source srcset="…" type="image/webp" media="(min-width: 577px)" />
      <source
        srcset="…, … 2x, … 3x"
        type="image/webp"
        media="(max-width: 576px)"
      />
      <source
        srcset="…, … 2x, … 3x"
        type="image/jpg"
        media="(max-width: 576px)"
      />
      <img
        src="…"
        alt=""
        width="50"
        height="50"
        loading="lazy"
        decoding="async"
      />
    </picture>
    <div>
      <cite>John Doe</cite><br />
      Founder
    </div>
  </figcaption>
</figure>
```

### Visual renderer

{{< blockquote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum facilisis gravida. Nam diam ipsum, tempus vitae posuere at, mattis non lacus." title="John Doe" text="Founder" image="https://res.cloudinary.com/uncinq/image/upload/v1758205367/sebastien-moulene_ft0yg7.jpg" >}}

## Datas

```yaml
quote: "" # markdown
title: "" # string
text: "" # string
image: "" # image
```

### Hugolify Admin

- [Hugolify Admin](/docs/cms/admin/)
  - [CloudCannon](/docs/cms/admin/cms/cloudcannon/) {{< badge text="Available" state="success" >}} {{< badge text="Since v1.0.0" state="info" >}}
  - [Decap CMS](/docs/cms/admin/cms/decap-cms/) {{< badge text="Available" state="success" >}}
  - [Netlify CMS](/docs/cms/admin/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
  - [Pages CMS](/docs/cms/admin/cms/pages-cms/) {{< badge text="Not available" state="danger" >}}
  - [Sveltia CMS](/docs/cms/admin/cms/sveltia-cms/) {{< badge text="Available" state="success" >}} {{< badge text="Since v1.0.0" state="info" >}}
  - [Tina CMS](/docs/cms/admin/cms/tina-cms/) {{< badge text="Not available" state="danger" >}}

### Old repositories

- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Not available" state="danger" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Not available" state="danger" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Not available" state="danger" >}}

## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/blockquote.html" text="Shortcode file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/shortcodes/fields/blockquote.html" text="Shortcode fields file — hugolify-admin" >}}
- {{< blank_link link="https://getbootstrap.com/docs/5.3/content/typography/#naming-a-source" text="Bootstrap blockquote" >}}
