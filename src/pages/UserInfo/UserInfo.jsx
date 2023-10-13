import style from './UserInfo.module.scss'
import { Formik, Field, Form } from 'formik';
import { instanceToken } from '../../components/assets/axiosUrl';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/reducers/SessionReducer/SessionReducer';
import { useEffect, useState } from 'react';
import { object, string } from 'yup';
import Spinner from '../../components/Spinner/Spinner';
import { NavLink } from 'react-router-dom'
const signUpSchema = object({
    email: string().email().required('Email is required'),
    login: string().required('Login required').min(3, 'Too short!').max(10, 'Too long!').matches(/[A-Z]/, 'Login must contain at least one uppercase letter').matches(/^[a-zA-Z0-9]+$/, 'Allowed characters for login is a-z, A-Z, 0-9.'),
    firstName: string().required('First name required').min(2, 'Too short!').max(25, 'Too long!').matches(/[A-Z]/, 'First name must contain at least one uppercase letter'),
    lastName: string().required('Last name required').min(2, 'Too short!').max(25, 'Too long!').matches(/[A-Z]/, 'Last name must contain at least one uppercase letter'),
});
const UserInfo = () => {
    const [isEdit, setIsEdit] = useState(false)
    const theme = useSelector(state => state.UIStateReducer.lightTheme)
    const wrapperStyle = theme
        ? 'lightWrapper'
        : 'darkWrapper'
    const inputStyle = theme
        ? 'lightInput'
        : 'darkInput'
    const upDateUser = async (credentional) => {
        const { data } = await instanceToken.put('/api/customers', credentional, { headers: { Authorization: token } })
        console.log(data)
    }
    const dispatch = useDispatch()
    const user = useSelector(state => state.SessionReducer.user)
    console.log(user);
    const userIsLoading = useSelector(state => state.SessionReducer.userIsLoading)
    const token = useSelector(state => state.SessionReducer.token)
    const getUser = async () => {
        const { data } = await instanceToken.get('/api/customers/customer', {
            headers: { Authorization: token }
        });
        if (data !== 'Unauthorized') {
            dispatch(setUser(data))
        }
    };
    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, [user, token, dispatch])
    return (
        <>  {userIsLoading && <Spinner />}
            {!userIsLoading &&
                <div className={style.UserInfo}>
                    <div className={`${style.UserInfo_wrapper} ${wrapperStyle} ${theme ? '' : style.UserInfo_darkWrapper}`}>
                        <h3 className={style.UserInfo_wrapper_title}>Information</h3>
                        {!isEdit && <>
                            <p className={style.UserInfo_wrapper_item}>Login: {user?.login} </p>
                            <p className={style.UserInfo_wrapper_item}>Email: {user?.email}</p>
                            <p className={style.UserInfo_wrapper_item}>First name: {user?.firstName}</p>
                            <p className={style.UserInfo_wrapper_item}>Last name: {user?.lastName} </p>
                            <p className={style.UserInfo_wrapper_item}>Change your password<NavLink className={style.UserInfo_wrapper_item_nav} to='/forgot_password'>Click here</NavLink></p>
                            <button className={style.UserInfo_wrapper_button} onClick={() => setIsEdit(true)}>Edit information</button>
                        </>}
                        {isEdit && <>
                            <div className={style.UserInfo_edit}>
                                <Formik
                                    initialValues={{
                                        email: `${user?.email}`,
                                        firstName: `${user?.firstName}`,
                                        lastName: `${user?.lastName}`,
                                        login: `${user?.login}`,
                                    }}
                                    validationSchema={signUpSchema}
                                    onSubmit={async (value) => {
                                        const { confirmPassword, ...rest } = value
                                        upDateUser(rest)
                                        getUser();
                                        setIsEdit(false)
                                    }}
                                >
                                    <Form className={style.UserInfo_edit_form}>

                                        <div className={style.UserInfo_edit_form_group}>
                                            <label htmlFor='login' className={style.UserInfo_edit_form_group_label}>Login</label>
                                            <Field name='login'>
                                                {({
                                                    field,
                                                    form: { touched, errors },
                                                    meta,
                                                }) => (
                                                    <div className={style.UserInfo_edit_form_group_input_wrapper}>
                                                        <input type='text' {...field} className={`${style.UserInfo_edit_form_group_input} ${inputStyle} ${theme ? '' : style.UserInfo_edit_darkInput}`} />
                                                        {meta.touched && meta.error && (
                                                            <div className={style.UserInfo_edit_form_group_error}>{meta.error}</div>
                                                        )}
                                                    </div>
                                                )}
                                            </Field>
                                        </div>
                                        <div className={style.UserInfo_edit_form_group}>
                                            <label htmlFor='email' className={style.UserInfo_edit_form_group_label}>Email</label>
                                            <Field name='email' >
                                                {({
                                                    field,
                                                    form: { touched, errors },
                                                    meta,
                                                }) => (
                                                    <div className={style.UserInfo_edit_form_group_input_wrapper}>
                                                        <input type='text' {...field} className={`${style.UserInfo_edit_form_group_input} ${inputStyle} ${theme ? '' : style.UserInfo_edit_darkInput}`} />
                                                        {meta.touched && meta.error && (
                                                            <div className={style.UserInfo_edit_form_group_error}>{meta.error}</div>
                                                        )}
                                                    </div>
                                                )}
                                            </Field>
                                        </div>
                                        <div className={style.UserInfo_edit_form_group}>
                                            <label htmlFor='first-name' className={style.UserInfo_edit_form_group_label}>First name</label>
                                            <Field name='firstName' >
                                                {({
                                                    field,
                                                    form: { touched, errors },
                                                    meta,
                                                }) => (
                                                    <div className={style.UserInfo_edit_form_group_input_wrapper}>
                                                        <input type='text' {...field} className={`${style.UserInfo_edit_form_group_input} ${inputStyle} ${theme ? '' : style.UserInfo_edit_darkInput}`} />
                                                        {meta.touched && meta.error && (
                                                            <div className={style.UserInfo_edit_form_group_error}>{meta.error}</div>
                                                        )}
                                                    </div>
                                                )}
                                            </Field>
                                        </div>

                                        <div className={style.UserInfo_edit_form_group}>
                                            <label htmlFor='last-name' className={style.UserInfo_edit_form_group_label}>Last name</label>
                                            <Field name='lastName' >
                                                {({
                                                    field,
                                                    form: { touched, errors },
                                                    meta,
                                                }) => (
                                                    <div className={style.UserInfo_edit_form_group_input_wrapper}>
                                                        <input type='text' {...field} className={`${style.UserInfo_edit_form_group_input} ${inputStyle} ${theme ? '' : style.UserInfo_edit_darkInput}`} />
                                                        {meta.touched && meta.error && (
                                                            <div className={style.UserInfo_edit_form_group_error}>{meta.error}</div>
                                                        )}
                                                    </div>
                                                )}
                                            </Field>
                                        </div>
                                        <button type='submit' className={style.UserInfo_edit_form_button}>Save</button>
                                    </Form>
                                </Formik>
                            </div></>}
                    </div>
                </div>}
        </>
    )
}

export default UserInfo