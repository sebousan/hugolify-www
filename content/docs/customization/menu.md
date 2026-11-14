---
title: Menu
description: Menu files, header layout, colors…
icon: list
---

## Menu files

The menus are YAML files in `/data/menu/`, one per place in the page. The *menus* collection of [Hugolify Admin](/docs/admin/collections/#the-menus-collection) edits them, and a missing or empty file renders nothing.

| File | Rendered in | Links |
| --- | --- | --- |
| `header/primary.yml` | The header, as the main navigation | Two levels: a link holding `links` opens a dropdown |
| `header/secondary.yml` | The header, after the language switcher | One level |
| `footer/primary.yml` | The top of the footer, under its title | One level |
| `footer/secondary.yml` | The top of the footer, under its title | One level |
| `legal.yml` | The bottom of the footer | One level |
| `social.yml` | The bottom of the footer, as icons | One level |

{{< alert text="The header shows its menu only when `header/primary.yml` exists: a secondary menu alone is not rendered." state="warning" >}}

### Links

{{< alert text="`/data/menu/header/primary.yml`" state="light" >}}

```yml
links:
  - title: Documentation
    url: /docs/
    links:
      - title: Getting started
        text: How to install and setup Hugolify.
        url: /docs/getting-started/
      - title: Blocks
        url: /docs/blocks/
  - title: Tutorials
    url: /tutorials/
  - title: Use the template
    url: https://github.com/hugolify/hugolify-template/generate
    blank: true
    is_highlighted: true
```

| Key | Role |
| --- | --- |
| `title` | The text of the link |
| `url` | Its address. Without one, the item renders as plain text |
| `blank` | `true` opens the link in a new tab |
| `is_highlighted` | `true` shows the link as a button |
| `links` | Sub-links, shown as a dropdown by the primary header menu |
| `text` | A line under a sub-link of the dropdown |
| `rel` | A `rel` attribute, such as `me` |

In the primary header menu, a link is marked as the current one, with `aria-current="page"`, on its page and on every page below it.

The CMS does not offer `text` out of the box. Add it to the fields of the sub-links:

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
admin:
  fields:
    sublinks:
      fields: [title, text, url, is_blank]
```

### Footer menus

The two footer menus take a `title`, shown above their links:

{{< alert text="`/data/menu/footer/primary.yml`" state="light" >}}

```yml
title: Resources
links:
  - title: Documentation
    url: /docs/
  - title: Contact
    url: /contact/
```

### Social links

Each link of `social.yml` shows the icon of a brand, picked from its title in lower case: `GitHub` shows the `github` icon of {{< blank_link link="https://simpleicons.org/" text="Simple Icons" >}}. The title stays as the accessible name of the link.

{{< alert text="`/data/menu/social.yml`" state="light" >}}

```yml
links:
  - title: GitHub
    url: https://github.com/hugolify/
    blank: true
  - title: Mastodon
    url: https://mastodon.social/@hugolify
    blank: true
    rel: me
```

- The icons need [hugolify-theme-icons](/docs/customization/icons/). Without it, each link shows its title.
- Use the name of the brand as Simple Icons spells it: `X` rather than `Twitter`. A title Simple Icons does not know renders an empty link.

### Translations

On a multilingual site, a menu file holds one menu per language, under its code. This is how the CMS saves it:

{{< alert text="`/data/menu/header/primary.yml`" state="light" >}}

```yml
en:
  links:
    - title: Contact
      url: /en/contact/
fr:
  links:
    - title: Contact
      url: /fr/contact/
```

A file without language keys serves every language.

### From v1

v1 read two menus at the root of `/data/menu/`. Move them, or the header and the footer render none:

| v1 | v2 |
| --- | --- |
| `primary.yml`, the header | `header/primary.yml` |
| `secondary.yml`, the footer | `footer/primary.yml` |
| `legal.yml`, `social.yml` | Unchanged |

`header/secondary.yml` and `footer/secondary.yml` are new.

## Layout

Below a breakpoint, the menu is a panel opened by the menu button. Above it, it becomes the navigation of the header.

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yml
header:
  expand: md # sm, md (default), lg, xl, or none to keep the panel at every width
  layout: drawer # drawer (default) or modal
  drawer:
    position: end # start, end (default), top or bottom
  dialog:
    width: 40rem # width of the modal, design system only
```

- `drawer` slides the panel in from a side of the screen, `modal` opens it in the middle.
- With the design system, the panel is a native `<dialog>` or popover: it opens and closes without JavaScript, `Escape` and a click outside included.
- `header.modal.size` and `header.modal.centered`, from v1, are no longer read.

{{< alert-block title="With hugolify-theme-bootstrap" state="info" >}}
The panel is opened by the offcanvas (drawer) or modal component of Bootstrap: make sure you have not disabled the corresponding [Bootstrap JS component](/docs/customization/design/bootstrap/javascript/#enabledisable-bootstrap-components).

The breakpoint of the CSS is the `$navbar-expand` SASS variable, see below. Give `header.expand` the same value, `none` matching `false`.
{{< /alert-block >}}

## Colors

### Design system

The header reads its own tokens. Override them in `/assets/css/tokens/site.css`:

{{< alert text="`/assets/css/tokens/site.css`" state="light" >}}

```css
@layer tokens {
  :root {
    --header-color-background: var(--color-background);
    --header-color-text: var(--color-text);
    --header-color-link: var(--color-link);
  }
}
```

The panel is a drawer or a modal of `@uncinq/css-components`, which colours its links too. Give the main menu colours of its own on `.main-menu`, so the other drawers keep theirs:

{{< alert text="`/assets/css/site.css`" state="light" >}}

```css
@layer components {
  .main-menu {
    --drawer-color-background: #1d1d1b;
    --drawer-color-text: #ffffff;
    --drawer-color-text-hover: #ffffff;
  }
}
```

Use the `--modal-*` tokens with `layout: modal`. In the panel, `--main-menu-panel-separator-*` styles the line between two menus, and `--main-menu-panel-font-size-sub` the size of the sub-links.

{{< button url="/docs/customization/design/design-system/css/#overriding-tokens" text="See overriding tokens" >}}

### Bootstrap

Override the variables of hugolify-theme-bootstrap in your project:

{{< alert text="`/assets/sass/abstracts/_variables-site.sass`" state="light" >}}

```sass
$header-background-color: #F8F9FA
$header-color: invert($header-background-color)
$menu-background-color: $header-background-color // the panel
$menu-color: $header-color
$navbar-expand: lg // false to keep the panel at every width
```

{{< button url="/docs/customization/design/bootstrap/css/" text="See Bootstrap CSS" >}}
