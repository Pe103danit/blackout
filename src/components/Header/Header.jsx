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
} from '../assets/Icons'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import SearchPanel from '../SearchPanel/SearchPanel'
import NavMenuTabletMobile from '../NavMenuTabletMobile/NavMenuTabletMobile'
import NavMenuCategories from '../NavMenuCategories/NavMenuCategories'
import { useSelector } from 'react-redux'

const Header = (props) => {
  const token = useSelector(state => state.SessionReducer.token)
  const themeStyle = props.lightTheme
    ? 'lightHeader'
    : 'darkHeader'

  const navStyle = props.lightTheme
    ? 'light_navLink'
    : 'dark_navLink'

  const handleClearFilter = () => {
    props.resetFilters();
  }

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
                    <NavLink to={'/shop'} onClick={handleClearFilter}>
                      Shop
                    </NavLink>
                    <NavMenuCategories themeStyle={props.lightTheme} handleClearFilter={handleClearFilter}/>
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
              : <SearchPanel themeStyle={props.lightTheme}/>
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
            <NavLink to={token ? '/account' : '/login'} className={style.container_header_c2_link}>
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
                  {props.wishCount}
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