import style from './PaymentStep3..module.scss'
import cardImg from './card.png'
import cardGif from './rccs.gif'
import { NavLink, useNavigate } from 'react-router-dom'
import { MarketIcon } from '../../../components/assets/Icons'
import { Button } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from 'react-query'
import { instance } from '../../../components/assets/axiosUrl'
import { nanoid } from 'nanoid'
import { InputMask } from 'primereact/inputmask'

const PaymentStep3 = (props) => {
  const themeStyle = props.lightTheme
    ? 'lightInformationStep1'
    : 'darkInformationStep1'
  const basketList = props.basketList
  const products = props.products
  const getInfoOrderedProducts = () => {
    return products.filter(product => {
      const matchingBasketItem = basketList.find(basketItem => basketItem.itemNo === product.itemNo)
      if (matchingBasketItem) {
        product.countToCart = matchingBasketItem.countToCart
        return true
      }
      return false
    })
  }
  const orderedProducts = getInfoOrderedProducts()

  const newSubscriber = props.email

  const mutation = useMutation(newOrder => {
    console.log(newOrder, 777);
    return instance.post('api/orders', newOrder)
  },
    {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        console.error(error)
      }
    })

  const mutationSubscribe = useMutation(newSubscriber => {
    return instance.post('api/subscribers', newSubscriber)
  },
    {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        console.error(error)
      }
    })

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      expiry: '',
      cvc: '',
      cardName: '',
    },
    onSubmit: async (values) => {
      await props.setPayment({ ...values })
      const newOrder = {
        products: orderedProducts.map(({ countToCart, ...rest }) => ({
          _id: nanoid(),
          product: { ...rest },
          cartQuantity: countToCart
        })),
        deliveryAddress: {
          country: props.country,
          city: props.city,
          address: props.address,
          postal: props.postcode,
        },
        shipping: props.delivery,
        paymentInfo: 'Credit card',
        status: 'not shipped',
        email: props.email,
        mobile: props.phone,
        firstName: props.firstName,
        lastName: props.lastName,
        apartment: props.apartment,
        cardNumber: values.cardNumber,
        expiry: values.expiry,
        cvc: values.cvc,
        cardName: values.cardName,
        isSubscribed: props.isSubscribed,
        customerId: props.user?._id,
        letterSubject: 'Thank you for order! You are welcome!',
        letterHtml:
          '<!DOCTYPE html>\n' +
          '<html lang=\'en\'>\n' +
          '<head>\n' +
          '    <meta charset=\'UTF-8\'>\n' +
          '    <meta name=\'viewport\' content=\'width=device-width, initial-scale=1.0\'>\n' +
          '    <title>Thanks for Subscribing!</title>\n' +
          '    <style>\n' +
          '        body {\n' +
          '            font-family: Arial, sans-serif;\n' +
          '            text-align: center;\n' +
          '            background-color: #f5f5f5;\n' +
          '            margin: 0;\n' +
          '            padding: 20px;\n' +
          '        }\n' +
          '        .container {\n' +
          '            max-width: 600px;\n' +
          '            margin: 0 auto;\n' +
          '            padding: 20px;\n' +
          '            background-color: #ffffff;\n' +
          '            border-radius: 8px;\n' +
          '            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n' +
          '        }\n' +
          '        h1 {\n' +
          '            color: #333333;\n' +
          '        }\n' +
          '        p {\n' +
          '            color: #666666;\n' +
          '            line-height: 1.6;\n' +
          '        }\n' +
          '    </style>\n' +
          '</head>\n' +
          '<body>\n' +
          '<div class=\'container\'>\n' +
          '    <h1>Your order is placed</h1>\n' +
          '    <p>OrderNo is 023689452.</p>\n' +
          '    <p>If you have any questions or need assistance, feel free to ' +
          '<a href=\'mailto:pe103danit@gmail.com\'>contact us' +
          '</a>.' +
          '</p>\n' +
          '    <img src=\'https://memeburn.com/gearburn/wp-content/uploads/sites/3/2023/07/EcoFlow-River-2.jpg\' ' +
          'alt=\'Black out store\' ' +
          'style=\'max-width: 100%; ' +
          'border-radius: 8px; ' +
          'margin: 20px 0;\'>\n' +
          '    <p>We hope to see you soon!</p>\n' +
          '</div>\n' +
          '</body>\n' +
          '</html>'
      }
      console.log(props.isSubscribed)
      console.log(newOrder)
      const NewSubscriberMail = !props.isSubscribed
        ? null
        : {
          email: newSubscriber,
          letterSubject: 'Black out store subscribing',
          letterHtml: '<!DOCTYPE html>\n' +
            '<html lang=\'en\'>\n' +
            '<head>\n' +
            '    <meta charset=\'UTF-8\'>\n' +
            '    <meta name=\'viewport\' content=\'width=device-width, initial-scale=1.0\'>\n' +
            '    <title>Thanks for Subscribing!</title>\n' +
            '    <style>\n' +
            '        body {\n' +
            '            font-family: Arial, sans-serif;\n' +
            '            text-align: center;\n' +
            '            background-color: #f5f5f5;\n' +
            '            margin: 0;\n' +
            '            padding: 20px;\n' +
            '        }\n' +
            '        .container {\n' +
            '            max-width: 600px;\n' +
            '            margin: 0 auto;\n' +
            '            padding: 20px;\n' +
            '            background-color: #ffffff;\n' +
            '            border-radius: 8px;\n' +
            '            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n' +
            '        }\n' +
            '        h1 {\n' +
            '            color: #333333;\n' +
            '        }\n' +
            '        p {\n' +
            '            color: #666666;\n' +
            '            line-height: 1.6;\n' +
            '        }\n' +
            '    </style>\n' +
            '</head>\n' +
            '<body>\n' +
            '<div class=\'container\'>\n' +
            '    <h1>Thanks for Subscribing!</h1>\n' +
            '    <p>We appreciate your decision to subscribe to our updates. You\'re now part of our community, and you\'ll receive the latest news, offers, and exciting content delivered straight to your inbox.</p>\n' +
            '    <p>If you have any questions or need assistance, feel free to <a href=\'mailto:pe103danit@gmail.com\'>contact us</a>.</p>\n' +
            '    <img src=\'https://sendpulse.com/blog/wp-content/webp-express/webp-images/uploads/2020/02/cover-6-1110x420.png.webp\' alt=\'Black out store\' style=\'max-width: 100%; border-radius: 8px; margin: 20px 0;\'>\n' +
            '    <p>Stay tuned for amazing content!</p>\n' +
            '</div>\n' +
            '</body>\n' +
            '</html>'
        }

      props.successfulOrder()
      mutation.mutate(newOrder)
      mutationSubscribe.mutate(NewSubscriberMail)
      navigate({ pathname: '/success' }, { replace: true })
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .required('Write please your Number'),
      expiry: Yup.string()
        .required('Write please your Expiry'),
      cvc: Yup.string()
        .required('Write please your CVC'),
      cardName: Yup.string()
        .min(1, 'There should be more characters')
        .max(50, 'There should be less characters')
        .required('Write please your Name')
    })
  })

  return (
    <div className={`${style.container} ${themeStyle}`}>
      <div className={style.container_title}>
        <div className={style.container_title_inner}>
          <span><MarketIcon /> Order summary</span>
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
              <NavLink to={'/shipping'} className={`${style.container_main_nav_list_item_link} ${style.active}`}>
                Shipping &gt;
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
            {props.user === ''
              ? (
                <p className={style.container_main_form_login_question}>Have an account?
                  <NavLink to={'/login'} className={style.container_main_form_login_question_link}>
                    Log in
                  </NavLink>
                </p>
              )
              : (<p>{props.user.firstName} {props.user.lastName}</p>)
            }
          </div>
          <div className={style.container_main_form_container}>
            <p className={style.container_main_form_container_title}>
              Payment information
            </p>
            <div className={style.container_main_form_container_inputs}>
              <img src={cardGif}
                alt="card"
                className={style.container_main_form_container_inputs_input}
              />
            </div>
            <div className={style.container_main_form_container_inputs}>
              <InputMask
                mask="9999-9999-9999-9999"
                maskChar=""
                id="cardNumber"
                label="Card number"
                variant="outlined"
                type="text"
                name="cardNumber"
                placeholder="Card number"
                onChange={formik.handleChange}
                value={formik.values.cardNumber}
                onBlur={formik.handleBlur}
                className={style.container_main_form_container_inputs_input}
              />
              {formik.touched.cardNumber && formik.errors.cardNumber && (
                <p className={style.error}>{formik.errors.cardNumber}</p>
              )}
              <img src={cardImg}
                alt="card"
                className={style.container_main_form_container_inputs_img}
              />
            </div>
            <div className={style.container_main_form_container_inputs}>
              <InputMask
                mask="99 / 9999"
                maskChar=""
                id="expiry"
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
              <InputMask
                mask="999"
                maskChar=""
                id="cvc"
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
              <input

                id="cardName"

                type="text"
                name="cardName"
                placeholder="Name on card"
                onChange={formik.handleChange}
                value={formik.values.cardName}
                onBlur={formik.handleBlur}
                className={`${style.container_main_form_container_inputs_input} p-inputtext p-component p-inputmask`}
              />
              {formik.touched.cardName && formik.errors.cardName && (
                <p className={style.error}>{formik.errors.cardName}</p>
              )}
            </div>
            <div className={style.container_main_form_container_button}>
              <NavLink to={'/shipping'}>
                <Button variant="contained">&#8592; Back</Button>
              </NavLink>
              <Button variant="contained" type="submit">
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