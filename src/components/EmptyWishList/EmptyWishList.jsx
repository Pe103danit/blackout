import EmptyWishListImg from './dummy.png'
import style from './EmptyWishList.module.scss'
import { NavLink } from 'react-router-dom'

const EmptyWishList = (props) => {
  const themeStyle = props.lightTheme
    ? 'lightEmptyBasketStyle'
    : 'darkEmptyBasketStyle'
  return (
    <div className={`${style.section} ${themeStyle}`}>
      <div className={style.section_container}>
        {/* <p className={style.section_container_title}>
          Wishlist
        </p> */}
        <div>
          <img src={EmptyWishListImg} alt="EmptyWishlist"/>
        </div>
        <p className={style.section_container_body}>
          Your wishlist is empty
        </p>
        <NavLink to={'/shop'} className={style.section_container_link}>
          <button>
            CONTINUE SHOPPING
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default EmptyWishList