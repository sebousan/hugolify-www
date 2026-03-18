---
title: Icons
description: Lucide icons
weight: 4
icon: emoji-smile
---

{{< alert-block title="Roadmap" state="info" >}}
**hugolify-theme-design-system** will use {{< blank_link link="https://lucide.dev/" text="Lucide Icons" >}} instead of a font-based icon system.
{{< /alert-block >}}

## Approach

Icons are rendered via CSS **mask-image** using inline SVGs. No icon font file, no SVG sprite.

```css
/* Example */
.icon-arrow-right {
  background-color: currentColor;
  display: inline-block;
  height: 1em;
  mask-image: url('/icons/arrow-right.svg');
  width: 1em;
}
```

This approach means icons inherit the current text color via `currentColor` and scale with font size.
