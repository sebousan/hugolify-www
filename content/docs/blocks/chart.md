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
    heading: {} # (optional)
      surtitle: '' # string (optional)
      title: '' # string (optional)
      text: '' # markdown (optional)
    chart: {}
      type: '' # [bar, pie, line, polarArea, radar]
      title: '' # string, used as the accessible label
      indexAxis: '' # [x, y] (optional)
      backgroundColor: '' # color (optional)
      borderColor: '' # color (optional)
      items: []
        label: '' # string
        value: '' # number
        color: '' # hexadecimal color (optional)
      data: {} # (optional, alternative to items)
        json: '' # text, a raw Chart.js dataset
    ui: {} # (optional)
      theme: '' # [accent, black, dark, highlight, light, neutral, white] (optional)
      grid: '' # [xsmall, small, medium, large, container, full] (optional)
      offset: '' # [start, center, end] (optional)
      align: '' # [start, center, end] (optional)
```

Filling `items` also renders a `<table>` alternative inside a `<details>`, which is what the canvas points to through `aria-describedby`. A chart built from `data.json` alone has no such fallback.

See [Common keys](/docs/blocks/) for `heading`, `footing` and the full `ui` reference.

## Params

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

Default series colour, used when an item sets none.

```yml
params:
  chart:
    color: '' # color
```

{{< button url="https://demo.hugolify.io/blocks/chart/" text="Demo visual renderer" blank="true" >}}

## Files

- {{< blank_link link="https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/chart.html" text="HTML file — hugolify-theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-bootstrap/blob/main/assets/sass/components/blocks/_chart.sass" text="SASS file — hugolify-theme-bootstrap" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-design-system/blob/main/assets/js/blocks/chart.js" text="Javascript file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/blob/main/content/docs/chart.md" text="Demo content file" >}}
- {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/partials/admin/blocks/types/chart.yml" text="Hugolify admin file" >}}

## Related link

- {{< blank_link link="https://www.chartjs.org/docs/latest/" text="Chart.js documentation" >}}

## CMS availability

| CMS | Hugolify Admin v2 |
| --- | --- |
| [CloudCannon](/docs/admin/v1/cms/cloudcannon/) | {{< badge text="Available" state="success" >}} |
| [Decap CMS](/docs/admin/v1/cms/decap-cms/) | {{< badge text="Available" state="success" >}} |
| [Netlify CMS](/docs/admin/v1/cms/netlify-cms/) | {{< badge text="Available" state="success" >}} |
| [Pages CMS](/docs/admin/v1/cms/pages-cms/) | {{< badge text="Available" state="success" >}} |
| [Static CMS](/docs/admin/v1/cms/static-cms/) | {{< badge text="Available" state="success" >}} |
| [Sveltia CMS](/docs/admin/v1/cms/sveltia-cms/) | {{< badge text="Available" state="success" >}} |
| [Tina CMS](/docs/admin/v1/cms/tina-cms/) | {{< badge text="Available" state="success" >}} |
