---
title: GetOrganizationData
description: Reads one value of the identity of the organization.
---

## Usage

```go-html-template
{{ range partial "func/GetOrganizationData.html" "awards" }}
  …
{{ end }}
```

Reads one key of `/data/organization.yml`, edited in *Config › Organization*: `legal_name`, `alternate_name`, `date_founded`, `number_of_employees`, `languages`, `area_served`, `place`, `places`, `address`, `contact`, `awards`, `vat_id`, `tax_id`. A key not moved there yet is read from the `organization` of `/data/schema.yml`. Returns nothing when the key is set nowhere.

The structured data publishes these values; a block or the footer can show them as well.

## Related links

- [The organization](/docs/customization/structured-data/#the-organization)
- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/func/GetOrganizationData.html" text="Func file" >}}
