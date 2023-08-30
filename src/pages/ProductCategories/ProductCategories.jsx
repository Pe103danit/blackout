import React, { useEffect, useState, } from 'react';
import { instance } from '../../components/assets/axiosUrl';
import { useQuery } from 'react-query';

import Spinner from '../../components/Spinner/Spinner';
import ShopCard from '../../components/ShopCard/ShopCard';
import PagePagination from '../../components/PagePagination/PagePagination';

import style from './ProductCategories.module.scss';

const ProductCategories = ({ title, categoryName }) => {
    const [products, setProducts] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);

    const getProductCategories = async () => {
        const { data } = await instance.get(`/api/products/filter?categories=${categoryName}`)
        return data
    }
    const { data, isLoading, isError } = useQuery('getProductCategories', getProductCategories)
    useEffect(() => {
        if (data) {
            setProducts(data.products);
            setCurrentItems(data.products.slice(0, 12))
        }
    }, [data]);

    const handlePageChange = (newItems) => {
        setCurrentItems(newItems);
    };

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });

    return (
        <div className={style.productCategories}>
            <h3 className={style.productCategories__title}>{title}</h3>
            {(isLoading)
                ? (<Spinner />)
                : (<>
                    <div className={style.productCategories__container}>
                        {currentItems.map((productItem) => (
                            <ShopCard key={productItem.itemNo} productItem={productItem} />
                        ))}
                    </div>
                    <PagePagination cardOnPage={12} productItems={products} changesOnPage={handlePageChange} />
                </>
                )}
            {isError && <p>Something went wrong</p>}
        </div>
    )
}

export default ProductCategories