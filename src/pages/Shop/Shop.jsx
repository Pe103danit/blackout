import React, { useState, useEffect } from 'react';
import { instance } from '../../components/assets/axiosUrl'

import style from './Shop.module.scss';
import Spinner from '../../components/Spinner/Spinner';
import PagePagination from '../../components/PagePagination/PagePagination';
import ShopCard from '../../components/ShopCard/ShopCard';

const Shop = () => {
    const [productItems, setProductItems] = useState([]);
    const [productIsLoading, setProductIsLoading] = useState(true);
    const [currentItems, setCurrentItems] = useState([]);

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

    const handlePageChange = (newItems) => {
        setCurrentItems(newItems);
    };

    return (
        (productIsLoading === true)
            ? (<Spinner />)
            : (<>
                <div className={style.cardContainer}>
                    {currentItems.map((productItem, index) => (
                        <ShopCard key={index} productItem={productItem} />
                    ))}
                </div>
                <PagePagination cardOnPage={12} productItems={productItems} changesOnPage={handlePageChange}/>
            </>
            )
    )
}
export default Shop