<script>
  import cn from 'classnames'

  const fontIcons = {
    '3d': 205,
    account: 200,
    'arrow-down': 194,
    'arrow-left': 194,
    'arrow-right': 194,
    'arrow-up': 194,
    calendar: 203,
    check: 216,
    'chevron-down': 195,
    'chevron-left': 195,
    'chevron-right': 195,
    'chevron-up': 195,
    edit: 201,
    email: 198,
    facebook: 221,
    filters: 214,
    floorplan: 206,
    gradcap: 217,
    heart: 196,
    heartempty: 197,
    instagram: 223,
    link: 215,
    map: 209,
    mapmarker: 210,
    menu: 213,
    minus: 193,
    phone: 199,
    photos: 208,
    pinterest: 219,
    plus: 192,
    search: 212,
    time: 204,
    trash: 202,
    truesearch: 211,
    twitter: 220,
    video: 207,
    x: 192,
    youtube: 222,
  }

  // classes to add on; primarily used for things like
  // chevron up and down so we can reuse the same font glyph
  const addons = {
    'arrow-down': 'font-icon-down',
    'arrow-right': 'font-icon-right',
    'arrow-up': 'font-icon-up',
    'chevron-down': 'font-icon-down',
    'chevron-right': 'font-icon-right',
    'chevron-up': 'font-icon-up',
    x: 'rotate-45',
  }

  let className

  export let name
  export { className as class }
</script>

<span
  class={cn(
    'font-regular font-body font-icon antialiased',
    addons[name],
    className,
  )}
>
  {String.fromCharCode(fontIcons[name])}
</span>
