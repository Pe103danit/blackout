import {
  SearchIcon,
  MarketIcon,
  UserIcon,
  LogoLightRight,
  LogoDarkRight,
  LogoLightLeft,
  LogoDarkLeft, SearchIconDark, UserIconDark, MarketIconDark, HeartIcon, HeartIconDark
} from '../../components/assets/Icons'
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import NavMenuTabletMobile from '../../components/NavMenuTabletMobile/NavMenuTabletMobile'
import NavMenuCategories from '../../components/NavMenuCategories/NavMenuCategories'

const Header = (props) => {
  const themeStyle = props.lightTheme
    ? 'light'
    : 'dark'

  const navStyle = props.lightTheme
    ? 'light_navLink'
    : 'dark_navLink'
  return (
    <div className={`${style.header} ${themeStyle}`}>
      <div className={style.header_c1}>
        <NavMenuTabletMobile themeStyle={themeStyle} />
        <div className={style.header_c1_logos}>
          <NavLink to="/" className={style.header_c1_logos_left}>
            {props.lightTheme
              ? <LogoLightLeft />
              : <LogoDarkLeft />
            }
          </NavLink>
          <button className={style.header_c1_logos_right} onClick={props.toggleTheme}>
            {props.lightTheme
              ? <LogoLightRight />
              : <LogoDarkRight />
            }
          </button>
        </div>
        {
          !props.searchInput
            ? <nav className={style.header_c1_navigation}>
              <ul className={style.header_c1_navigation_menu}>
                <li className={`${style.header_c1_navigation_menu_item} ${navStyle}`}>Shop<NavMenuCategories themeStyle={themeStyle} />
                </li>
                <li className={`${style.header_c1_navigation_menu_item} ${navStyle}`}><NavLink to='/offers'>Offers</NavLink></li>
                <li className={`${style.header_c1_navigation_menu_item} ${navStyle}`}><NavLink to='/delivery'>Delivery</NavLink></li>
                <li className={`${style.header_c1_navigation_menu_item} ${navStyle}`}><NavLink to='/payment'>Payment</NavLink></li>
                <li className={`${style.header_c1_navigation_menu_item} ${navStyle}`}><NavLink to='/aboutus'>About us</NavLink></li>
                <li className={`${style.header_c1_navigation_menu_item} ${navStyle}`}><NavLink to='/contacts'>Contacts</NavLink></li>
              </ul>

                {/* <li className={`${style.header_c1_navigation_menu_item} ${navStyle}`}>
                  <NavLink to={'/'}>
                    Offers
                  </NavLink>
                </li>

                <li className={`${style.header_c1_navigation_menu_item} ${navStyle}`}>
                  <NavLink to={'/delivery'}>
                    Delivery
                  </NavLink>
                </li>

                <li className={`${style.header_c1_navigation_menu_item} ${navStyle}`}>
                  <NavLink to={'/payment'}>
                    Payment
                  </NavLink>
                </li>

                <li className={`${style.header_c1_navigation_menu_item} ${navStyle}`}>
                  <NavLink to={'/about'}>
                    About us
                  </NavLink>
                </li>

                <li className={`${style.header_c1_navigation_menu_item} ${navStyle}`}>
                  <NavLink to={'/contacts'}>
                    Contacts
                  </NavLink>
                </li> */}

            </nav>
            : <SearchPanel />
        }
      </div>
      {!props.searchInput &&
        <div className={style.header_c2}>
          <button onClick={props.toggleSearchInput}>
            {props.lightTheme
              ? <SearchIcon />
              : <SearchIconDark />
            }
          </button>
          <button>
            {props.lightTheme
              ? <UserIcon />
              : <UserIconDark />
            }
          </button>
          <button>
          <NavLink to='/cart'>
            {props.lightTheme
              ? <MarketIcon />
              : <MarketIconDark />
            }
            </NavLink>
          </button>
        </div>
      }
    </div>

  )
}

export default Header