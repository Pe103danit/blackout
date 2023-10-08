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
import {
    toggleProductToCart
} from '../../redux/reducers/ProductReducer/ProductReducer'
import { useSearchParams } from 'react-router-dom'
import { instance } from '../../components/assets/axiosUrl'

const Shop = ({ productItems, productIsLoading, isOpenCartWindow, toggleProductToCart}) => {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false)
    let wishList = JSON.parse(window.localStorage.getItem('wishList')) || 0;
    let wishListItems = JSON.parse(window.localStorage.getItem('wishListItems')) || [];
    const [requestParameters, setRequestParameters] = useSearchParams();

    const WishListHandler = (itemNo) => {
        if (!wishListItems.includes(itemNo)) {
            wishListItems.push(itemNo);
        } else {
            wishListItems = wishListItems.filter(item => item !== itemNo);
        }
        wishList = wishListItems.length;

        window.localStorage.setItem('wishListItems', JSON.stringify([...wishListItems]))
        window.localStorage.setItem('wishList', wishList)
    };

    useEffect(() => {
        if (isOpenCartWindow) {
            setTimeout(() => {
                toggleProductToCart(null)
            }, 1000)
        }
    }, [isOpenCartWindow, toggleProductToCart])

    useEffect(() => {
        if (!hasScrolled) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            setHasScrolled(true)
        }
    }, [hasScrolled])

    useEffect(() => {
        const uri = '/api/products/filter?';
        const categories = requestParameters.get('categories') || 'Portable Power Stations,Power Banks,Generators,Solar Panels,Accessories';
        const minPrice = requestParameters.get('minPrice') || 0;
        const maxPrice = requestParameters.get('maxPrice') || 1000000;
        const startPage = requestParameters.get('page') || 1;
        const sort = requestParameters.get('sort') || '';

        instance.get(`${uri}categories=${categories}&minPrice=${minPrice}&maxPrice=${maxPrice}&startPage=${startPage}&sort=${sort}&perPage=12`)
          .then(response => {
              setProducts(response.data.products);
              setTotalPages(response.data.productsQuantity / 12)
          });
    }, [requestParameters])

    return (
      (productIsLoading === true)
        ? (<Spinner />)
        : (<div className={style.shop}>
              <PriceSlider productItems={productItems} />
              <CategorySelect />
              <><SelectBar /></>
              <div className={style.cardContainer}>
                  {isOpenCartWindow && <CartWindow />}
                  {products && products.map((productItem, index) => (
                    <ShopCard key={index} productItem={productItem} onWishList={() => WishListHandler(productItem.itemNo)} />
                  ))}
              </div>
                <PagePagination totalPages={totalPages} />
          </div>
        )
    )
}
const mapStateToProps = state => {
    return {
        productItems: state.ProductReducer.products,
        productIsLoading: state.ProductReducer.productIsLoading,
        isOpenCartWindow: state.ProductReducer.isOpenCartWindow,
        priceFilter: state.ProductReducer.priceFilter,
        selectValue: state.ProductReducer.selectValue
    };
};

const mapDispatchToProps = {
    toggleWishlist,
    toggleProductToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)