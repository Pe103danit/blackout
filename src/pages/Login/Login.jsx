import { instance } from '../../components/assets/axiosUrl'
import { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import style from './Login.module.scss'
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { setUser } from '../../redux/reducers/SessionReducer/SessionReducer';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
const loginSchema = object({
  loginOrEmail: string().required('Email is required'),
  password: string().required().min(7, 'Too Short!')
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
  const themeStyle = theme
    ? 'lightLogin'
    : 'darkLogin'
  const [isPasswordShow, setPasswordShow] = useState(false)
  const login = async credentional => {
    const { data } = await instance.post('/api/customers/login', credentional)
    const token = data.token;
    const tokenParts = token.split('.');
    const [header, payload, signature] = tokenParts;
    localStorage.setItem('Signature', signature);
    localStorage.setItem('Header', header);
    localStorage.setItem('Payload', payload);
    localStorage.setItem('tokenParts', tokenParts);
    if (token) {
      dispatch(setUser(credentional.loginOrEmail))
    }
    navigate('/account');
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
              id='loginOrEmail'
              name='loginOrEmail'
              type='loginOrEmail'
            />
          </div>

          <div className={style.Login_form_group}>
            <label htmlFor='password' className={style.Login_form_group_label}>Password</label>
            {!isPasswordShow && <AiOutlineEyeInvisible onClick={() => setPasswordShow(true)} className={style.Login_form_group_eye} />}
            {isPasswordShow && <AiOutlineEye onClick={() => setPasswordShow(false)} className={style.Login_form_group_eye} />}
            <Field id='password' type={(isPasswordShow) ? 'text' : 'password'} name='password' />
          </div>
          <p className={style.Login_form_SignUp}>If you don't have account <NavLink to='/sign_up'>Sign up</NavLink> </p>
          <button type='submit' className={style.Login_form_button}>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login