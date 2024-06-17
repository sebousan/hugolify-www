---
title: Date
description: Displays a paragraph tag with a formating and localize date.
icon: calendar-date
---
## Example

### Usage

```go-html-template
{{ $args := (dict
    "date" "2006-01-02T15:04:05Z07:00"
    ) }}
{{ partial "commons/date" $args }}
```

### HTML rendered

```go-html-template
<p class="date"><time datetime="2006-01-02T15:04:05Z07:00">Monday, February 2, 2006</time></p>
```

## Datas

```yml
date: ""
format: "" // default is ":date_full" https://gohugo.io/functions/time/format/
itemprop: false // or https://schema.org/Date
```

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/date.html" text="Date commons file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/time.html" text="Time commons file — hugolify-theme" >}}
