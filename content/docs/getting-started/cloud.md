---
title: Cloud
description: Media management and optimization
weight: 6
icon: cloud
---

## Services available

These services are supported for seamless media management and optimization in cloud-based applications.

* {{< blank_link link="https://cloudinary.com/" text="Cloudinary" >}}
* {{< blank_link link="https://uploadcare.com/" text="Uploadcare" >}}

## Setup

* [Hugolify Admin](/docs/cms/admin/setup/)

### Cloudinary

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  media:
    cloud:
      name: cloudinary
      cloud_name: # write your cloudinary cloud name
      api_key: # write your cloudinary api key
```

### Uploadcare

{{< alert text="`/config/_default/params.yaml`" state="light" >}}

```yaml
admin:
  media:
    cloud:
      name: uploadcare
      public_key: # write your uploadcare public api key
```

