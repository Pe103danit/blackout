import style from './NavMenuTabletMobile.module.scss'
import { NavLink } from 'react-router-dom'
import {
  AboutUsIcon, AboutUsIconDark,
  ContactsIcon, ContactsIconDark,
  DeliveryIcon, DeliveryIconDark,
  MarketIcon, MarketIconDark,
  OffersIcon, OffersIconDark,
  PaymentIcon, PaymentIconDark,
  UserIcon, UserIconDark
} from '../assets/Icons'

const Nav = ({themeStyle, toggle}) => {
const navStyle = themeStyle === 'light' ? 'lightMobilePanel' : 'darkMobilePanel'

  return (
    <nav className={`${style.container_nav} ${navStyle}`}>
      <ul className={style.container_nav_list}>
        <li className={style.container_nav_list_item}>
          <NavLink to={'/login'} className={style.container_nav_list_item_link} onClick={toggle}>
            {themeStyle === 'light'
            ? <UserIcon/>
            : <UserIconDark/>
          } Log in or Sign up
          </NavLink>
        </li>
        <li className={style.container_nav_list_item}>
          <NavLink to={'/shop'} className={style.container_nav_list_item_link} onClick={toggle}>
            {themeStyle === 'light'
              ? <MarketIcon/>
              : <MarketIconDark/>
            } Shop
          </NavLink>
        </li>
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