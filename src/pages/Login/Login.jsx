import { instance, instanceToken } from '../../components/assets/axiosUrl'
import { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik';
import style from './Login.module.scss'
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, Navigate } from 'react-router-dom'
import { setToken, setUser } from '../../redux/reducers/SessionReducer/SessionReducer';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
const loginSchema = object({
  loginOrEmail: string().required('Email is required'),
  password: string().required().min(7, 'Too Short!')
});

const Login = () => {
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
  const inputStyle = theme
    ? 'lightInput'
    : 'darkInput'
  const token = useSelector(state => state.SessionReducer.token)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [err, setErr] = useState(null)
  const [isPasswordShow, setPasswordShow] = useState(false)
  const login = async credentional => {
    setErr(null)
    try {
      const { data, error } = await instance.post('/api/customers/login', credentional)
      if (error) {
        throw new Error('invalid credentional')
      }
      const token = data.token;
      sessionStorage.setItem('tokenParts', token);
      dispatch(setToken(token))
      navigate('/account');
    } catch (e) {
      setErr('invalid credentional')
    }
  }

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        const { data } = await instanceToken.get('/api/customers/customer', {
          headers: { Authorization: token }
        });
        if (data !== 'Unauthorized') {
          dispatch(setUser(data))
          sessionStorage.setItem('user', JSON.stringify(data))
        }
      };

      getUser();
    }
  }, [token, dispatch]);

  if (token) {
    return <Navigate to="/account" />;
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
            <label htmlFor='loginOrEmail' className={style.Login_form_group_label}>Email</label>
            <Field
              className={`${style.Login_form_group_input} ${inputStyle} ${theme ? '' : style.Login_darkInput}`}
              id='loginOrEmail'
              name='loginOrEmail'
              type='loginOrEmail'
            />
          </div>

          <div className={style.Login_form_group}>
            <label htmlFor='password' className={style.Login_form_group_label}>Password</label>
            {!isPasswordShow && <AiOutlineEyeInvisible onClick={() => setPasswordShow(true)} className={style.Login_form_group_eye} />}
            {isPasswordShow && <AiOutlineEye onClick={() => setPasswordShow(false)} className={style.Login_form_group_eye} />}
            <Field
              className={`${style.Login_form_group_input} ${inputStyle} ${theme ? '' : style.Login_darkInput}`}
              id='password'
              type={(isPasswordShow) ? 'text' : 'password'}
              name='password' />
            {err && <span className={style.Login_form_group_err}>{err}</span>}
          </div>
          <p className={style.Login_form_SignUp}>If you don't have account <NavLink to='/sign_up' className={style.Login_form_SignUp_text}>Sign up</NavLink> </p>
          <button type='submit' className={style.Login_form_button}>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login