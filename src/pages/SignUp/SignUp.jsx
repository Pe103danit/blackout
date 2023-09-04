import { instance } from '../../components/assets/axiosUrl'
import { Formik, Field, Form } from 'formik';
import style from './SignUp.module.scss'
import { object, string, ref } from 'yup';
import { NavLink, useNavigate } from 'react-router-dom'
/*import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducers/SessionReducer/SessionReducer';
*/
const signUpSchema = object({
  email: string().email().required('Email is required'),
  password: string().required('Password is required').min(7, 'Too Short!').matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
  login: string().required('Login required').min(3, 'Too short!').max(10, 'Too long!').matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
  firstName: string().required('First name required').min(2, 'Too short!').max(25, 'Too long!').matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
  lastName: string().required('Last name required').min(2, 'Too short!').max(25, 'Too long!').matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
  confirmPassword: string().oneOf([ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

const SignUp = () => {
  const signUpUser = async (credentional) => {
    await instance.post('/api/customers', credentional)
  }
  console.log(1);
  const navigate = useNavigate()
  return (
    <div className={style.SignUp}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
          login: '',
        }}
        validationSchema={signUpSchema}
        onSubmit={async (value) => {
          const { confirmPassword, ...rest } = value
          signUpUser(rest)
          navigate('/login');
        }}
      >
        <Form className={style.SignUp_form}>
          <h2 className={style.SignUp_form_title}>Sign up</h2>

          <div className={style.SignUp_form_group}>
            <label htmlFor='login' className={style.SignUp_form_group_label}>Login</label>
            <Field name='login'>
              {({
                field,
                form: { touched, errors },
                meta,
              }) => (
                <div>
                  <input type='text' {...field} />
                  {meta.touched && meta.error && (
                    <div className={style.SignUp_form_group_error}>{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
          </div>

          <div className={style.SignUp_form_group}>
            <label htmlFor='first-name' className={style.SignUp_form_group_label}>First name</label>
            <Field name='firstName'>
              {({
                field,
                form: { touched, errors },
                meta,
              }) => (
                <div>
                  <input type='text' {...field} />
                  {meta.touched && meta.error && (
                    <div className={style.SignUp_form_group_error}>{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
          </div>

          <div className={style.SignUp_form_group}>
            <label htmlFor='last-name' className={style.SignUp_form_group_label}>Last name</label>
            <Field name='lastName'>
              {({
                field,
                form: { touched, errors },
                meta,
              }) => (
                <div>
                  <input type='text' {...field} />
                  {meta.touched && meta.error && (
                    <div className={style.SignUp_form_group_error}>{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
          </div>

          <div className={style.SignUp_form_group}>
            <label htmlFor='email' className={style.SignUp_form_group_label}>Email</label>
            <Field name='email'>
              {({
                field,
                form: { touched, errors },
                meta,
              }) => (
                <div>
                  <input type='text' {...field} />
                  {meta.touched && meta.error && (
                    <div className={style.SignUp_form_group_error}>{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
          </div>

          <div className={style.SignUp_form_group}>
            <label htmlFor='password' className={style.SignUp_form_group_label}>Password</label>
            <Field name='password'>
              {({
                field,
                form: { touched, errors },
                meta,
              }) => (
                <div>
                  <input type='password' {...field} />
                  {meta.touched && meta.error && (
                    <div className={style.SignUp_form_group_error}>{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
          </div>

          <div className={style.SignUp_form_group}>
            <label htmlFor='confirm-password' className={style.SignUp_form_group_label}>Confirm Password</label>

            <Field name='confirmPassword'>
              {({
                field,
                form: { touched, errors },
                meta,
              }) => (
                <div>
                  <input type='password' {...field} />
                  {meta.touched && meta.error && (
                    <div className={style.SignUp_form_group_error}>{meta.error}</div>
                  )}
                </div>
              )}
            </Field>
          </div>
          <p className={style.SignUp_form_SignUp}>You already have account <NavLink to='/Login'>Sign in</NavLink> </p>
          <button type='submit' className={style.SignUp_form_button}>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default SignUp