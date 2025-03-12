---
title: Address
description: Displays an formating address.
icon: map
---
## Arguments

**card** {{< badge state="light" text="Boolean" >}}\
Set true to add card class

**direction** {{< badge state="light" text="Boolean" >}}\
Set true to add a direction link to Google Map

**address** {{< badge state="light" text="Map" >}}\
Object of address values

## Usage

```go-html-template
{{ partial "commons/address" $map }}
```

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

## Related link

- [Commons file — hugolify-theme](https://github.com/Hugolify/hugolify-theme/blob/main/layouts/partials/commons/address.html)
