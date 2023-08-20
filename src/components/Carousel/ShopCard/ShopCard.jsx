import React from 'react';
// import { instance } from '../../assets/axiosUrl'

import style from './ShopCard.module.scss';

const ShopCard = (props) => {
    return (
        <div className={style.shopCard}>
            <div className={style.shopCard__imgBlock}>
                <img className={style.shopCard__imgBlock__img1} src={props.productItem.imageUrls[0]} alt={props.productItem.title} />
                <img className={style.shopCard__imgBlock__img2} src={props.productItem.imageUrls[2]} alt={props.productItem.title} />
            </div>
            <div className={style.shopCard__description}>
                <h3 className={style.shopCard__description__name}>{props.productItem.name}</h3>
                <h3 className={style.shopCard__description__categories}>{props.productItem.categories}</h3>
                <p className={style.shopCard__description__model}>{props.productItem.model}</p>
                <div className={style.shopCard__description__order}>
                    <h5 className={style.shopCard__description__order__price}>£{props.productItem.currentPrice} GBP</h5>
                    <button className={style.shopCard__description__order__btn}>SHOP NOW</button>
                </div>

            </div>
        </div>
    )
}
export default ShopCard