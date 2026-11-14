---
isIndex: true
title: Home
hero:
  surtitle: Hugolify v2
  title: Framework Hugo  with <span><span><i>CloudCannon</i><i>Decap CMS</i><i>Netlify CMS</i><i>Pages CMS</i><i>Static CMS</i><i>Sveltia CMS</i><i>Tina CMS</i><i>CloudCannon</i></span></span>
  align: center
  text: Open-source Jamstack solution for building easily a fast, as accessible as possible and low carbon website, edited with the headless CMS of your choice.
  ctas:
    - url: /docs/getting-started/
      text: Get started
    - url: https://demo.hugolify.io
      text: Discover demo
      blank: true
blocks:
  - type: informations
    ui:
      column: 4
    heading:
      surtitle: Ethical
      title: A sustainable open-source framework for websites
    items:
      - title: Accessibility first
        text: Code ready, keyboard navigation…
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1758116872/342.Take-Care_jzhfyu.svg
          isLogo: true
      - title: Web performance
        text: PageSpeed, defer javascript…
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1758116886/384.Up-Trend_d1rcgi.svg
          isLogo: true
      - title: Low carbon
        text: Responsive images, lazy loading…
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1758116598/179.Planet_kydicb.svg
          isLogo: true
      - title: GDPR compliant
        text: Cookie less, Google less…
        image:
          src: https://res.cloudinary.com/uncinq/image/upload/v1758116906/403.Lawyer_h8jf76.svg
          isLogo: true
  - type: editorial
    ui:
      direction: ltr
    surtitle: Content
    title: +10 types of content available
    text: Pages, persons, posts, projects… And taxonomies like categories, tags, types, authors… Each one is a Hugo module, to import when your site needs it.
    image:
      src: https://res.cloudinary.com/uncinq/image/upload/v1758116481/150.Cubes_llpfto.svg
    cta:
      text: Discover all types of content
      url: /docs/sections/
  - type: editorial
    ui:
      direction: rtl
    surtitle: Modular
    title: +25 blocks of content available
    text: Titles, editorials, galleries, FAQ, charts, forms… Editors compose each page from blocks, and choose their look from the CMS.
    image:
      src: https://res.cloudinary.com/uncinq/image/upload/v1758116671/264.Teaming-Up_tqtwat.svg
    cta:
      text: Discover all blocks
      url: /docs/blocks/
  - type: informations
    ui:
      column: 3
    heading:
      surtitle: Hugolify v2
      title: Your look, your styling module
      text: The core theme renders the HTML and leaves the style to a module of its own. Pick one, or swap it later without touching a template.
    items:
      - icon: palette
        title: Design system
        text: Framework-free CSS built on design tokens, with light and dark modes.
        cta:
          link: true
          text: Discover the design system
          url: /docs/customization/design/design-system/
      - icon: brand:bootstrap
        title: Bootstrap
        text: Bootstrap 5, its SASS variables and JavaScript components, with the rendering of v1.
        cta:
          link: true
          text: Discover Bootstrap
          url: /docs/customization/design/bootstrap/
      - icon: shapes
        title: Icons
        text: Lucide and Simple Icons, built into one stylesheet holding only the icons a page uses.
        cta:
          link: true
          text: Discover the icons
          url: /docs/customization/icons/
  - type: figure
    ui:
      grid: large
      offset: center
      theme: light
    heading:
      surtitle: Headless CMS
      title: Skip the config file creation, Hugolify handles it automatically!
      text: With the built-in configuration file builder in Hugolify Admin, you no longer need to create this file manually. Customizing fields is also simplified thanks to a dedicated parameters file.
    figure:
      screenshot: true
      src: https://res.cloudinary.com/uncinq/image/upload/v1794648464/screenshot-sveltiacms-home_hilyka.png
      alt: Homepage screenshot of Hugolify Admin
      legend: Example of content management with Sveltia CMS
    footing:
      ctas:
        - text: Hugolify Admin
          url: /docs/admin/
  - type: logos
    ui:
      column: 7
      theme: light
    heading:
      title: All available CMS for Hugolify
      text: The same project runs any of them, from one configuration file that Hugolify writes for you.
    items:
      - title: Sveltia CMS
        text: Preferred
        src: https://res.cloudinary.com/uncinq/image/upload/v1758126005/logo-sveltia-cms_eh8ftl.png
        cta:
          link: true
          text: Documentation
          title: How to configure Sveltia CMS
          url: /docs/admin/cms/sveltia-cms/
      - src: https://res.cloudinary.com/uncinq/image/upload/v1758125974/logo-decap-cms_s1xnvt.svg
        title: Decap CMS
        text: Maintained
        cta:
          link: true
          text: Documentation
          title: How to configure Decap CMS
          url: /docs/admin/cms/decap-cms/
      - src: https://res.cloudinary.com/uncinq/image/upload/v1758126024/logo-pages-cms_f6i6vw.svg
        title: Pages CMS
        text: Maintained
        cta:
          link: true
          text: Documentation
          title: How to configure Pages CMS
          url: /docs/admin/cms/pages-cms/
      - src: https://res.cloudinary.com/uncinq/image/upload/v1761313828/cloudcannon_yvmrjo.svg
        title: CloudCannon
        text: Beta
        cta:
          link: true
          text: Documentation
          title: How to configure CloudCannon
          url: /docs/admin/cms/cloudcannon/
      - src: https://res.cloudinary.com/uncinq/image/upload/v1765298678/tina-cropped_ozj5qm.svg
        title: Tina CMS
        text: Beta
        cta:
          link: true
          text: Documentation
          title: How to configure Tina CMS
          url: /docs/admin/cms/tina-cms/
      - src: https://res.cloudinary.com/uncinq/image/upload/v1758126072/logo-netlify-cms_yrrarb.svg
        title: Netlify CMS
        text: Archived
        cta:
          link: true
          text: Documentation
          title: How to configure Netlify CMS
          url: /docs/admin/cms/netlify-cms/
      - src: https://res.cloudinary.com/uncinq/image/upload/v1758126045/logo-static-cms_us9twk.svg
        title: Static CMS
        text: Archived
        cta:
          link: true
          text: Documentation
          title: How to configure Static CMS
          url: /docs/admin/cms/static-cms/
  - type: timeline
    ui:
      grid: medium
      offset: center
    heading:
      surtitle: Getting started
      title: From zero to a website in four steps
    items:
      - surtitle: Step 1
        title: Use the GitHub template
        text: The template ships Hugolify v2 ready to run, with the core theme, the design system, the icons and the admin.
      - surtitle: Step 2
        title: Pick your modules
        text: Import the types of content and the taxonomies your site needs, each one a Hugo module.
      - surtitle: Step 3
        title: Choose your CMS
        text: Set one param, and Hugolify Admin writes the configuration of the CMS from your modules.
      - surtitle: Step 4
        title: Deploy
        text: Publish on Netlify, Cloudflare Pages, GitHub Pages or Render, among other static hosts.
    footing:
      ctas:
        - text: Read the getting started guide
          url: /docs/getting-started/
  - type: selected-docs
    section: docs
    show_more: true
    heading:
      surtitle: Docs
      title: Discover how to implement easily Hugolify for your project
    items:
      - getting-started
      - customization
      - sections
      - blocks
      - shortcodes
      - admin
  - type: selected-tutorials
    section: tutorials
    show_more: true
    ui:
      theme: light
    heading:
      surtitle: How to
      title: Learn with our tutorials
    items:
      - how-to-create-a-website-with-hugo-and-sveltia-cms-using-hugolify
      - how-to-connect-sveltia-cms-to-github-and-netlify-using-hugolify
      - how-to-create-your-own-design-system-using-hugolify
  - type: faq
    ui:
      grid: medium
      offset: center
    heading:
      surtitle: FAQ
      title: Frequently asked questions
    items:
      - summary: Is Hugolify free?
        name: faq
        text: Yes. Hugolify is open-source under the MIT license, free for personal and commercial projects.
      - summary: Which CMS should I choose?
        name: faq
        text: '[Sveltia CMS](/docs/admin/cms/sveltia-cms/) is the preferred one, with the most features. [Decap CMS](/docs/admin/cms/decap-cms/) suits a site using Netlify Identity, [Pages CMS](/docs/admin/cms/pages-cms/) a repository on GitHub. Switching later only changes one param.'
      - summary: Design system or Bootstrap?
        name: faq
        text: The [design system](/docs/customization/design/design-system/) is framework-free and built on design tokens, the choice of the GitHub template. [Bootstrap](/docs/customization/design/bootstrap/) keeps the rendering and the SASS variables of Hugolify v1.
      - summary: Where can I host my website?
        name: faq
        text: On any static host. The docs come with guides for [Netlify](/docs/getting-started/hosting/netlify/), [Cloudflare Pages](/docs/getting-started/hosting/cloudflare-pages/), [GitHub Pages](/docs/getting-started/hosting/github-pages/) and [Render](/docs/getting-started/hosting/render/).
      - summary: My website runs Hugolify v1, what now?
        name: faq
        text: Follow the [migration guide](/docs/getting-started/migration/). The [v1 documentation](https://v1.hugolify.io/) stays online.
  - type: informations
    ui:
      column: 3
    heading:
      surtitle: GitHub
      title: The main repositories
      text: The template relies on four modules, among more than sixty Hugolify repositories.
    items:
      - icon: brand:git
        title: hugolify-template
        text: GitHub template to start your Hugolify project.
        cta:
          link: true
          blank: true
          text: Discover repository
          url: https://github.com/hugolify/hugolify-template
      - icon: brand:git
        title: hugolify-theme
        text: Agnostic core module, templates, layouts and functions.
        cta:
          link: true
          blank: true
          text: Discover repository
          url: https://github.com/hugolify/hugolify-theme
      - icon: brand:git
        title: hugolify-admin
        text: Configuration of the CMS of your choice, from your modules.
        cta:
          link: true
          blank: true
          text: Discover repository
          url: https://github.com/hugolify/hugolify-admin
      - icon: brand:git
        title: hugolify-theme-design-system
        text: Styling module built on design tokens, CSS and JavaScript.
        cta:
          link: true
          blank: true
          text: Discover repository
          url: https://github.com/hugolify/hugolify-theme-design-system
      - icon: brand:git
        title: hugolify-theme-bootstrap
        text: Styling module built on Bootstrap 5, SASS and JavaScript.
        cta:
          link: true
          blank: true
          text: Discover repository
          url: https://github.com/hugolify/hugolify-theme-bootstrap
      - icon: brand:git
        title: hugolify-theme-icons
        text: Lucide and Simple Icons, for the interface and the brands.
        cta:
          link: true
          blank: true
          text: Discover repository
          url: https://github.com/hugolify/hugolify-theme-icons
  - type: cta
    ui:
      theme: accent
    heading:
      title: Support Us
      text: Support our work and help us improve this project by becoming a sponsor or giving us a star on our GitHub repositories.
    ctas:
      - text: Become a sponsor
        url: https://github.com/sponsors/sebousan
        blank: true
      - text: Star on GitHub
        url: https://github.com/Hugolify/hugolify-template
        blank: true
---
