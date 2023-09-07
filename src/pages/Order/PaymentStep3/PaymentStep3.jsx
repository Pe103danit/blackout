import style from './PaymentStep3..module.scss'
import { NavLink } from 'react-router-dom'
import { MarketIcon } from '../../../components/assets/Icons'
import {
  Button,
  TextField
} from '@mui/material'

const PaymentStep3 = (props) => {
  const themeStyle = props.lightTheme
    ? 'lightInformationStep1'
    : 'darkInformationStep1'
  return (
    <div className={`${style.container} ${themeStyle}`}>
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
              <NavLink to={'/basket'} className={`${style.container_main_nav_list_item_link} ${style.active}`}>
                Cart >
              </NavLink>
            </li>
            <li className={style.container_main_nav_list_item}>
              <NavLink to={'/information'} className={`${style.container_main_nav_list_item_link} ${style.active}`}>
                Information >
              </NavLink>
            </li>
            <li className={style.container_main_nav_list_item}>
              <NavLink to={'/information'} className={`${style.container_main_nav_list_item_link} ${style.active}`}>
                Shipping>
              </NavLink>
            </li>
            <li className={style.container_main_nav_list_item}>
              <p className={style.container_main_nav_list_item_link}>
                Payment
              </p>
            </li>
          </ul>
        </nav>
        <form className={style.container_main_form}>
          <div className={style.container_main_form_login}>
            <p className={style.container_main_form_login_title}>Contact</p>
            <p className={style.container_main_form_login_question}>Have an account?
              <NavLink to={'/login'} className={style.container_main_form_login_question_link}> Log in</NavLink>
            </p>
          </div>
          <div className={style.container_main_form_container}>
            <p className={style.container_main_form_container_title}>
              Payment information
            </p>
            <div className={style.container_main_form_container_inputs}>
              <div className={style.container_main_form_container_inputs}>
                <TextField id="address"
                           label="Address"
                           variant="outlined"
                           type="text"
                           name="address"
                           placeholder="Address"
                           className={style.container_main_form_container_inputs_input}
                />
              </div>
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="apartment"
                         label="Apartment, suite etc. (optional)"
                         variant="outlined"
                         type="text"
                         name="apartment"
                         placeholder="Apartment, suite etc. (optional)"
                         className={style.container_main_form_container_inputs_input}
              />
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="city"
                         label="City"
                         variant="outlined"
                         type="text"
                         name="city"
                         placeholder="City"
                         className={style.container_main_form_container_inputs_input}
              />
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="postcode"
                         label="Postcode"
                         variant="outlined"
                         type="text"
                         name="postcode"
                         placeholder="Postcode"
                         className={style.container_main_form_container_inputs_input}
              />
            </div>
            <div className={style.container_main_form_container_button}>
              <NavLink to={'/shipping'}>
                <Button variant="contained">&#8592; Back</Button>
              </NavLink>
              <NavLink to={'/payment'}>
                <Button variant="contained">Pay now</Button>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PaymentStep3