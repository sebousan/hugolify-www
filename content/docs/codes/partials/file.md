---
title: File
description: Displays a file link with extention and size details.
icon: file-earmark
---
## Example

### Usage

```go-html-template
{{ $args := (dict
    "file" "videos/example-file.mp4"
    ) }}
{{ partial "commons/file" $args }}
```

### HTML rendered

```go-html-template
<a href="videos/example-file.mp4" download class="file">
  <span>
    <b>Example file</b>
    <abbr>MP4</abbr>
    15<abbr title="Megabytes">MB</abbr>
  </span>
</a>
```

## Datas

```yml
file: "" // path file (required)
title: "" // custom title 
download: false // add download attribute to link, default is true
```

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/file.html" text="Commons file — hugolify-theme" >}}
