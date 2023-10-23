import { instance, instanceToken } from '../../components/assets/axiosUrl'
import { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import style from './Login.module.scss'
import { object, string } from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, Navigate } from 'react-router-dom'
import { setToken, setUser } from '../../redux/reducers/SessionReducer/SessionReducer'
import { setWishList } from '../../redux/reducers/WishListReducer/WishListActions'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { userLogIn } from '../../redux/reducers/ProductReducer/ProductReducer'

const loginSchema = object({
  loginOrEmail: string().required('Email is required'),
  password: string().required().min(7, 'Too Short!')
})

const Login = () => {
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
  const inputStyle = theme
    ? 'lightInput'
    : 'darkInput'
  const token = useSelector(state => state.SessionReducer.token)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [err, setErr] = useState(null)
  const [isPasswordShow, setPasswordShow] = useState(false)

  async function fetchWishListItems (token) {
    try {
      const response = await instance.get('/api/wishlist', {
        headers: { Authorization: token }
      })
      if (response.status === 200 && response.data) {
        const wishlist = response.data.products
        localStorage.setItem('wishListItems', JSON.stringify(wishlist) || [])
        localStorage.setItem('wishList', wishlist.length || 0)
        dispatch(setWishList(wishlist))
      }
    } catch (err) {
      if (err.response.status === 500) {
        console.log('error')
        setTimeout(() => {
          fetchWishListItems(token)
        }, 500)
      } else {
        localStorage.setItem('wishListItems', JSON.stringify([]))
        localStorage.setItem('wishList', 0)
        dispatch(setWishList([]))
      }
    }
  }

  async function fetchBasketItems (token) {
    try {
      const response = await instance.get('/api/cart', {
        headers: { Authorization: token }
      })
      if (response.status === 200 && response.data) {
        const basketList = response.data.products.map((product) => ({
          ...product.product,
          countToCart: product.cartQuantity
        }))
        const basketQuantity = response.data.products.reduce((total, product) => { return total + product.cartQuantity }, 0)
        localStorage.setItem('basketList', JSON.stringify(basketList) || [])
        localStorage.setItem('basket', basketQuantity || 0)
        dispatch(userLogIn({
          basketList,
          basketQuantity
        }))
      }
    } catch (err) {
      console.log(err)
      if (err.response.status === 500) {
        setTimeout(() => {
          fetchBasketItems(token)
        }, 500)
      } else {
        localStorage.setItem('basketList', JSON.stringify([]))
        localStorage.setItem('basket', 0)
        dispatch(userLogIn({
          basketList: [],
          basketQuantity: 0
        }))
      }
    }
  }

  const fetchLogin = async (credentional) => {
    setErr(null)
    try {
      const { data } = await instance.post('/api/customers/login', credentional)
      return data
    } catch (e) {
      if (e === 500) {
        return fetchLogin(credentional)
      } else {
        setErr('invalid credentional')
      }
    }
  }
  const getUser = async (token) => {
    const response = await instanceToken.get('/api/customers/customer', {
      headers: { Authorization: token }
    })
    if (response.status === 200) {
      dispatch(setUser(response.data))
      sessionStorage.setItem('user', JSON.stringify(response.data))
    }
  }
  const login = async credentional => {
    const data = await fetchLogin(credentional)
    console.log(data)
    const token = data.token
    sessionStorage.setItem('tokenParts', token)
    dispatch(setToken(token))
    fetchWishListItems(token)
    fetchBasketItems(token)
    getUser(token)
    navigate('/account')
    setErr(null)
  }
  if (token) {
    return <Navigate to="/account"/>
  }
  return (
    <div className={style.Login}>
      <Formik
        initialValues={{
          loginOrEmail: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          login(values)
        }}
      >
        <Form className={style.Login_form}>
          <h2 className={style.Login_form_title}>Sign in</h2>
          <div className={style.Login_form_group}>
            <label htmlFor="loginOrEmail" className={style.Login_form_group_label}>Login or Email</label>
            <Field
              className={`${style.Login_form_group_input} ${inputStyle} ${theme ? '' : style.Login_darkInput}`}
              id="loginOrEmail"
              name="loginOrEmail"
              type="loginOrEmail"
            />
          </div>

          <div className={style.Login_form_group}>
            <label htmlFor="password" className={style.Login_form_group_label}>Password</label>
            {!isPasswordShow &&
              <AiOutlineEyeInvisible onClick={() => setPasswordShow(true)} className={style.Login_form_group_eye}/>}
            {isPasswordShow &&
              <AiOutlineEye onClick={() => setPasswordShow(false)} className={style.Login_form_group_eye}/>}
            <Field
              className={`${style.Login_form_group_input} ${inputStyle} ${theme ? '' : style.Login_darkInput}`}
              id="password"
              type={(isPasswordShow) ? 'text' : 'password'}
              name="password"/>
            {err && <span className={style.Login_form_group_err}>{err}</span>}
          </div>
          <p className={style.Login_form_SignUp}>If you don't have account <NavLink to="/sign_up"
                                                                                    className={style.Login_form_SignUp_text}>Sign
            up</NavLink></p>
          <button type="submit" className={style.Login_form_button}>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login