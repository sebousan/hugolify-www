---
title: Commands
weight: 3
icon: terminal
---

## Launch

To launch Hugo project with livereload, available here: `http://localhost:1313/`

```shell
yarn watch
```

To launch Decap CMS in localhost (in a second terminal), available here: `http://localhost:1313/admin/`

```shell
yarn cms
```

## Build

To build the project

```shell
yarn build
```

## Update

### Modules of your project

```shell
yarn update
```

### Hugolify template

```shell
git remote add template git@github.com:hugolify/hugolify-template.git
git fetch --all
git merge template/main --allow-unrelated-histories
```
