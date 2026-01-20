---
title: Menu
description: Type of primary navigation menu…
icon: list
---

## Enable offcanvas or modal

{{< alert text="`/config/default/params.yaml`" state="light" >}}

```yml
header:
  menu: offcanvas # default, or modal
```

{{< alert text="Make sure you have not disabled the loading of the corresponding [JavaScript](/docs/getting-started/customization/javascript/) component" state="warning" >}}

```yml
bootstrap:
  offcanvas: true # default true, Set true to enable
  modal: true # default true, Set true to enable
```
