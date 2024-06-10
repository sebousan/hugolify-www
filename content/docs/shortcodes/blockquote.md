---
title: Blockquote
description: Displays a blockquote in your body markdown.
---

# Blockquote shortcode

Displays a blockquote in your body markdown.

## Example

### Markdown usage

```go-html-template
{{</* blockquote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum facilisis gravida. Nam diam ipsum, tempus vitae posuere at, mattis non lacus." title="John Doe" text="Founder" image="/images/uploads/sebastien-moulene.jpg" */>}}
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

{{< blockquote quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum facilisis gravida. Nam diam ipsum, tempus vitae posuere at, mattis non lacus." title="John Doe" text="Founder" image="/images/uploads/sebastien-moulene.jpg" >}}

## Datas

```yml
quote: ""
title: ""
text: ""
image: ""
```

## Decap CMS

{{< alert text="Not available" state="warning" >}}

## Related links

- [Shortcode file — hugolify-theme](https://github.com/Hugolify/hugolify-theme/blob/main/layouts/shortcodes/blockquote.html)
- [Bootstrap blockquote](https://getbootstrap.com/docs/5.3/content/typography/#naming-a-source)
