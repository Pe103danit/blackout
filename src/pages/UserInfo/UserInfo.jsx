import style from './UserInfo.module.scss'
import { instanceToken } from '../../components/assets/axiosUrl';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/reducers/SessionReducer/SessionReducer';
import { useEffect } from 'react';
import Spinner from '../../components/Spinner/Spinner';
const UserInfo = () => {
    const theme = useSelector(state => state.UIStateReducer.lightTheme)
    const wrapperStyle = theme
        ? 'lightWrapper'
        : 'darkWrapper'
    const dispatch = useDispatch()
    const user = useSelector(state => state.SessionReducer.user)
    const userIsLoading = useSelector(state => state.SessionReducer.userIsLoading)
    const token = useSelector(state => state.SessionReducer.token)
    useEffect(() => {
        if (!user) {
            const getUser = async () => {
                const { data } = await instanceToken.get('/api/customers/customer', {
                  headers: { Authorization: token }
                });
                if (data !== 'Unauthorized') {
                  dispatch(setUser(data))
                }
              };
        
              getUser();
        }
    }, [user, token, dispatch])
    return (
        <>  {userIsLoading && <Spinner />}
            {!userIsLoading &&
                <div className={style.UserInfo}>
                    <div className={`${style.UserInfo_wrapper} ${wrapperStyle} ${theme ? '' : style.UserInfo_darkWrapper}`}>
                        <h3 className={style.UserInfo_wrapper_title}>Information</h3>
                        <p className={style.UserInfo_wrapper_item}>Login: {user?.login} </p>
                        <p className={style.UserInfo_wrapper_item}>Email: {user?.email}</p>
                        <p className={style.UserInfo_wrapper_item}>First name: {user?.firstName}</p>
                        <p className={style.UserInfo_wrapper_item}>Last name: {user?.lastName} </p>
                    </div>
                </div>}
        </>
    )
}

export default UserInfo