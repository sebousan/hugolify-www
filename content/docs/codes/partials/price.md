---
title: Price
description: Displays a price with currency, discount, frequency…
icon: currency-euro
---
## Example

### Usage

```go-html-template
{{ $args := (dict
        "price" 100
        "discount" "10%"
        "frenquency" "/month"
        ) }}
{{ partial "commons/price" $args }}
```

### HTML rendered

```html
<p class="princing">90€ <del>100€</del> <span>-10%</span> <i>/month</i></p>
```

## Datas

```yml
price: "" // Float price, required
discount: "" // Percent or value to discount
frequency: "" // If you have subscription and you want 
itemprop: false // boolean to add itemprop="price" content="{price}"
```

## Related link

- {{< blank_link link="https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/price.html" text="Commons file — hugolify-theme" >}}