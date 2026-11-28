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

The module adds a `products` section: the list at `/products/`, each product at `/products/:slug/`, and its collection in the CMS.

## Frontmatter

```yml
title: '' # string
description: '' # string (optional)
draft: false # boolean (optional)
date: '' # date (optional)
brand: '' # string (optional)
sku: '' # string, the seller's reference, shown on the page (optional)
gtin: '' # string, the barcode: EAN or UPC (optional)
mpn: '' # string, the manufacturer's part number (optional)
offer: {} # (optional)
  price: 0 # number
  discount: '' # string, an amount or a percentage: 10 or 10% (optional)
  price_valid_until: '' # date, the last day of the price (optional)
  hide_price: false # boolean (optional)
  availability: '' # [InStock, LimitedAvailability, MadeToOrder, PreOrder, PreSale, BackOrder, OutOfStock, SoldOut, Discontinued] (optional)
  availability_starts: '' # date, for PreOrder, PreSale and BackOrder (optional)
  condition: '' # [NewCondition, RefurbishedCondition, UsedCondition, DamagedCondition] (optional)
  text: '' # string (optional)
datas: [] # list of title and text, the spec sheet (optional)
image: {} # the featured image (optional)
images: [] # list of src, alt, credit, legend (optional)
products_categories: [] # with hugolify-theme-products-categories (optional)
products_tags: [] # with hugolify-theme-products-tags (optional)
blocks: [] # (optional)
```

On the page, the discount is applied to the price, shown next to the price before it, struck through. The last day of the price is shown under it until that day has passed.

## Structured data

Each product page publishes a schema.org `Product` with its `Offer`, built from the front matter:

- `brand`, `sku`, `gtin` and `mpn` identify the product. Left empty, none of them is made up. A GTIN must hold 8, 12, 13 or 14 digits, spaces allowed: anything else is left out.
- The offer carries the discounted price, the availability, `InStock` by default, the condition when picked, and the last day of the price until that day has passed.
- A hidden price stays hidden: the offer is still published, without a price.
- The categories are published as `category`, the tags as `keywords`, the spec sheet and the images with the rest.

The currency is `EUR` by default: set `currency` in the site params to change it.

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
