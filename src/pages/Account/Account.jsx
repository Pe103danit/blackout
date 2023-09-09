import style from './Account.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query';
import { instance } from '../../components/assets/axiosUrl';
import { useDispatch } from 'react-redux';
const Account = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('tokenParts');
  // // const decodedPayload = JSON.parse(atob(token));
  // console.log(decodedPayload);
  // const firstName = decodedPayload.firstName
  // const lastName = decodedPayload.lastName
  const getUser = async () => {
    const { data } = await instance.get('/api/customers')
    return data
    // if (token) {
    //    dispatch(setUser(credentional.loginOrEmail))
    //  }
  }
  const handleLogout = () => {
    localStorage.removeItem('Signature')
    localStorage.removeItem('Payload')
    localStorage.removeItem('Header')
    localStorage.removeItem('tokenParts')
    navigate('/')
  }
  const { data } = useQuery(['getUser', token], getUser)
  console.log(data);
  return (
    <div className={style.Account}>
      <div className={style.Account_wrapper}>
        <div className={style.Account_wrapper_navigate}>
          <h3 className={style.Account_wrapper_navigate_title}>My Account</h3>
          <p className={style.Account_wrapper_navigate_item} onClick={handleLogout}>Logout</p>
          <NavLink className={style.Account_wrapper_navigate_item} to='/basket'>Cart</NavLink>
          <NavLink className={style.Account_wrapper_navigate_item} to='/wishlist'>Wish list</NavLink>
          <NavLink className={style.Account_wrapper_navigate_item} to='/wish-list'>My orders</NavLink>
        </div>
        <div className={style.Account_wrapper_info}>
          <h3 className={style.Account_wrapper_info_title}>Information</h3>
          <p className={style.Account_wrapper_info_item}>Login: </p>
          <p className={style.Account_wrapper_info_item}>Email:</p>
          <p className={style.Account_wrapper_info_item}>First name: </p>
          <p className={style.Account_wrapper_info_item}>Last name: </p>
        </div>
      </div>
    </div>
  )
}

export default Account