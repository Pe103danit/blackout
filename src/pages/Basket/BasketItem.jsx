import style from './Basket.module.scss'
import { NavLink } from 'react-router-dom'

const BasketItem = ({product, handleRemoveFromBasket}) => {
  return (
    <div key={product.itemNo} className={style.section_container_body_left_product}>
      <div className={style.section_container_body_left_product_checkbox}>
        <input type="checkbox"/>
      </div>
      <NavLink to={'/'} className={style.section_container_body_left_product_photo}>
        <img src={product.imageUrls[0]} alt={product.name} title={product.name}/>
      </NavLink>
      <div className={style.section_container_body_left_product_name}>
        <NavLink to={'/'}>
          <p>{product.name}</p>
          <p>{product.model}</p>
        </NavLink>
      </div>
      <div className={style.section_container_body_left_product_counter}>
        <div className={style.section_container_body_left_product_counter_inner}>
          <button>-</button>
          <input type='text' value={0}/>
          <button>+</button>
        </div>
      </div>
      <div className={style.section_container_body_left_product_price}>
        <p>
          ${product.currentPrice.toFixed(2)}
        </p>
        <button onClick={() => handleRemoveFromBasket(product)}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default BasketItem