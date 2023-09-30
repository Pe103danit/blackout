import style from './NavMenuCategories.module.scss'
import { NavLink } from 'react-router-dom'

const NavMenuCategories = ({themeStyle, handleClearFilter}) => {
  const navStyle = themeStyle ? 'light_navMobile' : 'dark_navMobile'
  return (
    <nav className={`${style.container} ${navStyle}`}>
      <ul className={style.container_list}>
        <li className={style.container_list_item}>
          <NavLink to={'/portable_power_stations'} onClick={handleClearFilter} className={style.container_list_item_link}>Portable Power Stations</NavLink>
        </li>
        <li className={style.container_list_item}>
          <NavLink to={'/power_banks'} onClick={handleClearFilter} className={style.container_list_item_link}>Power Banks</NavLink>
        </li>
        <li className={style.container_list_item}>
          <NavLink to={'/generators'} onClick={handleClearFilter} className={style.container_list_item_link}>Generators</NavLink>
        </li>
        <li className={style.container_list_item}>
          <NavLink to={'/solar_panels'} onClick={handleClearFilter} className={style.container_list_item_link}>Solar Panels</NavLink>
        </li>
        <li className={style.container_list_item}>
          <NavLink to={'/accessories'} onClick={handleClearFilter} className={style.container_list_item_link}>Accessories</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenuCategories