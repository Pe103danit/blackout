import {
  SearchIcon,
  MarketIcon,
  UserIcon,
  LogoLightRight,
  LogoDarkRight,
  LogoLightLeft,
  LogoDarkLeft,
  SearchIconDark,
  UserIconDark,
  MarketIconDark,
  HeartIcon,
  HeartIconDark
} from '../../components/assets/Icons'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import NavMenuTabletMobile from '../../components/NavMenuTabletMobile/NavMenuTabletMobile'
import NavMenuCategories from '../../components/NavMenuCategories/NavMenuCategories'

const Header = (props) => {
  const themeStyle = props.lightTheme
    ? 'lightHeader'
    : 'darkHeader'

  const navStyle = props.lightTheme
    ? 'light_navLink'
    : 'dark_navLink'
  return (
    <div className={`${style.container} ${themeStyle}`}>
      <div className={style.container_header}>
        <div className={style.container_header_c1}>
          <NavMenuTabletMobile/>
          <div className={style.container_header_c1_logos}>
            <NavLink to="/" className={style.container_header_c1_logos_left}>
              {props.lightTheme
                ? <LogoLightLeft/>
                : <LogoDarkLeft/>
              }
            </NavLink>
            <button className={style.container_header_c1_logos_right} onClick={props.toggleTheme}>
              {props.lightTheme
                ? <LogoLightRight/>
                : <LogoDarkRight/>
              }
            </button>
          </div>
          {
            !props.searchInput
              ? <nav className={style.container_header_c1_navigation}>
                <ul className={style.container_header_c1_navigation_menu}>

                  <li className={`${style.container_header_c1_navigation_menu_item} ${navStyle}`}>
                    <NavLink to={'/shop'}>
                      Shop
                    </NavLink>
                    <NavMenuCategories themeStyle={props.lightTheme}/>
                  </li>

                  <li className={`${style.container_header_c1_navigation_menu_item} ${navStyle}`}>
                    <NavLink to={'/offers'}>
                      Offers
                    </NavLink>
                  </li>

                  <li className={`${style.container_header_c1_navigation_menu_item} ${navStyle}`}>
                    <NavLink to={'/delivery'}>
                      Delivery
                    </NavLink>
                  </li>

                  <li className={`${style.container_header_c1_navigation_menu_item} ${navStyle}`}>
                    <NavLink to={'/payment'}>
                      Payment
                    </NavLink>
                  </li>

                  <li className={`${style.container_header_c1_navigation_menu_item} ${navStyle}`}>
                    <NavLink to={'/about_us'}>
                      About us
                    </NavLink>
                  </li>

                  <li className={`${style.container_header_c1_navigation_menu_item} ${navStyle}`}>
                    <NavLink to={'/contacts'}>
                      Contacts
                    </NavLink>
                  </li>

                </ul>
              </nav>
              : <SearchPanel/>
          }
        </div>
        {!props.searchInput &&
          <div className={style.container_header_c2}>
            <button onClick={props.toggleSearchInput}>
              {props.lightTheme
                ? <SearchIcon/>
                : <SearchIconDark/>
              }
            </button>
            <NavLink to={'/login'} className={style.container_header_c2_link}>
              <button className={style.container_header_c2_link_user}>
                {props.lightTheme
                  ? <UserIcon/>
                  : <UserIconDark/>
                }
              </button>
            </NavLink>
            <NavLink to={'/wishlist'} className={style.container_header_c2_link}>
              <button className={style.container_header_c2_link_button}>
                {props.lightTheme
                  ? <HeartIcon/>
                  : <HeartIconDark/>
                }
                <div className={style.container_header_c2_link_button_container}>
                  {props.wishList}
                </div>
              </button>
            </NavLink>
            <NavLink to={'/basket'} className={style.container_header_c2_link}>
              <button className={style.container_header_c2_link_button}>
                {props.lightTheme
                  ? <MarketIcon/>
                  : <MarketIconDark/>
                }
                <div className={style.container_header_c2_link_button_container}>
                  {props.basket}
                </div>
              </button>
            </NavLink>
          </div>
        }
      </div>
    </div>
  )
}

export default Header