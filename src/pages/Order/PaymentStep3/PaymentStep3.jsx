import style from './PaymentStep3..module.scss'
import cardImg from './card.png'
import cardGif from './rccs.gif'
import { NavLink } from 'react-router-dom'
import { MarketIcon } from '../../../components/assets/Icons'
import {
  Button, TextField
} from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const PaymentStep3 = (props) => {
  const themeStyle = props.lightTheme
    ? 'lightInformationStep1'
    : 'darkInformationStep1'

  const formik = useFormik({
    initialValues: {
      number: '',
      expiry: '',
      cvc: '',
      name: '',
    },
    onSubmit: values => {
      console.log({ ...values })
    },
    validationSchema: Yup.object({
      number: Yup.string()
        .min(16, 'There should be more characters')
        .max(16, 'There should be less characters')
        .required('Write please your Number'),
      expiry: Yup.string()
        .min(5, 'There should be more characters')
        .max(5, 'There should be less characters')
        .required('Write please your Expiry'),
      cvc: Yup.string()
        .min(3, 'There should be more characters')
        .max(3, 'There should be less characters')
        .required('Write please your CVC'),
      name: Yup.string()
        .min(1, 'There should be more characters')
        .max(50, 'There should be less characters')
        .required('Write please your Name')
    })
  })

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
              <NavLink to={'/shipping'} className={`${style.container_main_nav_list_item_link} ${style.active}`}>
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
              Payment information
            </p>
            <div className={style.container_main_form_container_inputs}>
              <img src={cardGif}
                   alt='card'
                   className={style.container_main_form_container_inputs_input}
              />
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="number"
                         label="Card number"
                         variant="outlined"
                         type="text"
                         name="number"
                         placeholder="Card number"
                         onChange={formik.handleChange}
                         value={formik.values.number}
                         onBlur={formik.handleBlur}
                         className={style.container_main_form_container_inputs_input}
              />
              {formik.touched.number && formik.errors.number && (
                <p className={style.error}>{formik.errors.number}</p>
              )}
              <img src={cardImg}
                   alt='card'
                   className={style.container_main_form_container_inputs_img}
              />
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="expiry"
                         label="Expiration date (MM / YY)"
                         variant="outlined"
                         type="text"
                         name="expiry"
                         placeholder="Expiration date (MM / YY)"
                         onChange={formik.handleChange}
                         value={formik.values.expiry}
                         onBlur={formik.handleBlur}
                         className={style.container_main_form_container_inputs_input}
              />
              {formik.touched.expiry && formik.errors.expiry && (
                <p className={style.error}>{formik.errors.expiry}</p>
              )}
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="cvc"
                         label="Security code"
                         variant="outlined"
                         type="text"
                         name="cvc"
                         placeholder="Security code"
                         onChange={formik.handleChange}
                         value={formik.values.cvc}
                         onBlur={formik.handleBlur}
                         className={style.container_main_form_container_inputs_input}
              />
              {formik.touched.cvc && formik.errors.cvc && (
                <p className={style.error}>{formik.errors.cvc}</p>
              )}
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="name"
                         label="Name on card"
                         variant="outlined"
                         type="text"
                         name="name"
                         placeholder="Name on card"
                         onChange={formik.handleChange}
                         value={formik.values.name}
                         onBlur={formik.handleBlur}
                         className={style.container_main_form_container_inputs_input}
              />
              {formik.touched.name && formik.errors.name && (
                <p className={style.error}>{formik.errors.name}</p>
              )}
            </div>
            <div className={style.container_main_form_container_button}>
              <NavLink to={'/shipping'}>
                <Button variant="contained">&#8592; Back</Button>
              </NavLink>
              <Button variant='contained' type='submit'>
                Pay now
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PaymentStep3