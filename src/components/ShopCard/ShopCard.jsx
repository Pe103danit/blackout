import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { MarketIcon, MarketIconDark, HeartIconCard, HeartIconCardFill } from '../assets/Icons';

import style from './ShopCard.module.scss';
import { addToBasket, updateBasket } from '../../redux/reducers/ProductReducer/ProductReducer'

const ShopCard = (props) => {
    const theme = useSelector(state => state.UIStateReducer.lightTheme);

    const [wishListHeard, setWishListHeard] = useState(JSON.parse(window.localStorage.getItem('wishListItems')).includes(props.productItem.itemNo))

    const WishItemStatus = () => {
        setWishListHeard(prevWishListHeard => !prevWishListHeard);
        props.onWishList(props.productItem.itemNo);
    }

    const dispatch = useDispatch()
    const [product] = useState([])
    const [countToCart] = useState(1)

    const handleClick = () => {
        window.scrollTo(0, 0)
        dispatch(addToBasket(product?.itemNo, countToCart))
        let storageBasket = JSON.parse(localStorage.getItem('basketList'))
        let repeat = false
        storageBasket = storageBasket.map(item => {
            if (item.itemNo === product?.itemNo) {
                repeat = true
                return ({
                    itemNo: product?.itemNo,
                    countToCart: item.countToCart + countToCart
                })
            } else {
                return item
            }
        })
        if (!repeat) {
            storageBasket.push(
              {
                  itemNo: product?.itemNo,
                  countToCart
              }
            )
        }
        localStorage.setItem('basketList', JSON.stringify([
              ...storageBasket
          ])
        )
        const countBasket = parseInt(localStorage.getItem('basket'))
        localStorage.setItem('basket', `${countBasket + countToCart}`)
        dispatch(updateBasket(storageBasket))
    }

    return (
        <div className={`${style.shopCard} ${theme ? '' : style.shopCard__darkTheme}`}>
            <Link to={`/products/${props.productItem.itemNo}`}>
                <div className={style.shopCard__imgBlock}>
                    <img className={style.shopCard__imgBlock__img1} src={props.productItem.imageUrls[0]} alt={props.productItem.title} />
                    <img className={style.shopCard__imgBlock__img2} src={props.productItem.imageUrls[1]} alt={props.productItem.title} />
                </div>
            </Link>
            <div className={style.shopCard__description}>
                <h3 className={`${style.shopCard__description__name} ${theme ? '' : style.shopCard__description__name__darkTheme}`}>{props.productItem.name}</h3>
                <h3 className={`${style.shopCard__description__categories} ${theme ? '' : style.shopCard__description__categories__darkTheme}`}>{props.productItem.categories}</h3>
                <p className={`${style.shopCard__description__model} ${theme ? '' : style.shopCard__description__model__darkTheme}`}>{props.productItem.model}</p>
                <Link to={`/products/${props.productItem.itemNo}`}>
                    <div className={style.shopCard__description__order}>
                        <h5 className={`${style.shopCard__description__order__price} ${theme ? '' : style.shopCard__description__order__price__darkTheme}`}>${props.productItem.currentPrice} USD</h5>
                        <button className={style.shopCard__description__order__btn}>SHOP NOW</button>
                    </div>
                </Link>
                <button className={`${style.shopCard__description__order__wishList} ${theme
                        ? style['shopCard__description__order__wishList--backgroundWhite']
                        : style['shopCard__description__order__wishList--backgroundBlack']
                    }`} onClick={() => WishItemStatus()}>
                    {wishListHeard
                        ? <HeartIconCardFill />
                        : <HeartIconCard />
                    }
                </button>
                <button className={style.shopCard__description__order__cart} onClick={handleClick}>
                    {theme
                        ? <MarketIcon fill={'#4164EC'} />
                        : <MarketIconDark />
                    }
                </button>
            </div>
        </div>
    )
}
export default ShopCard