import React, { useEffect, useState, useCallback } from 'react';
import { instance } from '../../components/assets/axiosUrl';
import { useQuery } from 'react-query';

import Spinner from '../../components/Spinner/Spinner';
import ShopCard from '../../components/ShopCard/ShopCard';
import PagePagination from '../../components/PagePagination/PagePagination';

import style from './ProductCategories.module.scss';

const ProductCategories = ({ title, categoryName }) => {
    const [products, setProducts] = useState([]);
    const [currentItems, setCurrentItems] = useState(products.slice(0, 12));
    let wishList = JSON.parse(window.localStorage.getItem('wishList')) || 0;
    let wishListItems = JSON.parse(window.localStorage.getItem('wishListItems')) || [];

    const getProductCategories = useCallback(async () => {
        const { data } = await instance.get(`/api/products/filter?categories=${categoryName}`)
        setProducts(data.products);
        setCurrentItems(data.products.slice(0, 12))
        return data
    }, [categoryName]);

    const { data, isLoading, isError } = useQuery('getProductCategories', getProductCategories)

    useEffect(() => {
        if (data) {
            setProducts(data.products);
            setCurrentItems(data.products.slice(0, 12));
        }
    }, [data]);

    useEffect(() => {
        if (categoryName) {
            getProductCategories();
        }
    }, [categoryName, getProductCategories]);

    const handlePageChange = (newItems) => {
        setCurrentItems(newItems);
    };

    const WishListHandler = (itemNo) => {
        if (!wishListItems.includes(itemNo)) {
            wishListItems.push(itemNo);
        } else {
            wishListItems = wishListItems.filter(item => item !== itemNo);
        }
        wishList = wishListItems.length;
        // console.log(wishListItems, itemNo);
        window.localStorage.setItem('wishListItems', JSON.stringify([...wishListItems]))
        window.localStorage.setItem('wishList', wishList)
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <div className={style.productCategories}>
            <h3 className={style.productCategories__title}>{title}</h3>
            {(isLoading)
                ? (<Spinner />)
                : (<>
                    <div className={style.productCategories__container}>
                        {currentItems.map((productItem) => (
                            <ShopCard key={productItem.itemNo}
                            productItem={productItem}
                            onWishList={() => WishListHandler(productItem.itemNo)} />
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