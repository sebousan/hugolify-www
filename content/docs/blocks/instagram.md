---
title: Instagram block
linkTitle: Instagram
description: Displays an instagram feed (you need an Instagram access_token)
---

## Frontmatter

```yml
blocks:
  - type: instagram
    title: ''
    text: ''
    token: ''
    limit: 5
    cta:
      text: ''
      url: ''
      blank: false
    background: false
```

## HTML

https://github.com/hugolify/hugolify-theme/blob/main/layouts/partials/blocks/templates/instagram.html

## SASS

https://github.com/hugolify/hugolify-theme/blob/main/assets/sass/components/blocks/_instagram.sass

## JS

https://github.com/hugolify/hugolify-theme/blob/main/assets/js/blocks/instagram.js

## Instafeed documentation

https://github.com/stevenschobert/instafeed.js

## Decap CMS

- Instagram `object`
  - title `string`
  - text `string`
  - token `string`
  - limit `number` [2…6]
  - button `object`
    - text `string`
    - url `string`
    - blank `boolean`
  - background `boolean`
