import style from './InformationStep1.module.scss'
import { NavLink } from 'react-router-dom'
import { MarketIcon } from '../../../components/assets/Icons'
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  NativeSelect,
  TextField
} from '@mui/material'

const InformationStep1 = (props) => {
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
              <p className={style.container_main_nav_list_item_link}>
                Information >
              </p>
            </li>
            <li className={style.container_main_nav_list_item}>
              <p className={`${style.container_main_nav_list_item_link} ${style.unknown}`}>
                Shipping >
              </p>
            </li>
            <li className={style.container_main_nav_list_item}>
              <p className={`${style.container_main_nav_list_item_link} ${style.unknown}`}>
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
              Personal information
            </p>
            <div className={style.container_main_form_container_inputs}>
              <FormControl className={style.container_main_form_container_inputs_input}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Country/Region
                </InputLabel>
                <NativeSelect
                  defaultValue={1}
                  inputProps={{
                    name: 'Country/Region',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={1}>USA</option>
                  <option value={2}>United Kingdom</option>
                  <option value={3}>Ukraine</option>
                  <option value={4}>Germany</option>
                  <option value={5}>Spain</option>
                  <option value={6}>Italy</option>
                  <option value={7}>Norway</option>
                  <option value={8}>France</option>
                </NativeSelect>
              </FormControl>
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="firstName"
                         label="First Name"
                         variant="outlined"
                         type="text"
                         name="firstName"
                         placeholder="First Name"
                         className={style.container_main_form_container_inputs_input}
              />
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="lastName"
                         label="Last Name"
                         variant="outlined"
                         type="text"
                         name="lastName"
                         placeholder="Last Name"
                         className={style.container_main_form_container_inputs_input}
              />
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="phone"
                         label="Phone"
                         variant="outlined"
                         type="text"
                         name="phone"
                         placeholder="Phone"
                         className={style.container_main_form_container_inputs_input}
              />
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="email"
                         label="Email"
                         variant="outlined"
                         type="email"
                         name="email"
                         placeholder="Email"
                         className={style.container_main_form_container_inputs_input}
              />
            </div>
            <div className={style.container_main_form_container_inputs}>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="I consent to receive news and offers via email" />
              </FormGroup>
            </div>
            <div className={style.container_main_form_container_button}>
              <Button variant="contained">Continue to shipping</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InformationStep1