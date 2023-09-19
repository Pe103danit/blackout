export const setCategories = (pathname) => {
  switch (pathname) {
    case 'portable_power_stations': return 'Portable Power Stations'
    case 'power_banks': return 'Power Banks'
    case 'generators': return 'Generators'
    case 'solar_panels': return 'Solar Panels'
    case 'accessories': return 'Accessories'
    default: return pathname
  }
}