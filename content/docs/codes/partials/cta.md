---
title: CTA
description: Displays a call to action.
icon: link-45deg
---
## Example

### Usage

```go-html-template
{{ $cta := (dict
        "url" "https://www.hugolify.io/"
        "text" "Hugolify button"
        "blank" true
        ) }}
{{ partial "commons/cta" $cta }}
```

### HTML rendered

```html
<a class="btn" href="https://www.hugolify.io/" target="_blank" rel="noreferrer noopener" title="Hugolify button - external link">Hugolify button</a>
```

## Datas

```yml
url: "" // Button href
text: "" // Button text
blank: false // boolean, true to add target="_blank"
class: "" // Add additional class
```

## Related link

- [Commons file — hugolify-theme](https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/cta.html)
