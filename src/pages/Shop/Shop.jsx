import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { useParams } from 'react-router-dom';

import style from './Shop.module.scss';
import PriceSlider from '../../components/PriceSlider/PriceSlider';
import CategorySelect from '../../components/CategorySelect/CategorySelect';
import Spinner from '../../components/Spinner/Spinner';
import PagePagination from '../../components/PagePagination/PagePagination';
import ShopCard from '../../components/ShopCard/ShopCard';

const Shop = ({ productItems, productIsLoading }) => {
    const [currentItems, setCurrentItems] = useState(productItems.slice(0, 12));
    let wishList = JSON.parse(window.localStorage.getItem('wishList')) || 0;
    let wishListItems = JSON.parse(window.localStorage.getItem('wishListItems')) || [];

    // console.log('wishList ', wishList);
    // console.log('wishListItems ', wishListItems);
    useEffect(() => {
        setCurrentItems(productItems.slice(0, 12))
        // window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth',
        // });
    }, [productItems]);

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
        window.localStorage.setItem('wishListItems', JSON.stringify([...wishListItems]))
        window.localStorage.setItem('wishList', wishList);
    };

    return (
        (productIsLoading === true)
            ? (<Spinner />)
            : (<>
                <PriceSlider />
                <CategorySelect />
                <div className={style.cardContainer}>
                    {currentItems.map((productItem, index) => (
                        <ShopCard
                            key={index}
                            productItem={productItem}
                            onWishList={(itemNo) => WishListHandler(itemNo)}
                            isWished={wishListItems.includes(productItem.itemNo)}
                        />
                    ))}
                </div>
                <PagePagination cardOnPage={12} productItems={productItems} changesOnPage={handlePageChange} />
            </>
            )
    )
}
const mapStateToProps = state => {
    return {
        productItems: state.ProductReducer.products,
        productIsLoading: state.ProductReducer.productIsLoading
    };
};

export default connect(mapStateToProps)(Shop);