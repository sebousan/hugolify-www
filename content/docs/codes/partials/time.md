---
title: Time
description: Displays a time tag with a localize date.
icon: clock
---
## Example

### Usage

```go-html-template
{{ $args := (dict
    "date" 2006-01-02T15:04:05Z07:00
    "format" "2006"
    ) }}
{{ partial "commons/time" $args }}
```

### HTML rendered

```html
<time datetime="2006-01-02T15:04:05Z07:00" itemprop="datePublished">2006</time>
```

## Datas

```yml
date: ""
format: "2006" // https://gohugo.io/functions/time/format/
```

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/time.html" text="Commons file — hugolify-theme" >}}
