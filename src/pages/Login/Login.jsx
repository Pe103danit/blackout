import { instance } from '../../components/assets/axiosUrl'
import { useEffect } from 'react'
import { Formik, Field, Form } from 'formik';
import { login } from '../../redux/reducers/SessionReducer/SessionReducer';
import style from './Login.module.scss'
import { object, string, number, date, InferType } from 'yup';
import { useDispatch } from 'react-redux';

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
      <h2 className={style.Login_title}>Login</h2>
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
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />

          <label htmlFor="password">Password</label>
          <Field id="password" type='password' name="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login