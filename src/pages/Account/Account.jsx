import style from './Account.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setToken, setUser } from '../../redux/reducers/SessionReducer/SessionReducer'
import { AiOutlineLogin } from 'react-icons/ai'
import { setOrderList } from '../../redux/reducers/OrderListReducer/OrderListReducer'
import { logoutWishList } from '../../redux/reducers/WishListReducer/WishListActions';

const Account = () => {
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
  const accStyle = theme
    ? 'lightWrapper'
    : 'darkWrapper'
  const navStyle = theme
    ? 'lightNav'
    : 'darkNav'
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.setItem('tokenParts', '')
    sessionStorage.setItem('user', JSON.stringify({}))
    dispatch(setToken(null))
    dispatch(setUser(null))
    dispatch(setOrderList(null))
    dispatch(logoutWishList());
    localStorage.setItem('wishListItems', JSON.stringify([]))
    localStorage.setItem('wishList', 0)
    navigate('/')
  }
  return (
    <div className={`${style.Account} ${accStyle}`}>
      <div className={`${style.Account_wrapper} ${accStyle} ${theme ? '' : style.Account_bg}`}>
        <div className={style.Account_wrapper_navigate}>
          <h3 className={style.Account_wrapper_navigate_title}>My Account</h3>
          <NavLink className={`${style.Account_wrapper_navigate_item} ${navStyle} ${theme ? '' : style.Account_darkitem}`} to='/user_info'>Personal information <AiOutlineLogin className={style.Account_wrapper_navigate_item_icon} /></NavLink>
          <NavLink className={`${style.Account_wrapper_navigate_item} ${navStyle} ${theme ? '' : style.Account_darkitem}`} to='/basket'>Cart <AiOutlineLogin className={style.Account_wrapper_navigate_item_icon} /></NavLink>
          <NavLink className={`${style.Account_wrapper_navigate_item} ${navStyle} ${theme ? '' : style.Account_darkitem}`} to='/wishlist'>Wish list <AiOutlineLogin className={style.Account_wrapper_navigate_item_icon} /></NavLink>
          <NavLink className={`${style.Account_wrapper_navigate_item} ${navStyle} ${theme ? '' : style.Account_darkitem}`} to='/user_orders'>My orders <AiOutlineLogin className={style.Account_wrapper_navigate_item_icon} /></NavLink>
          <p className={`${style.Account_wrapper_navigate_item} ${navStyle} ${theme ? '' : style.Account_darkitem}`} onClick={handleLogout}>Logout <AiOutlineLogin className={style.Account_wrapper_navigate_item_icon} /></p>
        </div>
      </div>
    </div>
  )
}

export default Account
