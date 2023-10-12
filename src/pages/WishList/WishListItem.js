import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import style from './WishList.module.scss'

const WishListItem = ({ product, onWishList }) => {
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
<<<<<<< HEAD
  const dispatch = useDispatch()

  const handleRemoveFromWishlist = () => {
    console.log('handleRemoveFromWishlist item', product);
    dispatch(removeFromWishList(product))
    onWishList(product)
  }

  const img = product.imageUrl.replace('/upload/', '/upload/w_100/')
=======

  const img = product.imageUrls[0].replace('/upload/', '/upload/w_100/')
>>>>>>> master

  return (
    <div className={style.wishListItem}>
      <NavLink to={`/products/${product.itemNo}`} className={style.wishListItem__image}>
        <img src={img} alt={product.name} title={product.name} />
      </NavLink>
      <div className={style.wishListItem__description}>
        <NavLink to={`/products/${product.itemNo}`} className={style.wishListItem__description__link}>
          <p
            className={`${style.wishListItem__description__link_type} ${theme ? '' : style.wishListItem__description__link_type__darkTheme}`}>{product.name}</p>
          <p
            className={`${style.wishListItem__description__link_model} ${theme ? '' : style.wishListItem__description__link_model__darkTheme}`}>{product.model}</p>
        </NavLink>
      </div>
      <div className={style.wishListItem__leftBlock}>
        <p className={style.wishListItem__leftBlock__price}>
          ${product.currentPrice}
        </p>
<<<<<<< HEAD
        <button onClick={handleRemoveFromWishlist}
          className={`${style.wishListItem__leftBlock__btn} ${theme ? '' : style.wishListItem__leftBlock__btn__darkTheme}`}>
=======
        <button onClick={onWishList}
                className={`${style.wishListItem__leftBlock__btn} ${theme ? '' : style.wishListItem__leftBlock__btn__darkTheme}`}>
>>>>>>> master
          Remove
        </button>
      </div>
    </div>
  )
}
export default WishListItem