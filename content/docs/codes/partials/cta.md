---
title: CTA
description: Displays a call to action.
icon: link-45deg
---
## Example

### Usage

```go-html-template
{{ $args := (dict
        "url" "https://www.hugolify.io/"
        "text" "Hugolify button"
        "blank" true
        ) }}
{{ partial "commons/cta" $args }}
```

### HTML rendered

```html
<a class="btn" href="https://www.hugolify.io/" target="_blank" rel="noreferrer noopener" title="Hugolify button - external link">Hugolify button</a>
```

## Datas

```yml
url: "" // Button href
text: "" // Button text
blank: false // boolean, true to add target="_blank" (optional)
class: "" // Add additional class (optional)
title: "" // Add title attribute (optional)
hreflang: "" // Add hreflang attribute (optional)
```

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/cta.html" text="Commons file — hugolify-theme" >}}
