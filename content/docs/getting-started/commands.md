---
title: Commands
description: Basics commands lines
weight: 3
icon: terminal
---

## Launch

To launch Hugo project with livereload, available here: `http://localhost:1313/`

```yml
yarn watch
```

To launch Netlify/Decap CMS in localhost (in a second terminal), available here: `http://localhost:1313/admin/`

```yml
yarn cms
```

## Build

To build the project

```yml
yarn build
```

## Update

### Modules of your project

```yml
yarn update
```

### Hugolify template

```yml
git remote add template git@github.com:hugolify/hugolify-template.git
git fetch --all
git merge template/main --allow-unrelated-histories
```

## Clean

To clean modules of your project

```yml
yarn clean
```
