---
title: Compute
description: Read-only field derived from the other fields of the entry.
---

{{< badge text="New in v2" state="success" >}}
{{< badge text="Only available with Sveltia CMS" state="warning" >}}

The value is rebuilt as the other fields are typed. Every other supported CMS emits an empty field, so the value stays typed by hand there.

## Usage

```go
{{ partial "admin/widgets/compute.js" $args }}
```

## Parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | string | yes | Field label |
| `name` | string | yes | Field name |
| `value` | string | yes | Value template |
| `hint` | string | — | Help text |
| `i18n` | boolean or string | — | i18n mode (default: `true`) |
| `required` | boolean | — | Mark as required |

## Value template

A template references another field with `{{fields.name}}` and accepts a string transformation after a pipe.

```go
{{fields.title | slugify}}
```

Inside a List, `{{index}}` returns the item position, stored as a number.

{{< blank_link link="https://sveltiacms.app/en/docs/fields/compute" text="See the Sveltia CMS documentation" >}}
