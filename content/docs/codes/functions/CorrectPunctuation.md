---
title: CorrectPunctuation
description: Replace space to insecable space to string before punctuation.
---

## Description

In french, we need a space before a double punctuation (`:;?!`), insecable space allows this punctuation not to be left alone on the line depending on the text, it will always be preceded by a word.

## Usage

```go-html-template
{{ partial "func/CorrectPunctuation" $string }}
```

## Related links

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/func/CorrectPunctuation" text="Func file" >}}
