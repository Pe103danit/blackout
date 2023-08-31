import { EmptyBasketIcon } from '../assets/Icons'
import style from './EmptyBasket.module.scss'
import { NavLink } from 'react-router-dom'

const EmptyBasket = (props) => {
  const themeStyle = props.lightTheme
    ? 'lightEmptyBasketStyle'
    : 'darkEmptyBasketStyle'
  return (
    <div className={`${style.section} ${themeStyle}`}>
      <div className={style.section_container}>
        <p className={style.section_container_title}>
          Shopping Cart
        </p>
        <div>
          <EmptyBasketIcon/>
        </div>
        <p className={style.section_container_body}>
          Your shopping cart is empty
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

export default EmptyBasket