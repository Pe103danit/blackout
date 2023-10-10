import { Formik, Field, Form } from 'formik';
import { instanceToken } from '../../components/assets/axiosUrl'
import style from '../SignUp/SignUp.module.scss'
import { object, string, ref } from 'yup';
import { useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { useSelector } from 'react-redux';
const changePasswordSchema = object({
    password: string().required('Password is required').min(7, 'Too Short!').matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
    confirmPassword: string().oneOf([ref('newPassword'), null], 'Passwords must match').required('Confirm Password is required'),
    newPassword: string().required('Password is required').min(7, 'Too Short!').matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
});

const ForgotPassword = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.SessionReducer.user)
    console.log(user);
    const token = useSelector(state => state.SessionReducer.token)
    console.log(token)
    const theme = useSelector(state => state.UIStateReducer.lightTheme)
    const inputStyle = theme
        ? 'lightInput'
        : 'darkInput'
    const [isPasswordShow, setPasswordShow] = useState(false)
    const [isNewPasswordShow, setNewPasswordShow] = useState(false)
    const [isConfirmPasswordShow, setConfirmPasswordShow] = useState(false)
    const changePassword = async (credentional) => {
        const { data } = await instanceToken.put('/api/customers/password', credentional, { headers: { Authorization: token } })
        return data
    }
    return (
        <Formik
            initialValues={{
                password: '',
                confirmPassword: '',
                newPassword: '',
            }}
            validationSchema={changePasswordSchema}
            onSubmit={async (value) => {
                const { confirmPassword, ...rest } = value
                const data = await changePassword(rest)
                if (data.message === 'Password successfully changed') {
                    navigate('/account');
                }
                console.log(data);
            }}

        >
            <Form className={style.SignUp_form}>
                <div className={style.SignUp_form_group}>
                    <label htmlFor='password' className={style.SignUp_form_group_label}>Old Password</label>
                    {!isPasswordShow && <AiOutlineEyeInvisible onClick={() => setPasswordShow(true)} className={style.SignUp_form_group_eye} />}
                    {isPasswordShow && <AiOutlineEye onClick={() => setPasswordShow(false)} className={style.SignUp_form_group_eye} />}
                    <Field name='password' >
                        {({
                            field,
                            form: { touched, errors },
                            meta,
                        }) => (
                            <div className={style.SignUp_form_group_input_wrapper}>
                                <input type={(isPasswordShow) ? 'text' : 'password'} {...field} className={`${style.SignUp_form_group_input} ${inputStyle} ${theme ? '' : style.SignUp_darkInput}`} />
                                {meta.touched && meta.error && (
                                    <div className={style.SignUp_form_group_error}>{meta.error}</div>
                                )}
                            </div>
                        )}
                    </Field>
                </div>
                <div className={style.SignUp_form_group}>
                    <label htmlFor='newPassword' className={style.SignUp_form_group_label}>Password</label>
                    {!isNewPasswordShow && <AiOutlineEyeInvisible onClick={() => setNewPasswordShow(true)} className={style.SignUp_form_group_eye} />}
                    {isNewPasswordShow && <AiOutlineEye onClick={() => setNewPasswordShow(false)} className={style.SignUp_form_group_eye} />}
                    <Field name='newPassword' >
                        {({
                            field,
                            form: { touched, errors },
                            meta,
                        }) => (
                            <div className={style.SignUp_form_group_input_wrapper}>
                                <input type={(isNewPasswordShow) ? 'text' : 'password'} {...field} className={`${style.SignUp_form_group_input} ${inputStyle} ${theme ? '' : style.SignUp_darkInput}`} />
                                {meta.touched && meta.error && (
                                    <div className={style.SignUp_form_group_error}>{meta.error}</div>
                                )}
                            </div>
                        )}
                    </Field>
                </div>

                <div className={style.SignUp_form_group}>
                    <label htmlFor='confirm-password' className={style.SignUp_form_group_label}>Confirm Password</label>
                    {!isConfirmPasswordShow && <AiOutlineEyeInvisible onClick={() => setConfirmPasswordShow(true)} className={style.SignUp_form_group_eye} />}
                    {isConfirmPasswordShow && <AiOutlineEye onClick={() => setConfirmPasswordShow(false)} className={style.SignUp_form_group_eye} />}
                    <Field name='confirmPassword' >
                        {({
                            field,
                            form: { touched, errors },
                            meta,
                        }) => (
                            <div className={style.SignUp_form_group_input_wrapper}>
                                <input type={(isConfirmPasswordShow) ? 'text' : 'password'} {...field} className={`${style.SignUp_form_group_input} ${inputStyle} ${theme ? '' : style.SignUp_darkInput}`} />
                                {meta.touched && meta.error && (
                                    <div className={style.SignUp_form_group_error}>{meta.error}</div>
                                )}
                            </div>
                        )}
                    </Field>
                </div>
                <button type='submit' className={style.SignUp_form_button}>Submit</button>
            </Form>
        </Formik>
    )
}

export default ForgotPassword