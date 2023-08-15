import style from './NavMenuTabletMobile.module.scss'
import { NavLink } from 'react-router-dom'

const Nav = ({themeStyle}) => {
const navStyle = themeStyle === 'light' ? 'lightMobilePanel' : 'darkMobilePanel'
  return (
    <nav className={`${style.container_nav} ${navStyle}`}>
      <ul className={style.container_nav_list}>
        <li className={style.container_nav_list_item}>
          <NavLink to={'/'} className={style.container_nav_list_item_link}>Shop</NavLink>
        </li>
        <li className={style.container_nav_list_item}>
          <NavLink to={'/'} className={style.container_nav_list_item_link}>Offers</NavLink>
        </li>
        <li className={style.container_nav_list_item}>
          <NavLink to={'/'} className={style.container_nav_list_item_link}>Delivery</NavLink>
        </li>
        <li className={style.container_nav_list_item}>
          <NavLink to={'/'} className={style.container_nav_list_item_link}>Payment</NavLink>
        </li>
        <li className={style.container_nav_list_item}>
          <NavLink to={'/'} className={style.container_nav_list_item_link}>About us</NavLink>
        </li>
        <li className={style.container_nav_list_item}>
          <NavLink to={'/'} className={style.container_nav_list_item_link}>Contacts</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav