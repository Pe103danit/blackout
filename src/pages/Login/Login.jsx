import { instance } from '../../components/assets/axiosUrl'
import { useEffect } from 'react'
import { Formik, Field, Form } from 'formik';
import { login } from '../../redux/reducers/SessionReducer/SessionReducer';
import style from './Login.module.scss'
import { object, string, number, date, InferType } from 'yup';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'

const loginSchema = object({
  email: string().email().required(),
  password: string().required().min(6, 'Too Short!')
});

const Login = () => {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   instance.get('/api/products').then(res => {
  //     // console.log(res.data)
  //   })
  // }, [])

  return (
    <div className={style.Login}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          dispatch(login(values))
        }}
      >
        <Form className={style.Login_form}>
          <h2 className={style.Login_form_title}>Sign in</h2>
          <div className={style.Login_form_group}>
            <label htmlFor="email" className={style.Login_form_group_label}>Email</label>
            <Field
              className={style.Login_form_group_input}
              id="email"
              name="email"
              type="email"
            />
          </div>

          <div className={style.Login_form_group}>
            <label htmlFor="password" className={style.Login_form_group_label}>Password</label>
            <Field id="password" type='password' name="password" className={style.Login_form_group_input} />
          </div>
          <p className={style.Login_form_SignUp}>If you dont have an account <NavLink to='/sign_up'>Sign up</NavLink> </p>
          <button type="submit" className={style.Login_form_button}>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login