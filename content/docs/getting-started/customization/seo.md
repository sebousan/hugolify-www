---
title: SEO
description: Edit global SEO…
icon: binoculars
---


## Global

{{< alert text="`/data/seo.yml`" state="light" >}}

```yml
color: "#000000" # theme-color, msapplication-TileColor, mask-icon
title: "" # Global meta title
description: "" # Global meta description
```

{{< alert text="Editable in Hugolify admin." state="info" >}}

## Specific

In frontmatter of pages.

```yml
---
seo:
  title: "" # Page meta title
  description: "" # Page meta description
---
```

{{< alert text="Not editable in Hugolify admin." state="warning" >}}
