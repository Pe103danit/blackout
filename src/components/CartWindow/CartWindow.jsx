import { useSelector } from 'react-redux'
import style from '../CartWindow/CartWindow.module.scss'
 const CartWindow = () => {
 const product = useSelector(state => state.ProductReducer?.basketCard)

  return (
<div className={style.win}>
    <h3 className={style.win_text}>PRODUCT WAS ADDED</h3>
 <div className={style.win_con}>
    <img className={style.win_image} src={product?.imageUrls[0]}/>
    <p>{product?.name}</p>
 </div>
 <p className={style.win_price}>${product?.currentPrice}</p>
</div>
  )
}

export default CartWindow