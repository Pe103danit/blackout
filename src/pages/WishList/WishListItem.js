// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeFromWishList } from '../../redux/reducers/WishListReducer/WishListActions'

import style from './WishList.module.scss';

const WishListItem = ({ product, onWishList }) => {
    console.log(product);
    const dispatch = useDispatch()

    const handleRemoveFromWishlist = () => {
        dispatch(removeFromWishList(product.itemNo));
        onWishList(product.itemNo);
    }

    return (
        <div className={style.wishListItem}>
            <NavLink to={`/products/${product.itemNo}`} className={style.wishListItem__image}>
                <img src={product.imageUrls[0]} alt={product.name} title={product.name} />
            </NavLink>
            <div className={style.wishListItem__description}>
                <NavLink to={`/products/${product.itemNo}`} className={style.wishListItem__description__link}>
                    <p className={style.wishListItem__description__link_type}>{product.name}</p>
                    <p className={style.wishListItem__description__link_model}>{product.model}</p>
                </NavLink>
            </div>
            <div className={style.wishListItem__leftBlock}>
                <p className={style.wishListItem__leftBlock__price}>
                    ${product.currentPrice}
                </p>
                <button onClick={handleRemoveFromWishlist} className={style.wishListItem__leftBlock__btn}>
                    Remove
                </button>
            </div>
        </div>
    )
}
export default WishListItem