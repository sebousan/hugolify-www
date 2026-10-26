---
title: GetLanguageName
description: Names a language in the language of the page.
---

## Usage

```go-html-template
{{ partial "func/GetLanguageName.html" "de" }}
```

Gives *Allemand* on a French page, *German* on an English one, *Deutsch* on a German one: the names of the CLDR, downloaded at build time. A locale falls back on its language (`zh-Hans` on Chinese), and a code with no name on the code itself.

The codes a person or the organization stores come from the 183 of ISO 639-1, listed by `func/GetLanguageCodes.html`.

## Related links

- [Names of languages and countries](/docs/customization/structured-data/#names-of-languages-and-countries)
- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/func/GetLanguageName.html" text="Func file" >}}
