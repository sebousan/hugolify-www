---
title: Commands
description: Basics commands lines
weight: 3
icon: terminal
---

## Launch

To launch Hugo project with livereload, available here: `http://localhost:1313/`

```bash
yarn watch
```

To launch Netlify/Decap CMS in localhost (in a second terminal), available here: `http://localhost:1313/admin/`

```bash
yarn cms
```

## Build

To build the project

```bash
yarn build
```

## Update

### Modules of your project

```bash
yarn update
```

### Hugolify template

```bash
git remote add template git@github.com:hugolify/hugolify-template.git
git fetch --all
git merge template/main --allow-unrelated-histories
```

## Clean

To clean modules of your project

```bash
yarn clean
```
