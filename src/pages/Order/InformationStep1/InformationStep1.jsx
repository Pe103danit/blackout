import style from './InformationStep1.module.scss'
import { NavLink } from 'react-router-dom'
import { MarketIcon } from '../../../components/assets/Icons'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import ReactPhoneInput from 'react-phone-input-material-ui';
import {findCurrentCountry} from './ListCountries'
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
import { useState } from 'react'

const InformationStep1 = (props) => {
  const themeStyle = props.lightTheme
    ? 'lightInformationStep1'
    : 'darkInformationStep1'

  const nextStep = () => {
    return (
      props.history.push('/shipping')
    )
  }

  const formik = useFormik({
    initialValues: {
      country: 'USA',
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    },
    onSubmit: values => {
      console.log({...values, phone: phoneInput});
      nextStep();
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(1, 'There should be more characters')
        .max(50, 'There should be less characters')
        .required('Write please your First Name'),
      lastName: Yup.string()
        .min(1, 'There should be more characters')
        .max(50, 'There should be less characters')
        .required('Write please your Last Name'),
      email: Yup.string().email()
        .min(5, 'There should be more characters')
        .max(50, 'There should be less characters')
        .required('Write please your Email'),
      phone: Yup.string()
        .required('Write please your Phone number')
    })
  })
  const [phoneInput, setPhoneInput] = useState('')
  const [countryInfo, setCountryInfo] = useState(null)
  const handleSetPhone = (e) => {
    setPhoneInput(e)
    setCountryInfo(findCurrentCountry(e))
  }
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
        <form className={style.container_main_form}
              onSubmit={formik.handleSubmit}
              autoComplete="off"
              noValidate
        >
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
                  name='country'
                  id='uncontrolled-native'
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value={'USA'}>USA</option>
                  <option value={'United Kingdom'}>United Kingdom</option>
                  <option value={'Ukraine'}>Ukraine</option>
                  <option value={'Germany'}>Germany</option>
                  <option value={'Spain'}>Spain</option>
                  <option value={'Italy'}>Italy</option>
                  <option value={'Norway'}>Norway</option>
                  <option value={'France'}>France</option>
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
                         onChange={formik.handleChange}
                         value={formik.values.firstName}
                         onBlur={formik.handleBlur}
                         className={style.container_main_form_container_inputs_input}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className={style.error}>{formik.errors.firstName}</p>
              )}
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="lastName"
                         label="Last Name"
                         variant="outlined"
                         type="text"
                         name="lastName"
                         placeholder="Last Name"
                         onChange={formik.handleChange}
                         value={formik.values.lastName}
                         onBlur={formik.handleBlur}
                         className={style.container_main_form_container_inputs_input}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className={style.error}>{formik.errors.lastName}</p>
              )}
            </div>
            <div className={style.container_main_form_container_inputs}>
              <ReactPhoneInput
                defaultCountry={'us'}
                component={TextField}
                id="phone"
                label="Phone"
                variant="outlined"
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleSetPhone}
                value={phoneInput}
                onBlur={formik.handleBlur}
                className={style.container_main_form_container_inputs_input}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className={style.error}>{formik.errors.phone}</p>
              )}
              {
                countryInfo !== null && <div className={style.container_main_form_container_inputs_flag}>{countryInfo.flag}</div>
              }
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="email"
                         label="Email"
                         variant="outlined"
                         type="email"
                         name="email"
                         placeholder="Email"
                         onChange={formik.handleChange}
                         value={formik.values.email}
                         onBlur={formik.handleBlur}
                         className={style.container_main_form_container_inputs_input}
              />
              {formik.touched.email && formik.errors.email && (
                <p className={style.error}>{formik.errors.email}</p>
              )}
            </div>
            <div className={style.container_main_form_container_inputs}>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked/>}
                                  label="I consent to receive news and offers via email"/>
              </FormGroup>
            </div>
            <div className={style.container_main_form_container_button}>
              <NavLink to={'/basket'}>
                <Button variant='contained'>&#8592; Back</Button>
              </NavLink>
                <Button variant='contained' type='submit'>
                  Continue to shipping &#8594;
                </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InformationStep1