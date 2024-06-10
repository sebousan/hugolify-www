---
title: Chart
description: Displays a chart.
---

# Chart block

Displays a chart with Chart JS

## Frontmatter

```yml
blocks:
  - type: chart
    heading: ""
      surtitle: ""
      title: ""
      text: ""
    grid: ""
    chart:
      type: ""
      title: ""
      backgroundColor: ""
      borderColor: ""
      items:
        label: ""
        value: ""
        color: ""
      data:
        json: ""
    background: false
```

## Examples

https://demo.hugolify.io/blocks/chart/

## Decap CMS

{{< alert text="Available" state="success" >}}

## Related links

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/chart.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_chart.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-decap-cms/blob/main/admin/app/blocks/chart.js" text="Decap CMS file" >}}
- {{< blank_link link="https://www.chartjs.org/docs/" text="Chart JS docs" >}}
