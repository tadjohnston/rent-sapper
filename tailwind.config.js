const plugin = require('tailwindcss/plugin')
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;
const config = require('@rentpath/styleguide/tailwind/rent.static.config.js')

config.purge = [
  "./src/**/*.svelte"
]

config.plugins.push(
  plugin(({ addUtilities, theme, variants }) => {
    const colors = flattenColorPalette(theme('borderColor'));
    delete colors['default'];

    const colorMap = Object.keys(colors)
      .map(color => ({
        [`.border-t-${color}`]: {borderTopColor: colors[color]},
        [`.border-r-${color}`]: {borderRightColor: colors[color]},
        [`.border-b-${color}`]: {borderBottomColor: colors[color]},
        [`.border-l-${color}`]: {borderLeftColor: colors[color]},
      }));

    const utilities = Object.assign({}, ...colorMap);

    addUtilities(utilities, variants('borderColor'));
  },
))

module.exports = config
