import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { HeartIcon, HeartIconDark } from '../../components/assets/Icons';

import style from './ShopCard.module.scss';

const ShopCard = (props) => {
    const theme = useSelector(state => state.UIStateReducer.lightTheme);

    return (
        <Link to={`/products/${props.productItem.itemNo}`}>
            <div className={`${style.shopCard} ${theme ? '' : style.shopCard__darkTheme}`}>
                <div className={style.shopCard__imgBlock}>
                    <img className={style.shopCard__imgBlock__img1} src={props.productItem.imageUrls[0]} alt={props.productItem.title} />
                    <img className={style.shopCard__imgBlock__img2} src={props.productItem.imageUrls[1]} alt={props.productItem.title} />
                </div>
                <div className={style.shopCard__description}>
                    <h3 className={`${style.shopCard__description__name} ${theme ? '' : style.shopCard__description__name__darkTheme}`}>{props.productItem.name}</h3>
                    <h3 className={`${style.shopCard__description__categories} ${theme ? '' : style.shopCard__description__categories__darkTheme}`}>{props.productItem.categories}</h3>
                    <p className={`${style.shopCard__description__model} ${theme ? '' : style.shopCard__description__model__darkTheme}`}>{props.productItem.model}</p>
                        <div className={style.shopCard__description__order}>
                            <h5 className={`${style.shopCard__description__order__price} ${theme ? '' : style.shopCard__description__order__price__darkTheme}`}>${props.productItem.currentPrice} USD</h5>
                            <button className={style.shopCard__description__order__btn}>SHOP NOW</button>
                            <button className={style.shopCard__description__order__wishList} onClick={console.log(() => console.log('Add to WishList'))}>
                            {theme
                                ? <HeartIcon />
                                : <HeartIconDark />
                            }
                        </button>
                        </div>
                </div>
            </div>
        </Link>
    )
}
export default ShopCard