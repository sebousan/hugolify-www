---
title: Prerequisites
description: Required to knows
weight: 1
icon: circle-check
---

## Git

{{< blank_link text="https://git-scm.com/" url="https://git-scm.com/" >}}

## Go

{{< blank_link text="https://go.dev/" url="https://go.dev/" >}}

## Hugo

{{< alert text="Minimum version 0.158.0" state="warning" >}}

**Example in macOS with brew**

```bash
brew install hugo
```

{{< blank_link url="https://gohugo.io/installation/" text="Check full documentation" >}}

## Node.js

{{< blank_link text="https://nodejs.org/" url="https://nodejs.org/" >}}

{{< alert text="Minimum version 24.5, or 22.20 on Node 22" state="warning" >}}

Hugo runs the PostCSS pipeline of the styling modules with Node. Since Hugo 0.161, Node runs with the permission model, and older releases crash or hang the build.

On Netlify, set the version in `netlify.toml`:

```toml
[build.environment]
  NODE_VERSION = "24"
```
