---
title: GetFileExtension
description: Get file extension from file (string) and display correctly file extension with abbr HTML tag.
---

## Usage

```go-html-template
{{ partial "func/GetFileExtension" $file }}
```

## Example

### Usage

```go-html-template
{{ partial "func/GetFileExtension" "filename.pdf" }}
```

### HTML rendered

```html
<abbr>PDF</abbr>
```

## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/func/GetFileExtension" text="Func file" >}}
