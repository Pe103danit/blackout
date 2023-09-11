import style from './UserInfo.module.scss'
import { useQuery } from 'react-query';
import { instanceToken } from '../../components/assets/axiosUrl';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/reducers/SessionReducer/SessionReducer';
import { useEffect } from 'react';
const UserInfo = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.SessionReducer.user)
    console.log(user)
    const token = localStorage.getItem('tokenParts');
    const getUser = async () => {
        const { data } = await instanceToken.get('/api/customers/customer')
        return data
    }
    const { data } = useQuery(['getUser', { headers: { Authorization: token } }], getUser)
    useEffect(() => {
        if (data) {
            dispatch(setUser(data))
        }
    }, [data, dispatch])
    return (
        <div className={style.UserInfo}>
            <div className={style.UserInfo_wrapper}>
                <h3 className={style.UserInfo_wrapper_title}>Information</h3>
                <p className={style.UserInfo_wrapper_item}>Nickname: {user?.login} </p>
                <p className={style.UserInfo_wrapper_item}>Email: {user?.email}</p>
                <p className={style.UserInfo_wrapper_item}>First name: {user?.firstName}</p>
                <p className={style.UserInfo_wrapper_item}>Last name: {user?.lastName} </p>
            </div>
        </div>

    )
}

export default UserInfo