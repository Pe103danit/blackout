import style from './NavMenuCategories.module.scss'
import { NavLink } from 'react-router-dom'

const NavMenuCategories = ({themeStyle, handleClearFilter}) => {
  const navStyle = themeStyle ? 'light_navMobile' : 'dark_navMobile'
  return (
    <nav className={`${style.container} ${navStyle}`}>
      <ul className={style.container_list}>
        <li className={style.container_list_item}>
          <NavLink to={'/shop?categories=Portable Power Stations'} onClick={handleClearFilter} className={style.container_list_item_link}>Portable Power Stations</NavLink>
        </li>
        <li className={style.container_list_item}>
          <NavLink to={'/shop?categories=Power Banks'} onClick={handleClearFilter} className={style.container_list_item_link}>Power Banks</NavLink>
        </li>
        <li className={style.container_list_item}>
          <NavLink to={'/shop?categories=Generators'} onClick={handleClearFilter} className={style.container_list_item_link}>Generators</NavLink>
        </li>
        <li className={style.container_list_item}>
          <NavLink to={'/shop?categories=Solar Panels'} onClick={handleClearFilter} className={style.container_list_item_link}>Solar Panels</NavLink>
        </li>
        <li className={style.container_list_item}>
          <NavLink to={'/shop?categories=Accessories'} onClick={handleClearFilter} className={style.container_list_item_link}>Accessories</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenuCategories