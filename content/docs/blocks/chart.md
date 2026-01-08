---
isIndex: false
title: Chart
description: Displays a chart.
icon: bar-chart
seo:
  title: Block Chart
---

## Frontmatter

```yml
blocks:
  - type: chart
    heading: {}
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    grid: '' # [small, medium, large, container, full] (optional)
    chart: {}
      type: "" # string
      title: "" # string
      backgroundColor: "" # string (optional)
      borderColor: "" # string (optional)
      items: []
        label: "" # string
        value: "" # string
        color: "" # hexadecimal color (optional)
      data: # (optional)
        json: "" # text (optional)
    background: false # boolean (optional)
```

{{< button url="https://demo.hugolify.io/blocks/chart/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/chart.html" text="HTML file" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_chart.sass" text="SASS file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/chart.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/main/layouts/partials/admin/blocks/chart.yml" text="Hugolify admin file" >}}


## Related link

- {{< blank_link link="https://www.chartjs.org/docs/" text="Chart JS docs" >}}


## CMS availability

### Hugolify Admin

- [Hugolify Admin](/docs/cms/admin/)
  - [Decap CMS](/docs/cms/admin/cms/decap-cms/) {{< badge text="Available" state="success" >}}
  - [Netlify CMS](/docs/cms/admin/cms/netlify-cms/) {{< badge text="Available" state="success" >}}
  - [Pages CMS](/docs/cms/admin/cms/pages-cms/) {{< badge text="Available" state="success" >}}
  - [Sveltia CMS](/docs/cms/admin/cms/sveltia-cms/) {{< badge text="Available" state="success" >}}

### Old repositories 

- [Hugolify Decap CMS](/docs/cms/decap-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Available" state="success" >}}
- [Hugolify Netlify CMS](/docs/cms/netlify-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Available" state="success" >}}
- [Hugolify Sveltia CMS](/docs/cms/sveltia-cms/) {{< badge text="Deprecated" state="warning" >}} {{< badge text="Available" state="success" >}}
