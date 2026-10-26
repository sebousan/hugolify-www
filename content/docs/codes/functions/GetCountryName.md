---
title: GetCountryName
description: Names a country in the language of the page.
---

## Usage

```go-html-template
{{ partial "func/GetCountryName.html" "DE" }}
```

Gives *Allemagne* on a French page, *Germany* on an English one, *Deutschland* on a German one: the names of the CLDR, downloaded at build time. A code with no name comes back as it is. The CLDR also names a few regions: `001` for the World, `150` for Europe.

The country of an address is one of the 249 of ISO 3166-1, listed by `func/GetCountryCodes.html`. To show the country of an address, `func/GetAddressCountry.html` also reads the `country` typed in before the select.

## Related links

- [Names of languages and countries](/docs/customization/structured-data/#names-of-languages-and-countries)
- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/func/GetCountryName.html" text="Func file" >}}
