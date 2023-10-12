<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { instance } from '../../components/assets/axiosUrl';
import CartWindow from '../../components/CartWindow/CartWindow';
=======
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import CartWindow from '../../components/CartWindow/CartWindow'
>>>>>>> master

import style from './Shop.module.scss'
import PriceSlider from '../../components/PriceSlider/PriceSlider'
import CategorySelect from '../../components/CategorySelect/CategorySelect'
import SelectBar from '../../components/SelectBar/SelectBar'
import PagePagination from '../../components/PagePagination/PagePagination'
import ShopCard from '../../components/ShopCard/ShopCard'
import {
  toggleProductToCart
} from '../../redux/reducers/ProductReducer/ProductReducer'

<<<<<<< HEAD
const Shop = ({ productItems, productIsLoading, isOpenCartWindow, toggleProductToCart, token }) => {
    console.log('Token from Shop', token);
    const [wishListItems, setWishListItems] = useState(JSON.parse(window.localStorage.getItem('wishListItems')) || []);
    const [wishListItemIsLoading, setWishListItemIsLoading] = useState(true);

    useEffect(() => {
        async function fetchWishListItems () {
            try {
                const response = await instance.get('/api/wishlist', {
                    headers: { Authorization: token }
                });
                const wishlist = response.data;
                console.log('Wishlist from UserWishList', wishlist);
                // const wishProducts = wishList.products.map(product => ({
                //     brand: product.brand,
                //     categories: product.categories,
                //     currentPrice: product.currentPrice,
                //     itemNo: product.itemNo,
                //     _id: product._id
                // }));
                setWishListItems(wishlist);
                console.log('wishProducts from dataBase from Shop', wishlist);
                setWishListItemIsLoading(false);
            } catch (err) {
                console.log('Error from get UserWishList', err);
                setWishListItemIsLoading(false);
            }
        }
        fetchWishListItems();
    }, [token]);

    const currentItems = useSelector(state => state.ProductReducer.productsPerPage)
    const [hasScrolled, setHasScrolled] = useState(false)
    let wishList = JSON.parse(window.localStorage.getItem('wishList')) || 0;
    // let wishListItems = JSON.parse(window.localStorage.getItem('wishListItems')) || [];
=======
const Shop = ({ productsPerPage, isOpenCartWindow, toggleProductToCart }) => {
  const [hasScrolled, setHasScrolled] = useState(false)
  let wishList = JSON.parse(window.localStorage.getItem('wishList')) || 0
  let wishListItems = JSON.parse(window.localStorage.getItem('wishListItems')) || []
>>>>>>> master

  useEffect(() => {
    if (isOpenCartWindow) {
      setTimeout(() => {
        toggleProductToCart(null)
      }, 1000)
    }
  }, [isOpenCartWindow, toggleProductToCart])

<<<<<<< HEAD
    const WishListHandler = (itemNo) => {
        if (!wishListItems.includes(itemNo)) {
            setWishListItems(wishListItems.push(itemNo));
        } else {
            setWishListItems(wishListItems.filter(item => item !== itemNo));
        }
        wishList = wishListItems.length;
=======
  const WishListHandler = (itemNo) => {
    if (!wishListItems.includes(itemNo)) {
      wishListItems.push(itemNo)
    } else {
      wishListItems = wishListItems.filter(item => item !== itemNo)
    }
    wishList = wishListItems.length
>>>>>>> master

    window.localStorage.setItem('wishListItems', JSON.stringify([...wishListItems]))
    window.localStorage.setItem('wishList', wishList)
  }

<<<<<<< HEAD
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
                <PriceSlider productItems={productItems} />
                <CategorySelect />
                <><SelectBar /></>
                <div className={style.cardContainer}>
                    {isOpenCartWindow && <CartWindow />}
                    {currentItems.map((productItem, index) => (
                        <ShopCard key={index} productItem={productItem} onWishList={() => WishListHandler(productItem.itemNo)} token={token} />
                    ))}
                </div>
                <PagePagination cardOnPage={12} productItems={productItems} />
            </div>
            )
    )
=======
  useEffect(() => {
    if (!hasScrolled) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      setHasScrolled(true)
    }
  }, [hasScrolled])
  console.log(productsPerPage)
  return (
    <div className={style.shop}>
      <PriceSlider productItems={productsPerPage}/>
      <CategorySelect/>
      <><SelectBar/></>
      <div className={style.cardContainer}>
        {isOpenCartWindow && <CartWindow/>}
        {productsPerPage.map((productItem, index) => (
          <ShopCard key={index} productItem={productItem} onWishList={() => WishListHandler(productItem.itemNo)}/>
        ))}
      </div>
      <PagePagination cardOnPage={12} productItems={productsPerPage}/>
    </div>
  )
>>>>>>> master
}
const mapStateToProps = state => {
  return {
    productItems: state.ProductReducer.products,
    productsPerPage: state.ProductReducer.productsPerPage,
    productIsLoading: state.ProductReducer.productIsLoading,
    isOpenCartWindow: state.ProductReducer.isOpenCartWindow,
    priceFilter: state.ProductReducer.priceFilter,
    selectValue: state.ProductReducer.selectValue
  }
}

const mapDispatchToProps = {
  toggleProductToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)