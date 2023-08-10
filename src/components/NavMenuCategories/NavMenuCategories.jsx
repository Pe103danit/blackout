import style from './NavMenuCategories.module.scss'
import { NavLink } from 'react-router-dom'

const NavMenuCategories = ({themeStyle}) => {
  const navStyle = themeStyle === 'light' ? 'light_navMobile' : 'dark_navMobile'
  return (
    <nav className={`${style.container} ${navStyle}`}>
      <ul className={style.container_list}>
        <li className={style.container_list_item}>
          <NavLink to={'/'} className={style.container_list_item_link}>Portable Power Stations</NavLink>
        </li>
        <li className={style.container_list_item}>
          <NavLink to={'/'} className={style.container_list_item_link}>Power Banks</NavLink>
        </li>
        <li className={style.container_list_item}>
          <NavLink to={'/'} className={style.container_list_item_link}>Generators</NavLink>
        </li>
        <li className={style.container_list_item}>
          <NavLink to={'/'} className={style.container_list_item_link}>Solar Panels</NavLink>
        </li>
        <li className={style.container_list_item}>
          <NavLink to={'/'} className={style.container_list_item_link}>Accessories</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenuCategories