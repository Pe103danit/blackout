import { instance } from '../../components/assets/axiosUrl'
import { useEffect } from 'react'
import { Formik, Field, Form } from 'formik';
import { login } from '../../redux/reducers/SessionReducer/SessionReducer';
import style from './SignUp.module.scss'
import { object, string, number, date, InferType, ref } from 'yup';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'

const loginSchema = object({
  email: string().email().required(),
  password: string().required('Password is required').min(6, 'Too Short!'),
  confirmPassword: string()
  .oneOf([ref('password'), null], 'Passwords must match')
});

const SignUp = () => {
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
          confirmPassword: '',
        }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          // dispatch(login(values))
          console.log(values);
        }}
      >
        <Form className={style.Login_form}>
          <h2 className={style.Login_form_title}>Sign in</h2>
          <div className={style.Login_form_group}>
            <label htmlFor="email" className={style.Login_form_group_label}>Email</label>
            {/* <Field
              className={style.Login_form_group_input}
              id="email"
              name="email"
              type="email"
            /> */}
            <Field name="email">
             {({
               field, // { name, value, onChange, onBlur }
               form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
               meta,
             }) => (
               <div>
                 <input type="text" {...field} />
                 {meta.touched && meta.error && (
                   <div className="error">{meta.error}</div>
                 )}
               </div>
             )}
           </Field>
          </div>

          <div className={style.Login_form_group}>
            <label htmlFor="password" className={style.Login_form_group_label}>Password</label>
            <Field name="password">
             {({
               field, // { name, value, onChange, onBlur }
               form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
               meta,
             }) => (
               <div>
                 <input type="password" {...field} />
                 {meta.touched && meta.error && (
                   <div className="error">{meta.error}</div>
                 )}
               </div>
             )}
           </Field>
          </div>
          
          <div className={style.Login_form_group}>
            <label htmlFor="confirm-password" className={style.Login_form_group_label}>Confirm Password</label>
            {/* <Field id="confirm-password" type='password' name="confirmPassword" className={style.Login_form_group_input} /> */}
            <Field name="confirmPassword">
             {({
               field, // { name, value, onChange, onBlur }
               form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
               meta,
             }) => (
               <div>
                 <input type="password" {...field} />
                 {meta.touched && meta.error && (
                   <div className="error">{meta.error}</div>
                 )}
               </div>
             )}
           </Field>
          </div>
          <button type="submit" className={style.Login_form_button}>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default SignUp