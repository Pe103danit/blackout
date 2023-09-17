import style from './Account.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from '../../redux/reducers/SessionReducer/SessionReducer'
import { AiOutlineLogin } from 'react-icons/ai'
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
          <NavLink className={style.Account_wrapper_navigate_item} to='/user_info'>Personal information <AiOutlineLogin className={style.Account_wrapper_navigate_item_icon} /></NavLink>
          <NavLink className={style.Account_wrapper_navigate_item} to='/basket'>Cart <AiOutlineLogin className={style.Account_wrapper_navigate_item_icon} /></NavLink>
          <NavLink className={style.Account_wrapper_navigate_item} to='/wishlist'>Wish list <AiOutlineLogin className={style.Account_wrapper_navigate_item_icon} /></NavLink>
          <NavLink className={style.Account_wrapper_navigate_item} to='/user_orders'>My orders <AiOutlineLogin className={style.Account_wrapper_navigate_item_icon} /></NavLink>
          <p className={style.Account_wrapper_navigate_item} onClick={handleLogout}>Logout <AiOutlineLogin className={style.Account_wrapper_navigate_item_icon} /></p>
        </div>
      </div>
    </div>
  )
}

export default Account
