---
title: Text
description: Displays a formating text block.
icon: paragraph
---

### Usage

```go-html-template
{{ $args := (dict
    "text" "Lorem ipsum"
    ) }}
{{ partial "commons/text" $args }}
```

### HTML rendered

```html
<div class="text">
  <p>Lorem ipsum</p>
</div>
```

## Datas

```yml
text: ""
class: "" // default is text
```

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/text.html" text="Commons file — hugolify-theme" >}}
