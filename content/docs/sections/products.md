---
title: Products
description: Description, price, variants.
icon: box
---

## Modules required

- {{< blank_link link="https://github.com/hugolify/hugolify-theme" text="Hugolify theme" >}}
- {{< blank_link link="https://github.com/hugolify/hugolify-theme-products" text="Hugolify theme products" >}}

**Setup**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-products/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Taxonomies

- [Categories](/docs/taxonomies/products-categories/)
- [Tags](/docs/taxonomies/products-tags/)

**Setup with multiple taxonomies example**

{{< alert text="`/config/_default/module.yaml`" state="light" >}}

```yml
imports:
  - path: github.com/hugolify/hugolify-theme-products-categories/v2
  - path: github.com/hugolify/hugolify-theme-products-tags/v2
  - path: github.com/hugolify/hugolify-theme-products/v2
  - path: github.com/hugolify/hugolify-theme/v2
```

## Files

| Module | Files |
| --- | --- |
| hugolify-theme-products | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-products/tree/main/layouts/partials/products" text="Partials" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-products/tree/main/layouts/products" text="Page templates" >}} |
| hugolify-admin | {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/types/products.yml" text="Collection type" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-admin/blob/v2/layouts/_partials/admin/collections/fields/products.fields.default.html" text="Fields" >}} |
| hugolify-example-site | {{< blank_link link="https://github.com/Hugolify/hugolify-example-site/tree/main/content/products" text="Demo content" >}} |

## Styling availability

| Module | Availability | Files |
| --- | --- | --- |
| [hugolify-theme-bootstrap](/docs/customization/design/bootstrap/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-products/blob/main/assets/sass/pages/_product.sass" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-products/blob/main/assets/sass/pages/_products.sass" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-products/blob/main/assets/sass/components/_product.sass" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-products/blob/main/assets/sass/components/_products.sass" text="Items" >}} |
| [hugolify-theme-design-system](/docs/customization/design/design-system/) | {{< badge text="Available" state="success" >}} | {{< blank_link link="https://github.com/Hugolify/hugolify-theme-products/blob/main/assets/css/pages/product.css" text="Single page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-products/blob/main/assets/css/pages/products.css" text="List page" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-products/blob/main/assets/css/components/product.css" text="Item" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-products/blob/main/assets/css/components/products.css" text="Items" >}}, {{< blank_link link="https://github.com/Hugolify/hugolify-theme-products/tree/main/assets/css/tokens" text="Tokens" >}} |

## CMS availability

| CMS | Hugolify Admin v2 |
| --- | --- |
| [CloudCannon](/docs/admin/cms/cloudcannon/) | {{< badge text="Available" state="success" >}} |
| [Decap CMS](/docs/admin/cms/decap-cms/) | {{< badge text="Available" state="success" >}} |
| [Netlify CMS](/docs/admin/cms/netlify-cms/) | {{< badge text="Available" state="success" >}} |
| [Pages CMS](/docs/admin/cms/pages-cms/) | {{< badge text="Available" state="success" >}} |
| [Static CMS](/docs/admin/cms/static-cms/) | {{< badge text="Available" state="success" >}} |
| [Sveltia CMS](/docs/admin/cms/sveltia-cms/) | {{< badge text="Available" state="success" >}} |
| [Tina CMS](/docs/admin/cms/tina-cms/) | {{< badge text="Available" state="success" >}} |

## Example

- {{< blank_link link="https://demo-products--hugolify-demo.netlify.app/" text="Demo visual renderer" >}}
