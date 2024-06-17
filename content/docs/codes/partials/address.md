---
title: Address
description: Displays an formating address.
icon: map
---
## Example

### Usage

```go-html-template
{{ $address := (dict
        "street" "24 Rue de Commandant Guilbaud"
        "zipcode" "75016"
        "city" "Paris"
        "country" "France"
        ) }}
{{ $args := (dict
    "card" true
    "direction" true
    "address" $address
    ) }}
{{ partial "commons/address" $args }}
```

### HTML rendered

```html
<address class="address">
  <div>
    <p>24 Rue de Commandant Guilbaud</p>
    <p>75016 Paris</p>
    <p>France</p>
    <a class="direction" href="https://www.google.fr/maps/dir//24 Rue de Commandant Guilbaud 75016 Paris France" target="_blank" title="How to go? - external link">How to go?</a>
  </div>
</address>
```

## Datas

```yml
card: false // Display this component with like a card
direction: false // Add a direction Google Map link 
address:
  street: ""
  zipcode: ""
  city: ""
  country: ""
```

## Related link

- [Commons file — hugolify-theme](https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/address.html)
