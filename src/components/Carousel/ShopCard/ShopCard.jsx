import React, { useState, useEffect } from 'react';
import { instance } from '../../assets/axiosUrl'

import style from './ShopCard.module.scss';

const ShopCard = () => {
    const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    instance.get('/api/products')
      .then(response => {
        setProductItems(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(productItems);

    return (
        <div className="shopCard">
            {/* <img className={style.shopCard__img} src={cardProduct.imageUrl[0]} alt={product.title} /> */}
            <div className={style.shopCard__description}>
                <h3 className={style.shopCard__description__name}>Good name</h3>
                <h3 className={style.shopCard__description__brand}>Good brand</h3>
                <p className={style.shopCard__description__model}>Good model</p>
                <h5 className={style.shopCard__description__price}>Good price</h5>
            </div>

        </div>
    )
}
export default ShopCard