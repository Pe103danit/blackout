import style from './NavMenuTabletMobile.module.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {
  AboutUsIcon, AboutUsIconDark,
  ContactsIcon, ContactsIconDark,
  DeliveryIcon, DeliveryIconDark, ListDownIcon, ListDownIconDark,
  ListRightIcon, ListRightIconDark,
  MarketIcon, MarketIconDark,
  OffersIcon, OffersIconDark,
  PaymentIcon, PaymentIconDark,
  UserIcon, UserIconDark
} from '../assets/Icons'

const Nav = ({ themeStyle, toggle }) => {
  const token = sessionStorage.getItem('tokenParts');
  const navStyle = themeStyle === 'light' ? 'lightMobilePanel' : 'darkMobilePanel'

  const [openCategories, setOpenCategories] = useState(false)
  const toggleOpenCategories = () => {
    setOpenCategories(!openCategories)
  }

  return (
    <nav className={`${style.container_nav} ${navStyle}`}>
      <ul className={style.container_nav_list}>
        <li className={style.container_nav_list_item}>
          <NavLink to={token ? '/account' : '/login'} className={style.container_nav_list_item_link} onClick={toggle}>
            {themeStyle === 'light'
              ? <UserIcon/>
              : <UserIconDark/>
            } Log in or Sign up
          </NavLink>
        </li>
        <li className={style.container_nav_list_item}>
          <button className={style.container_nav_list_item_button} onClick={toggleOpenCategories}>
            {themeStyle === 'light'
              ? <MarketIcon/>
              : <MarketIconDark/>
            } Shop
            {openCategories
              ? (themeStyle === 'light'
                  ? <ListDownIcon/>
                  : <ListDownIconDark/>
              )
              : (themeStyle === 'light'
                  ? <ListRightIcon/>
                  : <ListRightIconDark/>
              )
            }
          </button>
        </li>
        {openCategories === true &&
          <>
            <li className={style.container_nav_list_item}>
              <NavLink to={'/portable_power_stations'} className={style.container_nav_list_item_link} onClick={toggle}>
                Portable Power Stations
              </NavLink>
            </li>
            <li className={style.container_nav_list_item}>
              <NavLink to={'/power_banks'} className={style.container_nav_list_item_link} onClick={toggle}>
                Power Banks
              </NavLink>
            </li>
            <li className={style.container_nav_list_item}>
              <NavLink to={'/generators'} className={style.container_nav_list_item_link} onClick={toggle}>
                Generators
              </NavLink>
            </li>
            <li className={style.container_nav_list_item}>
              <NavLink to={'/solar_panels'} className={style.container_nav_list_item_link} onClick={toggle}>
                Solar Panels
              </NavLink>
            </li>
            <li className={style.container_nav_list_item}>
              <NavLink to={'/accessories'} className={style.container_nav_list_item_link} onClick={toggle}>
                Accessories
              </NavLink>
            </li>
          </>
        }
        <li className={style.container_nav_list_item}>
          <NavLink to={'/offers'} className={style.container_nav_list_item_link} onClick={toggle}>
            {themeStyle === 'light'
              ? <OffersIcon/>
              : <OffersIconDark/>
            } Offers
          </NavLink>
        </li>
        <li className={style.container_nav_list_item}>
          <NavLink to={'/delivery'} className={style.container_nav_list_item_link} onClick={toggle}>
            {themeStyle === 'light'
              ? <DeliveryIcon/>
              : <DeliveryIconDark/>
            } Delivery
          </NavLink>
        </li>
        <li className={style.container_nav_list_item}>
          <NavLink to={'/payment'} className={style.container_nav_list_item_link} onClick={toggle}>
            {themeStyle === 'light'
              ? <PaymentIcon/>
              : <PaymentIconDark/>
            } Payment
          </NavLink>
        </li>
        <li className={style.container_nav_list_item}>
          <NavLink to={'/about_us'} className={style.container_nav_list_item_link} onClick={toggle}>
            {themeStyle === 'light'
              ? <AboutUsIcon/>
              : <AboutUsIconDark/>
            } About us
          </NavLink>
        </li>
        <li className={style.container_nav_list_item}>
          <NavLink to={'/contacts'} className={style.container_nav_list_item_link} onClick={toggle}>
            {themeStyle === 'light'
              ? <ContactsIcon/>
              : <ContactsIconDark/>
            } Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav