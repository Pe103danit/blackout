import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux'
import CartWindow from '../../components/CartWindow/CartWindow';

import style from './Shop.module.scss';
import PriceSlider from '../../components/PriceSlider/PriceSlider';
import CategorySelect from '../../components/CategorySelect/CategorySelect';
import SelectBar from '../../components/SelectBar/SelectBar';
import Spinner from '../../components/Spinner/Spinner'
import PagePagination from '../../components/PagePagination/PagePagination'
import ShopCard from '../../components/ShopCard/ShopCard'
import { toggleWishlist } from '../../redux/reducers/WishListReducer/WishListReducer'
import { toggleProductToCart } from '../../redux/reducers/ProductReducer/ProductReducer';

const Shop = ({ productItems, productIsLoading, isOpenCartWindow, toggleProductToCart }) => {
    const currentItems = useSelector(state => state.ProductReducer.productsPerPage)
    const [hasScrolled, setHasScrolled] = useState(false)
    let wishList = JSON.parse(window.localStorage.getItem('wishList')) || 0;
    let wishListItems = JSON.parse(window.localStorage.getItem('wishListItems')) || [];

    useEffect(() => {
        if (isOpenCartWindow) {
            setTimeout(() => {
                toggleProductToCart(null)
            }, 1000)
        }
    }, [isOpenCartWindow, toggleProductToCart])

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
        if (!hasScrolled) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            setHasScrolled(true)
        }
    }, [hasScrolled])

    return (
        (productIsLoading === true)
            ? (<Spinner />)
            : (<div className={style.shop}>
                <PriceSlider />
                <CategorySelect />
                <><SelectBar /></>
                <div className={style.cardContainer}>
                    {isOpenCartWindow && <CartWindow />}
                    {currentItems.map((productItem, index) => (
                        <ShopCard key={index} productItem={productItem} onWishList={() => WishListHandler(productItem.itemNo)} />
                    ))}
                </div>
                <PagePagination cardOnPage={12} productItems={productItems} />
            </div>
            )
    )
}
const mapStateToProps = state => {
    return {
        productItems: state.ProductReducer.products,
        productIsLoading: state.ProductReducer.productIsLoading,
        isOpenCartWindow: state.ProductReducer.isOpenCartWindow
    };
};

const mapDispatchToProps = {
    toggleWishlist,
    toggleProductToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)