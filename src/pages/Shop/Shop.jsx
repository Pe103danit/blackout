import React, { useState, useEffect } from 'react';
import { instance } from '../../components/assets/axiosUrl'

import style from './Shop.module.scss';

import ShopCard from '../../components/ShopCard/ShopCard';
const Shop = () => {
    const [productItems, setProductItems] = useState([]);
    const [productIsLoading, setProductIsLoading] = useState(true);

    useEffect(() => {
        instance.get('/api/products')
            .then(response => {
                setProductItems(response.data);
                setProductIsLoading(false);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    console.log(productItems);

    return (

        (productIsLoading === true)
            ? ('...Loading')
            : (
                <div className={style.cardContainer}>
                    {productItems.map((productItem, index) => (
                        <ShopCard key={index} productItem={productItem} />
                    ))}
                </div>)

    )
}
export default Shop