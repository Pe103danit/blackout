import style from './InformationStep1.module.scss'
import { NavLink } from 'react-router-dom'
import { MarketIcon } from '../../../components/assets/Icons'

const InformationStep1 = (props) => {
  return (
    <div className={style.container}>
      <div className={style.container_title}>
        <div className={style.container_title_inner}>
          <span><MarketIcon/> Order summary</span>
          <span>${props.totalBasketSum}</span>
        </div>
      </div>
      <div className={style.container_main}>
        <nav className={style.container_main_nav}>
          <ul className={style.container_main_nav_list}>
            <li className={style.container_main_nav_list_item}>
              <NavLink to={'/'} className={style.container_main_nav_list_item_link}>
                Cart >
              </NavLink>
            </li>
            <li>
              <NavLink to={'/'} className={style.container_main_nav_list_item_link}>
                Information >
              </NavLink>
            </li>
            <li>
              <NavLink to={'/'} className={style.container_main_nav_list_item_link}>
                Shipping >
              </NavLink>
            </li>
            <li>
              <NavLink to={'/'} className={style.container_main_nav_list_item_link}>
                Payment
              </NavLink>
            </li>
          </ul>
        </nav>
        <form>
          <div>
            <p>Contact</p>
            <p>Have an account?
              <NavLink to={'/login'}>Log in</NavLink>
            </p>
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="newOffers"></label>
            <input
              type="checkbox"
              name="newOffers"
              id="newOffers"
            />
            <span>
          I consent to receive EcoFlow's news and offers via email. For further information, please visit our
          Privacy Policy and Terms of Service at the bottom of this page.
        </span>
            <p>
              Shipping address
            </p>
            <div>
              <select>
                <option selected disabled>Country/Region</option>
              </select>
            </div>
            <div>
              <label htmlFor="firstName"></label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div>
              <label htmlFor="lastName"></label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label htmlFor="phone"></label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InformationStep1