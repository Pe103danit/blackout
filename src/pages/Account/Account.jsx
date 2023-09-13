import style from './Account.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from '../../redux/reducers/SessionReducer/SessionReducer'
import { useEffect } from 'react'
const Account = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem('tokenParts', '')
    dispatch(setToken(null))
    navigate('/')
  }
  return (
    <div className={style.Account}>
      <div className={style.Account_wrapper}>
        <div className={style.Account_wrapper_navigate}>
          <h3 className={style.Account_wrapper_navigate_title}>My Account</h3>
          <p className={style.Account_wrapper_navigate_item} onClick={handleLogout}>Logout</p>
          <NavLink className={style.Account_wrapper_navigate_item} to='/user_info'>Personal information</NavLink>
          <NavLink className={style.Account_wrapper_navigate_item} to='/basket'>Cart</NavLink>
          <NavLink className={style.Account_wrapper_navigate_item} to='/wishlist'>Wish list</NavLink>
          <NavLink className={style.Account_wrapper_navigate_item} to='/user_orders'>My orders</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Account