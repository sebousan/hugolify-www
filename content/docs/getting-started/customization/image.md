---
title: Image
description: Logo, retina, dimensions…
icon: file-earmark-image
---

## Logo

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
logo:
  header: '/assets/images/logo.svg'
  footer: '/assets/images/logo-footer.svg' # default: /assets/images/logo.svg
```

## Retina

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
image:
  retina:
    desktop: false # default false, Set true to enable retina for desktop
```

## Dimensions

{{< alert text="`/config/default/params.yaml`" state="light" >}}

### Commons

```yml
hero:
  cover: '1600x400'
  cover_mobile: '360x400'
  desktop: '416x'
  mobile: '300x'
image:
  xlarge: '1600x'
  xsmall: '50x50'
  desktop: '856x'
  mobile: '300x'
  mobile_full: '360x'
  scrollsnap: '240x'
thumbnail:
  desktop: '414x177'
  mobile: '300x129'
  scrollsnap: '240x103'
navigation:
  desktop: '414x200'
  mobile: '300x150'
```

### Sections

```yml
pages:
  thumbnail:
    desktop: '414x177'
    desktop: '416x179'
    desktop_large: '636x273'
    mobile: '300x129'
    scrollsnap: '240x103'
  image:
    desktop: '856x'
    mobile: '360x'
posts:
  …
```

### Blocks

```yml
blocks:
  editorial:
    desktop: '636x'
    mobile: '360x'
  gallery:
    mobile: '138x138'
  informations:
    image:
      ratio: .5196
```
