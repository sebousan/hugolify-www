/* eslint-disable no-undef */

/**
 * PostCSS config for hugolify-theme-design-system
 *
 * Used by Hugo through the styling module's own param:
 *   css:
 *     postcss: "postcss/design-system"
 *
 * Install: yarn install:hugolify && yarn install
 */
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': {},
    autoprefixer: {}
  }
};
