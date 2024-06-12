---
title: CorrectPunctuation
description: Replace space to insecable space to string before punctuation.
---

## Description

In french, we need a space before a double punctuaiton (:;?!), insecable space allows this punctuation not to be left alone on the line depending on the text, it will always be preceded by a word.

## Usage

```go-html-template
{{ partial "func/CorrectPunctuation" $string }}
```

## Related links

- [Func file — hugolify-theme](https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/func/CorrectPunctuation)
