import { useSelector } from 'react-redux'
import { makeShortText } from '../assets/makeShortText'
import style from '../CartWindow/CartWindow.module.scss'
const CartWindow = () => {
  const product = useSelector(state => state.ProductReducer?.basketCard)
  const img = product?.imageUrls[0].replace('/upload/', '/upload/w_90/')
  return (
    <div className={style.win} >
      <h3 className={style.win_text}>PRODUCT WAS ADDED</h3>
      <img className={style.win_image} src={img} alt={product?.name} title={product?.name}/>
      <p>{(product?.name.length > 30)
        ? makeShortText(product?.name)
        : product?.name}</p>
      <p className={style.win_price}>${product?.currentPrice}</p>
    </div>
  )
}

export default CartWindow