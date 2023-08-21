import React, { useState, useEffect } from 'react';
import { instance } from '../../components/assets/axiosUrl'

import style from './Shop.module.scss';
import Spinner from '../../components/Spinner/Spinner';

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

    return (

        (productIsLoading === true)
            ? (<div className={style.spinner}>
                <Spinner />
                <h3>Loading ...</h3>
                </div>)
            : (
                <div className={style.cardContainer}>
                    {productItems.map((productItem, index) => (
                        <ShopCard key={index} productItem={productItem} />
                    ))}
                </div>)

    )
}
export default Shop