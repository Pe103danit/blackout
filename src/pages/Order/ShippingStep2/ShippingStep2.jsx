import style from './ShippingStep2.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { MarketIcon } from '../../../components/assets/Icons'
import {
  Button,
  TextField
} from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ShippingStep2 = (props) => {
  const themeStyle = props.lightTheme
    ? 'lightInformationStep1'
    : 'darkInformationStep1'

  const delivery = props.totalBasketSum >= 500
    ? 'Free'
    : '10$'

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      address: '',
      apartment: '',
      city: '',
      postcode: '',
    },
    onSubmit: values => {
      props.setShipping({...values, delivery})
      navigate({ pathname: '/finish_order' }, { replace: true })
    },
    validationSchema: Yup.object({
      address: Yup.string()
        .min(1, 'There should be more characters')
        .max(50, 'There should be less characters')
        .required('Write please your Address'),
      apartment: Yup.string()
        .notRequired(),
      city: Yup.string()
        .min(1, 'There should be more characters')
        .max(50, 'There should be less characters')
        .required('Write please your City'),
      postcode: Yup.string()
        .min(1, 'There should be more characters')
        .max(50, 'There should be less characters')
        .required('Write please your Postcode')
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
                Cart &gt;
              </NavLink>
            </li>
            <li className={style.container_main_nav_list_item}>
              <NavLink to={'/information'} className={`${style.container_main_nav_list_item_link} ${style.active}`}>
                Information &gt;
              </NavLink>
            </li>
            <li className={style.container_main_nav_list_item}>
              <p className={style.container_main_nav_list_item_link}>
                Shipping &gt;
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
            {props.user === null
              ? (
                <p className={style.container_main_form_login_question}>Have an account?&nbsp;
                  <NavLink to={'/login'} className={style.container_main_form_login_question_link}>
                    Log in
                  </NavLink>
                </p>
              )
              : (<p>{props.user?.firstName} {props.user?.lastName}</p>)
            }
          </div>
          <div className={style.container_main_form_container}>
            <p className={style.container_main_form_container_title}>
              Shipping information
            </p>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="shippingMethod"
                         variant="outlined"
                         type="text"
                         name="shippingMethod"
                         placeholder="Shipping method"
                         value={`Standard shipping - ${delivery}`}
                         className={`${style.container_main_form_container_inputs_input} ${style.fixedInput}`}
              />
            </div>
            <div className={style.container_main_form_container_inputs}>
                <TextField id="address"
                           label="Address"
                           variant="outlined"
                           type="text"
                           name="address"
                           placeholder="Address"
                           onChange={formik.handleChange}
                           value={formik.values.address}
                           onBlur={formik.handleBlur}
                           className={style.container_main_form_container_inputs_input}
                />
              {formik.touched.address && formik.errors.address && (
                <p className={style.error}>{formik.errors.address}</p>
              )}
              </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="apartment"
                         label="Apartment, suite etc. (optional)"
                         variant="outlined"
                         type="text"
                         name="apartment"
                         placeholder="Apartment, suite etc. (optional)"
                         onChange={formik.handleChange}
                         value={formik.values.apartment}
                         onBlur={formik.handleBlur}
                         className={style.container_main_form_container_inputs_input}
              />
              {formik.touched.apartment && formik.errors.apartment && (
                <p className={style.error}>{formik.errors.apartment}</p>
              )}
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="city"
                         label="City"
                         variant="outlined"
                         type="text"
                         name="city"
                         placeholder="City"
                         onChange={formik.handleChange}
                         value={formik.values.city}
                         onBlur={formik.handleBlur}
                         className={style.container_main_form_container_inputs_input}
              />
              {formik.touched.city && formik.errors.city && (
                <p className={style.error}>{formik.errors.city}</p>
              )}
            </div>
            <div className={style.container_main_form_container_inputs}>
              <TextField id="postcode"
                         label="Postcode"
                         variant="outlined"
                         type="text"
                         name="postcode"
                         placeholder="Postcode"
                         onChange={formik.handleChange}
                         value={formik.values.postcode}
                         onBlur={formik.handleBlur}
                         className={style.container_main_form_container_inputs_input}
              />
              {formik.touched.postcode && formik.errors.postcode && (
                <p className={style.error}>{formik.errors.postcode}</p>
              )}
            </div>
            <div className={style.container_main_form_container_button}>
              <NavLink to={'/information'}>
                <Button variant="contained">&#8592; Back</Button>
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

export default ShippingStep2