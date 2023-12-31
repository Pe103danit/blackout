import { Formik, Field, Form } from 'formik';
import { instanceToken } from '../../components/assets/axiosUrl'
import style from './ForgotPassword.module.scss'
import { object, string, ref } from 'yup';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { useSelector } from 'react-redux';

const changePasswordSchema = object({
    password: string().required('Password is required').min(7, 'Too Short!').matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
    confirmPassword: string().oneOf([ref('newPassword'), null], 'Passwords must match').required('Confirm Password is required'),
    newPassword: string().required('Password is required').min(7, 'Too Short!').matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
});

const ForgotPassword = () => {
    const navigate = useNavigate()
    const token = useSelector(state => state.SessionReducer.token)
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
        <div className={style.ForgotPassword}>
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
                }}

            >
                <Form className={style.ForgotPassword_form}>
                    <h2 className={style.ForgotPassword_form_title}>Change Password</h2>
                    <div className={style.ForgotPassword_form_group}>
                        <label htmlFor='password' className={style.ForgotPassword_form_group_label}>Old Password</label>
                        {!isPasswordShow && <AiOutlineEyeInvisible onClick={() => setPasswordShow(true)} className={style.ForgotPassword_form_group_eye} />}
                        {isPasswordShow && <AiOutlineEye onClick={() => setPasswordShow(false)} className={style.ForgotPassword_form_group_eye} />}
                        <Field name='password' >
                            {({
                                field,
                                form: { touched, errors },
                                meta,
                            }) => (
                                <div className={style.ForgotPassword_form_group_input_wrapper}>
                                    <input type={(isPasswordShow) ? 'text' : 'password'} {...field} className={`${style.ForgotPassword_form_group_input} ${inputStyle} ${theme ? '' : style.ForgotPassword_darkInput}`} />
                                    {meta.touched && meta.error && (
                                        <div className={style.ForgotPassword_form_group_error}>{meta.error}</div>
                                    )}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className={style.ForgotPassword_form_group}>
                        <label htmlFor='newPassword' className={style.ForgotPassword_form_group_label}>Password</label>
                        {!isNewPasswordShow && <AiOutlineEyeInvisible onClick={() => setNewPasswordShow(true)} className={style.ForgotPassword_form_group_eye} />}
                        {isNewPasswordShow && <AiOutlineEye onClick={() => setNewPasswordShow(false)} className={style.ForgotPassword_form_group_eye} />}
                        <Field name='newPassword' >
                            {({
                                field,
                                form: { touched, errors },
                                meta,
                            }) => (
                                <div className={style.ForgotPassword_form_group_input_wrapper}>
                                    <input type={(isNewPasswordShow) ? 'text' : 'password'} {...field} className={`${style.ForgotPassword_form_group_input} ${inputStyle} ${theme ? '' : style.ForgotPassword_darkInput}`} />
                                    {meta.touched && meta.error && (
                                        <div className={style.ForgotPassword_form_group_error}>{meta.error}</div>
                                    )}
                                </div>
                            )}
                        </Field>
                    </div>

                    <div className={style.ForgotPassword_form_group}>
                        <label htmlFor='confirm-password' className={style.ForgotPassword_form_group_label}>Confirm Password</label>
                        {!isConfirmPasswordShow && <AiOutlineEyeInvisible onClick={() => setConfirmPasswordShow(true)} className={style.ForgotPassword_form_group_eye} />}
                        {isConfirmPasswordShow && <AiOutlineEye onClick={() => setConfirmPasswordShow(false)} className={style.ForgotPassword_form_group_eye} />}
                        <Field name='confirmPassword' >
                            {({
                                field,
                                form: { touched, errors },
                                meta,
                            }) => (
                                <div className={style.ForgotPassword_form_group_input_wrapper}>
                                    <input type={(isConfirmPasswordShow) ? 'text' : 'password'} {...field} className={`${style.ForgotPassword_form_group_input} ${inputStyle} ${theme ? '' : style.ForgotPassword_darkInput}`} />
                                    {meta.touched && meta.error && (
                                        <div className={style.ForgotPassword_form_group_error}>{meta.error}</div>
                                    )}
                                </div>
                            )}
                        </Field>
                    </div>
                    <button type='submit' className={style.ForgotPassword_form_button}>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default ForgotPassword