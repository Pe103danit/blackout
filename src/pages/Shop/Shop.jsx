import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { instance } from '../../components/assets/axiosUrl';
import CartWindow from '../../components/CartWindow/CartWindow'

import style from './Shop.module.scss'
import PriceSlider from '../../components/PriceSlider/PriceSlider'
import CategorySelect from '../../components/CategorySelect/CategorySelect'
import SelectBar from '../../components/SelectBar/SelectBar'
import PagePagination from '../../components/PagePagination/PagePagination'
import ShopCard from '../../components/ShopCard/ShopCard'
import {
  toggleProductToCart
} from '../../redux/reducers/ProductReducer/ProductReducer';

const Shop = ({ productsPerPage, isOpenCartWindow, toggleProductToCart, token }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [wishListItemIsLoading, setWishListItemIsLoading] = useState(true);

  async function fetchWishListItems () {
    try {
      const response = await instance.get('/api/wishlist', {
        headers: { Authorization: token }
      });
      const wishlist = response.data;
      console.log('Wishlist from Shop', wishlist.products);
      // setWishListItems(wishlist);
      setWishListItemIsLoading(false);
      return wishList.products
    } catch (err) {
      console.log('Error from get UserWishList', err);
      setWishListItemIsLoading(false);
    }
  }
  let wishList = JSON.parse(window.localStorage.getItem('wishList')) || 0;
  let wishListItems = token ? fetchWishListItems() : JSON.parse(localStorage.getItem('wishListItems')) || [];

  // let wishListItems = JSON.parse(window.localStorage.getItem('wishListItems')) || []

  useEffect(() => {
    if (isOpenCartWindow) {
      setTimeout(() => {
        toggleProductToCart(null)
      }, 1000)
    }
  }, [isOpenCartWindow, toggleProductToCart])

  const WishListHandler = (itemNo) => {
    if (!wishListItems.includes(itemNo)) {
      wishListItems.push(itemNo)
    } else {
      wishListItems = wishListItems.filter(item => item !== itemNo)
    }
    wishList = wishListItems.length

    window.localStorage.setItem('wishListItems', JSON.stringify([...wishListItems]))
    window.localStorage.setItem('wishList', wishList)
  }

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
      <PriceSlider productItems={productsPerPage} />
      <CategorySelect />
      <><SelectBar /></>
      <div className={style.cardContainer}>
        {isOpenCartWindow && <CartWindow />}
        {wishListItemIsLoading && productsPerPage.map((productItem, index) => (
          <ShopCard key={index} productItem={productItem} onWishList={() => WishListHandler(productItem.itemNo)} token={token} wishListItems={wishListItems} />
        ))}
      </div>
      <PagePagination cardOnPage={12} productItems={productsPerPage} />
    </div>
  )
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