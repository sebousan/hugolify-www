---
title: Carousel
description: Displays a carousel.
icon: collection
---
## Arguments

**context** {{< badge state="light" text="Map" >}}\
Page context

**partial** {{< badge state="light" text="String" >}}\
Partial to load to each slide

## Usage

```go-html-template
{{ partial "commons/carousel" $map }}
```

## Example

A carousel of logos (block logos)

```go-html-template
{{ $args := (dict
        "context" . 
        "partial" "blocks/templates/logos/logo.html" 
  ) }}
{{ partial "commons/carousel" $args }}
```

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/carousel.html" text="Commons file — hugolify-theme" >}}
